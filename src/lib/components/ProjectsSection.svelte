<script lang="ts">
	import { projects } from '$lib/constants/projects';
	import { Link, Lock } from 'lucide-svelte';
	import ProjectCard from './ProjectCard.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let currentProjectDetailsId: number = $state(2);
	$effect(() => {
		if (currentProjectDetailsId >= 0) {
			//disable global scrolling
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	const options = {
		loop: true
	};
	const plugins = [Autoplay({ delay: 4000 })];
</script>

<section id="projects" class="relative mt-20 container mx-auto">
	<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
		My Projects
		<div class="diamond-bullet"></div>
	</h3>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
		{#each projects as project, id}
			<ProjectCard
				{project}
				onViewAll={() => {
					currentProjectDetailsId = id;
				}}
			/>
		{/each}
	</div>

	{#if currentProjectDetailsId >= 0}
		{@const project = projects[currentProjectDetailsId]}
		<div
			class="fixed z-50 inset-0 bg-black/50 items-end content-end"
			onclick={() => {
				currentProjectDetailsId = -1;
			}}
		>
			<div onclick={(e) => e.stopPropagation()} class="container mx-auto relative">
				<div
					class=" border-cream border border-b-0 bg-linear-to-t from-cream/50 to-transparent ./to-cream/50 backdrop-blur-md w-full max-w-7xl h-[80vh] min-h-[600px] overflow-hidden shadow-black shadow-xl"
				>
					<div class="container py-3 mx-auto text-lg sm:text-xl font-medium text-cream bg-black/40">
						<p>{project.name}</p>
					</div>

					<div class="container overflow-scroll">
						<div class="flex flex-col gap-3">
							<div class="" use:emblaCarouselSvelte={{ options, plugins }}>
								<div class="flex gap-3">
									{#each project.images as imgSrc, id}
										<img class="drop-shadow-xl" src={imgSrc} alt="{project.name} image {id + 1}" />
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>
