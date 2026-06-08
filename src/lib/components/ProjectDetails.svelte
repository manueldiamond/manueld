<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { projects } from '$lib/constants/projects';
	import { X } from 'lucide-svelte';

	const { id: currentProjectDetailsId, close } = $props();

	const project = projects[currentProjectDetailsId];

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

{#if currentProjectDetailsId >= 0}
	<div class="fixed z-50 inset-0 bg-black/50 items-end content-end" onclick={close}>
		<div onclick={(e) => e.stopPropagation()} class="container mx-auto relative">
			<div
				class=" border-cream border border-b-0 bg-linear-to-t from-cream/50 via-cream to-transparent ./to-cream/50 backdrop-blur-md w-full max-w-7xl h-[80vh] min-h-[600px] overflow-hidden shadow-black shadow-xl"
			>
				<div
					class="container flex justify-between items-center py-3 mx-auto text-lg sm:text-xl font-medium text-cream bg-black/40"
				>
					<p>{project.name}</p>
					<button
						class="hover:bg-cream hover:text-mblack text-cream font-medium text-base"
						onclick={close}
					>
						[X]
					</button>
				</div>

				<div class="container overflow-y-scroll">
					<div class="flex flex-col gap-3">
						<div class="" use:emblaCarouselSvelte={{ options, plugins }}>
							<div class="flex gap-3">
								{#each project.images as imgSrc, id}
									<div
										class=" content-center items-center aspect-[4/3] h-auto overflow-scroll min-w-full"
									>
										<img
											class="drop-shadow-xl object-contain w-full"
											src={imgSrc}
											alt="{project.name} image {id + 1}"
										/>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
