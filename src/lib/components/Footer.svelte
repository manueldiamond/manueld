<script>
	import { ArrowUp } from 'lucide-svelte';
</script>

<footer class="text-cream bg-cream/10! neumorphic overflow-hidden mt-20">
	<div class="container mx-auto relative pt-10">
		<div class="footer-content text-xs py-4 max-sm:text-center relative">
			<div class="flex gap-2 flex-col sm:flex-row text-base mb-4 justify-end">
				<a href="#top" class="block button">
					<div class="centered gap-2">
						Back to Top
						<ArrowUp class="" />
					</div>
				</a>
			</div>
			<p class="">
				Copyright © {new Date().getFullYear()} Manuel Diamond.
			</p>
			<p>
				No rights reserved, this website is <a href="https://github.com/manueldiamond/manueld"
					>opensource</a
				>.
			</p>
		</div>
	</div>
	<p class="text-center text-[10px] relative z-10 bg-mblack neumorphic-inner">
		Powered by <a href="https://tesites.online">TE Sites</a>
	</p>
</footer>
