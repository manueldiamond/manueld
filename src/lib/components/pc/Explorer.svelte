<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { projects } from '$lib/constants/projects';
	import { ArrowUp, LayoutGrid, Folders, List } from 'lucide-svelte';
	import ProjectCard from '../ProjectCard.svelte';
	import ProjectDetails from '../ProjectDetails.svelte';
	import FolderIcon from './FolderIcon.svelte';
	import type { RetroPCContext } from './RetroPC.svelte';

	type View = 'tiles' | 'icons' | 'list';

	const views: { id: View; label: string; icon: typeof LayoutGrid }[] = [
		{ id: 'tiles', label: 'Tiles', icon: LayoutGrid },
		{ id: 'icons', label: 'Icons', icon: Folders },
		{ id: 'list', label: 'List', icon: List }
	];

	const pc = getContext<RetroPCContext>('retro-pc');

	// One folder per client, in the order they first appear in the project list.
	const folders = [...new Set(projects.map((p) => p.client.name))].map((name) => ({
		name,
		count: projects.filter((p) => p.client.name === name).length,
		locked: projects.some((p) => p.client.name === name && p.confidential)
	}));

	let view = $state<View>('tiles');

	let folder = $state('all');

	let open = $state({ id: -1, imgIdx: 0 });

	let pane: HTMLDivElement;

	const shown = $derived(
		projects
			.map((project, id) => ({ project, id }))
			.filter(({ project }) => folder === 'all' || project.client.name === folder)
	);

	const path = $derived(`C:\\Manuel\\Projects${folder === 'all' ? '' : `\\${folder}`}`);

	onMount(() => {
		try {
			const saved = localStorage.getItem('projects-view');

			if (saved === 'tiles' || saved === 'icons' || saved === 'list') view = saved;
		} catch {
			// Storage blocked: keep the default view.
		}

		pc?.setPane(pane);

		return () => pc?.setPane(null);
	});

	function setView(next: View) {
		view = next;

		try {
			localStorage.setItem('projects-view', next);
		} catch {
			// Storage blocked: the choice lasts for this visit only.
		}

		pc?.toPaneStart();
	}

	function openFolder(name: string) {
		folder = name;
		pc?.toPaneStart();
	}

	const openProject = (id: number, imgIdx = 0) => (open = { id, imgIdx });
</script>

<div class="flex h-full flex-col bg-mblack text-cream">
	<div
		class="flex h-8 shrink-0 items-center gap-2 bg-linear-to-r from-carafe to-carafe-light/60 px-3 text-xs font-semibold sm:text-sm"
	>
		<FolderIcon class="w-5 shrink-0" />
		<span class="truncate">{path}</span>
	</div>

	<div class="flex shrink-0 items-center gap-2 border-b border-pewter/30 bg-black/30 px-2 py-1.5">
		<button
			type="button"
			class="tool-btn"
			disabled={folder === 'all'}
			onclick={() => openFolder('all')}
			aria-label="Up to all projects"
		>
			<ArrowUp size={16} />
			<span class="max-sm:hidden">Up</span>
		</button>
		<label class="md:hidden min-w-0 flex-1">
			<span class="sr-only">Folder</span>
			<select
				class="w-full min-h-9 border border-pewter/40 bg-black/40 px-2 text-xs text-cream"
				value={folder}
				onchange={(e) => openFolder(e.currentTarget.value)}
			>
				<option value="all">All projects ({projects.length})</option>
				{#each folders as f}
					<option value={f.name}>{f.name} ({f.count})</option>
				{/each}
			</select>
		</label>
		<div class="ml-auto flex border border-pewter/40" role="group" aria-label="View mode">
			{#each views as v}
				<button
					type="button"
					class="tool-btn border-0! {view === v.id ? 'bg-cream! text-mblack!' : ''}"
					aria-pressed={view === v.id}
					onclick={() => setView(v.id)}
				>
					<v.icon size={16} />
					<span class="max-lg:sr-only">{v.label}</span>
				</button>
			{/each}
		</div>
	</div>

	<div class="flex min-h-0 flex-1">
		<nav
			aria-label="Project folders"
			class="w-56 shrink-0 overflow-y-auto border-r border-pewter/30 bg-black/20 py-2 text-sm max-md:hidden"
		>
			<button
				type="button"
				class="tree-item font-semibold"
				aria-current={folder === 'all' ? 'true' : undefined}
				onclick={() => openFolder('all')}
			>
				<FolderIcon class="w-5 shrink-0" />
				<span class="truncate">Projects</span>
				<span class="ml-auto text-xs opacity-60">{projects.length}</span>
			</button>
			<ul class="ml-4 border-l border-pewter/25">
				{#each folders as f}
					<li>
						<button
							type="button"
							class="tree-item"
							aria-current={folder === f.name ? 'true' : undefined}
							onclick={() => openFolder(f.name)}
						>
							<FolderIcon class="w-4 shrink-0" locked={f.locked} />
							<span class="truncate" title={f.name}>{f.name}</span>
							<span class="ml-auto text-xs opacity-60">{f.count}</span>
						</button>
					</li>
				{/each}
			</ul>
		</nav>

		<div bind:this={pane} class="min-w-0 flex-1 overflow-hidden">
			<div class="p-2 sm:p-3">
				{#if view === 'tiles'}
					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
						{#each shown as { project, id } (id)}
							<ProjectCard {project} onViewDetails={(i) => openProject(id, i)} />
						{/each}
					</div>
				{:else if view === 'icons'}
					<ul class="grid grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-1">
						{#each shown as { project, id } (id)}
							<li>
								<button
									type="button"
									class="icon-item"
									title="{project.name} · {project.client.name}"
									onclick={() => openProject(id)}
								>
									<FolderIcon
										class="w-20"
										thumb={project.images[0]}
										locked={project.confidential}
									/>
									<span class="line-clamp-2 text-center text-xs leading-tight">{project.name}</span>
								</button>
							</li>
						{/each}
					</ul>
				{:else}
					<table class="w-full border-collapse text-left text-sm">
						<thead class="bg-mblack text-xs uppercase text-cream/60">
							<tr class="border-b border-pewter/40">
								<th class="py-2 pl-2 font-semibold">Name</th>
								<th class="py-2 font-semibold max-sm:hidden">Client</th>
								<th class="py-2 font-semibold max-lg:hidden">Type</th>
								<th class="py-2 pr-2 text-right font-semibold">Files</th>
							</tr>
						</thead>
						<tbody>
							{#each shown as { project, id } (id)}
								<tr
									class="list-row border-b border-pewter/15"
									title="{project.name} · {project.client.name}"
									onclick={() => openProject(id)}
								>
									<td class="py-1.5 pl-2">
										<button
											type="button"
											class="flex items-center gap-2 text-left"
											onclick={(e) => {
												e.stopPropagation();
												openProject(id);
											}}
										>
											<FolderIcon class="w-6 shrink-0" locked={project.confidential} />
											<span class="font-medium text-cream/90">{project.name}</span>
										</button>
									</td>
									<td class="py-1.5 text-pewter max-sm:hidden">{project.client.name}</td>
									<td class="py-1.5 text-pewter max-lg:hidden">{project.tags[0]}</td>
									<td class="py-1.5 pr-2 text-right text-pewter tabular-nums">
										{project.confidential ? 'Restricted' : project.images.length}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
			</div>
		</div>
	</div>

	<ProjectDetails
		id={open.id}
		startImageIdx={open.imgIdx}
		close={() => (open = { id: -1, imgIdx: 0 })}
	/>
</div>

<style>
	.tool-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		min-height: 2.25rem;
		padding: 0 0.6rem;
		font-size: 0.75rem;
		color: var(--color-cream);
		border: 1px solid hsl(38.6 5.8% 52.5% / 0.4);
		cursor: pointer;
	}
	.tool-btn:hover:not(:disabled) {
		background: hsl(33.3 39.3% 95.1% / 0.1);
	}
	@media (pointer: coarse) {
		.tool-btn {
			min-height: 2.75rem;
			min-width: 2.75rem;
			justify-content: center;
		}
	}
	.tool-btn:disabled {
		opacity: 0.4;
		cursor: default;
	}
	.tree-item {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 0.5rem;
		padding: 0.3rem 0.75rem;
		color: hsl(33.3 39.3% 95.1% / 0.8);
		cursor: pointer;
		text-align: left;
	}
	.tree-item:hover {
		background: hsl(33.3 39.3% 95.1% / 0.08);
	}
	.tree-item[aria-current='true'] {
		background: var(--color-cream);
		color: var(--color-mblack);
	}
	.icon-item {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		padding: 0.6rem 0.25rem;
		color: hsl(33.3 39.3% 95.1% / 0.85);
		cursor: pointer;
	}
	.icon-item:hover {
		background: hsl(33.3 39.3% 95.1% / 0.08);
	}
	.list-row {
		cursor: pointer;
	}
	.list-row:hover {
		background: hsl(33.3 39.3% 95.1% / 0.06);
	}
	:is(.tool-btn, .tree-item, .icon-item, .list-row button):focus-visible {
		outline: 2px solid var(--color-cream);
		outline-offset: -2px;
	}
	/* Keyboard selection: the focused folder or row lights up like a selected file. */
	.icon-item:focus-visible {
		background: hsl(33.3 39.3% 95.1% / 0.16);
		color: var(--color-cream);
	}
	.list-row:has(button:focus-visible) {
		background: hsl(33.3 39.3% 95.1% / 0.14);
		outline: 2px solid var(--color-cream);
		outline-offset: -2px;
	}
	.list-row button:focus-visible {
		outline: none;
	}
</style>
