<script>
	import { titles } from '$lib/constants/misc';
	import { ArrowRight, Briefcase } from 'lucide-svelte';
	import Boxx from './Boxx.svelte';
</script>

<section
	id="top"
	class="bg-linear-to-tl from-black/0 to-black flex flex-col gap-5 relative z-10 justify-center h-[75vh] overflow-hidden min-h-[600px]"
>
	<div
		class="absolute bg-linear-to-tr from-black/50 via-black to-black/20 left-[min(-20%,120px)] max-w-[700px] w-[60%] aspect-[5/3] min-w-100 -bottom-[min(16vw,200px)] via-10% rotate-30 shadow-2xl shadow-black/90"
	>
		<div
			class="z-10 absolute bg-pewter/20 w-full h-full left-0 top-0 via-10% -rotate-15 opacity-100 mix-blend- shadow-2xl shadow-black/70 font-nunito"
		>
			<div
				class="uppercase absolute right-5 top-5 font-bold text-black/40 text-base max-md:text-sm flex flex-col items-end"
			>
				{#each titles as thing}
					<a
						href={thing.url}
						target="_blank"
						rel="noopener"
						class="cursor-pointer hover:text-cream/10"
					>
						{thing.label} • {thing.title}
					</a>
				{/each}
			</div>
			<span
				class="text-4xl md:text-7xl uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-thin text-black/50"
				>{'<M/M>'}</span
			>
			<div
				class="pointer-events-none absolute top-0 left-0 w-full h-full z-10 absolute bg-linear-to-tr from-white/30 via-[white] to-white/10 left-0 top-0 from-20% opacity-20 mix-blend-lighten"
			></div>
		</div>
	</div>

	<div class="container mx-auto flex justify-between h-full items-center">
		<div class=" max-sm:mt-20 relative z-10">
			<h1 class="text-5xl text-cream font-medium">Manuel Diamond</h1>
			<p class=" text-base font-medium text-pewter mt-4 mb-10 lg:max-w-[500px]">
				I build websites, I build apps, I build systems.<br />
				Got something? Hit me up. Let's build
			</p>

			<div class="flex gap-2 flex-col sm:flex-row">
				<a href="#projects" class="pri-button">
					<div class="centered gap-2">
						See my work
						<Briefcase class="opacity-80" />
					</div>
				</a>
				<a href="#contact" class="button">
					<div class="centered gap-2">
						<span>Get in touch</span>
						<ArrowRight class="" />
					</div>
				</a>
			</div>
		</div>
		<div
			class="
max-sm:absolute right-0 top-12
				-mb-30 relative flex bg-mblack/40 backdrop-blur-sm border-cream max-w-[380px] w-[38vw] aspect-square shadow-lg shadow-black/50 rotate-45 min-w-[200px] select-none"
		>
			<Boxx count={24} />
		</div>
	</div>
</section>
