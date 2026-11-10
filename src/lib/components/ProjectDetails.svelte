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
		Play,
		X
	} from 'lucide-svelte';
	import ConfidentialArt from './pc/ConfidentialArt.svelte';
	import { getContext, tick } from 'svelte';
	import type { RetroPCContext } from './pc/RetroPC.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import type { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel';

	const { id, close, startImageIdx }: { id: number; close: () => void; startImageIdx: number } =
		$props();

	const project = $derived(id >= 0 ? projects[id] : null);

	let currentImageId = $state(0);

	$effect(() => {
		currentImageId = startImageIdx ?? 0;
	});

	const pc = getContext<RetroPCContext | undefined>('retro-pc');

	// The window lives inside the PC screen, so the PC is pinned fully in view before
	// page scroll is locked; otherwise the window could open half off screen and stay there.
	$effect(() => {
		if (!project) return;
		pc?.pin();
		document.body.style.overflow = 'hidden';

		// Smooth scrolling moves the page on its own, so body overflow alone does not hold it.
		// Swallow wheel and touch moves outside the window before they reach it; inside, the
		// window's own scroller takes them (it carries data-lenis-prevent).
		const hold = (e: Event) => {
			if (e.target instanceof Node && dialogEl?.contains(e.target)) return;

			e.preventDefault();
			e.stopImmediatePropagation();
		};

		const opts = { capture: true, passive: false };

		window.addEventListener('wheel', hold, opts);
		window.addEventListener('touchmove', hold, opts);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('wheel', hold, opts);
			window.removeEventListener('touchmove', hold, opts);
		};
	});

	// A click anywhere outside the window closes it, not only on the backdrop inside the screen.
	let dialogEl: HTMLDivElement | undefined = $state();

	function onPointerDown(e: PointerEvent) {
		if (!project || !dialogEl) return;

		if (e.target instanceof Node && !dialogEl.contains(e.target)) close();
	}

	let emblaApi: EmblaCarouselType | undefined = $state();

	const initEmbla = (e: CustomEvent<EmblaCarouselType>) => {
		emblaApi = e.detail;
		emblaApi.on('select', (e) => {
			currentImageId = e.selectedScrollSnap();
		});
	};

	// Focus moves into the window when it opens and back to what opened it when it closes.
	let closeBtn: HTMLButtonElement | undefined = $state();

	let opener: HTMLElement | null = null;

	$effect(() => {
		if (!project) return;
		const active = document.activeElement;

		opener = active instanceof HTMLElement ? active : null;
		tick().then(() => closeBtn?.focus({ preventScroll: true }));

		return () => opener?.focus({ preventScroll: true });
	});

	// Escape closes the window; Left and Right step through the screenshots.
	function onKey(e: KeyboardEvent) {
		if (!project) return;

		if (e.key === 'Escape') close();
		else if (e.key === 'ArrowLeft' && emblaApi) {
			e.preventDefault();
			emblaApi.scrollPrev();
		} else if (e.key === 'ArrowRight' && emblaApi) {
			e.preventDefault();
			emblaApi.scrollNext();
		}
	}

	const plugins = [Autoplay({ delay: 4000 })];

	const options: EmblaOptionsType = $derived({
		startIndex: startImageIdx,
		align: 'center',
		containScroll: false
	});
</script>

<svelte:window onkeydown={onKey} />
<svelte:document onpointerdown={onPointerDown} />

{#if project}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		data-lenis-prevent
		class="absolute z-30 inset-0 bg-black/60"
		onclick={(e) => {
			e.stopPropagation();
			close();
		}}
	>
		<div class="relative w-full h-full">
			<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
			<div
				bind:this={dialogEl}
				role="dialog"
				aria-modal="true"
				aria-label={project.name}
				tabindex="-1"
				onclick={(e) => e.stopPropagation()}
				class="absolute sm:inset-3 inset-1 outline-none border-pewter border bg-mblack shadow-black shadow-xl overflow-hidden flex flex-col"
				in:fly={{ duration: 200, y: 30 }}
			>
				<div
					class="flex justify-between items-center gap-2 min-h-9 py-0.5 px-3 text-sm sm:text-base font-semibold text-cream bg-linear-to-r from-carafe to-carafe-light/60 border-b border-pewter shrink-0"
				>
					<div class="flex gap-2 items-center flex-row min-w-0">
						<div class="diamond-bullet scale-50 shrink-0"></div>
						<p class="truncate">{project.name}</p>
					</div>
					<div class="centered flex gap-2">
						{#if project.url}
							<a
								href={project.url}
								target="_blank"
								rel="noopener"
								aria-label="Open {project.name} in a new tab"
								class="win-btn"
							>
								<ExternalLinkIcon size={20} />
							</a>
						{/if}

						<button bind:this={closeBtn} class="win-btn" onclick={close} aria-label="Close">
							<X size={18} />
						</button>
					</div>
				</div>

				<div class="flex flex-col overflow-y-auto overscroll-contain touch-pan-y flex-1">
					{#if project.confidential}
						<div class="shrink-0 bg-black/40 border-b border-pewter/30">
							<ConfidentialArt class="mx-auto block h-[min(320px,40vh)] w-full" />
						</div>
					{:else}
						<div
							class="overflow-hidden flex shrink-0 min-h-fit container relative group sticky top-0"
							use:emblaCarouselSvelte={{ options, plugins }}
							onemblaInit={initEmbla}
						>
							<!-- Screenshots sit side by side at their own width, the current one snapped to the
							     centre, so narrow phone shots show several at once. -->
							<div class="flex gap-3 items-center h-[min(400px,60vh)] w-full py-2">
								{#each project.images as imgSrc, id}
									<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
									<img
										class="drop-shadow-xl shrink-0 grow-0 w-auto h-auto max-h-full max-w-[85%] object-contain transition-opacity duration-300 {id ===
										(currentImageId ?? 0)
											? 'opacity-100'
											: 'opacity-50 cursor-pointer'}"
										src={imgSrc}
										alt="{project.name} image {id + 1}"
										decoding="async"
										onload={() => emblaApi?.reInit()}
										onclick={() => emblaApi?.scrollTo(id)}
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
									aria-label="Previous image"
									class=" p-2 max-sm:hidden px-4 centered cursor-pointer hover:bg-mblack/50"
								>
									<ChevronLeft class="aspect-square w-4" />
								</button>

								<p class="px-2 py-1 max-sm:text-xs">
									{(currentImageId ?? 0) + 1}/{project.images.length}
								</p>

								<button
									onclick={() => {
										emblaApi?.scrollNext();
									}}
									aria-label="Next image"
									class="p-2 max-md:hidden px-4 centered cursor-pointer hover:bg-mblack/50"
								>
									<ChevronRight class="aspect-square w-4" />
								</button>
							</div>
						</div>
					{/if}

					<div
						class="bg-mblack z-50 relative flex flex-col md:flex-row gap-3 pb-5 container flex-1 pt-4 shadow-black/80 relative z-10 shadow-[0_-4px_24px]"
					>
						<div class="flex flex-col gap-3">
							<div class=" flex gap-1 flex-row flex-wrap my-1">
								{#each project.tags as tag}
									<div
										class="over bg-carafe-light/20 text-carafe-light text-sm font-semibold px-2 py-1 flex gap-0.5 flex-auto min-w-0 max-w-full text-center centered"
										title={tag}
									>
										<span class="truncate">{tag}</span>
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
											target="_blank"
											rel="noopener"
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
										target="_blank"
										rel="noopener"
										class="{project.client.url &&
											'hover:text-carafe hover:underline cursor-pointer'} text-carafe-light font-bold text-sm"
									>
										{project.client.name}
										{#if project.client.url}
											<ExternalLinkIcon class="inline-block w-4 h-4 ml-1" />
										{/if}
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
													target="_blank"
													rel="noopener"
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
									<a
										href={project.url}
										target="_blank"
										rel="noopener"
										class="min-w-max button centered flex gap-2"
									>
										<span>View Live</span>
										<ExternalLink class="aspect-square w-4" />
									</a>
								{:else}
									<div
										class="min-w-max pri-button cursor-not-allowed centered opacity-30 flex gap-2"
									>
										<Lock class="aspect-square w-4" />
										<span>{project.confidential ? 'Details withheld' : 'Private Project'}</span>
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

<style>
	.win-btn {
		display: inline-grid;
		place-items: center;
		width: 2rem;
		height: 1.75rem;
		border: 1px solid hsl(33.3 39.3% 95.1% / 0.35);
		background: hsl(220 3.7% 14.3% / 0.5);
		color: var(--color-cream);
		cursor: pointer;
	}
	@media (pointer: coarse) {
		.win-btn {
			width: 2.75rem;
			height: 2.75rem;
		}
	}
	.win-btn:hover {
		background: var(--color-cream);
		color: var(--color-mblack);
	}
	.win-btn:focus-visible {
		outline: 2px solid var(--color-cream);
		outline-offset: 1px;
	}
</style>
