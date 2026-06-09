<script lang="ts">
	import { projects } from '$lib/constants/projects';
	import { Link, Lock } from 'lucide-svelte';
	import ProjectCard from './ProjectCard.svelte';
	import ProjectDetails from './ProjectDetails.svelte';

	let currentProjectData = $state({ id: -1, imgIdx: 0 });
	const clearCurrentProjectData = () => {
		currentProjectData = { id: -1, imgIdx: 0 };
	};
</script>

<section id="projects" class=" relative scroll-m-20 container mx-auto">
	<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
		Project Showcase
		<div class="diamond-bullet"></div>
	</h3>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
		{#each projects as project, id}
			<ProjectCard
				{project}
				onViewDetails={(imgIdx?: number) => {
					currentProjectData = { id, imgIdx: imgIdx ?? 0 };
				}}
			/>
		{/each}
	</div>
	<ProjectDetails
		id={currentProjectData?.id}
		startImageIdx={currentProjectData?.imgIdx}
		close={clearCurrentProjectData}
	/>
</section>
