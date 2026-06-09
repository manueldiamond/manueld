<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { projects } from '$lib/constants/projects';
	import {
		ChevronLeft,
		ChevronRight,
		ChevronsLeft,
		ChevronsRight,
		ExternalLink,
		ExternalLinkIcon,
		Fullscreen,
		Link,
		Lock,
		MinimizeIcon,
		Play
	} from 'lucide-svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import type { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel';

	const { id, close, startImageIdx } = $props();

	const project = $derived(id >= 0 ? projects[id] : null);

	let currentImageId = $state(0);

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

	let emblaApi: EmblaCarouselType | undefined = $state();
	const initEmbla = (e: CustomEvent<EmblaCarouselType>) => {
		emblaApi = e.detail;
		emblaApi.on('select', (e) => {
			currentImageId = e.selectedScrollSnap();
		});
	};

	const plugins = [Autoplay({ delay: 4000 })];
	const options: EmblaOptionsType = $derived({ startIndex: startImageIdx });
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
				class=" m-auto absolute min-h-[400px] sm:inset-6 inset-1 border-pewter border bg-mblack to-transparent shadow-black shadow-xl overflow-hidden flex flex-col"
				in:fly={{ duration: 200, y: 50 }}
			>
				<div
					class="container flex justify-between items-center py-1 mx-auto text-lg font-medium text-cream bg-black/40 border-b border-pewter"
				>
					<div class="flex gap-2 centered flex-row">
						<div class="diamond-bullet scale-50"></div>
						<p>{project.name}</p>
					</div>
					<div class="centered flex gap-2">
						{#if project.url}
							<a
								href={project.url}
								class="cursor-pointer hover:bg-cream-hover:text-mblack text-cream font-medium text-base"
							>
								<ExternalLinkIcon size={20} />
							</a>
						{/if}

						<button
							class="cursor-pointer hover:bg-cream-hover:text-mblack text-cream font-medium text-base"
							onclick={close}
						>
							<MinimizeIcon size={20} />
						</button>
					</div>
				</div>

				<div class="flex flex-col overflow-y-scroll flex-1">
					<div
						class="overflow-hidden flex shrink-0 min-h-fit container relative group sticky top-0"
						use:emblaCarouselSvelte={{ options, plugins }}
						onemblaInit={initEmbla}
					>
						<div class="flex gap-3 h-max w-full">
							{#each project.images as imgSrc, id}
								<img
									class="drop-shadow-xl object-contain w-full min-w-full object-center max-h-[min(400px,60vh)]"
									src={imgSrc}
									alt="{project.name} image {id + 1}"
								/>
							{/each}
						</div>
						<div
							class="bg-mblack/60 gap-6 backdrop-blur-md centered mx-auto absolute bottom-0 max-sm:right-0 sm:left-1/2 sm:-translate-x-1/2 text-cream font-medium hidde group-hover:flex group-hover:opacity-100 transition-opacity opacity-0"
						>
							<button
								onclick={() => {
									emblaApi?.scrollPrev();
								}}
								class=" p-2 max-sm:hidden px-4 centered cursor-pointer hover:bg-mblack/50"
							>
								<ChevronLeft class="aspect-square w-4" />
							</button>

							<p class="px-2 py-1 max-sm:text-xs">{currentImageId + 1}/{project.images.length}</p>

							<button
								onclick={() => {
									emblaApi?.scrollNext();
								}}
								class="p-2 max-md:hidden px-4 centered cursor-pointer hover:bg-mblack/50"
							>
								<ChevronRight class="aspect-square w-4" />
							</button>
						</div>
					</div>

					<div
						class="bg-mblack z-50 relative flex flex-col md:flex-row gap-3 pb-5 container flex-1 pt-4 shadow-black/80 relative z-10 shadow-[0_-4px_24px]"
					>
						<div class="flex flex-col gap-3">
							<div class=" flex gap-1 flex-row flex-wrap my-1">
								{#each project.tags as tag}
									<div
										class="over bg-carafe-light/20 text-carafe-light text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max max-w-[120px] text-center centered"
									>
										{tag}
									</div>
								{/each}
							</div>

							<p class=" text-sm text-pewter leading-[150%]">
								{project.description}
							</p>
							{#if project.technical_description}
								<p class=" text-sm text-pewter leading-[150%]">
									{project.technical_description}
								</p>
							{/if}

							<div class=" flex gap-1 flex-row flex-wrap my-1">
								{#each project.techstack as tag}
									<div
										class="max-w-[120px] centered bg-pewter/20 text-pewter text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max"
									>
										{tag}
									</div>
								{/each}
							</div>
							{#if project.additionalLinks}
								<div class=" flex gap-1 flex-row flex-wrap my-1">
									<p class="uppercase text-carafe/80 font-bold text-xs">Additional Links</p>
									{#each project.additionalLinks as { label, url }}
										<a
											href={url}
											class="over text-pewter text-sm font-semibold py-1 flex gap-0.5 flex-1 min-w-max"
										>
											<Link class="inline-block w-4 h-4 ml-1" />
											{label}
										</a>
									{/each}
								</div>
							{/if}
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
											collaborator.image ??
											(collaborator.url?.includes('github') &&
												`https://github.com/${collaborator.url.split('/').at(-1)}.png`)}

										<li class="flex gap-2 items-center">
											<div class="flex h-6 shrink-0">
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
												<span class="text-pewter text-right font-medium text-[10px]"
													>{collaborator.role}</span
												>
												<a
													href={collaborator.url}
													class="{collaborator.url &&
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
										<span>View Live</span>
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
