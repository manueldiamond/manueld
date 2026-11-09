<script lang="ts">
	let {
		thumb,
		locked = false,
		class: className = ''
	}: { thumb?: string; locked?: boolean; class?: string } = $props();
</script>

<!-- A desk folder in the site's carafe tones; the project's first screenshot peeks out of it. -->
<span class="relative inline-block aspect-[5/4] {className}" aria-hidden="true">
	<svg viewBox="0 0 100 80" class="absolute inset-0 h-full w-full overflow-visible">
		<path d="M4 10h30l7 7h55v57H4Z" fill="#5d5640" />
	</svg>
	{#if thumb}
		<img
			src={thumb}
			alt=""
			loading="lazy"
			decoding="async"
			class="absolute left-[12%] top-[16%] h-[52%] w-[76%] object-cover object-top shadow-md shadow-black/60 -rotate-3"
		/>
	{/if}
	<svg viewBox="0 0 100 80" class="absolute inset-0 h-full w-full overflow-visible">
		<path d="M2 30h96l-5 44H7Z" fill="#7a7154" />
		<path d="M2 30h96l-.6 5H2.6Z" fill="#9b9171" />
		{#if locked}
			<g transform="translate(50 54)">
				<path d="M-6-2v-5a6 6 0 0 1 12 0v5" fill="none" stroke="#f3ede4" stroke-width="2.4" />
				<rect x="-9" y="-2" width="18" height="13" rx="1.5" fill="#f3ede4" />
			</g>
		{/if}
	</svg>
</span>
