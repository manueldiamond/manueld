<script>
	import { nav } from '$lib/constants/misc';
	import {
		SiGithub,
		SiInstagram,
		SiWhatsapp,
		SiX,
		SiYoutube
	} from '@icons-pack/svelte-simple-icons';
	import { ArrowUp } from 'lucide-svelte';

	const socials = [
		{ url: 'https://wa.me/+233539512886', icon: SiWhatsapp, label: 'WhatsApp' },
		{ url: 'https://x.com/manuel_diamond', icon: SiX, label: 'X' },
		{ url: 'https://github.com/manueldiamond', icon: SiGithub, label: 'GitHub' },
		{
			url: 'https://www.instagram.com/manuel.diamond/',
			icon: SiInstagram,
			label: 'Instagram'
		},
		{ url: 'https://www.youtube.com/channel/@manueldiamond', icon: SiYoutube, label: 'YouTube' }
	];
</script>

<footer class="footer-bg relative text-cream neumorphic overflow-hidden mt-20">
	<div class="container mx-auto relative pt-10">
		<div class="grid sm:grid-cols-3 gap-8 pb-8">
			<!-- Logo + tagline -->
			<div class="flex flex-col gap-3">
				<a href="#top" class="block max-w-fit">
					<img src="M.png" alt="Manuel Logo" class="invert h-[44px] object-contain" />
				</a>
				<p class="text-cream/75 text-sm leading-[150%] max-w-[280px]">
					Full-stack engineer & founder building products across web and mobile.
				</p>
			</div>

			<!-- Navlinks (matches Navbar style) -->
			<div class="flex flex-col gap-2">
				<p class="uppercase text-cream/60 font-bold text-xs">Navigate</p>
				<ul class="flex flex-col gap-1">
					{#each nav as item}
						<li class="flex group">
							<a href={item.url} class="text-sm font-medium hover:text-cream text-cream/80">
								<span>{item.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Socials only -->
			<div class="flex flex-col gap-2">
				<p class="uppercase text-cream/60 font-bold text-xs">Find me</p>
				<div class="flex gap-3 flex-wrap">
					{#each socials as { url, icon: Icon, label }}
						<a
							href={url}
							aria-label={label}
							target="_blank"
							rel="noopener noreferrer"
							class="text-cream/75 hover:text-cream transition-colors"
						>
							<Icon class="w-5 h-5" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div
			class="footer-content text-xs py-4 max-sm:text-center relative flex flex-col sm:flex-row justify-between items-center gap-3"
		>
			<p>
				Copyright © {new Date().getFullYear()} Manuel Diamond. All rights reserved.
			</p>
		</div>
	</div>
	<p class="text-center text-[10px] relative z-10 bg-mblack neumorphic-inner">
		Powered by <a target="_blank" rel="noopener" href="https://tesites.online">TE Sites</a>
	</p>
</footer>

<style>
	/* Diamond lattice: the surname as a pattern, repeating the diamond bullet used on every
	   section heading. Kept faint and fading out toward the copyright line so text stays legible. */
	.footer-bg {
		background-color: hsl(47.6 21.3% 26%);
		background-image:
			linear-gradient(
				180deg,
				hsl(47.6 21.3% 34% / 0.85) 0%,
				hsl(47.6 21.3% 22% / 0.6) 55%,
				hsl(220 3.7% 12% / 0.95) 100%
			),
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M22 3 41 22 22 41 3 22Z' fill='none' stroke='%23f3ede4' stroke-opacity='.11'/%3E%3Cpath d='M22 15 29 22 22 29 15 22Z' fill='%23f3ede4' fill-opacity='.05'/%3E%3C/svg%3E");
		background-size:
			100% 100%,
			44px 44px;
	}
</style>
