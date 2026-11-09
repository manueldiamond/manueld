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
