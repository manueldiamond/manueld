<script>
	import { projects } from '$lib/constants/projects';
	import { Link, Lock } from 'lucide-svelte';
</script>

<section id="projects" class=" mt-20 container mx-auto">
	<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
		My Projects
		<div class="diamond-bullet"></div>
	</h3>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
		{#each projects as project}
			<div class="bg-black/10 hover:bg-black/20 flex flex-col group">
				{#if project.images?.length > 0}
					<div class=" overflow-hidden relative aspect-[3/2.2] w-full">
						<div class="flex-1 w-full h-full flex p-4">
							<img
								src={project?.images[0]}
								alt="{project.name} featured image"
								class="object-cover w-full drop-shadow-xl drop-shadow-black drop-shadow-2xl h-full object-top"
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
						{#each project.tags as tag}
							<div
								class="over bg-carafe-light/20 text-carafe-light text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max"
							>
								{tag}
							</div>
						{/each}
					</div>

					<p class="group-hover:hidden text-sm text-pewter leading-[150%]">
						{project.description.slice(0, 220)}
						{#if project.description.length > 220}
							<span>... </span>
							<span class="text-carafe-light text-sm">read more </span>
						{/if}
					</p>

					<p class=" hidden group-hover:block text-sm text-pewter leading-[150%]">
						{project.description}
						<br />
						<br />
						<br />

						<span class="text-carafe-light font-bold text-sm">{project.client}</span>
					</p>
					<div class="flex-1"></div>
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
		{/each}
	</div>
</section>
