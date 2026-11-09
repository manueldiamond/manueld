<script lang="ts">
	import { onMount, tick, type Component } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		ArrowLeft,
		ArrowRight,
		Briefcase,
		HandCoins,
		Mail,
		X,
		ZoomIn,
		ZoomOut
	} from 'lucide-svelte';
	import Boxx from '$lib/components/Boxx.svelte';
	import { SiC, SiRaylib, SiRust, SiYoutube } from '@icons-pack/svelte-simple-icons';
	import { contact } from '$lib/constants/contact';
	import { projects } from '$lib/constants/projects';
	import { prefersReducedMotion } from '$lib/utils/inView';

	type Card = { gallery: string[]; title?: string; note?: string; tags?: string[] };

	type Era = {
		id: string;
		years: string;
		title: string;
		text: string[];
		tags: string[];
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

	// Every era gets two rails: half the sideways travel, so less time pinned.
	const dual = (rows: Card[][]) => {
		if (rows.length > 1) return rows;

		const cards = rows[0];
		const half = Math.ceil(cards.length / 2);

		return [cards.slice(0, half), cards.slice(half)];
	};

	// Sources: the old APKs in Drive, the devlogs on YouTube, itch.io, GitHub history and the home page.
	const eras: Era[] = (
		[
			{
				id: 'libgdx',
				years: '2016 to 2020',
				title: 'Java and libGDX',
				text: [
					'I taught myself to program by making video games in Java with libGDX, built for Android phones. Arcade games, physics toys and small puzzle rooms, most of them never named.'
				],
				tags: ['Java', 'libGDX', 'Android'],
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
				rows: [
					[
						project('FirstBank Online Money Transfer', 'Internship, ITANDT Solutions'),
						game('brsjs', 1, 'BRS.js', 'The duel game rebuilt in React'),
						game('polygons', 1, 'Pointless Polygons', 'An idle game in React and Redux'),
						{
							...game('linkedout', 1, 'Linked-out', 'A LinkedIn clone with a live feed'),
							tags: ['React', 'Redux Toolkit', 'Firebase']
						}
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
				rows: [
					[
						project('Tasty Chef'),
						project('Curve Bookings'),
						project('Church Management System'),
						project('Logistics Management System'),
						project('Gift-Beneficiary System'),
						project('TE Sites Appointment Booking System'),
						project('Dental Website'),
						project('Vehiville Web (v1)'),
						{
							...game(
								'chrysans',
								5,
								'Chrysans Decor',
								'Interior design and finishing company website'
							),
							tags: ['Next.js', 'Framer Motion']
						},
						{
							...game('carehms', 2, 'CareHMS', 'Hospital patient registration'),
							tags: ['Next.js', 'React Hook Form', 'Zod']
						}
					]
				]
			},
			{
				id: 'contract',
				years: '2025 to 2026',
				title: 'Faster, without cutting corners',
				text: [
					'After graduating with a First Class BSc in Computer Science from Central University, Ghana, I joined my first company, then moved to contract work across several products.',
					'I spend a lot of time learning where AI tools save real time and where they cost it. The goal is balance: shipping sooner while keeping the quality and value the client is paying for. Along the way I built tools for my own workflow, including a screenshot and annotation app for macOS and a voice app for macOS and iOS.'
				],
				tags: ['TypeScript', 'Node.js', 'Expo', 'Laravel', 'Cloudflare', 'Swift'],
				link: { href: '/ai', label: 'My development workflow' },
				rows: [
					[
						{
							...game(
								'pm',
								9,
								'Project Management App',
								'Go-live tracker, Kanban board, sprints, dependencies and charts'
							),
							tags: ['React', 'NestJS', 'Cloudflare Workers', 'D1']
						},
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
						tool('SnipCanvas', 'Native macOS screenshot and annotation app', [
							'/me/journey/tools/snipcanvas-1.webp',
							'/me/journey/tools/snipcanvas-2.webp'
						]),
						tool('Voice Call Agents', 'Voice app for my development workflow, macOS and iOS', [
							'/me/journey/tools/voice-call.webp',
							'/me/journey/tools/voice-3.webp',
							'/me/journey/tools/voice-1.webp',
							'/me/journey/tools/voice-2.webp'
						])
					]
				]
			}
		] satisfies Era[]
	).map((era) => ({ ...era, rows: dual(era.rows) }));

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

	const heads: HTMLElement[] = [];

	let remeasure = () => {};

	const span = (i: number) => Math.max(0, ...travel[i]);

	onMount(() => {
		still = prefersReducedMotion();

		if (still) return;

		let frame = 0;

		const measure = () => {
			// Size cards so both rails and the heading fit one screen.
			sections.forEach((section, i) => {
				const beside = innerWidth >= 1024;
				const room = innerHeight - 160 - (beside ? 0 : heads[i].offsetHeight + 32) - 32;
				const image = room / 2 - 110;
				const width = Math.min(560, innerWidth * 0.85, Math.max(260, (image * 16) / 9 + 20));

				section.style.setProperty('--card-w', `${Math.round(width)}px`);
			});

			travel = rails.map((row) =>
				row.map((rail) =>
					Math.max(0, rail.scrollWidth - (rail.parentElement?.clientWidth ?? innerWidth))
				)
			);
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

		remeasure = () => {
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

	// Both rails slide the same way as the page scrolls.
	const railX = (i: number, r: number) => {
		const p = progress[i];
		const distance = travel[i][r];

		return -p * distance;
	};

	// Full screen viewer with zoom and pan.
	let viewer = $state<{ images: string[]; index: number; title?: string } | null>(null);

	let zoom = $state(1);

	let pan = $state({ x: 0, y: 0 });

	let dragging = $state(false);

	let drag = { x: 0, y: 0, px: 0, py: 0 };

	const openAt = (card: Card, index: number) => {
		viewer = { images: card.gallery, index, title: card.title };
		zoom = 1;
		pan = { x: 0, y: 0 };
	};

	// A card with several images opens in place; a single image goes straight to the viewer.
	let expanded = $state<string | null>(null);

	const toggle = async (card: Card) => {
		if (card.gallery.length < 2) return openAt(card, 0);

		expanded = expanded === card.gallery[0] ? null : card.gallery[0];
		await tick();
		remeasure();
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
		content="Self-taught programmer with roots in game development: Java and libGDX from 2016, Godot, game jams and devlogs, then web development, freelance and contract work."
	/>
</svelte:head>

<main class="bg-mblack">
	<Navbar />

	<!-- Same layout as the home page hero: copy and actions on the left, the diamond stack on the right. -->
	<section
		class="relative z-10 flex h-[75vh] min-h-[600px] flex-col justify-center overflow-hidden bg-linear-to-tl from-black/0 to-black"
	>
		<div class="container mx-auto flex h-full items-center justify-between">
			<div class="relative z-10 max-sm:mt-20">
				<h1 class="text-5xl font-medium text-cream">About</h1>
				<p class="mt-4 mb-10 text-base font-medium text-pewter lg:max-w-[520px]">
					Self-taught programmer with roots in game development. I started making games in 2016,
					moved into web development in 2023, and now work on contract across several products.
				</p>
				<div class="flex flex-col gap-2 sm:flex-row">
					<a href="/#contact" class="pri-button">
						<div class="centered gap-2">
							Get in touch
							<ArrowRight />
						</div>
					</a>
					<a href="/#projects" class="button">
						<div class="centered gap-2">
							See my work
							<Briefcase class="opacity-80" />
						</div>
					</a>
				</div>
			</div>
			<div
				class="relative top-12 right-0 -mb-30 flex aspect-square w-[38vw] max-w-[380px] min-w-[200px] rotate-45 bg-mblack/40 shadow-lg shadow-black/50 backdrop-blur-sm select-none max-sm:absolute"
			>
				<Boxx count={24} tilt />
			</div>
		</div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-mblack"
		></div>
	</section>

	{#each eras as era, i (era.id)}
		<section
			bind:this={sections[i]}
			id={era.id}
			class="relative"
			style:height={still || !span(i) ? 'auto' : `calc(100svh + ${span(i)}px)`}
		>
			<div
				class="era flex flex-col justify-center overflow-hidden py-20"
				class:sticky={!still}
				class:top-0={!still}
				class:min-h-svh={!still}
			>
				<div class="stage relative">
					<div class="head relative container mx-auto" bind:this={heads[i]}>
						<p class="years text-cream/90">{era.years}</p>
						<h2 class="mt-8 flex items-center gap-5 text-2xl text-cream sm:text-3xl">
							<span class="diamond-bullet shrink-0"></span>
							{era.title}
						</h2>
						<div class="mt-10 max-w-2xl space-y-5">
							{#each era.text as paragraph}
								<p class="text-sm leading-[190%] text-cream/80 sm:text-base">
									{paragraph}
								</p>
							{/each}
						</div>
						<div class="mt-10 flex flex-wrap items-center gap-2">
							{#each era.tags as tag}
								<span class="bg-carafe-light/20 px-2 py-1 text-sm font-semibold text-carafe-light"
									>{tag}</span
								>
							{/each}
						</div>
						{#if era.link}
							<a href={era.link.href} class="button mt-8 inline-flex">
								<span class="centered gap-2">
									{era.link.label}
									<ArrowRight class="size-4" />
								</span>
							</a>
						{/if}
					</div>

					<!-- The home page's About bars: thin carafe lines with opposing gradients. -->
					<div
						aria-hidden="true"
						class="bars hidden gap-[6px] self-stretch drop-shadow-xl drop-shadow-black lg:flex"
					>
						{#each Array(7) as _, b (b)}
							<div
								class="h-full w-[3px] rounded-full {b % 2 === 0
									? 'bg-linear-to-b'
									: 'bg-linear-to-t'} from-carafe/80 via-carafe-light to-carafe/0"
							></div>
						{/each}
					</div>

					<div class="rails relative min-w-0">
						{#each era.rows as row, r (r)}
							<div class="relative mt-8 first:lg:mt-0" class:overflow-x-auto={still}>
								<ul
									bind:this={rails[i][r]}
									class="rail flex w-max items-stretch gap-4"
									style:transform={still ? undefined : `translate3d(${railX(i, r)}px, 0, 0)`}
								>
									{#each row.filter((c) => c.gallery.length) as card, ci (`${card.gallery[0]}-${ci}`)}
										{@const isOpen = expanded === card.gallery[0]}
										<li class="card flex shrink-0" class:open={isOpen}>
											<div
												class="frame flex w-full flex-col border border-pewter/40 bg-black/10 p-2.5 shadow-lg shadow-black/40 transition-colors hover:bg-black/20"
											>
												{#if isOpen}
													<!-- The card opens in place: every image, two rows, same height. -->
													<div class="shots grid grid-flow-col grid-rows-2 gap-1.5">
														{#each card.gallery as src, gi (src)}
															<button
																type="button"
																class="shot relative overflow-hidden bg-black"
																style="animation-delay: {gi * 40}ms"
																onclick={() => openAt(card, gi)}
																aria-label="View image {gi + 1} of {card.gallery.length}"
															>
																<img
																	{src}
																	alt=""
																	loading="lazy"
																	decoding="async"
																	class="size-full object-contain"
																/>
															</button>
														{/each}
													</div>
												{:else}
													<button
														type="button"
														class="relative block aspect-video overflow-hidden bg-black"
														onclick={() => toggle(card)}
														aria-label={card.gallery.length > 1
															? `Show all ${card.gallery.length} images${card.title ? ` of ${card.title}` : ''}`
															: `View ${card.title ?? 'image'}`}
													>
														<img
															src={card.gallery[0]}
															alt={card.title
																? `${card.title}${card.note ? `, ${card.note}` : ''}`
																: ''}
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
													</button>
												{/if}
												{#if card.title || card.note || card.tags || isOpen}
													<div class="flex items-start gap-3 px-1 pt-3 pb-1">
														<div class="min-w-0 flex-1">
															{#if card.title}
																<p class="font-medium text-cream/80">{card.title}</p>
															{/if}
															{#if card.note}
																<p class="text-sm text-pewter">{card.note}</p>
															{/if}
															{#if card.tags}
																<p class="mt-1 text-xs text-carafe-light">{card.tags.join(', ')}</p>
															{/if}
														</div>
														{#if isOpen}
															<button
																type="button"
																class="tool shrink-0"
																onclick={() => toggle(card)}
																aria-label="Close images"
															>
																<X size={18} />
															</button>
														{/if}
													</div>
												{/if}
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
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
			<div class="panel mx-auto max-w-3xl p-8 sm:p-12">
				<p class="text-sm text-cream/60">Now</p>
				<h2 class="mt-2 text-3xl text-cream sm:text-4xl">Strengthening the fundamentals</h2>
				<p class="mt-5 leading-[190%] text-cream/80 md:text-lg">
					I am learning C, Raylib and Rust, and going deeper on back-end development, system design
					and architecture. Raylib brings me back to game development from a lower level. I hope to
					release one or two games next year, and a product of my own.
				</p>
				<p class="mt-4 leading-[190%] text-cream/80 md:text-lg">
					New tools make me faster, but it is still more fun to be competent, so I keep digging into
					the code and learning what I don't know yet.
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
	<section class="era relative overflow-hidden py-24 sm:py-32">
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
					to pay: services for clients, games for players and products of my own. If people will pay
					for something, it is useful to them.
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
							class="button flex min-h-11 items-start gap-3 text-left"
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
			Web and mobile applications, and workflow automation. Currently open to new work.
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
				<button
					type="button"
					class="tool"
					aria-label="Zoom out"
					onclick={() => setZoom(zoom / 1.5)}
				>
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

	/* The home page About section's fade: base colour into near black. */
	.era {
		background:
			linear-gradient(to bottom, var(--color-mblack), rgb(0 0 0 / 0.55)), var(--color-mblack);
	}

	/* Logos are pressed into the background rather than printed on it. */
	.emboss {
		color: hsl(33.3 39.3% 95.1% / 0.035);
		filter: drop-shadow(10px 10px 16px rgb(0 0 0 / 0.45))
			drop-shadow(-6px -6px 12px rgb(255 255 255 / 0.03));
	}

	.card {
		width: var(--card-w, min(85vw, 550px));
	}

	.card.open {
		width: auto;
	}

	/* Two rows of 16:9 frames filling the closed card's image height. */
	.shots {
		--h: calc((var(--card-w, 550px) - 22px) * 9 / 16);
		height: var(--h);
		grid-auto-columns: calc((var(--h) - 6px) / 2 * 16 / 9);
	}

	.shot {
		animation: shot-in 360ms cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes shot-in {
		from {
			opacity: 0;
			transform: scale(0.94);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.shot {
			animation: none;
		}
	}

	/* The home page's contact panel. */
	.panel {
		border: 1px solid var(--color-pewter);
		background: hsl(47.6 21.3% 42.2% / 0.05);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.4);
		backdrop-filter: blur(12px);
	}

	.rail {
		padding-inline: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
		will-change: transform;
	}

	/* Desktop: heading on the left, both rails beside it, sliding out under a soft edge. */
	/* Desktop: heading on the left, both rails beside it. */
	@media (min-width: 1024px) {
		.stage {
			display: grid;
			grid-template-columns: minmax(320px, 400px) auto minmax(0, 1fr);
			align-items: center;
			column-gap: 3.5rem;
			padding-left: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
		}

		.head .years {
			font-size: clamp(2.2rem, 3.3vw, 3.2rem);
			white-space: nowrap;
		}

		.head {
			margin: 0;
			padding: 0;
			max-width: none;
		}

		.rails {
			overflow: hidden;
			mask-image: linear-gradient(to right, transparent, black 2rem);
		}

		.rail {
			padding-inline: 2rem;
		}
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
