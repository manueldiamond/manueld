<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		ArrowLeft,
		ArrowRight,
		HandCoins,
		Mail,
		Quote,
		X,
		ZoomIn,
		ZoomOut
	} from 'lucide-svelte';
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
		SiSvelte,
		SiTailwindcss,
		SiTypescript,
		SiWordpress,
		SiYoutube
	} from '@icons-pack/svelte-simple-icons';
	import { contact } from '$lib/constants/contact';
	import { projects } from '$lib/constants/projects';
	import { prefersReducedMotion } from '$lib/utils/inView';

	type Card = { src: string; title?: string; note?: string; tags?: string[]; gallery?: string[] };

	type Logo = { icon?: Component; word?: string; x: number; y: number; size: number };

	type Era = {
		id: string;
		years: string;
		title: string;
		text: string[];
		tags: string[];
		logos: Logo[];
		cards: Card[];
	};

	const shot = (name: string, title?: string, note?: string): Card => ({
		src: `/me/journey/${name}.webp`,
		title,
		note
	});

	// Portfolio projects reuse the home page's screenshots, tags and galleries.
	const project = (name: string, note?: string): Card => {
		const found = projects.find((p) => p.name === name);

		if (!found || !found.images.length) return { src: '', title: name };

		return {
			src: found.images[0],
			title: found.name,
			note: note ?? found.client.name,
			tags: found.tags.slice(0, 3),
			gallery: found.images
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
			logos: [
				{ icon: SiOpenjdk, x: 82, y: 18, size: 88 },
				{ word: 'libGDX', x: 70, y: 70, size: 30 },
				{ icon: SiAndroid, x: 90, y: 52, size: 64 }
			],
			cards: [
				shot('spree', 'Spree', 'Arcade stacking game'),
				shot('physics-title', 'Physics game', 'Title screen'),
				shot('physics-1', 'Physics game', 'Gameplay'),
				shot('reflect-menu', 'Reflect', 'Mode select'),
				shot('reflect-play', 'Reflect', 'Gameplay'),
				shot('room-simple-1', 'Room', 'Puzzle prototype'),
				shot('room-simple-2', 'Room', 'Level two')
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
			logos: [
				{ icon: SiGodotengine, x: 84, y: 16, size: 92 },
				{ icon: SiPython, x: 72, y: 74, size: 60 },
				{ icon: SiBlender, x: 92, y: 60, size: 52 }
			],
			cards: [
				shot('brs-menu', 'BRS', 'Main menu'),
				shot('brs-2d-1', 'BRS', 'The 2D duel'),
				shot('brs-v7-shoot', 'BRS 7.1', 'Rounds, health and game speed'),
				shot('brs-3d-1', 'BRS 3D', 'Rebuilt in 3D'),
				shot('brs-3d-2', 'BRS 3D', 'Shatter effects'),
				shot('yt-epic-1', 'Epic Platformer', 'High-speed 3D platformer'),
				shot('yt-epic-mp-2', 'Epic Platformer', 'Multiplayer build'),
				shot('yt-remake-1', 'Room', 'Remade in Godot'),
				shot('tiles-2', 'Room', 'A busier remake with shields'),
				shot('yt-lasers-1', 'Space combat', 'Lasers and turrets'),
				shot('corridor-2', '3D study', 'Light and materials')
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
			logos: [
				{ icon: SiYoutube, x: 82, y: 20, size: 96 },
				{ icon: SiGodotengine, x: 92, y: 66, size: 58 },
				{ icon: SiBlender, x: 70, y: 76, size: 48 }
			],
			cards: [
				shot('yt-ld48-1', 'Deep Mine', 'Ludum Dare 48, made in 72 hours'),
				shot('yt-sug-2', 'Super Unstable Game', 'Ludum Dare 49, ragdoll physics'),
				shot('itch-button-hell', 'Button Hell', 'Brackeys Game Jam, built in one week'),
				shot('yt-trash', 'Trash Notifications', 'Stop Waiting For Godot jam'),
				shot('itch-ai-game-1', 'AI Game', 'WOWIE 4.0, train a robot to fight'),
				shot('yt-horror-1', 'Horror game', 'Built in two weeks'),
				shot('yt-elden-1'),
				shot('yt-shooter-2', 'Project 2', 'From a one-hour jam game'),
				shot('yt-shooter-4', 'Project 2', 'Unlockable weapons'),
				shot('robot-rig')
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
			logos: [
				{ icon: SiReact, x: 84, y: 18, size: 92 },
				{ icon: SiJavascript, x: 72, y: 72, size: 52 },
				{ icon: SiHtml5, x: 92, y: 60, size: 50 },
				{ icon: SiCss, x: 64, y: 28, size: 40 }
			],
			cards: [
				project('FirstBank Online Money Transfer', 'Internship, ITANDT Solutions'),
				shot('web-brsjs', 'BRS.js', 'The duel game rebuilt in React'),
				shot('web-polygons', 'Pointless Polygons', 'An idle game in React and Redux')
			]
		},
		{
			id: 'freelance',
			years: '2024 to 2025',
			title: 'Freelance',
			text: [
				'Freelance work for businesses: booking systems, management tools, websites and dashboards, built directly with the people who use them.'
			],
			tags: ['Next.js', 'TypeScript', 'Django', 'Flutter', 'WordPress'],
			logos: [
				{ icon: SiNextdotjs, x: 84, y: 18, size: 84 },
				{ icon: SiTypescript, x: 72, y: 72, size: 52 },
				{ icon: SiDjango, x: 92, y: 62, size: 50 },
				{ icon: SiFlutter, x: 64, y: 30, size: 44 },
				{ icon: SiWordpress, x: 90, y: 86, size: 40 }
			],
			cards: [
				project('Tasty Chef'),
				project('Curve Bookings'),
				project('Church Management System'),
				project('Logistics Management System'),
				project('Gift-Beneficiary System'),
				project('TE Sites Appointment Booking System'),
				project('Dental Website'),
				project('Vehiville Web (v1)')
			]
		},
		{
			id: 'contract',
			years: '2025 to 2026',
			title: 'Professional work and AI-driven development',
			text: [
				'After graduating with a First Class BSc in Computer Science from Central University, Ghana, I joined my first company.',
				'Since then I have taken on contract work across several products, with AI-driven development throughout. Agents write and research. I design, review and decide.'
			],
			tags: ['TypeScript', 'Node.js', 'Expo', 'Laravel', 'Cloudflare', 'AI agents'],
			logos: [
				{ icon: SiClaude, x: 84, y: 18, size: 84 },
				{ icon: SiCloudflare, x: 70, y: 74, size: 56 },
				{ icon: SiExpo, x: 92, y: 60, size: 46 },
				{ icon: SiNodedotjs, x: 64, y: 30, size: 44 },
				{ icon: SiLaravel, x: 90, y: 86, size: 40 },
				{ icon: SiSvelte, x: 58, y: 84, size: 36 },
				{ icon: SiTailwindcss, x: 76, y: 46, size: 36 }
			],
			cards: [
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

	// Scroll-driven carousels: each era pins while vertical scroll moves its rail sideways.
	let travel = $state<number[]>(eras.map(() => 0));

	let progress = $state<number[]>(eras.map(() => 0));

	let still = $state(false);

	const sections: HTMLElement[] = [];

	const rails: HTMLElement[] = [];

	onMount(() => {
		still = prefersReducedMotion();

		if (still) return;

		let frame = 0;

		const measure = () => {
			travel = rails.map((rail) => Math.max(0, rail.scrollWidth - innerWidth));
		};

		const update = () => {
			frame = 0;

			progress = sections.map((section, i) => {
				const box = section.getBoundingClientRect();
				const span = Math.max(1, travel[i]);

				return Math.min(1, Math.max(0, -box.top / span));
			});

			// Cards bend and soften as they reach either edge of the screen.
			for (const rail of rails) {
				for (const card of rail.querySelectorAll<HTMLElement>(':scope > li')) {
					const box = card.getBoundingClientRect();
					const centre = box.left + box.width / 2;
					const distance = Math.abs(centre - innerWidth / 2) - innerWidth * 0.32;
					const edge = Math.min(1, Math.max(0, distance / (innerWidth * 0.22)));
					const side = centre < innerWidth / 2 ? 1 : -1;

					card.style.transform = `perspective(900px) rotateY(${side * edge * 38}deg) scaleX(${1 - edge * 0.18})`;
					card.style.opacity = String(1 - edge * 0.55);
					card.style.filter = edge > 0.02 ? `blur(${(edge * 2.5).toFixed(2)}px)` : '';
				}
			}
		};

		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};

		const onResize = () => {
			measure();
			onScroll();
		};

		measure();
		update();
		addEventListener('scroll', onScroll, { passive: true });
		addEventListener('resize', onResize);

		return () => {
			removeEventListener('scroll', onScroll);
			removeEventListener('resize', onResize);
			cancelAnimationFrame(frame);
		};
	});

	const railX = (i: number) => {
		const p = progress[i];

		return i % 2 ? -(1 - p) * travel[i] : -p * travel[i];
	};

	// Logos slide in from the side the rail moves away from, over the first third of the pin.
	const logoX = (i: number) => {
		const enter = Math.min(1, progress[i] * 3);

		return (1 - enter) * (i % 2 ? -1 : 1) * 40;
	};

	// Full screen viewer with zoom and pan.
	let viewer = $state<{ images: string[]; index: number; title?: string } | null>(null);

	let zoom = $state(1);

	let pan = $state({ x: 0, y: 0 });

	let dragging = $state(false);

	let drag = { x: 0, y: 0, px: 0, py: 0 };

	const open = (card: Card, era: Era) => {
		const images = card.gallery ?? era.cards.filter((c) => c.src && !c.gallery).map((c) => c.src);

		viewer = { images, index: Math.max(0, images.indexOf(card.src)), title: card.title };
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
		content="Self-taught programmer with roots in game development: Java and libGDX from 2016, Godot, game jams and devlogs, then web development, freelance work and AI-driven contract work."
	/>
</svelte:head>

<main class="bg-mblack">
	<Navbar />

	<section class="container mx-auto flex min-h-[70svh] flex-col justify-center py-20">
		<h1 class="max-w-3xl text-4xl font-medium leading-tight text-cream sm:text-6xl">
			Self-taught programmer with roots in game development.
		</h1>
		<p class="mt-6 max-w-2xl leading-[180%] text-cream/70 sm:text-lg">
			I started making games in 2016, moved into web development in 2023, and now work on contract
			with AI-driven development.
		</p>
	</section>

	{#each eras as era, i (era.id)}
		<section
			bind:this={sections[i]}
			id={era.id}
			class="relative border-t border-pewter/20"
			style:height={still || !travel[i] ? 'auto' : `calc(100svh + ${travel[i]}px)`}
		>
			<div
				class="relative flex flex-col justify-center overflow-hidden py-16"
				class:sticky={!still}
				class:top-0={!still}
				class:h-svh={!still}
			>
				<!-- Backdrop: the home page's neumorphic diamonds with this era's tools. -->
				<div aria-hidden="true" class="pointer-events-none absolute inset-0">
					<div class="neumorphic diamond" style="left: 74%; top: 10%; width: 22vw;"></div>
					<div class="neumorphic diamond" style="left: 88%; top: 60%; width: 12vw;"></div>
					<div class="neumorphic diamond" style="left: 60%; top: 66%; width: 8vw;"></div>
					{#each era.logos as logo, li (li)}
						<div
							class="logo absolute text-cream/[0.09]"
							style="left: {logo.x}%; top: {logo.y}%; transform: translate(-50%, -50%) translateX({logoX(
								i
							) *
								(1 + li * 0.35)}vw);"
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
					<ul class="mt-4 flex flex-wrap gap-2">
						{#each era.tags as tag}
							<li class="border border-pewter/40 px-2 py-1 text-xs text-cream/70">{tag}</li>
						{/each}
					</ul>
				</div>

				<div class="relative mt-8" class:overflow-x-auto={still}>
					<ul
						bind:this={rails[i]}
						class="rail flex w-max gap-4"
						style:transform={still ? undefined : `translate3d(${railX(i)}px, 0, 0)`}
					>
						{#each era.cards.filter((c) => c.src) as card, ci (`${card.src}-${ci}`)}
							<li class="w-[72vw] shrink-0 sm:w-[380px] lg:w-[440px]">
								<button
									type="button"
									class="block w-full text-left"
									onclick={() => open(card, era)}
									aria-label={card.title ? `Open ${card.title}` : 'Open image'}
								>
									<div
										class="aspect-video overflow-hidden border border-pewter/40 bg-black shadow-xl shadow-black/50"
									>
										<img
											src={card.src}
											alt={card.title ? `${card.title}${card.note ? `, ${card.note}` : ''}` : ''}
											loading="lazy"
											decoding="async"
											class="size-full object-contain"
										/>
									</div>
								</button>
								{#if card.title}
									<p class="mt-3 text-cream">{card.title}</p>
								{/if}
								{#if card.note}
									<p class="text-sm text-cream/60">{card.note}</p>
								{/if}
								{#if card.tags}
									<p class="mt-1 text-xs text-cream/50">{card.tags.join(', ')}</p>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>
	{/each}

	<!-- Now: one centred card, not another era. -->
	<section class="relative overflow-hidden border-t border-pewter/20 py-24 sm:py-32">
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-0 flex items-center justify-center gap-[18vw] text-cream/[0.06]"
		>
			<SiRaylib size={160} />
			<SiRust size={140} />
			<SiC size={120} />
		</div>
		<div class="relative container mx-auto">
			<div class="neumorphic mx-auto max-w-3xl border border-pewter/30 p-8 sm:p-12">
				<p class="text-sm text-cream/60">Now</p>
				<h2 class="mt-2 text-3xl text-cream sm:text-4xl">Strengthening the fundamentals</h2>
				<p class="mt-5 leading-[190%] text-cream/80 md:text-lg">
					I am learning C, Raylib and Rust, and going deeper on back-end development, system design
					and architecture. Raylib brings me back to game development from a lower level. I hope to
					release one or two games next year, and a product of my own.
				</p>
				<figure class="mt-8 border-l-2 border-carafe-light pl-5">
					<Quote class="mb-2 size-5 text-cream/50" />
					<blockquote class="text-lg leading-[170%] text-cream sm:text-xl">
						I use AI to build faster. But it's more fun to be competent, so every now and then I dig
						into the code and learn something I didn't know. Right now, that's Raylib.
					</blockquote>
				</figure>
				<div class="mt-8 flex items-center gap-5 text-cream/70">
					<SiRaylib size={28} title="Raylib" />
					<SiC size={28} title="C" />
					<SiRust size={28} title="Rust" />
				</div>
			</div>
		</div>
	</section>

	<!-- Business: the other half of the plan. -->
	<section class="relative overflow-hidden border-t border-pewter/20 py-24 sm:py-32">
		<div aria-hidden="true" class="pointer-events-none absolute top-10 -right-10 text-cream/[0.05]">
			<HandCoins size={360} strokeWidth={1} />
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
							class="flex min-h-11 items-start gap-3 border border-pewter/30 bg-black/20 p-4 text-cream transition-colors hover:bg-cream hover:text-mblack"
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

	.diamond {
		position: absolute;
		aspect-ratio: 1;
		transform: translate(-50%, -50%) rotate(45deg);
		opacity: 0.6;
	}

	.rail {
		padding-inline: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
		will-change: transform;
	}

	.rail > li {
		transition: opacity 120ms linear;
	}

	.logo {
		transition: transform 80ms linear;
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
