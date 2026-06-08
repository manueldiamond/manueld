<script lang="ts">
	import type { Project } from '$lib/constants/projects';
	import { Expand, Link, Lock } from 'lucide-svelte';

	const { project, onViewAll }: { project: Project; onViewAll: () => void } = $props();

	let currentImage = $state(0);

	$effect(() => {
		if (!project.images?.length) return;
		let timeoutId: NodeJS.Timeout;
		const randomTimeout = () => {
			const randInterval = 5000 + Math.floor(Math.random() * 5000);
			timeoutId = setTimeout(() => {
				currentImage = (currentImage + 1) % project.images.length;
				randomTimeout();
			}, randInterval);
		};

		randomTimeout();
		return () => {
			clearTimeout(timeoutId);
		};
	});

	const displayedTags = project.tags.slice(0, 4);
	if (project.tags.length > 4) {
		displayedTags[3] = `+${project.tags.length - 3}`;
	}
</script>

<div class="bg-black/10 hover:bg-black/20 flex flex-col group" onclick={onViewAll}>
	{#if project.images?.length > 0}
		<div class=" overflow-hidden relative aspect-[3/2.2] w-full">
			<div class="flex-1 flex items-end w-full h-full flex p-4 relative">
				<img
					src={project?.images[currentImage]}
					alt="{project.name} featured image"
					class="object-cover w-[95%] mx-auto drop-shadow-xl drop-shadow-black drop-shadow-2xl h-[95%] object-top
					
					group-hover:mt-0 group-hover:w-full transition-all group-hover:h-full"
				/>
			</div>

			<div
				class="absolute bottom-0 bg-mblack w-[120%] left-0 h-[18%] after:inset-0 after:absolute after:z-10 after:bg-black/10 group-hover:after:bg-black/20
								rotate-4 shadow-[0px_-2px_6px_rgba(0,0,0,0.5)] origin-top-left
								
								"
			></div>
		</div>
	{/if}
	<div class="flex gap-2 flex-col p-4 pt-0 flex-1 justify-end">
		<p class="text-lg text-cream/80 font-medium">{project.name}</p>

		<div class=" flex gap-1 flex-row flex-wrap mb-1">
			{#each displayedTags as tag}
				<div
					class="over bg-carafe-light/20 text-carafe-light text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max"
				>
					{tag}
				</div>
			{/each}
		</div>

		<p class=" text-sm text-pewter leading-[150%]">
			{project.description.slice(0, 100)}
			{#if project.description.length > 100}
				<span>...</span>
			{/if}
		</p>

		<div class="flex-1"></div>
		<span class="text-carafe-light font-bold text-sm">{project.client}</span>

		<button onclick={onViewAll} class="button flex justify-between gap-2">
			<span>View Project</span>
			<Expand class="aspect-square w-4" />
		</button>

		<div class="hidden">
			{#if project.url}
				<a href={project.url} class="button flex gap-2">
					<Link class="aspect-square w-4" />
					<span>View Project</span>
				</a>
			{:else}
				<div class="pri-button cursor-not-allowed opacity-30 flex gap-2">
					<Lock class="aspect-square w-4" />
					<span>Private Project</span>
				</div>
			{/if}
		</div>
	</div>
</div>
