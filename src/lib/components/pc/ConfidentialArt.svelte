<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<!-- Stands in for screenshots on work under NDA: a redacted file with a stamp, nothing real shown. -->
<svg
	viewBox="0 0 320 220"
	role="img"
	aria-label="Confidential project, details withheld"
	class={className}
	preserveAspectRatio="xMidYMid meet"
>
	<defs>
		<linearGradient id="conf-bg" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#2b2c2f" />
			<stop offset="1" stop-color="#1c1d1f" />
		</linearGradient>
		<pattern
			id="conf-hatch"
			width="8"
			height="8"
			patternUnits="userSpaceOnUse"
			patternTransform="rotate(45)"
		>
			<rect width="8" height="8" fill="#232426" />
			<line x1="0" y1="0" x2="0" y2="8" stroke="#2c2d30" stroke-width="3" />
		</pattern>
	</defs>
	<rect width="320" height="220" fill="url(#conf-hatch)" />
	<g transform="translate(78 26) rotate(-4 82 84)">
		<rect x="6" y="8" width="164" height="168" fill="#121314" opacity=".55" />
		<path d="M0 0h124l40 40v128H0Z" fill="url(#conf-bg)" stroke="#8a8579" stroke-opacity=".5" />
		<path d="M124 0v40h40" fill="#3a3b3f" stroke="#8a8579" stroke-opacity=".5" />
		<rect x="16" y="22" width="70" height="7" fill="#8a8579" opacity=".55" />
		<rect x="16" y="48" width="132" height="9" fill="#0d0d0e" />
		<rect x="16" y="64" width="104" height="9" fill="#0d0d0e" />
		<rect x="16" y="80" width="124" height="9" fill="#0d0d0e" />
		<rect x="16" y="104" width="88" height="9" fill="#0d0d0e" />
		<rect x="16" y="120" width="132" height="9" fill="#0d0d0e" />
		<rect x="16" y="136" width="60" height="9" fill="#0d0d0e" />
	</g>
	<g transform="translate(160 118) rotate(-14)">
		<rect x="-92" y="-20" width="184" height="40" fill="none" stroke="#b7a676" stroke-width="3" />
		<rect
			x="-86"
			y="-14"
			width="172"
			height="28"
			fill="none"
			stroke="#b7a676"
			stroke-width="1"
			opacity=".7"
		/>
		<text
			x="0"
			y="7"
			text-anchor="middle"
			fill="#b7a676"
			font-family="Montserrat Variable, sans-serif"
			font-weight="800"
			font-size="19"
			letter-spacing="3">CONFIDENTIAL</text
		>
	</g>
	<g transform="translate(238 160)">
		<circle r="22" fill="#1c1d1f" stroke="#8a8579" stroke-opacity=".6" />
		<path
			d="M-7-3v-5a7 7 0 0 1 14 0v5"
			fill="none"
			stroke="#f3ede4"
			stroke-opacity=".8"
			stroke-width="2.5"
		/>
		<rect x="-10" y="-3" width="20" height="15" rx="2" fill="#f3ede4" fill-opacity=".85" />
		<circle cy="4" r="2" fill="#1c1d1f" />
	</g>
</svg>
