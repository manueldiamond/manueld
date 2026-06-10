<script>
	import { aboutSections } from '$lib/constants/about';
	import { FileIcon } from 'lucide-svelte';
</script>

<!--ABOUT SECTION TOTALLY VIBE CODED(no human)-->
<section
	id="about"
	class=" pt-20 mt-[25vh] pb-20 mx-auto overflow-hidden bg-linear-to-b from-transparent to-black/70"
>
	<div class="container flex flex-col mx-auto">
		<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
			About Me
			<div class="diamond-bullet"></div>
		</h3>

		<div class="flex">
			<div class="sm:flex-2 relative flex items-center -z-10">
				<div
					class=" absolute neumorphic aspect-square h-[60%] rotate- -left-0 skew-[20deg] translate-y-[60%] flex bg-linear-to-b! from-white/2! via-white/5 to-white/0 backdrop-blur-sm from-30%"
				>
					<div
						class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
					></div>
				</div>

				<div
					class=" absolute neumorphic aspect-square h-[50%] rotate- -left-0 skew-[-20deg] translate-x-[160%] translate-y-[60%] bg-linear-60! from-white/2! via-white/10 to-white/0 backdrop-blur-sm from-30%"
				>
					<div
						class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
					></div>
				</div>

				<div
					class=" absolute neumorphic aspect-square h-[80%] rotate- -left-0 skew-[-20deg] -translate- flex bg-white/0! from-white/0 via-white/2 to-white/0 backdrop-blur-sm from-30%"
				>
					<div
						class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
					></div>
				</div>
			</div>
			<div class="flex-7 pb-30 md:pb-40">
				<div class="text-cream/80 text-base md:text-lg leading-[200%]">
					{#each aboutSections as about}
						<p class="opacity-50 font-medium text-base mb-4 uppercase">{about.title}</p>
						<p class="text-justify mb-12">
							{@html about.content.join('<br />')}
						</p>
					{/each}
				</div>
				<div class="my-6 flex gap-2 flex-col sm:flex-row">
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
