<script lang="ts">
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Buzzbanner from '$lib/components/Buzzbanner.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import TechstackCard from '$lib/components/TechstackCard.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Manuel Diamond · Software engineer</title>
</svelte:head>

<main class="scroll-smooth">
	<Navbar />
	<HeroSection />
	<ProjectsSection />
	<AboutSection />
	<TechstackCard />
	<ContactSection />
</main>
