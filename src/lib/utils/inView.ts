/**
 * Svelte action: toggles the `offscreen` class while the node is out of the viewport,
 * so CSS animations inside it can pause. Optional callback for JS-driven loops.
 */
export function pauseOffscreen(node: HTMLElement, onChange?: (visible: boolean) => void) {
	let cb = onChange;

	const observer = new IntersectionObserver(
		([entry]) => {
			node.classList.toggle('offscreen', !entry.isIntersecting);
			cb?.(entry.isIntersecting);
		},
		{ rootMargin: '200px 0px' }
	);

	observer.observe(node);

	return {
		update(next?: (visible: boolean) => void) {
			cb = next;
		},
		destroy() {
			observer.disconnect();
		}
	};
}

/**
 * Svelte action: toggles `is-in` while the node is in view, so CSS can play an
 * entry transition on the way in and the reverse on the way out.
 */
export function reveal(node: HTMLElement, threshold = 0.15) {
	const observer = new IntersectionObserver(
		([entry]) => node.classList.toggle('is-in', entry.isIntersecting),
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

export const prefersReducedMotion = () =>
	typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

// Sets --par on the node: how many screen heights it has scrolled past the top of the view.
// Children read it to drift at their own depth.
export function parallax(node: HTMLElement) {
	if (prefersReducedMotion()) return;

	let frame = 0;

	const update = () => {
		frame = 0;
		node.style.setProperty('--par', (-node.getBoundingClientRect().top / innerHeight).toFixed(4));
	};

	const onScroll = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};

	update();
	addEventListener('scroll', onScroll, { passive: true });
	addEventListener('resize', onScroll);

	return {
		destroy() {
			removeEventListener('scroll', onScroll);
			removeEventListener('resize', onScroll);
			cancelAnimationFrame(frame);
		}
	};
}
