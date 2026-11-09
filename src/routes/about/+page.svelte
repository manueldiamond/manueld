<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ArrowLeft, ArrowRight, HandCoins, Mail, X, ZoomIn, ZoomOut } from 'lucide-svelte';
	import {
		SiAndroid,
		SiBlender,
		SiC,
		SiClaude,
		SiCloudflare,
		SiCss,
		SiDjango,
		SiExpo,
		SiFlutter,
		SiGodotengine,
		SiHtml5,
		SiJavascript,
		SiLaravel,
		SiNextdotjs,
		SiNodedotjs,
		SiOpenjdk,
		SiPython,
		SiRaylib,
		SiReact,
		SiRust,
		SiTypescript,
		SiYoutube
	} from '@icons-pack/svelte-simple-icons';
	import { contact } from '$lib/constants/contact';
	import { projects } from '$lib/constants/projects';
	import { prefersReducedMotion } from '$lib/utils/inView';

	type Card = { gallery: string[]; title?: string; note?: string; tags?: string[] };

	type Logo = { icon?: Component; word?: string; x: number; y: number; size: number };

	type Era = {
		id: string;
		years: string;
		title: string;
		text: string[];
		tags: string[];
		tint: string;
		logos: Logo[];
		rows: Card[][];
		link?: { href: string; label: string };
	};

	// One card per game; the gallery holds every frame for it.
	const game = (key: string, count: number, title?: string, note?: string): Card => ({
		gallery: Array.from({ length: count }, (_, i) => `/me/journey/g/${key}-${i + 1}.webp`),
		title,
		note
	});

	const tool = (title: string, note: string, images: string[]): Card => ({
		gallery: images,
		title,
		note
	});

	// Portfolio projects reuse the home page's screenshots, tags and galleries.
	const project = (name: string, note?: string): Card => {
		const found = projects.find((p) => p.name === name);

		if (!found) return { gallery: [], title: name };

		return {
			gallery: found.images,
			title: found.name,
			note: note ?? found.client.name,
			tags: found.tags.slice(0, 3)
		};
	};

	// Sources: the old APKs in Drive, the devlogs on YouTube, itch.io, GitHub history and the home page.
	const eras: Era[] = [
		{
			id: 'libgdx',
			years: '2016 to 2020',
			title: 'Java and libGDX',
			text: [
				'I taught myself to program by making video games in Java with libGDX, built for Android phones. Arcade games, physics toys and small puzzle rooms, most of them never named.'
			],
			tags: ['Java', 'libGDX', 'Android'],
			tint: 'hsl(28 26% 17%)',
			logos: [
				{ word: 'Java', x: 80, y: 22, size: 150 },
				{ icon: SiOpenjdk, x: 62, y: 72, size: 150 },
				{ icon: SiAndroid, x: 92, y: 66, size: 130 },
				{ word: 'libGDX', x: 46, y: 18, size: 64 }
			],
			rows: [
				[
					game('spree', 1, 'Spree', 'Arcade stacking game'),
					game('physics', 3, 'Physics game', 'Physics toy with levels'),
					game('reflect', 3, 'Reflect', 'Arcade shooter with two modes'),
					game('room', 3, 'Room', 'Puzzle prototype')
				]
			]
		},
		{
			id: 'godot',
			years: '2020 to 2022',
			title: 'Early Godot',
			text: [
				'I moved to Godot and started building bigger games. BRS, a robot duelling game, went through several versions in 2D and then 3D.',
				'I also wrote small Python servers while learning how multiplayer games work.'
			],
			tags: ['Godot', 'GDScript', 'Python', 'Blender'],
			tint: 'hsl(212 30% 16%)',
			logos: [
				{ icon: SiGodotengine, x: 82, y: 22, size: 180 },
				{ icon: SiPython, x: 62, y: 74, size: 120 },
				{ icon: SiBlender, x: 93, y: 68, size: 110 }
			],
			rows: [
				[
					game('brs', 5, 'BRS', 'Robot duelling game, five versions'),
					game('brs3d', 2, 'BRS 3D', 'The duel rebuilt in 3D'),
					game('epic', 8, 'Epic Platformer', 'High-speed 3D platformer with multiplayer'),
					game('shields', 5, 'Room', 'Remade in Godot with shields'),
					game('lasers', 6, 'Space combat', 'Lasers and turrets'),
					game('studies', 3, '3D studies', 'Light and materials')
				]
			]
		},
		{
			id: 'jams',
			years: '2021 to 2024',
			title: 'Game jams and devlogs',
			text: [
				'Game jams gave me deadlines: Ludum Dare 48 and 49, the Brackeys Game Jam, WOWIE 4.0 and Stop Waiting For Godot.',
				'I recorded a devlog for each one on YouTube, where the channel grew to 568 subscribers. The last series turned a one-hour jam game into a full shooter over three months.'
			],
			tags: ['Godot', 'Game jams', 'YouTube devlogs'],
			tint: 'hsl(355 26% 16%)',
			logos: [
				{ icon: SiYoutube, x: 80, y: 24, size: 190 },
				{ icon: SiGodotengine, x: 93, y: 70, size: 120 },
				{ icon: SiBlender, x: 64, y: 76, size: 100 }
			],
			rows: [
				[
					game('deepmine', 5, 'Deep Mine', 'Ludum Dare 48, made in 72 hours'),
					game('sug', 6, 'Super Unstable Game', 'Ludum Dare 49, ragdoll physics'),
					game('buttonhell', 7, 'Button Hell', 'Brackeys Game Jam, built in one week'),
					game('trash', 2, 'Trash Notifications', 'Stop Waiting For Godot jam'),
					game('aigame', 5, 'AI Game', 'WOWIE 4.0, train a robot to fight'),
					game('horror', 5, 'Horror game', 'Built in two weeks'),
					game('elden', 5),
					game('project2', 8, 'Project 2', 'A one-hour jam game grown into a shooter'),
					game('rig', 1)
				]
			]
		},
		{
			id: 'web',
			years: '2023',
			title: 'Into web development',
			text: [
				'I learned React and moved into web development. My first professional build was an internship project for FirstBank under ITANDT Solutions. I rebuilt BRS in React to learn it.'
			],
			tags: ['React', 'JavaScript', 'HTML', 'CSS'],
			tint: 'hsl(190 30% 14%)',
			logos: [
				{ icon: SiReact, x: 80, y: 24, size: 180 },
				{ icon: SiJavascript, x: 62, y: 74, size: 110 },
				{ icon: SiHtml5, x: 93, y: 66, size: 110 },
				{ icon: SiCss, x: 48, y: 22, size: 90 }
			],
			rows: [
				[
					project('FirstBank Online Money Transfer', 'Internship, ITANDT Solutions'),
					game('brsjs', 1, 'BRS.js', 'The duel game rebuilt in React'),
					game('polygons', 1, 'Pointless Polygons', 'An idle game in React and Redux')
				]
			]
		},
		{
			id: 'freelance',
			years: '2024 to 2025',
			title: 'Freelance',
			text: [
				'Freelance work for businesses: booking systems, management tools, websites and dashboards, built directly with the people who use them.'
			],
			tags: ['Next.js', 'TypeScript', 'React Native', 'Flutter', 'Django'],
			tint: 'hsl(42 18% 15%)',
			logos: [
				{ icon: SiNextdotjs, x: 80, y: 24, size: 170 },
				{ icon: SiTypescript, x: 62, y: 74, size: 110 },
				{ icon: SiReact, x: 93, y: 68, size: 110 },
				{ icon: SiFlutter, x: 48, y: 20, size: 90 },
				{ icon: SiDjango, x: 92, y: 30, size: 80 }
			],
			rows: [
				[
					project('Tasty Chef'),
					project('Curve Bookings'),
					project('Church Management System'),
					project('Logistics Management System'),
					project('Gift-Beneficiary System'),
					project('TE Sites Appointment Booking System'),
					project('Dental Website'),
					project('Vehiville Web (v1)')
				]
			]
		},
		{
			id: 'contract',
			years: '2025 to 2026',
			title: 'AI-driven rapid development',
			text: [
				'After graduating with a First Class BSc in Computer Science from Central University, Ghana, I joined my first company, then moved to contract work across several products.',
				'Projects no longer take forever. I run several coding agents in parallel and built my own tools around them: a screenshot app that hands annotated snips to agents, voice calls with my agents, and an MCP server that gives them email, identity and publishing tools.'
			],
			tags: ['TypeScript', 'Node.js', 'Expo', 'Laravel', 'Cloudflare', 'Swift', 'AI agents'],
			tint: 'hsl(18 28% 15%)',
			link: { href: '/ai', label: 'How I work with AI' },
			logos: [
				{ icon: SiClaude, x: 80, y: 22, size: 170 },
				{ icon: SiCloudflare, x: 62, y: 76, size: 110 },
				{ icon: SiExpo, x: 93, y: 66, size: 100 },
				{ icon: SiNodedotjs, x: 48, y: 20, size: 90 },
				{ icon: SiLaravel, x: 92, y: 30, size: 80 }
			],
			rows: [
				[
					project('Odadea 96 Network'),
					project('The Builders Circle'),
					project('BridgeX Mobile App'),
					project('BridgeX Admin Dashboard'),
					project('Curve Rentals App'),
					project('RS Notify'),
					project('AI powered Website Chatbot'),
					project('Enterprise Resource Planning System'),
					project('Vehiville Web (v2)'),
					project('AREF 2026 Admission Portal')
				],
				[
					tool('SnipCanvas', 'Native macOS snip and annotate, built for agents', [
						'/me/journey/tools/snipcanvas-1.webp',
						'/me/journey/tools/snipcanvas-2.webp'
					]),
					tool('Voice Call Agents', 'Phone calls with my coding agents, macOS and iOS', [
						'/me/journey/tools/voice-3.webp',
						'/me/journey/tools/voice-1.webp',
						'/me/journey/tools/voice-2.webp'
					]),
					tool('T3 Code', 'Several Claude and Codex accounts side by side', ['/ai/t3code.webp'])
				]
			]
		}
	];

	const watching = [
		{
			title: 'If you want 2026 to be the best year of your life, please watch this video',
			length: '7 hours 30 minutes',
			url: 'https://www.youtube.com/watch?v=vhOV_Od0A3M'
		},
		{
			title: 'The Ultimate Sales Training for 2026',
			length: '2 hours 34 minutes',
			url: 'https://www.youtube.com/watch?v=StVqS0jD7Ls'
		},
		{
			title: "If I Wanted To Grow An Audience In 2026, I'd Do This",
			length: '2 hours 40 minutes',
			url: 'https://www.youtube.com/watch?v=Jmkq5RLjm0U'
		}
	];

	// Scroll-driven carousels: each era pins while vertical scroll moves its rails sideways.
	let travel = $state<number[][]>(eras.map((e) => e.rows.map(() => 0)));

	let progress = $state<number[]>(eras.map(() => 0));

	let still = $state(false);

	const sections: HTMLElement[] = [];

	const rails: HTMLElement[][] = eras.map(() => []);

	const span = (i: number) => Math.max(0, ...travel[i]);

	onMount(() => {
		still = prefersReducedMotion();

		if (still) return;

		let frame = 0;

		const measure = () => {
			travel = rails.map((row) => row.map((rail) => Math.max(0, rail.scrollWidth - innerWidth)));
		};

		// Scroll sets a goal; the rails ease toward it every frame, so wheel steps and
		// trackpad flicks both glide instead of jumping.
		let goal = progress.slice();

		let last = 0;

		const read = () => {
			goal = sections.map((section, i) => {
				const box = section.getBoundingClientRect();

				return Math.min(1, Math.max(0, -box.top / Math.max(1, span(i))));
			});
		};

		const update = (now: number) => {
			const dt = last ? Math.min(64, now - last) : 16.7;
			const ease = 1 - Math.pow(0.78, dt / 16.7);
			let settled = true;

			last = now;
			read();

			progress = progress.map((p, i) => {
				const next = p + (goal[i] - p) * ease;

				if (Math.abs(goal[i] - next) * Math.max(1, span(i)) > 0.3) {
					settled = false;

					return next;
				}

				return goal[i];
			});

			frame = settled ? 0 : requestAnimationFrame(update);

			if (settled) last = 0;
		};

		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};

		const onResize = () => {
			measure();
			onScroll();
		};

		measure();
		read();
		progress = goal;
		addEventListener('scroll', onScroll, { passive: true });
		addEventListener('resize', onResize);

		return () => {
			removeEventListener('scroll', onScroll);
			removeEventListener('resize', onResize);
			cancelAnimationFrame(frame);
		};
	});

	// Rails alternate direction, so neighbouring rows and eras slide past each other.
	const railX = (i: number, r: number) => {
		const p = progress[i];
		const distance = travel[i][r];

		return (i + r) % 2 ? -(1 - p) * distance : -p * distance;
	};

	// Logos drift in from the side over the first third of the pin.
	const logoX = (i: number) => {
		const enter = Math.min(1, progress[i] * 3);

		return (1 - enter) * (i % 2 ? -1 : 1) * 30;
	};

	// Full screen viewer with zoom and pan.
	let viewer = $state<{ images: string[]; index: number; title?: string } | null>(null);

	let zoom = $state(1);

	let pan = $state({ x: 0, y: 0 });

	let dragging = $state(false);

	let drag = { x: 0, y: 0, px: 0, py: 0 };

	const open = (card: Card) => {
		viewer = { images: card.gallery, index: 0, title: card.title };
		zoom = 1;
		pan = { x: 0, y: 0 };
	};

	const close = () => (viewer = null);

	const step = (by: number) => {
		if (!viewer) return;

		const count = viewer.images.length;

		viewer = { ...viewer, index: (viewer.index + by + count) % count };
		zoom = 1;
		pan = { x: 0, y: 0 };
	};

	const setZoom = (next: number) => {
		zoom = Math.min(4, Math.max(1, next));

		if (zoom === 1) pan = { x: 0, y: 0 };
	};

	const onKey = (e: KeyboardEvent) => {
		if (!viewer) return;

		if (e.key === 'Escape') close();

		if (e.key === 'ArrowRight') step(1);

		if (e.key === 'ArrowLeft') step(-1);
	};

	const onWheel = (e: WheelEvent) => {
		e.preventDefault();
		setZoom(zoom * (e.deltaY < 0 ? 1.15 : 0.87));
	};

	const onDown = (e: PointerEvent & { currentTarget: HTMLElement }) => {
		if (zoom === 1) return;

		dragging = true;
		drag = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
		e.currentTarget.setPointerCapture(e.pointerId);
	};

	const onMove = (e: PointerEvent) => {
		if (!dragging) return;

		pan = { x: drag.px + e.clientX - drag.x, y: drag.py + e.clientY - drag.y };
	};

	const onUp = () => (dragging = false);

	$effect(() => {
		document.body.style.overflow = viewer ? 'hidden' : '';
	});
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
	<title>About · Manuel Diamond</title>
	<meta
		name="description"
		content="Self-taught programmer with roots in game development: Java and libGDX from 2016, Godot, game jams and devlogs, then web development, freelance work and AI-driven development."
	/>
</svelte:head>

<main class="bg-mblack">
	<Navbar />

	<section class="container mx-auto flex min-h-[70svh] flex-col justify-center py-20">
		<h1 class="max-w-3xl text-4xl leading-tight font-medium text-cream sm:text-6xl">
			Self-taught programmer with roots in game development.
		</h1>
		<p class="mt-6 max-w-2xl leading-[180%] text-cream/70 sm:text-lg">
			I started making games in 2016, moved into web development in 2023, and now build with
			AI-driven development on contract.
		</p>
	</section>

	{#each eras as era, i (era.id)}
		<section
			bind:this={sections[i]}
			id={era.id}
			class="relative"
			style="--tint: {era.tint}"
			style:height={still || !span(i) ? 'auto' : `calc(100svh + ${span(i)}px)`}
		>
			<div
				class="era flex flex-col justify-center overflow-hidden py-14"
				class:sticky={!still}
				class:top-0={!still}
				class:min-h-svh={!still}
			>
				<!-- Backdrop: the home page's neumorphic diamonds with this era's tools, embossed. -->
				<div aria-hidden="true" class="pointer-events-none absolute inset-0">
					<div class="neumorphic diamond" style="left: 76%; top: 12%; width: 24vw;"></div>
					<div class="neumorphic diamond" style="left: 90%; top: 62%; width: 14vw;"></div>
					<div class="neumorphic diamond" style="left: 58%; top: 70%; width: 9vw;"></div>
					{#each era.logos as logo, li (li)}
						<div
							class="logo absolute"
							style="left: {logo.x}%; top: {logo.y}%; transform: translate(-50%, -50%) translateX({logoX(
								i
							) *
								(1 + li * 0.3)}vw);"
						>
							{#if logo.icon}
								<logo.icon size={logo.size} />
							{:else}
								<span class="font-black" style="font-size: {logo.size}px">{logo.word}</span>
							{/if}
						</div>
					{/each}
				</div>

				<div class="relative container mx-auto">
					<p class="years text-cream/90">{era.years}</p>
					<h2 class="mt-2 max-w-3xl text-2xl text-cream sm:text-4xl">{era.title}</h2>
					<div class="mt-4 max-w-2xl space-y-3">
						{#each era.text as paragraph}
							<p class="text-sm leading-[180%] text-cream/80 sm:text-base md:text-lg">
								{paragraph}
							</p>
						{/each}
					</div>
					<div class="mt-4 flex flex-wrap items-center gap-2">
						{#each era.tags as tag}
							<span class="border border-cream/20 px-2 py-1 text-xs text-cream/70">{tag}</span>
						{/each}
						{#if era.link}
							<a
								href={era.link.href}
								class="ml-2 inline-flex min-h-11 items-center gap-2 text-sm text-cream underline underline-offset-4"
							>
								{era.link.label}
								<ArrowRight class="size-4" />
							</a>
						{/if}
					</div>
				</div>

				{#each era.rows as row, r (r)}
					<div class="relative mt-6" class:overflow-x-auto={still}>
						<ul
							bind:this={rails[i][r]}
							class="rail flex w-max gap-5"
							style:transform={still ? undefined : `translate3d(${railX(i, r)}px, 0, 0)`}
						>
							{#each row.filter((c) => c.gallery.length) as card, ci (`${card.gallery[0]}-${ci}`)}
								<li class="w-[85vw] shrink-0 sm:w-[475px] lg:w-[550px]">
									<button
										type="button"
										class="glass block w-full p-2.5 text-left"
										onclick={() => open(card)}
										aria-label={card.title ? `Open ${card.title}` : 'Open images'}
									>
										<div class="relative aspect-video overflow-hidden bg-black">
											<img
												src={card.gallery[0]}
												alt={card.title ? `${card.title}${card.note ? `, ${card.note}` : ''}` : ''}
												loading="lazy"
												decoding="async"
												class="size-full object-contain"
											/>
											{#if card.gallery.length > 1}
												<span
													class="absolute right-2 bottom-2 bg-black/70 px-2 py-0.5 text-xs text-cream"
												>
													{card.gallery.length} images
												</span>
											{/if}
										</div>
										{#if card.title || card.note || card.tags}
											<div class="px-1 pt-3 pb-1">
												{#if card.title}
													<p class="text-cream">{card.title}</p>
												{/if}
												{#if card.note}
													<p class="text-sm text-cream/60">{card.note}</p>
												{/if}
												{#if card.tags}
													<p class="mt-1 text-xs text-cream/50">{card.tags.join(', ')}</p>
												{/if}
											</div>
										{/if}
									</button>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>
	{/each}

	<!-- Now: one centred card, not another era. -->
	<section class="relative overflow-hidden py-24 sm:py-32">
		<div
			aria-hidden="true"
			class="emboss pointer-events-none absolute inset-0 flex items-center justify-center gap-[14vw]"
		>
			<SiRaylib size={260} />
			<SiRust size={220} />
			<SiC size={200} />
		</div>
		<div class="relative container mx-auto">
			<div class="glass mx-auto max-w-3xl p-8 sm:p-12">
				<p class="text-sm text-cream/60">Now</p>
				<h2 class="mt-2 text-3xl text-cream sm:text-4xl">Strengthening the fundamentals</h2>
				<p class="mt-5 leading-[190%] text-cream/80 md:text-lg">
					I am learning C, Raylib and Rust, and going deeper on back-end development, system design
					and architecture. Raylib brings me back to game development from a lower level. I hope to
					release one or two games next year, and a product of my own.
				</p>
				<p class="mt-4 leading-[190%] text-cream/80 md:text-lg">
					I use AI to build faster. It is still more fun to be competent, so I keep digging into the
					code and learning what I don't know yet.
				</p>
				<div class="mt-8 flex items-center gap-5 text-cream/70">
					<SiRaylib size={28} title="Raylib" />
					<SiC size={28} title="C" />
					<SiRust size={28} title="Rust" />
				</div>
			</div>
		</div>
	</section>

	<!-- Business: the other half of the plan. -->
	<section class="relative overflow-hidden py-24 sm:py-32" style="--tint: hsl(45 22% 14%)">
		<div class="era absolute inset-0"></div>
		<div aria-hidden="true" class="emboss pointer-events-none absolute top-6 -right-10">
			<HandCoins size={440} strokeWidth={1} />
		</div>
		<div
			class="relative container mx-auto grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
		>
			<div>
				<p class="text-sm text-cream/60">Business</p>
				<h2 class="mt-2 text-3xl text-cream sm:text-4xl">Building things people pay for</h2>
				<p class="mt-5 leading-[190%] text-cream/80 md:text-lg">
					Moving from game development to web development was a financial decision. Now I want both
					to pay: services for clients, games for players and products of my own. If people will
					pay for something, it is useful to them.
				</p>
				<p class="mt-4 leading-[190%] text-cream/80 md:text-lg">
					So I am learning how businesses create value: offers, sales and the decisions behind them.
					I spend a lot of time with long-form talks from people who learned it the hard way.
				</p>
			</div>
			<ul class="space-y-3 self-end">
				{#each watching as video}
					<li>
						<a
							href={video.url}
							target="_blank"
							rel="noopener"
							class="glass flex min-h-11 items-start gap-3 p-4 text-cream transition-colors hover:bg-cream hover:text-mblack"
						>
							<SiYoutube size={20} class="mt-0.5 shrink-0" />
							<span>
								<span class="block">{video.title}</span>
								<span class="text-sm opacity-60">Alex Hormozi, {video.length}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section
		class="container mx-auto flex flex-col items-start gap-5 border-t border-pewter/30 py-20"
	>
		<h2 class="text-3xl text-cream sm:text-4xl">Work with me</h2>
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

{#if viewer}
	<div
		class="fixed inset-0 z-[100] flex flex-col bg-black"
		role="dialog"
		data-lenis-prevent
		aria-modal="true"
		aria-label={viewer.title ?? 'Image viewer'}
	>
		<div class="flex items-center justify-between gap-4 p-3 text-cream">
			<p class="truncate text-sm">
				{viewer.title ?? ''}
				{#if viewer.images.length > 1}
					<span class="text-cream/50">{viewer.index + 1} / {viewer.images.length}</span>
				{/if}
			</p>
			<div class="flex gap-2">
				<button type="button" class="tool" aria-label="Zoom out" onclick={() => setZoom(zoom / 1.5)}>
					<ZoomOut class="size-5" />
				</button>
				<button type="button" class="tool" aria-label="Zoom in" onclick={() => setZoom(zoom * 1.5)}>
					<ZoomIn class="size-5" />
				</button>
				<button type="button" class="tool" aria-label="Close" onclick={close}>
					<X class="size-5" />
				</button>
			</div>
		</div>

		<div
			class="relative flex flex-1 touch-none items-center justify-center overflow-hidden"
			class:cursor-grab={zoom > 1}
			onwheel={onWheel}
			onpointerdown={onDown}
			onpointermove={onMove}
			onpointerup={onUp}
			ondblclick={() => setZoom(zoom > 1 ? 1 : 2)}
			role="presentation"
		>
			<img
				src={viewer.images[viewer.index]}
				alt={viewer.title ?? ''}
				draggable="false"
				class="max-h-full max-w-full object-contain select-none"
				style="transform: translate({pan.x}px, {pan.y}px) scale({zoom}); transition: {dragging
					? 'none'
					: 'transform 150ms ease'};"
			/>
		</div>

		{#if viewer.images.length > 1}
			<div class="flex justify-center gap-2 p-3">
				<button type="button" class="tool" aria-label="Previous image" onclick={() => step(-1)}>
					<ArrowLeft class="size-5" />
				</button>
				<button type="button" class="tool" aria-label="Next image" onclick={() => step(1)}>
					<ArrowRight class="size-5" />
				</button>
			</div>
		{/if}
	</div>
{/if}

<style>
	.years {
		font-weight: 300;
		font-size: clamp(2.6rem, 7vw, 6rem);
		line-height: 0.95;
		letter-spacing: -0.03em;
		font-variant-numeric: tabular-nums;
	}

	/* Each era gets its own tint, fading into the site's base colour. */
	.era {
		background:
			radial-gradient(ellipse at 80% 15%, var(--tint), transparent 65%),
			radial-gradient(ellipse at 10% 90%, var(--tint), transparent 55%), var(--color-mblack);
	}

	.diamond {
		position: absolute;
		aspect-ratio: 1;
		transform: translate(-50%, -50%) rotate(45deg);
		background: transparent;
		opacity: 0.55;
	}

	/* Logos are pressed into the background rather than printed on it. */
	.logo,
	.emboss {
		color: hsl(33.3 39.3% 95.1% / 0.035);
		filter: drop-shadow(10px 10px 16px rgb(0 0 0 / 0.45)) drop-shadow(-6px -6px 12px rgb(255 255 255 / 0.03));
	}

	.logo {
		transition: transform 80ms linear;
	}

	.glass {
		/* A sheen instead of backdrop blur: blur on dozens of moving cards drops frames. */
		background: linear-gradient(
			150deg,
			hsl(33.3 39.3% 95.1% / 0.09),
			hsl(33.3 39.3% 95.1% / 0.03) 45%,
			hsl(33.3 39.3% 95.1% / 0.05)
		);
		border: 1px solid hsl(33.3 39.3% 95.1% / 0.14);
		box-shadow: 0 20px 50px -20px rgb(0 0 0 / 0.7);
	}

	.rail {
		padding-inline: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
		will-change: transform;
	}

	.tool {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 1px solid hsl(33.3 39.3% 95.1% / 0.5);
		color: var(--color-cream);
	}

	.tool:hover {
		background: var(--color-cream);
		color: var(--color-mblack);
	}

	.tool:focus-visible,
	button:focus-visible {
		outline: 2px solid var(--color-cream);
		outline-offset: 2px;
	}
</style>
