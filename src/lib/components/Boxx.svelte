<script lang="ts">
	import { prefersReducedMotion, reveal } from '$lib/utils/inView';

	let {
		count,
		rotation = 0,
		tilt = false
	}: { count: number; rotation?: number; tilt?: boolean } = $props();

	let wrapper: HTMLDivElement;

	// Grab and spin: the grabbed frame eases toward the pointer's angle, and every other
	// frame eases toward its neighbour, so the turn ripples outward through the stack.
	let layers: HTMLDivElement[] = $state([]);

	const spin = new Float32Array(64);

	let grabbed = -1;

	let target = 0;

	let lastAngle = 0;

	let released = -1;

	let loop = 0;

	const angleAt = (e: PointerEvent, el: HTMLElement) => {
		const r = el.getBoundingClientRect();

		return (
			(Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) /
			Math.PI
		);
	};

	// Every frame is a damped spring with its own velocity. While held, the grabbed frame
	// springs toward the pointer and each other frame springs toward its neighbour, so the
	// turn ripples through the stack with weight and overshoot. On release the stack keeps
	// its momentum, then springs home; frames further out let go a beat later.
	const velocity = new Float32Array(64);

	const delay = new Uint8Array(64);

	const SNAP = 15;

	// Soft detents every 15 degrees: the target is pulled toward the nearest notch, more
	// strongly the closer it is, so the frame clicks into angles without feeling locked.
	const detent = (deg: number) => {
		const notch = Math.round(deg / SNAP) * SNAP;
		const off = (deg - notch) / (SNAP / 2);

		return notch + Math.sign(off) * Math.pow(Math.abs(off), 2.4) * (SNAP / 2);
	};

	let lastTime = 0;

	let carry = 0;

	function physics() {
		let moving = false;

		for (let i = 0; i < count; i++) {
			let goal = 0;

			let stiffness = 0.07;

			let damping = 0.8;

			if (grabbed >= 0) {
				goal = i === grabbed ? detent(target) : spin[i + (i < grabbed ? 1 : -1)];
				stiffness = 0.16;
				damping = i === grabbed ? 0.72 : 0.6;
			} else if (delay[i] > 0) {
				// Still coasting on its momentum before it starts heading home.
				delay[i]--;
				velocity[i] *= 0.9;
				spin[i] += velocity[i];
				moving = true;
				continue;
			}

			velocity[i] = (velocity[i] + (goal - spin[i]) * stiffness) * damping;
			spin[i] += velocity[i];

			if (grabbed >= 0 || Math.abs(spin[i]) > 0.05 || Math.abs(velocity[i]) > 0.05) moving = true;
			else {
				spin[i] = 0;
				velocity[i] = 0;
			}
		}

		return moving;
	}

	function step(now: number) {
		loop = 0;
		// Fixed 60 Hz steps, so the springs feel the same on a 120 Hz screen.
		carry = Math.min(carry + (lastTime ? now - lastTime : 16.7), 100);
		lastTime = now;
		let moving = true;

		while (carry >= 16.7) {
			moving = physics();
			carry -= 16.7;
		}

		for (let i = 0; i < count; i++)
			layers[i]?.style.setProperty('--spin', `${spin[i].toFixed(2)}deg`);

		if (moving) loop = requestAnimationFrame(step);
		else lastTime = 0;
	}

	function letGo() {
		for (let i = 0; i < count; i++) {
			// Drop whole turns first (they look identical), so the frame unwinds back the
			// way it came, never more than half a turn.
			spin[i] = ((((spin[i] + 180) % 360) + 360) % 360) - 180;
			delay[i] = Math.min(10, Math.abs(i - released));
		}
	}

	const run = () => {
		if (!loop) loop = requestAnimationFrame(step);
	};

	function onGrab(e: PointerEvent, i: number) {
		// Touch keeps scrolling the page; mouse and pen can spin.
		if (e.pointerType === 'touch' || e.button !== 0) return;
		e.preventDefault();
		grabbed = i;
		target = spin[i];
		lastAngle = angleAt(e, layers[i]);
		wrapper.setPointerCapture(e.pointerId);
		run();
	}

	function onDrag(e: PointerEvent) {
		if (grabbed < 0) return;
		const a = angleAt(e, layers[grabbed]);
		let d = a - lastAngle;

		// Unwrap across the -180/180 seam so a full turn keeps going instead of snapping back.
		if (d > 180) d -= 360;
		else if (d < -180) d += 360;
		lastAngle = a;
		target += d;
	}

	function onRelease(e: PointerEvent) {
		if (grabbed < 0) return;

		if (wrapper.hasPointerCapture(e.pointerId)) wrapper.releasePointerCapture(e.pointerId);
		released = grabbed;
		grabbed = -1;
		letGo();
		run();
	}

	$effect(() => () => cancelAnimationFrame(loop));

	// Pointer depth: each layer drifts by its depth, so the stack reads as a tunnel
	// rather than a flat drawing. Writes two custom properties per frame, nothing else.
	$effect(() => {
		if (!tilt || prefersReducedMotion()) return;
		let frame = 0;

		const onMove = (e: PointerEvent) => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				const r = wrapper.getBoundingClientRect();
				const x = (e.clientX - (r.left + r.width / 2)) / innerWidth;
				const y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
				wrapper.style.setProperty('--mx', x.toFixed(3));
				wrapper.style.setProperty('--my', y.toFixed(3));
			});
		};

		addEventListener('pointermove', onMove, { passive: true });

		return () => {
			removeEventListener('pointermove', onMove);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div
	bind:this={wrapper}
	class="boxx absolute inset-0"
	use:reveal={0.05}
	onpointermove={onDrag}
	onpointerup={onRelease}
	onpointercancel={onRelease}
>
	{#each Array(count) as _, i}
		{@const scale = 1 - Math.pow((i + 1) / count, 0.8)}
		{@const tval = `calc(-50% + min(-25px, 2.75vw) * (${i / count}))`}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={layers[i]}
			onpointerdown={(e) => onGrab(e, i)}
			style="translate: {tval} {tval};
				width: {scale * 100}%;
				height: {scale * 100}%;
				filter: blur({1 + Math.pow(i / count, 2) * 3}px);
				rotate: calc({(i / count) * rotation}deg + var(--spin, 0deg));
				--depth: {(i / count) * 28}px;
				--in-delay: {i * 28}ms;
				--out-delay: {(count - i) * 14}ms;
				"
			class="boxx-layer bg-mblack/50 absolute left-1/2 top-1/2 shadow-xl shadow-black/50 group cursor-grab active:cursor-grabbing select-none"
		>
			<div
				class="inset-0 bg-white absolute hover:opacity-100 select-none"
				style="opacity: {Math.pow((i + 1) / count, 2) * 0.4}"
			></div>
			<div
				class="inset-0 bg-transparent absolute group-hover:bg-white group-hover:shadow-[0_0_20px_white] transition-all group-active:opacity-100 opacity-30"
			></div>
		</div>
	{/each}
</div>

<style>
	/* Entry: the stack unfolds from the centre, outer frames first. Exit: it folds back
	   in, inner frames first, so leaving the section reads as the shape closing. */
	.boxx-layer {
		scale: 0.1;
		opacity: 0;
		transform: translate(calc(var(--mx, 0) * var(--depth)), calc(var(--my, 0) * var(--depth)));
		transition:
			scale 0.7s cubic-bezier(0.5, 0, 0.75, 0) var(--out-delay),
			opacity 0.5s ease var(--out-delay),
			transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
	:global(.boxx.is-in) .boxx-layer {
		scale: 1;
		opacity: 1;
		transition:
			scale 0.9s cubic-bezier(0.16, 1, 0.3, 1) var(--in-delay),
			opacity 0.6s ease var(--in-delay),
			transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
	@media (prefers-reduced-motion: reduce) {
		.boxx-layer {
			scale: 1;
			opacity: 1;
			transition: none;
		}
	}
</style>
