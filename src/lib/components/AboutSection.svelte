<script>
	import { aboutSections } from '$lib/constants/about';
	import { ArrowRight, FileIcon } from 'lucide-svelte';
	import { parallax, reveal } from '$lib/utils/inView';
</script>

<!--ABOUT SECTION TOTALLY VIBE CODED(no human)-->
<section
	use:parallax
	id="about"
	class="relative isolate pt-20 mt-[25vh] pb-20 mx-auto overflow-hidden bg-linear-to-b from-transparent to-black/70"
>
	<!-- Washed-out name behind the copy. It drifts slower than the page, so the text slides over it. -->
	<div
		aria-hidden="true"
		class="about-name-track pointer-events-none absolute inset-x-0 top-[8%] -z-10 select-none"
	>
		<div class="about-name">
			<p>Manuel</p>
			<p class="pl-[12vw]">Diamond</p>
		</div>
	</div>
	<div class="container flex flex-col mx-auto">
		<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
			About Me
			<div class="diamond-bullet"></div>
		</h3>

		<div class="flex">
			<div class="about-shapes sm:flex-2 relative flex items-center -z-10" use:reveal={0.2}>
				<div class="drift absolute inset-0 flex items-center" style="--depth: 140px">
					<div
						class="about-shape absolute neumorphic aspect-square h-[60%] rotate- -left-0 skew-[20deg] translate-y-[60%] flex bg-linear-to-b! from-white/2! via-white/5 to-white/0 backdrop-blur-sm from-30%"
					>
						<div
							class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
						></div>
					</div>
				</div>

				<div class="drift absolute inset-0 flex items-center" style="--depth: 220px">
					<div
						class="about-shape absolute neumorphic aspect-square h-[50%] rotate- -left-0 skew-[-20deg] translate-x-[160%] translate-y-[60%] bg-linear-60! from-white/2! via-white/10 to-white/0 backdrop-blur-sm from-30%"
					>
						<div
							class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
						></div>
					</div>
				</div>

				<div class="drift absolute inset-0 flex items-center" style="--depth: 90px">
					<div
						class="about-shape absolute neumorphic aspect-square h-[80%] rotate- -left-0 skew-[-20deg] -translate- flex bg-white/0! from-white/0 via-white/2 to-white/0 backdrop-blur-sm from-30%"
					>
						<div
							class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
						></div>
					</div>
				</div>
			</div>
			<div class="flex-7 pb-30 md:pb-40">
				<div class="text-cream/80 text-base md:text-lg leading-[200%]">
					{#each aboutSections as about}
						<p class="opacity-50 font-medium text-base mb-4 uppercase">{about.title}</p>
						<p class="text-left mb-12">
							{@html about.content.join('<br />')}
						</p>
					{/each}
				</div>
				<div class="my-6 flex gap-2 flex-col sm:flex-row">
					<a href="/about" class="block pri-button">
						<div class="centered gap-2">
							Read the full story
							<ArrowRight />
						</div>
					</a>
					<a href="/me/manuel-diamond-cv.pdf" class="block button">
						<div class="centered gap-2">
							Download Full CV
							<FileIcon class="" />
						</div>
					</a>
				</div>
			</div>
			<div class="gap-[6px] flex-2 hidden lg:flex centered drop-shadow-xl drop-shadow-black">
				{#each Array(7) as _, i}
					<div
						class="h-full w-[3px] {i % 2 === 0
							? 'bg-linear-to-b'
							: 'bg-linear-to-t '}  from-carafe/80 via-carafe-light to-carafe/0 rounded-full"
					></div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.about-name {
		font-family: 'Montserrat Variable';
		font-weight: 900;
		text-transform: uppercase;
		font-size: clamp(4.5rem, 17vw, 16rem);
		line-height: 0.82;
		letter-spacing: -0.04em;
		color: transparent;
		/* Fill only, no outline: the outline traced the variable font's overlapping
		   contours and added contrast behind the copy. Faint enough to read over. */
		background: linear-gradient(
			180deg,
			hsl(33.3 39.3% 95.1% / 0.035),
			hsl(33.3 39.3% 95.1% / 0.01)
		);
		-webkit-background-clip: text;
		background-clip: text;
		white-space: nowrap;
	}
	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			/* The drift runs on its own compositor layer: the gradient-clipped text is
			   painted once and then only moved. */
			.about-name-track {
				will-change: transform;
				animation: name-drift linear both;
				animation-timeline: view();
			}
		}
	}
	@keyframes name-drift {
		from {
			transform: translate3d(-4vw, 22vh, 0);
		}
		to {
			transform: translate3d(4vw, -18vh, 0);
		}
	}

	/* Each plate drifts at its own depth as the page scrolls. */
	.drift {
		transform: translate3d(0, calc(var(--par, 0) * var(--depth) * -1), 0);
		will-change: transform;
	}

	/* The three plates swing in one after another as About arrives, and fold away when it leaves. */
	.about-shape {
		opacity: 0;
		scale: 0.55;
		rotate: -28deg;
		transition:
			opacity 0.5s ease,
			scale 0.6s cubic-bezier(0.5, 0, 0.75, 0),
			rotate 0.6s cubic-bezier(0.5, 0, 0.75, 0);
	}
	:global(.about-shapes.is-in) .about-shape {
		opacity: 1;
		scale: 1;
		rotate: 0deg;
		transition:
			opacity 0.8s ease,
			scale 1.1s cubic-bezier(0.16, 1, 0.3, 1),
			rotate 1.1s cubic-bezier(0.16, 1, 0.3, 1);
	}
	:global(.about-shapes.is-in) .drift:nth-child(2) .about-shape {
		transition-delay: 0.15s;
	}
	:global(.about-shapes.is-in) .drift:nth-child(3) .about-shape {
		transition-delay: 0.3s;
	}
	@media (prefers-reduced-motion: reduce) {
		.about-shape {
			opacity: 1;
			scale: 1;
			rotate: 0deg;
			transition: none;
		}
	}
</style>
