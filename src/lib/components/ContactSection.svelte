<script>
	import { contactDetails } from '$lib/constants/contact';
	import { ArrowUp, Send, Check, LoaderCircle } from 'lucide-svelte';
	import Boxx from './Boxx.svelte';
	import Footer from './Footer.svelte';
	import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

	import {
		PUBLIC_EMAILJS_PUBLIC_KEY,
		PUBLIC_EMAILJS_SERVICE_ID,
		PUBLIC_EMAILJS_TEMPLATE_ID
	} from '$env/static/public';

	let name = $state('');

	let email = $state('');

	let message = $state('');

	let sending = $state(false);

	let sent = $state(false);

	let error = $state('');

	// Hidden field only bots fill in
	let website = $state('');

	async function handleSend() {
		if (!name.trim() || !email.trim() || !message.trim()) {
			error = 'Please fill in all fields.';

			return;
		}

		if (website) return;

		sending = true;
		sent = false;
		error = '';

		try {
			const templateParams = {
				title: `Contact Form Submission from ${name}`,
				name: name.trim(),
				email: email.trim(),
				time: new Date().toLocaleString(),
				message: message.trim()
			};

			await emailjs.send(
				PUBLIC_EMAILJS_SERVICE_ID,
				PUBLIC_EMAILJS_TEMPLATE_ID,
				templateParams,
				{
					publicKey: PUBLIC_EMAILJS_PUBLIC_KEY,
					blockHeadless: true,
					// One message per minute per browser
					limitRate: { id: 'contact-form', throttle: 60_000 }
				}
			);

			sent = true;
			name = '';
			email = '';
			message = '';
		} catch (e) {
			error =
				e instanceof EmailJSResponseStatus && e.status === 429
					? 'You just sent a message. Try again in a minute.'
					: 'Failed to send. Please try again.';
			console.error('EmailJS error:', e);
		} finally {
			sending = false;
		}
	}
</script>

<section id="contact" class="overflow-hidden pt-20">
	<div class="container mx-auto relative pointer-events-auto">
		<h3
			class="mb-10 text-cream text-3xl overflow-hidden text-right flex items-center justify-end gap-5"
		>
			Contact
			<div class="diamond-bullet"></div>
		</h3>
		<div class="flex flex-col gap-5 md:flex-row">
			<div
				class=" content-start max-sm:grid-rows-[auto_auto_auto_1fr_auto] grid-rows-[auto_auto_1fr_auto] grid grid-cols-1 sm:grid-cols-2 gap-3 border border-pewter p-5 max-sm:p-3 max-sm:gap-2.5 text-pewter shadow-lg shadow-black/40 bg-carafe-light/5! ---bg-linear-to-br from-carafe-light/5 via-carafe-light to-carafe/50 via-70% flex-2 md:max-w-[500px] max-md:text-sm backdrop-blur-md"
			>
				<p class="text-lg max-sm:text-base text-cream col-span-full">Send a message</p>
				<input
					required
					type="text"
					placeholder="Name"
					class="w-full input text-base"
					bind:value={name}
				/>
				<input
					required
					type="text"
					placeholder="Contact"
					class="w-full input text-base"
					bind:value={email}
				/>
				<input
					type="text"
					name="website"
					tabindex="-1"
					autocomplete="off"
					aria-hidden="true"
					class="hidden"
					bind:value={website}
				/>
				<textarea
					placeholder="Message"
					class=" col-span-full w-full min-h-32 max-sm:min-h-24 input text-base"
					bind:value={message}
				></textarea>
				{#if error}
					<p class="text-xs sm:text-sm text-red-300">{error}</p>
				{/if}
				<button
					class="col-span-full pri-button flex gap-2 centered"
					onclick={handleSend}
					disabled={sending}
				>
					{#if sending}
						Sending
						<LoaderCircle class="animate-spin" />
					{:else if sent}
						Sent!
						<Check />
					{:else}
						Send
						<Send />
					{/if}
				</button>
			</div>
			<div
				class="flex flex-col flex-1 border border-pewter text-cream sm:p-5 p-3 backdrop-blur-md shadow-lg shadow-black/40 relative overflow-hidden"
			>
				<p class="text-base sm:text-lg pb-5 max-sm:pb-2.5">Contact Details</p>
				<div class="grid grid-cols-2 lg:grid-cols-3 gap-3 max-sm:gap-2">
					{#each contactDetails as { url, icon: Icon, label, wide }}
						<a
							href={url}
							class:col-span-full={wide}
							target="_blank"
							rel="noopener"
							class="block button max-sm:text-xs text-sm overflow-hidden"
							class:min-w-max={!wide}
						>
							<div class="flex flex-col gap-2 xl:items-start" class:md:centered={!wide}>
								<Icon />
								<span class:md:hidden={!wide} class="sm:block xl:block break-all">{label}</span>
							</div>
						</a>
					{/each}
				</div>

				<img
					src="/me/coooollll_shiizz-removebg-preview.webp"
					alt="Manual in the corner"
					loading="lazy"
					decoding="async"
					class="pointer-events-none bottom-[-90px] right-[-45px] grayscale-50 brightness-200 w-auto absolute h-[200px] object-contain drop-shadow-xl drop-shadow-black"
				/>
			</div>
		</div>
	</div>
	<div class="container mx-auto relative">
		<div class="aspect-square -z-10 absolute bottom-0 translate-y-1/3 left-0 rotate-45 w-[80%]">
			<Boxx count={20} rotation={90} />
		</div>
	</div>
	<Footer />
</section>
