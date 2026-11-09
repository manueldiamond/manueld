<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ArrowRight, Mail } from 'lucide-svelte';
	import { contact } from '$lib/constants/contact';

	type Shot = { src: string; alt: string; text: string };

	type Chapter = { id: string; when: string; title: string; body: string; shots: Shot[] };

	const img = (name: string) => `/me/journey/${name}.webp`;

	// Facts come from the old APKs in Drive, the itch.io pages and the 2023 screen recordings.
	const chapters: Chapter[] = [
		{
			id: 'early',
			when: '2020 to 2022',
			title: 'Android builds',
			body: 'Started with Java and libGDX, then C# in Unity, then Godot, building and shipping Android games from 2020 to 2022. The screens below come from the original APKs, run on real devices.',
			shots: [
				{
					src: img('brs-v7-fight'),
					alt: 'Two robots in a sword duel with health bars, a round counter and a speed setting',
					text: 'BRS v7.1, Android, 2022. A robot duelling game developed across several versions.'
				},
				{
					src: img('brs-3d-duel'),
					alt: 'The robot duel rebuilt in 3D',
					text: 'BRS 3D. The same game, rebuilt in 3D.'
				},
				{
					src: img('corridor-cyan'),
					alt: 'A 3D corridor of glossy cyan and black panels',
					text: 'Lighting and materials study, Godot.'
				}
			]
		},
		{
			id: 'godot',
			when: '2023',
			title: 'Character design and animation',
			body: 'Godot development in GDScript and C#, with original characters designed, rigged and animated from scratch. Sessions were recorded for a game development channel on YouTube.',
			shots: [
				{
					src: img('robot-drawing'),
					alt: 'A line drawing of a robot character in a vector editor',
					text: 'Character design in a vector editor.'
				},
				{
					src: img('robot-rig'),
					alt: 'The robot cut into parts and posed in the Godot editor',
					text: 'The same character, rigged for animation in Godot.'
				}
			]
		},
		{
			id: 'shipped',
			when: 'Most recent',
			title: 'Published games',
			body: 'Game jam entries and personal projects, published on itch.io. Jams include Ludum Dare 48, the Brackeys Game Jam and Stop Waiting For Godot.',
			shots: [
				{
					src: img('itch-car'),
					alt: 'A glowing vehicle racing through a neon level',
					text: 'Epic Platformer. A high-speed 3D platformer.'
				},
				{
					src: img('itch-shooter'),
					alt: 'A first-person shooter with enemies and a weapon bar',
					text: 'Project 2. A first-person shooter with unlockable weapons, built in Godot.'
				},
				{
					src: img('itch-button-hell'),
					alt: 'A first-person view of a robot in a red room under a glowing green light',
					text: 'Button Hell. Built in one week for the Brackeys Game Jam.'
				},
				{
					src: img('itch-elden'),
					alt: 'A dark 3D scene with a sword fighter on a red path',
					text: 'Elden Ring Budget Edition. A fan project.'
				}
			]
		}
	];

	let active = $state<Record<string, number>>({});

	// A step becomes current when its middle crosses the middle of the screen.
	function step(node: HTMLElement, key: { chapter: string; index: number }) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) active[key.chapter] = key.index;
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);

		observer.observe(node);

		return { destroy: () => observer.disconnect() };
	}
</script>

<svelte:head>
	<title>About · Manuel Diamond</title>
	<meta
		name="description"
		content="Manuel Diamond learned to program by making games in libGDX, Unity and Godot. Now he builds software for a living and uses AI to go faster."
	/>
</svelte:head>

<main class="bg-mblack">
	<Navbar />

	<section class="container mx-auto flex min-h-[60svh] flex-col justify-center py-20">
		<h1 class="max-w-3xl text-4xl font-medium text-cream sm:text-6xl">
			Self-taught programmer with roots in game development.
		</h1>
		<p class="mt-6 max-w-xl text-base leading-[180%] text-cream/70 sm:text-lg">
			Game development is where I learned to program. It is also where the fundamentals behind
			my client work come from.
		</p>
	</section>

	{#each chapters as chapter, ci (chapter.id)}
		<section id={chapter.id} class="chapter relative" style="z-index: {ci + 1}">
			<div
				class="container mx-auto lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12"
			>
				<!-- Desktop: the image stage stays pinned while the text beside it scrolls. -->
				<div class="sticky top-0 hidden h-svh items-center lg:flex">
					<div class="stage relative aspect-video w-full overflow-hidden border border-pewter/40">
						{#each chapter.shots as shot, si (shot.src)}
							<img
								src={shot.src}
								alt={shot.alt}
								loading={ci === 0 && si === 0 ? 'eager' : 'lazy'}
								decoding="async"
								class="shot absolute inset-0 size-full object-contain"
								class:on={(active[chapter.id] ?? 0) === si}
							/>
						{/each}
					</div>
				</div>

				<div>
					<div class="flex flex-col justify-center pt-24 pb-10 lg:min-h-[60svh] lg:pt-0 lg:pb-0">
						<p class="mb-3 text-sm font-semibold uppercase text-cream/60">{chapter.when}</p>
						<h2 class="mb-5 text-3xl text-cream sm:text-4xl">{chapter.title}</h2>
						<p class="text-base leading-[190%] text-cream/80 md:text-lg">{chapter.body}</p>
					</div>
					{#each chapter.shots as shot, si (shot.src)}
						<div
							class="flex flex-col justify-center pb-12 lg:min-h-[80svh] lg:pb-0"
							use:step={{ chapter: chapter.id, index: si }}
						>
							<img
								src={shot.src}
								alt={shot.alt}
								loading="lazy"
								decoding="async"
								class="mb-4 aspect-video w-full border border-pewter/40 bg-black object-contain lg:hidden"
							/>
							<p
								class="border-l-2 border-carafe-light pl-4 text-base leading-[180%] text-cream/80 lg:text-lg"
							>
								{shot.text}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/each}

	<section class="chapter relative z-10 py-24 sm:py-32">
		<div class="container mx-auto grid gap-16 lg:grid-cols-3 lg:gap-12">
			<div>
				<p class="mb-3 text-sm font-semibold uppercase text-cream/60">Approach</p>
				<h2 class="mb-5 text-3xl text-cream">Fundamentals first</h2>
				<p class="leading-[190%] text-cream/80">
					A strong grounding in programming fundamentals makes new languages and frameworks quick to
					pick up. That is why my work spans web, mobile and backend rather than a single stack.
				</p>
			</div>
			<div>
				<p class="mb-3 text-sm font-semibold uppercase text-cream/60">AI</p>
				<h2 class="mb-5 text-3xl text-cream">AI on solid ground</h2>
				<p class="leading-[190%] text-cream/80">
					AI is most useful in the hands of someone who already understands the work. I use it to
					move faster, build my own tooling around it, and help clients get practical value from
					their AI tools.
				</p>
				<a
					href="/ai"
					class="mt-5 inline-flex min-h-11 items-center gap-2 text-cream underline underline-offset-4"
				>
					How I work with AI <ArrowRight class="size-4" />
				</a>
			</div>
			<div>
				<p class="mb-3 text-sm font-semibold uppercase text-cream/60">Now</p>
				<h2 class="mb-5 text-3xl text-cream">Currently exploring</h2>
				<p class="leading-[190%] text-cream/80">
					Low-level development and graphics programming, with C, Raylib and Rust.
				</p>
			</div>
		</div>

		<div
			class="container mx-auto mt-24 flex flex-col items-start gap-5 border-t border-pewter/30 pt-12"
		>
			<h2 class="text-2xl text-cream sm:text-3xl">Work with me</h2>
			<p class="max-w-xl leading-[180%] text-cream/70">
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
		</div>
	</section>

	<Footer />
</main>

<style>
	.chapter {
		background-color: var(--color-mblack);
		box-shadow: 0 -40px 60px -20px rgb(0 0 0 / 0.8);
	}

	.stage {
		background-color: #000;
		box-shadow: 0 30px 60px -20px rgb(0 0 0 / 0.7);
	}

	.shot {
		opacity: 0;
		transform: scale(1.03);
		transition:
			opacity 600ms ease,
			transform 1200ms ease;
	}

	.shot.on {
		opacity: 1;
		transform: scale(1);
	}

	@media (prefers-reduced-motion: reduce) {
		.shot {
			transition: none;
			transform: none;
		}
	}
</style>
