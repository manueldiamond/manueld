<script lang="ts">
	import { projects } from '$lib/constants/projects';
	import { Link, Lock } from 'lucide-svelte';
	import ProjectCard from './ProjectCard.svelte';
	import ProjectDetails from './ProjectDetails.svelte';

	let currentProjectDetailsId = $state(-1);
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
	<ProjectDetails id={currentProjectDetailsId} close={() => (currentProjectDetailsId = -1)} />
</section>
