<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Boxx from '$lib/components/Boxx.svelte';
	import { reveal } from '$lib/utils/inView';
	import { Briefcase } from 'lucide-svelte';

	// The story is kept short on purpose: one line per turn, in Manuel's own order of events.
	const story = [
		{
			title: 'Before AI',
			body: 'I learned to code before any of this existed. No assistants and not much material either, mostly PDFs I had to dig through on my own. Tough as a kid, but it taught me how to learn.',
			mark: { text: 'PDFs' }
		},
		{
			title: 'First contact',
			body: 'GPT-3, while I was moving from React to Next.js. It invented imports and got the framework wrong. I decided AI could not code.',
			mark: { text: 'GPT-3' }
		},
		{
			title: 'University',
			body: 'It earned a place as a study partner. Pass in a textbook, talk it through, go back and forth. Good for digesting material, nothing more.',
			mark: { text: 'Study' }
		},
		{
			title: 'Early 2025',
			body: 'Cursor started building whole features from plain English. Work that took me hours, done in minutes. I had ignored it too long, so I did what I do with any new skill: went all in.',
			mark: { img: '/ai/cursor.svg', alt: 'Cursor' }
		},
		{
			title: 'Claude Code',
			body: 'Then Claude Code in the terminal. Default settings, nothing configured, just me and one agent going back and forth.',
			mark: { img: '/ai/claudecode-color.svg', alt: 'Claude Code' }
		},
		{
			title: 'Token efficiency',
			body: 'Next I worked on cost. Cheaper DeepSeek agents took the token-heavy jobs, Claude Code and Codex orchestrated them, and pipelines let the agents hand work to each other.',
			mark: { img: '/ai/deepseek-color.svg', alt: 'DeepSeek' }
		},
		{
			title: 'Process',
			body: "I learned the RPI framework (research, plan, implement), test-driven development and Matt Pocock's skills. My agents started following a process instead of improvising.",
			mark: { text: 'RPI' }
		},
		{
			title: 'Today',
			body: 'T3 Code handles the orchestration and automates most of my work. I rarely ask an agent to write code now. I ask it to build the tools and checks that let the next big job run for hours and come back right.',
			mark: { img: '/ai/t3code.webp', alt: 'T3 Code' }
		}
	];

	const mcpTools = [
		'Read my email',
		'Send email',
		'Automated emails',
		'Identity service lookups',
		'Speak out loud',
		'Snip and annotate'
	];
</script>

<svelte:head>
	<title>Building with AI · Manuel Diamond</title>
	<meta
		name="description"
		content="How Manuel Diamond went from AI sceptic to building the tools, checks and pipelines that let coding agents do most of his work."
	/>
</svelte:head>

<main>
	<Navbar />

	<!-- Intro: same composition as the home hero, so the page reads as part of the same site. -->
	<section
		id="top"
		class="relative z-10 flex min-h-[560px] h-[70vh] flex-col justify-center overflow-hidden bg-linear-to-tl from-black/0 to-black"
	>
		<div class="container mx-auto flex h-full items-center justify-between">
			<div class="relative z-10 max-sm:mt-16">
				<p class="mb-4 text-sm font-semibold uppercase text-pewter">Notes on my process</p>
				<h1 class="text-4xl font-medium text-cream sm:text-5xl">Building with AI</h1>
				<p class="mt-4 mb-10 text-base font-medium text-pewter lg:max-w-[520px]">
					I learned to code without it, ignored it for years, then went all in. Now I use AI to
					build the tools that make my work faster.
				</p>
				<div class="flex flex-col gap-2 sm:flex-row">
					<a href="#stack" class="pri-button">
						<span class="centered gap-2">See my AI stack</span>
					</a>
					<a href="/#projects" class="button">
						<span class="centered gap-2">
							Back to my work
							<Briefcase class="opacity-80" />
						</span>
					</a>
				</div>
			</div>
			<div
				class="relative right-0 top-12 -mb-30 flex aspect-square w-[34vw] min-w-[200px] max-w-[340px] rotate-45 select-none bg-mblack/40 shadow-lg shadow-black/50 max-sm:absolute max-sm:opacity-60"
			>
				<Boxx count={18} rotation={-45} tilt />
			</div>
		</div>
	</section>

	<!-- Story: the About layout from the home page, with a rail of marks for each turn. -->
	<section
		class="relative isolate overflow-hidden bg-linear-to-b from-transparent to-black/60 pt-24 pb-16"
	>
		<div
			aria-hidden="true"
			class="ai-word pointer-events-none absolute inset-x-0 top-10 -z-10 select-none"
		>
			AI
		</div>
		<div class="container mx-auto">
			<h2 class="mb-12 flex items-center justify-end gap-5 text-right text-3xl text-cream">
				How I got here
				<span class="diamond-bullet"></span>
			</h2>
			<ol class="relative mx-auto max-w-3xl">
				<span
					aria-hidden="true"
					class="absolute top-2 bottom-2 left-[27px] w-[3px] rounded-full bg-linear-to-b from-carafe/0 via-carafe-light to-carafe/0 sm:left-[35px]"
				></span>
				{#each story as step}
					<li class="story-step relative mb-12 flex gap-5 sm:gap-8" use:reveal={0.4}>
						<div
							class="neumorphic z-10 grid size-14 shrink-0 place-items-center text-xs font-bold uppercase text-cream/80 sm:size-[72px]"
						>
							{#if step.mark.img}
								<img
									src={step.mark.img}
									alt={step.mark.alt}
									class="size-8 object-contain sm:size-10"
								/>
							{:else}
								{step.mark.text}
							{/if}
						</div>
						<div class="pt-1">
							<p class="mb-2 text-base font-medium uppercase text-cream/50">{step.title}</p>
							<p class="text-base leading-[190%] text-cream/80 md:text-lg">{step.body}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Stack: the two agents I lean on get the big plates; OpenCode is the light-duty one. -->
	<section id="stack" class="scroll-m-16 py-20">
		<div class="container mx-auto">
			<h2 class="mb-3 flex items-center justify-end gap-5 text-right text-3xl text-cream">
				Current stack
				<span class="diamond-bullet"></span>
			</h2>
			<p class="mb-10 text-right text-pewter">The subscriptions I'm running right now.</p>

			<div class="grid gap-4 md:grid-cols-2">
				{#each [{ name: 'Claude Code', logo: '/ai/claudecode-color.svg', role: 'Coding agent' }, { name: 'Codex', logo: '/ai/codex-color.svg', role: 'Coding agent' }] as tool, i}
					<article
						class="stack-card relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-pewter/40 bg-black/30 p-6 shadow-lg shadow-black/40 sm:p-8"
						use:reveal={0.3}
						style="--delay: {i * 120}ms"
					>
						<img
							src={tool.logo}
							alt=""
							aria-hidden="true"
							class="pointer-events-none absolute -right-10 -bottom-12 size-64 rotate-[-12deg] opacity-[0.07]"
						/>
						<div class="neumorphic grid size-20 place-items-center">
							<img src={tool.logo} alt="{tool.name} logo" class="size-11" />
						</div>
						<div>
							<p class="text-sm font-semibold uppercase text-carafe-light">{tool.role}</p>
							<h3 class="text-3xl font-medium text-cream">{tool.name}</h3>
						</div>
					</article>
				{/each}
				<article
					class="stack-card flex flex-col gap-6 border border-pewter/40 bg-black/30 p-6 shadow-lg shadow-black/40 sm:flex-row sm:items-center sm:p-8 md:col-span-2"
					use:reveal={0.3}
					style="--delay: 240ms"
				>
					<div class="flex items-center gap-3">
						<div class="neumorphic grid size-16 place-items-center">
							<img src="/ai/opencode.svg" alt="OpenCode logo" class="size-8" />
						</div>
						<span class="text-pewter">+</span>
						<div class="neumorphic grid size-16 place-items-center">
							<img src="/ai/deepseek-color.svg" alt="DeepSeek logo" class="size-9" />
						</div>
					</div>
					<div>
						<h3 class="text-2xl font-medium text-cream">OpenCode with DeepSeek V4.1</h3>
						<p class="text-pewter">Backup for token-heavy jobs.</p>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- Manuel MCP: the tool hub. -->
	<section class="relative overflow-hidden bg-black/40 py-20">
		<div class="container mx-auto">
			<h2 class="mb-10 flex items-center justify-end gap-5 text-right text-3xl text-cream">
				Manuel MCP
				<span class="diamond-bullet"></span>
			</h2>

			<div class="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
				<div class="text-base leading-[190%] text-cream/80 md:text-lg">
					<p>
						When I learned about MCP, I saw how far a coding agent goes when you hand it scripts. So
						every task I repeat becomes a script on a local server, and any agent I run can use it.
					</p>
				</div>

				<div class="mcp-hub relative mx-auto aspect-square w-full max-w-[460px]" use:reveal={0.3}>
					<svg viewBox="0 0 100 100" class="absolute inset-0 h-full w-full" aria-hidden="true">
						{#each mcpTools as _, i}
							{@const a = (i / mcpTools.length) * Math.PI * 2 - Math.PI / 2}
							<line
								x1="50"
								y1="50"
								x2={50 + Math.cos(a) * 38}
								y2={50 + Math.sin(a) * 38}
								stroke="hsl(47.6 21.3% 42.2%)"
								stroke-width="0.4"
								stroke-dasharray="1.2 1.2"
							/>
						{/each}
					</svg>
					<div
						class="neumorphic absolute top-1/2 left-1/2 grid size-[30%] -translate-1/2 rotate-45 place-items-center border border-carafe-light/50"
					>
						<span class="-rotate-45 text-center text-xs font-bold uppercase text-cream sm:text-sm"
							>manuel<br />mcp</span
						>
					</div>
					<ul>
						{#each mcpTools as tool, i}
							{@const a = (i / mcpTools.length) * Math.PI * 2 - Math.PI / 2}
							<li
								class="mcp-chip absolute w-[34%] border border-pewter/50 bg-mblack px-2 py-2 text-center text-[11px] font-semibold text-cream/90 shadow-md shadow-black/60 sm:text-sm"
								style="left: {50 + Math.cos(a) * 38}%; top: {50 + Math.sin(a) * 38}%; --delay: {i *
									80}ms"
							>
								{tool}
							</li>
						{/each}
					</ul>
				</div>
			</div>

		</div>
	</section>

	<!-- Closing: why the work goes into systems, not prompts. -->
	<section class="py-20">
		<div class="container mx-auto">
			<h2 class="mb-10 flex items-center justify-end gap-5 text-right text-3xl text-cream">
				Why I build this way
				<span class="diamond-bullet"></span>
			</h2>
			<div class="ml-auto max-w-3xl text-base leading-[190%] text-cream/80 md:text-lg">
				<p class="mb-6">
					AI still loses context, makes things up and has no taste. Prompting harder doesn't fix
					that. Systems do: tools, checks and processes that catch the mistakes before I see them.
				</p>
				<p>
					I don't want to be the person in the middle, passing messages to a model all day. I build
					the systems that take that job away, so my time goes to the decisions that need a person.
				</p>
			</div>

			<div class="mt-16 flex flex-col gap-2 sm:flex-row sm:justify-end">
				<a href="/#projects" class="button">
					<span class="centered gap-2">See what I've built</span>
				</a>
				<a href="/#contact" class="pri-button">
					<span class="centered gap-2">Start a project with me</span>
				</a>
			</div>
		</div>
	</section>

	<Footer />
</main>

<style>
	.ai-word {
		font-weight: 900;
		font-size: clamp(10rem, 40vw, 30rem);
		line-height: 0.8;
		text-align: right;
		padding-right: 4vw;
		color: hsl(33.3 39.3% 95.1% / 0.035);
	}

	/* Motion is used to pace reading: each story step, card and chip arrives in order
	   as it scrolls in, and steps back out when it leaves. */
	.story-step,
	.stack-card,
	.mcp-chip {
		opacity: 0;
		translate: 0 18px;
		transition:
			opacity 0.45s ease,
			translate 0.45s ease;
	}
	:global(.story-step.is-in),
	:global(.stack-card.is-in),
	:global(.mcp-hub.is-in) .mcp-chip {
		opacity: 1;
		translate: 0 0;
		transition:
			opacity 0.7s ease var(--delay, 0ms),
			translate 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
	}
	.mcp-chip {
		translate: -50% calc(-50% + 18px);
	}
	:global(.mcp-hub.is-in) .mcp-chip {
		translate: -50% -50%;
	}
	@media (prefers-reduced-motion: reduce) {
		.story-step,
		.stack-card,
		.mcp-chip {
			opacity: 1;
			translate: 0 0;
			transition: none;
		}
		.mcp-chip {
			translate: -50% -50%;
		}
	}
</style>
