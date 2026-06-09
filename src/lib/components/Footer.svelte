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

<footer class="text-cream bg-carafe-light/60! backdrop-blur-md neumorphic overflow-hidden mt-20">
	<div class="container mx-auto relative pt-10">
		<div class="grid sm:grid-cols-3 gap-8 pb-8">
			<!-- Logo + tagline -->
			<div class="flex flex-col gap-3">
				<a href="#top" class="block max-w-fit">
					<img src="M.png" alt="Manuel Logo" class="invert h-[44px] object-contain" />
				</a>
				<p class="text-pewter text-sm leading-[150%] max-w-[280px]">
					Full-stack engineer & founder building products across web and mobile.
				</p>
			</div>

			<!-- Navlinks (matches Navbar style) -->
			<div class="flex flex-col gap-2">
				<p class="uppercase text-pewter/50 font-bold text-xs">Navigate</p>
				<ul class="flex flex-col gap-1">
					{#each nav as item}
						<li class="flex text-pewter group">
							<a href={item.url} class="text-sm font-medium hover:text-cream text-pewter">
								<span>{item.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Socials only -->
			<div class="flex flex-col gap-2">
				<p class="uppercase text-pewter/50 font-bold text-xs">Find me</p>
				<div class="flex gap-3 flex-wrap">
					{#each socials as { url, icon: Icon, label }}
						<a
							href={url}
							aria-label={label}
							target="_blank"
							rel="noopener noreferrer"
							class="text-pewter hover:text-cream transition-colors"
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
				Copyright © {new Date().getFullYear()} Manuel Diamond. All rights reserved, but this project is
				<a
					class="hover:underline"
					target="_blank"
					rel="noopener"
					href="https://github.com/manueldiamond/manueld">opensource</a
				>.
			</p>
		</div>
	</div>
	<p class="text-center text-[10px] relative z-10 bg-mblack neumorphic-inner">
		Powered by <a target="_blank" rel="noopener" href="https://tesites.online">TE Sites</a>
	</p>
</footer>
