<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { projects } from '$lib/constants/projects';
	import { ExternalLink, ExternalLinkIcon, Link, Lock, MinimizeIcon } from 'lucide-svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import type { EmblaEventType } from 'embla-carousel';

	const { id, close } = $props();

	const project = $derived(id >= 0 ? projects[id] : null);

	$effect(() => {
		if (project) {
			//disable global scrolling
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	});

	let currentImageId = $state(0);
	const initEmbla = (e) => {
		e.startsWith.on('select', (e) => e.detail.selectedScrollSnap());
	};

	const plugins = [Autoplay({ delay: 4000 })];
</script>

{#if project}
	<div
		class="fixed z-50 inset-0 bg-black/50 content-end"
		onclick={(e) => {
			e.stopPropagation();
			close();
		}}
	>
		<div class="sm:container mx-auto relative w-full h-[90%] mt-auto">
			<div
				onclick={(e) => e.stopPropagation()}
				class=" m-auto absolute lg:inset-22 min-h-[400px] sm:inset-16 inset-1 border-pewter border bg-mblack to-transparent shadow-black shadow-xl overflow-hidden flex flex-col"
				in:fly={{ duration: 200, y: 50 }}
			>
				<div
					class="container flex justify-between items-center py-3 mx-auto text-lg sm:text-xl font-medium text-cream bg-black/40"
				>
					<p>{project.name}</p>
					<button
						class="cursor-pointer hover:bg-cream-hover:text-mblack text-cream font-medium text-base"
						onclick={close}
					>
						<MinimizeIcon />
					</button>
				</div>

				<div class="flex flex-col overflow-y-scroll flex-1">
					<div
						class="overflow-hidden flex min-h-max container relative"
						use:emblaCarouselSvelte={{ options: {}, plugins }}
					>
						<div class="flex gap-3 h-max">
							{#each project.images as imgSrc, id}
								<img
									class="drop-shadow-xl object-contain w-full min-w-full h-auto object-[top_center] max-h-[min(400px,60vh)]"
									src={imgSrc}
									alt="{project.name} image {id + 1}"
								/>
							{/each}
						</div>
					</div>

					<div
						class="flex flex-col md:flex-row gap-3 pb-5 container flex-1 pt-4 shadow-black/80 relative z-10 shadow-[0_-4px_24px]"
					>
						<div class="flex flex-col gap-3">
							<div class=" flex gap-1 flex-row flex-wrap my-1">
								{#each project.tags as tag}
									<div
										class="over bg-carafe-light/20 text-carafe-light text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max"
									>
										{tag}
									</div>
								{/each}
							</div>

							<p class=" text-sm text-pewter leading-[150%]">
								{project.description}
							</p>

							<div class=" flex gap-1 flex-row flex-wrap my-1">
								{#each project.techstack as tag}
									<div
										class="over bg-pewter/20 text-pewter text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max"
									>
										{tag}
									</div>
								{/each}
							</div>
						</div>

						<div
							class=" md:bg-black/10 md:p-4 flex flex-col gap-3 min-w-[240px] lg:min-w-[300px] flex-1"
						>
							{#if project.client}
								<div>
									<p class="uppercase text-carafe/80 font-bold text-xs">{project.clientLabel}</p>
									<a
										href={project.client.url}
										class="{project.client.url &&
											'hover:text-carafe hover:underline cursor-pointer'} text-carafe-light font-bold text-sm"
									>
										{project.client.name}
										<ExternalLinkIcon class="inline-block w-4 h-4 ml-1" />
									</a>
								</div>
							{/if}

							{#if project.collaborators}
								<p class="uppercase text-carafe/80 font-bold text-xs">Collaborators</p>
								<ul class="gap-1 flex flex-col">
									{#each project.collaborators as collaborator}
										{@const avatarUrl =
											collaborator.photoUrl ??
											(collaborator.url?.includes('github') &&
												`https://github.com/${collaborator.url.split('/').at(-1)}.png`)}

										<li class="flex gap-2 items-center">
											<div class="flex h-6">
												{#if avatarUrl}
													<img
														src={avatarUrl}
														alt="Github Avatar"
														class="h-full aspect-square rounded-full"
													/>
												{:else}
													<div
														class=" h-full aspect-square centered rounded-full bg-carafe-light/20 text-carafe-light text-base font-bold"
													>
														{collaborator.name.at(0)}
													</div>
												{/if}
											</div>

											<p class="flex flex-row-reverse justify-between w-full">
												<span class="text-pewter uppercase text-[10px]">{collaborator.role}</span>
												<a
													href={collaborator.url}
													class="{project.client.url &&
														'hover:text-carafe hover:underline cursor-pointer'} text-pewter text-sm"
												>
													{collaborator.name}
												</a>
											</p>
										</li>
									{/each}
								</ul>
							{/if}

							<div class="flex-1"></div>

							<div class="">
								{#if project.url}
									<a href={project.url} class="min-w-max button centered flex gap-2">
										<span>Open Project</span>
										<ExternalLink class="aspect-square w-4" />
									</a>
								{:else}
									<div
										class="min-w-max pri-button cursor-not-allowed centered opacity-30 flex gap-2"
									>
										<Lock class="aspect-square w-4" />
										<span>Private Project</span>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
