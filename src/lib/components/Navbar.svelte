<script>
	import { nav } from '$lib/constants/misc';
</script>

<!-- HEADER -->
<nav
	class="sticky top-0 backdrop-blur-sm border-cream/50 border-t border-b flex flex-col gap-5 relative z-50 justify-center overflow-hidden shadow-black shadow-xl bg-mblack/85"
>
	<div
		class=" uppercase flex-1 w-full h-full flex py-1 container mx-auto font-medium justify-between items-center text-sm max-sm:text-xs max-sm:justify-center"
	>
		<a
			href="/"
			class="group text-pewter hover:bg-white transition-colors hover:font-semibold cursor-pointer hover:text-black max-sm:hidden shadow-xl shadow-black/50"
		>
			<img
				src="M.png"
				alt="Manuel Logo"
				class=" group-hover:invert-0 invert h-[40px] object-contain transition-all"
			/>
		</a>
		<ul class="flex">
			{#each nav as item}
				<li class="flex text-pewter group">
					<a
						href={item.url}
						class="max-sm:py-2 max-sm:mt-1 border-cream block px-0.5 hover:text-cream hover-font-semibold text-pewter"
					>
						<span class="group-hover:opacity-100 transition-opacity duration-700 opacity-0">[</span>
						<span>{item.label}</span>
						<span class="group-hover:opacity-100 transition-opacity duration-700 opacity-0">]</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
