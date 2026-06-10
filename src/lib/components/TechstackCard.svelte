<script>
	import { languages, tools } from '$lib/constants/tech';
</script>

<section class="px-4 md:px-8">
	<div
		class=" container mx-auto border-carafe/30 border-[4px] sm:border-[24px] md:border-[32px] bg-black/40 backdrop-blur-md md:py-12 py-6 px-0! relative -mt-[160px] shadow-2xl shadow-black/50

			relative
			"
	>
		<div class="absolute inset-0 neumorphic-inner bg-transparent overflow-hidden">
			<div class=" mix-blend-lighten absolute -z-10 inset-0 opacity-15 grain"></div>
		</div>
		<div class="">
			<div class="md:px-8 px-4 mb-10">
				<h3
					class=" text-pewter uppercase font-bold text-2xl max-sm:text-xl text-left flex items-center justify-start gap-5"
				>
					POWERED BY
				</h3>
				<p class="max-sm:text-sm text-base text-pewter">Tools and libraries i'm familiar with</p>
			</div>
			<div class="w-full marquee-wrapper flex flex-col gap-4">
				{#each [tools, languages] as techstack, id}
					<div class=" {(id + 1) % 2 === 1 ? 'marquee-1' : 'marquee-2'} gap-8! max-md:gap-4! flex">
						{#each [...techstack, ...techstack] as tech}
							<div class="">
								<img
									src={tech.image}
									alt={tech.name}
									class=" w-8 sm:w-12 md:w-18
										object-contain aspect-square grayscale-50 drop-shadow-lg drop-shadow-black/50"
								/>
								<span class="font-medium md:text-sm text-white/80 sm:tex-xs text-[10px] min-w-max"
									>{tech.name}</span
								>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
