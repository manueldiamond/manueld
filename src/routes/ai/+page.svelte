<script lang="ts">
	import '@fontsource/fira-code/400.css';
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
			title: 'Today',
			body: 'A local MCP server, a small software factory that automates most of my work, custom tools around my workflow, and voice agents.',
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

	const skills = [
		{ name: 'RPI', note: 'Research, plan, implement' },
		{ name: 'TDD', note: 'Tests first, then code' },
		{ name: "Matt Pocock's skills", note: '' },
		{ name: 'My own skills', note: 'Written as the work repeats' }
	];

	const subs = [
		{ name: 'Claude Code', logo: '/ai/claudecode-color.svg', role: 'Several subscriptions' },
		{ name: 'Codex', logo: '/ai/codex-color.svg', role: 'Several subscriptions' },
		{ name: 'OpenCode', logo: '/ai/opencode.svg', role: 'Backup for token-heavy jobs' }
	];

	const loop = [
		'I ask an agent to do the job',
		'Slower, more tokens, but it gets done',
		'The job comes back again',
		'It becomes a tool in the MCP'
	];
</script>

<svelte:head>
	<title>Building with AI · Manuel Diamond</title>
	<meta
		name="description"
		content="How Manuel Diamond went from AI sceptic to building with Claude Code, Codex, OpenCode, a personal MCP server and T3 Code."
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
					I learned to code without it, ignored it for years, then went all in. This is how I build
					now.
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

	<!-- Manuel MCP: the tool hub, then the loop that keeps growing it. -->
	<section class="relative overflow-hidden bg-black/40 py-20">
		<div class="container mx-auto">
			<h2 class="mb-10 flex items-center justify-end gap-5 text-right text-3xl text-cream">
				Manuel MCP
				<span class="diamond-bullet"></span>
			</h2>

			<div class="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
				<div class="text-base leading-[190%] text-cream/80 md:text-lg">
					<p class="mb-6">
						A local MCP server holding the repeatable jobs I ask my agents to do. I built it because
						I needed it, not for anyone else.
					</p>
					<p class="text-pewter">
						Most of it exists as skills too. The MCP wins because any coding agent picks it up,
						whatever the model or the agent.
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

			<h3 class="mt-20 mb-6 text-sm font-semibold uppercase text-cream/50">How it grows</h3>
			<ol class="loop grid gap-3 sm:grid-cols-2 lg:grid-cols-4" use:reveal={0.3}>
				{#each loop as step, i}
					<li
						class="loop-step relative flex min-h-24 items-center gap-4 border border-pewter/35 bg-mblack/70 p-4 text-cream/85"
						style="--delay: {i * 110}ms"
					>
						<span class="diamond-bullet shrink-0 scale-75"></span>
						<span>{step}</span>
					</li>
				{/each}
			</ol>
			<p class="mt-4 text-sm text-pewter">
				Then the next job starts the loop again, and the server keeps getting bigger.
			</p>
		</div>
	</section>

	<!-- Setup timeline: three eras left to right, the current one given the most room. -->
	<section class="py-20">
		<div class="container mx-auto">
			<h2 class="mb-3 flex items-center justify-end gap-5 text-right text-3xl text-cream">
				How my setup evolved
				<span class="diamond-bullet"></span>
			</h2>
			<p class="mb-12 text-right text-pewter">From a bare terminal to a bench of agents.</p>

			<ol
				class="setup relative grid gap-10 lg:grid-cols-[1fr_1fr_1.35fr] lg:gap-6"
				use:reveal={0.2}
			>
				<span
					aria-hidden="true"
					class="absolute top-[11px] right-0 left-0 h-[3px] rounded-full bg-linear-to-r from-carafe/0 via-carafe-light to-carafe-light max-lg:hidden"
				></span>
				<span
					aria-hidden="true"
					class="absolute top-0 bottom-0 left-[9px] w-[3px] rounded-full bg-linear-to-b from-carafe/0 via-carafe-light to-carafe/0 lg:hidden"
				></span>

				<li class="setup-step relative flex flex-col gap-4 pl-10 lg:pl-0" style="--delay: 0ms">
					<span class="setup-node" aria-hidden="true"></span>
					<p class="text-sm font-semibold uppercase text-cream/50 lg:mt-9">Then · The CLI</p>
					<figure
						class="flex flex-1 flex-col border border-pewter/40 bg-black/50 shadow-lg shadow-black/40"
					>
						<div
							class="flex items-center gap-3 border-b border-pewter/30 px-4 py-2 text-xs font-semibold text-cream/60"
						>
							<img src="/ai/claudecode-color.svg" alt="" class="size-4" />
							<span>Claude Code</span>
						</div>
						<pre
							class="terminal flex-1 overflow-x-auto p-4 text-[12px] leading-6 text-cream/80 sm:text-[13px]"><span
								class="text-pewter">~ $</span
							> claude
<span class="text-pewter">  no CLAUDE.md</span>
<span class="text-pewter">  no skills</span>
<span class="text-pewter">  default everything</span>

<span class="text-carafe-light">&gt;</span> build the booking page
<span class="text-pewter">  Writing BookingPage.tsx</span>
<span class="text-carafe-light">&gt;</span> no, use the existing form
<span class="text-pewter">  Rewriting BookingPage.tsx</span>
<span class="text-carafe-light">&gt;</span> still wrong, start again
<span class="text-pewter">  ...</span></pre>
						<figcaption class="border-t border-pewter/30 p-4 text-cream/80">
							Claude Code in a bare terminal. Default settings, no skills, nothing configured.
						</figcaption>
					</figure>
				</li>

				<li class="setup-step relative flex flex-col gap-4 pl-10 lg:pl-0" style="--delay: 160ms">
					<span class="setup-node" aria-hidden="true"></span>
					<p class="text-sm font-semibold uppercase text-cream/50 lg:mt-9">Next · Skills</p>
					<div
						class="flex flex-1 flex-col gap-4 border border-pewter/40 bg-black/30 p-4 shadow-lg shadow-black/40"
					>
						<ul class="grid gap-2">
							{#each skills as skill}
								<li
									class="flex items-center gap-3 border border-pewter/30 bg-mblack/80 px-3 py-2.5"
								>
									<span class="diamond-bullet shrink-0 scale-50"></span>
									<span>
										<span class="block font-semibold text-cream">{skill.name}</span>
										{#if skill.note}<span class="block text-sm text-pewter">{skill.note}</span>{/if}
									</span>
								</li>
							{/each}
						</ul>
						<p class="mt-auto text-cream/80">
							Then I learned about skills. My agents started following a process instead of
							improvising.
						</p>
					</div>
				</li>

				<li class="setup-step relative flex flex-col gap-4 pl-10 lg:pl-0" style="--delay: 320ms">
					<span class="setup-node setup-node--now" aria-hidden="true"></span>
					<p class="text-sm font-semibold uppercase text-cream lg:mt-9">Now · T3 Code</p>
					<div
						class="neumorphic flex flex-1 flex-col gap-6 border border-carafe-light/50 p-5 sm:p-6"
					>
						<div class="flex items-center gap-4">
							<img
								src="/ai/t3code.webp"
								alt="T3 Code app icon"
								class="size-16 shrink-0 drop-shadow-xl drop-shadow-black sm:size-20"
							/>
							<div>
								<p class="text-2xl font-medium text-cream">T3 Code</p>
								<p class="text-pewter">Every agent, one window.</p>
							</div>
						</div>

						<ul class="grid gap-2 sm:grid-cols-3">
							{#each subs as sub}
								<li
									class="flex items-center gap-3 border border-pewter/35 bg-mblack/80 px-3 py-3 sm:flex-col sm:text-center"
								>
									<img src={sub.logo} alt="{sub.name} logo" class="size-8 shrink-0" />
									<span>
										<span class="block font-semibold text-cream">{sub.name}</span>
										<span class="block text-sm text-pewter">{sub.role}</span>
									</span>
								</li>
							{/each}
						</ul>

						<div class="flex flex-wrap gap-2">
							{#each ['Orchestrator v2', 'Automations', 'Manuel MCP', 'Voice agents'] as chip}
								<span
									class="border border-carafe-light/50 bg-carafe-light/15 px-3 py-1.5 text-sm font-semibold text-cream"
									>{chip}</span
								>
							{/each}
						</div>

						<p class="text-cream/80">
							Several Claude Code and Codex subscriptions run side by side, with OpenCode as the
							backup for token-heavy jobs. Orchestrator v2 coordinates them, and a lot of the
							routine runs as automations.
						</p>
					</div>
				</li>
			</ol>

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
	.terminal {
		font-family: 'Fira Code', monospace;
	}
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
	.mcp-chip,
	.loop-step,
	.setup-step {
		opacity: 0;
		translate: 0 18px;
		transition:
			opacity 0.45s ease,
			translate 0.45s ease;
	}
	:global(.story-step.is-in),
	:global(.stack-card.is-in),
	:global(.mcp-hub.is-in) .mcp-chip,
	:global(.loop.is-in) .loop-step,
	:global(.setup.is-in) .setup-step {
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
		.mcp-chip,
		.loop-step,
		.setup-step {
			opacity: 1;
			translate: 0 0;
			transition: none;
		}
		.mcp-chip {
			translate: -50% -50%;
		}
	}

	/* One diamond per era on the rail; the current era's is solid and lit. */
	.setup-node {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 18px;
		height: 18px;
		rotate: 45deg;
		background: var(--color-mblack);
		border: 2px solid var(--color-carafe-light);
	}
	@media (min-width: 1024px) {
		.setup-node {
			left: 0;
		}
	}
	.setup-node--now {
		background: var(--color-cream);
		border-color: var(--color-cream);
		box-shadow: 0 0 14px hsl(33.3 39.3% 95.1% / 0.45);
	}
</style>
