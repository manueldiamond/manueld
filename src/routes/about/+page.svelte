<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ArrowRight, Mail } from 'lucide-svelte';
	import { contact } from '$lib/constants/contact';

	type Entry = {
		year: string;
		title: string;
		text: string[];
		images?: { src: string; alt: string }[];
		link?: { href: string; label: string };
	};

	const img = (name: string) => `/me/journey/${name}.webp`;

	// Years come from the APK dates in Drive, jam dates, the 2023 recordings and Manuel's own account.
	const timeline: Entry[] = [
		{
			year: '2020',
			title: 'First Android games',
			text: [
				'I started out writing games in Java with libGDX, then moved to C# in Unity. The first Android builds of BRS, a robot duelling game, date from this year.'
			]
		},
		{
			year: '2021',
			title: 'Godot and game jams',
			text: [
				'Godot became my main engine. I entered Ludum Dare 48 and the Stop Waiting For Godot jam, and kept developing BRS through version 6.'
			],
			images: [{ src: img('itch-car'), alt: 'A glowing vehicle racing through a neon 3D level' }]
		},
		{
			year: '2022',
			title: 'BRS 7.1 and Button Hell',
			text: [
				'BRS reached version 7.1, with rounds, health and adjustable game speed. I also built Button Hell in one week for the Brackeys Game Jam.'
			],
			images: [
				{ src: img('brs-v7-fight'), alt: 'Two robots in a sword duel with health bars and a round counter' },
				{ src: img('itch-button-hell'), alt: 'A first-person view of a robot in a red room' }
			]
		},
		{
			year: '2023',
			title: 'Into web development',
			text: [
				'I learned React and moved into web development properly. Game work continued on the side: original characters drawn, rigged and animated in Godot, and 3D shooters such as Project 2.'
			],
			images: [
				{ src: img('robot-rig'), alt: 'A robot character rigged for animation in the Godot editor' },
				{ src: img('itch-shooter'), alt: 'A first-person shooter with enemies and a weapon bar' }
			]
		},
		{
			year: '2024',
			title: 'Freelance web development',
			text: [
				'Web development became my profession. I took on freelance work, building web and mobile applications for clients and working directly with the people who would use them.'
			]
		},
		{
			year: '2025',
			title: 'First Class degree and AI-driven development',
			text: [
				'I graduated with a First Class BSc in Computer Science from Central University, Ghana.',
				'The same year I went deep on AI tools and agent-driven development, and built my own tooling around them.'
			],
			link: { href: '/ai', label: 'How I work with AI' }
		},
		{
			year: '2026',
			title: 'Contract work, with AI throughout',
			text: [
				'I work on contract across several projects and use AI in all of them. It writes code faster than I do, and it can get up to speed in an unfamiliar domain far quicker than I could on my own.',
				'It has also made skills that took years of hard effort to build cheap and widely available. That is not easy to accept. I would rather understand the shift and use it well, and I help others get real value from these tools too.',
				'Outside client work, I am learning low-level development and graphics programming in C, Raylib and Rust.'
			]
		}
	];
</script>

<svelte:head>
	<title>About · Manuel Diamond</title>
	<meta
		name="description"
		content="Self-taught programmer with roots in game development. From Android games in 2020 to web development, freelance work and AI-driven development."
	/>
</svelte:head>

<main class="bg-mblack">
	<Navbar />

	<section class="container mx-auto pt-24 pb-16 sm:pt-32">
		<h1 class="max-w-3xl text-4xl font-medium leading-tight text-cream sm:text-5xl">
			Self-taught programmer with roots in game development.
		</h1>
		<p class="mt-5 max-w-2xl leading-[180%] text-cream/70 sm:text-lg">
			I learned to program by making games, moved into web development in 2023, and now work on
			contract with AI as part of every project.
		</p>
	</section>

	<section class="container mx-auto pb-24">
		<ol>
			{#each timeline as entry (entry.year)}
				<li class="grid gap-x-10 border-t border-pewter/30 py-12 md:grid-cols-[12rem_minmax(0,1fr)]">
					<div class="md:sticky md:top-24 md:self-start">
						<p class="year text-cream/90">{entry.year}</p>
					</div>

					<div class="max-w-3xl">
						<h2 class="mt-3 text-2xl text-cream sm:text-3xl md:mt-1">
							{entry.title}
						</h2>
						{#each entry.text as paragraph}
							<p class="mt-4 leading-[190%] text-cream/80 md:text-lg">{paragraph}</p>
						{/each}
						{#if entry.link}
							<a
								href={entry.link.href}
								class="mt-4 inline-flex min-h-11 items-center gap-2 text-cream underline underline-offset-4"
							>
								{entry.link.label}
								<ArrowRight class="size-4" />
							</a>
						{/if}
						{#if entry.images}
							<div class="mt-6 grid gap-3" class:sm:grid-cols-2={entry.images.length > 1}>
								{#each entry.images as image (image.src)}
									<img
										src={image.src}
										alt={image.alt}
										loading="lazy"
										decoding="async"
										class="aspect-video w-full border border-pewter/40 bg-black object-contain shadow-lg shadow-black/40"
									/>
								{/each}
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<section class="container mx-auto flex flex-col items-start gap-5 border-t border-pewter/30 py-16">
		<h2 class="text-2xl text-cream sm:text-3xl">Work with me</h2>
		<p class="max-w-xl text-cream/70">
			Web and mobile applications, and AI automation. Currently open to new work.
		</p>
		<div class="flex flex-col gap-2 sm:flex-row">
			<a href="/#contact" class="pri-button">
				<span class="centered gap-2">Send a message <ArrowRight class="size-5" /></span>
			</a>
			<a href="mailto:{contact.email}" class="button">
				<span class="centered gap-2"><Mail class="size-5" /> {contact.email}</span>
			</a>
		</div>
	</section>

	<Footer />
</main>

<style>
	.year {
		font-weight: 300;
		font-size: clamp(2.5rem, 5vw, 4rem);
		line-height: 1;
		font-variant-numeric: tabular-nums;
		letter-spacing: -0.02em;
	}
</style>
