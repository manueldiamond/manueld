<script lang="ts" module>
	export type RetroPCContext = {
		/** Hand the PC the element whose content should scroll inside the screen. */
		setPane: (el: HTMLElement | null) => void;
		/** Scroll the page to where the screen content starts (top of the list). */
		toPaneStart: () => void;
	};
</script>

<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { prefersReducedMotion } from '$lib/utils/inView';

	let { children, heading }: { children: Snippet; heading: string } = $props();

	let section: HTMLElement;

	let monitor: HTMLElement;

	let screenEl: HTMLElement;

	let pane: HTMLElement | null = null;

	// The pane's first child is slid with a GPU transform rather than scrollTop:
	// scrolling an overflow-hidden box repaints the whole monitor layer every frame.
	let content: HTMLElement | null = null;

	let offset = 0;

	// Page scroll is split in two: the intro (the monitor pulls back from a screen-filling
	// close-up to the whole PC), then the travel (page scroll drives the screen's scroll).
	let introPx = $state(600);

	let travel = $state(0);

	let sectionHeight = $derived(`calc(100svh + ${introPx + travel}px)`);

	const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

	let reduce = false;

	let frame = 0;

	let lastTransform = '';

	function update() {
		frame = 0;

		if (!section || !monitor) return;
		const y = -section.getBoundingClientRect().top;
		const lead = innerHeight * 0.5;
		const p = reduce ? 1 : clamp((y + lead) / (introPx + lead), 0, 1);
		const eased = 1 - Math.pow(1 - p, 3);
		const startScale = clamp(innerWidth / Math.max(screenEl.offsetWidth, 1), 1, 2.2);
		const scale = startScale + (1 - startScale) * eased;
		// Only touch styles when the value changes: rewriting the same value every scroll
		// frame still invalidates style for the whole pinned stage.
		const transform = `translate3d(0, ${((1 - eased) * 8).toFixed(2)}vh, 0) scale(${scale.toFixed(4)})`;

		if (transform !== lastTransform) {
			lastTransform = transform;
			monitor.style.transform = transform;
			section.style.setProperty('--pc-intro', eased.toFixed(3));
		}

		const next = Math.round(clamp(y - introPx, 0, travel));

		if (content && next !== offset) {
			offset = next;
			content.style.transform = `translate3d(0, ${-offset}px, 0)`;
		}
	}

	const schedule = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};

	function measure() {
		introPx = Math.round(innerHeight * (reduce ? 0.1 : 0.7));
		travel = pane && content ? Math.max(0, content.offsetHeight - pane.clientHeight) : 0;
		offset = -1;
		schedule();
	}

	const absTop = () => section.getBoundingClientRect().top + scrollY;

	let contentObserver: ResizeObserver | undefined;

	setContext<RetroPCContext>('retro-pc', {
		setPane(el) {
			contentObserver?.disconnect();
			pane = el;
			const first = el?.firstElementChild;

			content = first instanceof HTMLElement ? first : null;

			if (el && content) {
				content.style.willChange = 'transform';
				contentObserver = new ResizeObserver(measure);
				contentObserver.observe(el);
				contentObserver.observe(content);
			}

			measure();
		},
		toPaneStart() {
			// Wait for the new view to lay out and the section to resize, then jump: a smooth
			// scroll would be cut short by that resize.
			requestAnimationFrame(() =>
				requestAnimationFrame(() => {
					measure();
					const target = absTop() + introPx;

					if (scrollY > target) scrollTo({ top: target, behavior: 'instant' });
				})
			);
		}
	});

	$effect(() => {
		reduce = prefersReducedMotion();
		measure();
		addEventListener('scroll', schedule, { passive: true });
		addEventListener('resize', measure);

		return () => {
			removeEventListener('scroll', schedule);
			removeEventListener('resize', measure);
			contentObserver?.disconnect();
			cancelAnimationFrame(frame);
		};
	});

	// Tabbing to a card the screen has not reached yet: the browser scrolls the screen to it,
	// then the page follows so the two stay in sync.
	function onFocusIn(e: FocusEvent) {
		const target = e.target;

		if (!(target instanceof HTMLElement) || !pane || !content || !content.contains(target)) return;
		requestAnimationFrame(() => followFocus(target));
	}

	function followFocus(target: HTMLElement) {
		if (!pane || !content) return;
		// Undo any native scroll the browser did to reveal the element, then move the page
		// so the transform brings it into view instead.
		pane.scrollTop = 0;
		const top = target.getBoundingClientRect().top - content.getBoundingClientRect().top;
		const bottom = top + target.offsetHeight;
		let want = offset;

		if (top < offset) want = top - 12;
		else if (bottom > offset + pane.clientHeight) want = bottom - pane.clientHeight + 12;

		if (want !== offset)
			scrollTo({ top: absTop() + introPx + clamp(want, 0, travel), behavior: 'instant' });
	}
</script>

<section id="projects" bind:this={section} class="relative mt-20" style="height: {sectionHeight}">
	<div class="sticky top-0 flex h-svh flex-col items-center overflow-hidden pt-14 sm:pt-16">
		<h3
			class="pc-heading container mx-auto mb-3 flex w-full items-center justify-end gap-5 text-right text-2xl text-cream sm:text-3xl"
		>
			{heading}
			<div class="diamond-bullet"></div>
		</h3>

		<div bind:this={monitor} class="monitor will-change-transform">
			<div class="pc-case">
				<div class="pc-bezel">
					<div bind:this={screenEl} class="pc-screen" onfocusin={onFocusIn}>
						{@render children()}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.pc-heading {
		opacity: var(--pc-intro, 1);
	}
	.monitor {
		width: min(1180px, 96vw);
		transform-origin: 50% 40%;
	}
	/* Moulded neumorphic case with a thin bezel: one dark drop shadow, no light-side halo. */
	.pc-case {
		border-radius: 22px;
		padding: 7px;
		background: linear-gradient(150deg, #2a2b2e, #1f2022 70%);
		box-shadow:
			18px 18px 44px #121314,
			inset 1px 1px 0 rgb(255 255 255 / 0.04),
			inset -1px -1px 0 rgb(0 0 0 / 0.4);
	}
	@media (min-width: 640px) {
		.pc-case {
			padding: 10px;
		}
	}
	/* Recessed lip around the glass. */
	.pc-bezel {
		border-radius: 16px;
		padding: 3px;
		background: #1d1e20;
		box-shadow:
			inset 3px 3px 7px #121314,
			inset -2px -2px 5px #262729;
	}
	.pc-screen {
		position: relative;
		height: clamp(340px, calc(100svh - 170px), 860px);
		border-radius: 13px;
		overflow: hidden;
		background: #17181a;
		isolation: isolate;
	}
	/* CRT glass: faint scanlines, a vignette and a glare streak. Kept light so text stays crisp. */
	.pc-screen::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 50;
		pointer-events: none;
		border-radius: inherit;
		background:
			linear-gradient(115deg, rgb(255 255 255 / 0.05) 0%, transparent 28%),
			radial-gradient(120% 90% at 50% 50%, transparent 62%, rgb(0 0 0 / 0.45) 100%),
			repeating-linear-gradient(0deg, rgb(0 0 0 / 0.07) 0 1px, transparent 1px 3px);
		box-shadow: inset 0 0 40px rgb(0 0 0 / 0.55);
	}
</style>
