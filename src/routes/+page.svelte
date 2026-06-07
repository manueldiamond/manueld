<script lang="ts">
	import {
		SiFacebook,
		SiGithub,
		SiInstagram,
		SiInstapaper,
		SiWhatsapp,
		SiX,
		SiYoutube
	} from '@icons-pack/svelte-simple-icons';
	import {
		ArrowRight,
		ArrowUp,
		ArrowUpAz,
		Briefcase,
		FileIcon,
		Link,
		Lock,
		Mail,
		Phone,
		Plane,
		Send,
		X
	} from 'lucide-svelte';

	const titles = [
		{ label: 'CurveLabz', title: 'CTO', url: 'https://curvelabz.com' },
		{ label: 'TE Sites', title: 'CEO', url: 'https://tesites.online' }
		//{ label: 'MM Studios', title: 'Future maybe' }
	];

	const projects = [
		{
			name: 'BridgeX Mobile App',
			description:
				'A services marketplace that allows users to request services, find work and connect with local artisans nearby. A 2-in-one platform for Service Users and Service Providers. Features realtime notifications and location tracking. ',
			tags: [
				'Andrond',
				'iOS',
				'Fullstack develpment',
				'Location Based',
				'Realtime Systems',
				'Chat Systems',
				'Dual User Application'
			],
			client: 'Bridge and Ladder Synergy',
			url: 'https://bridgexng.com',
			images: [
				'/bridge/bridgex-home.png',
				'/bridge/create req.jpeg',
				'/bridge/chatpage.png',
				'/bridge/sidebar.jpeg'
			]
		},
		{
			name: 'BridgeX Website',
			description:
				'A website for the BridgeX mobile app. A 2-in-one platform for Service Users and Service Providers.',
			tags: ['Website', 'NextJS', 'Responsive Design', 'Blog'],
			client: 'Bridge and Ladder Synergy',
			url: 'https://bridgexng.com',

			images: [
				'/bridge/download page.png',
				'/bridge/brig web home.png',
				'/bridge/get-help.png',
				'/bridge/download card.png'
			]
		},
		{
			name: 'BridgeX Admin Dashboard',
			description:
				'Admin dashboard for managing the BridgeX mobile app. A 2-in-one platform for Service Users and Service Providers.',
			tags: ['Analytics', 'Platform Management', 'Fullstack develpment', 'Admin Dashboard'],
			client: 'Bridge and Ladder Synergy',
			images: [
				'/bridge/bx-admin-home.png',
				'bridge/1780698699.png',
				'/bridge/1780698679.png',
				'/bridge/1780698668.png',
				'/bridge/1780698660.png',
				'/bridge/bxadmin-pies.png'
			]
		},
		{
			name: 'Curve Rentals App',
			description: 'A web app that allows users to rent out their spare time to other users.',
			tags: ['AI Chatbot', 'AWS', 'Fullstack develpment', 'Admin Dashboard'],
			client: 'Curve Labz',

			images: [
				'https://curvelabz.com/wp-content/uploads/2026/03/Screenshot-2026-03-18-at-4.54.39-PM-scaled-e1773853271695-768x406.png'
			],
			url: 'https://curvelabz.com'
		},
		{
			name: 'Curve Bookings',
			description:
				'A app that helps university students finding hostels and apartments for rent around their university. It provides them details like pricing, location, room availability, occupancy, amantities, distance to campus, etc. It fetures a slot booking system for managing availabiliy. The system includes a Hostel Management System as an administrative dashboard to manage the application.',
			tags: ['Hostel Management System', 'Dashboard', 'Secure Payments'],
			client: 'Curve Labz',

			images: ['/curvebookings.png'],
			url: 'https://curvebookings.vercel.app'
		},
		{
			name: 'Vehiville Web (v1)',
			description:
				'Early stage development of Vehiville. A vehicle solutions platform allowing for rentals, sales and maintenance of vehicles. This project(v1) was discontinued in favour a mobile application.',
			tags: ['Custom Wordpress Code', 'PHP', 'Database Design', 'Secure Payment'],
			client: 'RS Group of Companies',
			images: [
				'/vehiville/rs-vehiville6.png',
				'/vehiville/rs-vehiville4.png',
				'/vehiville/rs-vehiville7.png'
			],
			url: 'https://rsvehiville.rsgroupgh.com/'
		},
		{
			name: 'Enterprise Resource Planning System',
			description:
				'The deployment and customization of an ERP System for internal operations at RS Group. This project involved cloud systems config, server ',
			tags: ['Cloud System Deployment', 'Server Configuration', 'ERP Deployment'],
			client: 'RS Group of Companies',
			images: ['/rserp.png']
		},
		{
			name: 'RS Lantern',
			description: 'A web app that allows users to book appointments with other users.',
			client: 'RS Group of Companies',
			url: 'https://rslantern.rsgroupgh.com/',
			tags: ['Wordpress', 'Frontend Development', 'Responsive Design'],
			images: ['/rs-lantern.png']
		},
		{
			name: 'AI powered Website Chatbot',
			description:
				'A chatbot that reads business informations, captures lead data and answers users questions with accurate business information.  It also gives helpful links to pages on the website and recommended follow-up questions for the user. The AI is trained on the as much business information as is provided. This is a custom coded wordpress plugin and as such can be added onto any website.',
			client: 'RS Group of Companies',
			tags: ['AI Chatbot', 'Wordpress', 'Lead Capture', 'CRM', 'Fullstack Development', 'PHP'],
			images: ['/rs-chatbot.png'],
			url: 'https://rsgroupgh.com/'
		},

		{
			name: 'RS Notify',
			description:
				'A micro crm tool that allows managing and grouping customers and staff in an organisation for easy communication. The system supports SMS and Email message broadcasts for customers, staff memebers and curated groups. It handles automatically scheduled messaging, Marketing campaigns and Birthday Messages',
			tags: ['CRM Tools', 'SMS Integration', 'Laravel', 'Fullstack develpment'],
			client: 'RS Group of Companies',
			images: ['/rsnotify/rsnotify1.png']
		},
		{
			name: 'Vehiville Web (v2)',
			description:
				'A vehicle solutions platform allowing users to buy, rent, sell and request maintenance of their vehicles. It features a dual user system for regular users to buy and rent, as well as for dealers to list their vehicles on the platform. This is the success or the the original project(v2) and is in active development. Team developed',
			client: 'RS Group of Companies',

			tags: ['React', 'Database Design', 'Secure Payment', 'KYC integration', '10+ Dev team'],
			images: [
				'/vehiville/vehivilleV2-main.png',
				'/vehiville/vehivilleV2-1780710011.png',
				'/vehiville/vehivilleV2-1780709992.png'
			],
			url: 'https://vehiville.com/'
		},
		{
			name: 'Vehivile Admin System (v2)',
			description:
				'Under the new development of Vehiville, a dedicated administrative platform designed to manage users, compliance, vehicles, rentals, sales, business algorithm constraints,  and maintenance of vehicles. This project(v2) was discontinued in favour a mobile application',
			client: 'RS Group of Companies',
			tags: [
				'Dashboard Analytics',
				'50+ Modules',
				'CMS',
				'Multimedia compression',
				'Secure Role Based Access'
			],
			images: [
				'/vehiville/mainlogin.png',
				'/vehiville/home dash.png',
				'/vehiville/multi apps.png',
				'/vehiville/1780698976.png',
				'/vehiville/1780698909.png',
				'/vehiville/1780698890.png',
				'/vehiville/1780698879.png',
				'/vehiville/1780698858.png',
				'/vehiville/1780698835.png',
				'/vehiville/1780698931.png',
				'/vehiville/1780698940.png',
				'/vehiville/1780698962.png'
			]
		},
		{
			name: 'AREF 2026 Admission Portal',
			description:
				'Fullstack development of the ticket validation and management system for the biggest real estate event in Africa (Africa Real Estate Festival 2026). ',
			tags: ['Event Ticket Management System', 'PHP', 'Laravel', 'Fullstack development'],
			client: 'AREF 2026, under CurveLabz',
			images: []
		},
		{
			name: "Bluewhale's CRM",
			description:
				"A customized CRM fork that captures leads from BlueWhales's RealEstate website opportunities, and sales. It features a dashboard, CRM, sales, marketing, and customer service modules.",
			client: 'BlueWhale, under CurveLabz',
			tags: ['CRM', 'System Customization', 'Meta Ads Integration', 'Laravel', 'Vue'],
			images: []
		},
		{
			name: 'Dental Website',
			description:
				'A Dental website template developed for TE Sites. It features a responsive design, contact form and a Book Appointment Form which feeds into the TE Sites Appointment Booking system',
			client: 'TE Sites',
			tags: ['Website', 'Responsive Design', 'Cloudflare', 'SMS Integration'],
			images: [],
			url: 'https://demo.tesites.online'
		},
		{
			name: 'TE Sites Appointment Booking System',
			description:
				'A Dental Management System for TE Sites. It features a micro CRM, for keeping and accessing customer records, micro CMS for updating some content and blogs for the website, and most importantly SMS notifications for both the customer and the dental practice to keep up with appointments',
			client: 'TE Sites',
			tags: ['SMS Integration', 'CRM Tools', 'CMS Tools', 'Fullstack Development'],
			images: []
		},
		{
			name: 'Church Management System',
			description:
				'An administrative dashboard for managing the church members, groups and activities. It features a dashboard, member management, church groups & ministires, church events, and a communications module for broadcasting messages to all church members',
			client: 'Newness Chapel',
			tags: ['Administrative Dashboard', 'Records keeping System'],
			images: []
		},
		{
			name: 'First Online Money Transfer Website',
			description:
				"A demo website for FirstBank's cross country money transfer system. It included an admin Dashboard with  Developed under ITANDT Solutions in 2023.",
			client: 'FirstBank Nigeria, under ITANDT Solutions',
			tags: ['Website', 'Admin Dashboard', 'Responsive Design'],
			images: []
		},
		{
			name: 'Logistics Management System',
			description:
				'A logistics management system that allows for tracking and managing of goods and services. It features a dashboard, a tracking system, and a reporting module for tracking and analyzing goods and services.',
			client: 'RMB Logistics',
			tags: ['Logistics Management System', 'Dashboard', 'Tracking System'],
			images: ['logistics app.png']
		},
		{
			name: 'Gift-Beneficiariy System',
			description:
				'A web app that allows Churches to view and manage items available for destribution and their beneficiaries. distributions. It features a dashboard, a distribution management system, and a reporting module for tracking and analyzing distributions.',
			client: ' Under ITANDT Solutions',
			tags: ['Church Management System', 'Barcode Scanner'],
			images: []
		},
		{
			name: 'Tasty Chef',
			description:
				'A demo web app that allows users to place orders for food online. It includes, a product catalogue, a shopping cart, and a checkout page. The app also features a dashboard for managing orders and a user profile page for viewing and editing personal information. The app is built using Next.js, PostgreSQL, TypeScript, TailwindCSS, NextAuth, and Paystack',
			client: 'Demo',
			tags: [
				'Food Delivery App',
				'NextJS',
				'PostgreSQL',
				'TypeScript',
				'TailwindCSS',
				'NextAuth',
				'Paystack'
			],
			images: ['/tasty chef/tasty chef.png'],
			url: 'https://tastychef.vercel.app/'
		}
	];

	const buzzwordStrips = {
		top: [
			'ERP System',
			'E-Commerce;',
			'CMS Development',
			'Whatsapp Bot',
			'CRM Development',
			'Mobile App Development',
			'Realtime Systems',
			'Web Development',
			'AI Powered Systems',
			'Lead Capture Systems',
			'Dashboards'
		],
		bottom: [
			'Secure Payment Systems',
			'Speed and Scalability',
			'Appointment Booking Systems',
			'Logistics Management Systems',
			'Event Management Systems',
			'Project Management Solutions',
			'Marketing Support Systems',
			'100% Compliant KYC',
			'Low Cost Scaling',
			'Desktop Application',
			'Top Notch Functionality'
		]
	};

	const aboutSections = [
		{
			title: 'Profile',
			content: [
				'Freelance software engineer and founder-in-progress. I have a passion for building useful solutions that meet actual business needs.'
			]
		},
		{
			title: 'Work',
			content: [
				'Eight years across multiple industries has given me a practical understanding of how businesses actually run, and what it takes to build software that fits into that.',
				'I work directly with founders, business owners, and end users. My workflow revolves around truly understanding the operation before touching the code. This has led to happier users and high customer satisfaction'
			]
		},
		{
			title: 'Background',
			content: [
				'Self-taught from an early age, with roots in game development. Went on to study Computer Science at Central University, Ghana, graduating First Class in 2025.'
			]
		},
		{
			title: 'Interests',
			content: [
				'Outside of work, I have a keen interest in game development, graphics programming, and low level development'
			]
		}
	];

	const tools = [
		// Frontend libs / frameworks
		{
			name: 'React',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
		},
		{
			name: 'Next.js',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
		},
		{
			name: 'SvelteKit',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg'
		},
		{
			name: 'TailwindCSS',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
		},
		{
			name: 'HTML5',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
		},
		{
			name: 'CSS3',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
		},
		// Backend runtimes / frameworks
		{
			name: 'Node.js',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
		},
		{
			name: 'Express',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
		},
		{
			name: 'Spring Boot',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
		},
		{
			name: 'FastAPI',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg'
		},
		{
			name: 'Laravel',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'
		},
		{
			name: 'WordPress',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg'
		},
		// Databases / ORMs
		{
			name: 'AWS',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
		}
	];

	//TODO: rename this shii
	const languages = [
		{
			name: 'JavaScript',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
		},
		{
			name: 'TypeScript',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
		},
		{
			name: 'Python',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
		},
		{
			name: 'C/C++',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'
		},
		{
			name: 'Java',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
		},
		{
			name: 'PHP',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
		},
		{
			name: 'Bash',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg'
		},
		{
			name: 'SQL',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'
		},
		{
			name: 'PostgreSQL',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
		},
		{
			name: 'MySQL',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
		},
		{
			name: 'MongoDB',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
		},
		{
			name: 'SQLite',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg'
		},
		{
			name: 'Prisma',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg'
		},
		{
			name: 'Drizzle',
			image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/drizzle.svg'
		},
		// Infra shii
		{
			name: 'Docker',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
		},
		{
			name: 'Git',
			image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
		}
	];

	const nav = [
		{ label: '󰅱' },
		{ label: 'Home', url: '/#top' },
		{ label: 'About', url: '/#about' },
		{ label: 'contact', url: '/#contact' },
		{ label: '󰒋' }
	];

	const contact = {
		email: 'manuel@tesites.online',
		phoneno: '+233539512886'
	};

	const contactDetails = [
		{ url: 'mailto:manuel@tesites.online', icon: Mail, label: 'manuel@tesites.online' },
		{ url: 'tel:+233539512886', icon: Phone, label: '(+233) 53 951 2886' },
		{ url: 'https://wa.me/+233539512886', icon: SiWhatsapp, label: 'Whatsapp' },
		{ url: 'https://x.com/manuel_diamond', icon: SiX, label: '@manuel_diamond' },
		{ url: 'https://github.com/manueldiamond', icon: SiGithub, label: 'manueldiamond' },
		{
			url: 'https://www.instagram.com/manuel.diamond/',
			icon: SiInstagram,
			label: '@manuel.diamond'
		},
		{
			url: 'https://web.facebook.com/profile.php?id=61590373957773&sk=directory_links',
			icon: SiFacebook,
			label: 'Manuel Diamond'
		},
		{ url: 'https://www.youtube.com/channel/@manueldiamond', icon: SiYoutube, label: 'YouTube' }
	];
</script>

{#snippet box(count: number, rotation = 0)}
	{#each Array(count) as _, i}
		{@const scale = 1 - Math.pow((i + 1) / count, 0.8)}

		{@const tval = `calc(-50% + min(-25px, 2.75vw) * (${i / count}))`}
		<div
			style="translate: {tval} {tval};
			width: {scale * 100}%;
			height: {scale * 100}%;
			filter: blur({1 + Math.pow(i / count, 2) * 3}px);
			rotate: {(i / count) * rotation}deg;
			"
			class="border-inherit bg-mblack/50 absolute --border left-1/2 top-1/2 shadow-xl shadow-black/50 rotate-0 group cursor-pointer select-none"
		>
			<div
				class="inset-0 bg-white absolute hover:opacity-100 select-none"
				style="opacity: {Math.pow((i + 1) / count, 2) * 0.4}"
			></div>
			<div
				class="inset-0 bg-transparent absolute group-hover:bg-white group-hover:shadow-[0_0_20px_white] transition-all group-active:opacity-100 opacity-30"
			></div>
		</div>
	{/each}
{/snippet}

<main>
	<!-- HEADER -->
	<nav
		class="sticky top-0 backdrop-blur-sm border-cream/50 border-b flex flex-col gap-5 relative z-50 justify-center overflow-hidden shadow-black shadow-xl bg-mblack/85"
	>
		<div
			class=" uppercase flex-1 w-full h-full flex py-1 container mx-auto font-medium justify-between text-sm max-sm:text-xs max-sm:justify-center"
		>
			<a
				href="/"
				class="text-pewter hover:bg-white hover:font-semibold cursor-pointer hover:px-1 hover:text-black max-sm:hidden"
			>
				<span class="font-extrabold">[ MM ]</span> : HOME
			</a>
			<ul class="flex">
				{#each nav as item}
					<li class="flex text-pewter group">
						<a
							href={item.url}
							class="max-sm:py-2 max-sm:border-t border-cream block px-0.5 hover:text-cream hover-font-semibold text-pewter"
						>
							<span class="group-hover:visible invisible">[</span>
							<span>{item.label}</span>
							<span class="group-hover:visible invisible">]</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	<!-- HERO SECTION -->
	<section
		id="top"
		class="bg-linear-to-tl from-black/0 to-black flex flex-col gap-5 relative z-10 justify-center h-[75vh] overflow-hidden min-h-[600px]"
	>
		<div
			class="absolute bg-linear-to-tr from-black/50 via-black to-black/20 left-[min(-20%,120px)] max-w-[700px] w-[60%] aspect-[5/3] min-w-100 -bottom-[min(16vw,200px)] via-10% rotate-30 shadow-2xl shadow-black/90"
		>
			<div
				class="z-10 absolute bg-pewter/20 w-full h-full left-0 top-0 via-10% -rotate-15 opacity-100 mix-blend- shadow-2xl shadow-black/70 font-nunito"
			>
				<div
					class="uppercase absolute right-5 top-5 font-bold text-black/40 text-base max-md:text-sm flex flex-col items-end"
				>
					{#each titles as thing}
						<a href={thing.url} class="cursor-pointer hover:text-cream/10">
							{thing.label} • {thing.title}
						</a>
					{/each}
				</div>
				<span
					class="text-4xl md:text-7xl uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-thin text-black/50"
					>{'<M/M>'}</span
				>
				<div
					class="pointer-events-none absolute top-0 left-0 w-full h-full z-10 absolute bg-linear-to-tr from-white/30 via-[white] to-white/10 left-0 top-0 from-20% opacity-20 mix-blend-lighten"
				></div>
			</div>
		</div>

		<div class="container mx-auto flex justify-between h-full items-center">
			<div class=" max-sm:mt-20 relative z-10">
				<h1 class="text-5xl text-cream font-medium">Manuel Diamond</h1>
				<p class=" text-base font-medium text-pewter mt-4 mb-10">
					I build websites, apps and automation systems that SCALE businesses and accelerate growth.
				</p>

				<div class="flex gap-2 flex-col sm:flex-row">
					<a href="#projects" class="pri-button">
						<div class="centered gap-2">
							See my work
							<Briefcase class="opacity-80" />
						</div>
					</a>
					<a href="#contact" class="button">
						<div class="centered gap-2">
							<span>Get in touch</span>
							<ArrowRight class="" />
						</div>
					</a>
				</div>
			</div>
			<div
				class="
max-sm:absolute right-0 top-12
				-mb-30 relative flex bg-mblack/40 backdrop-blur-sm border-cream max-w-[380px] w-[38vw] aspect-square shadow-lg shadow-black/50 rotate-45 min-w-[200px] select-none"
			>
				{@render box(24)}
			</div>
		</div>
	</section>

	<!-- BUZZWORDS -->
	<section class=" mt-20 marquee-wrapper container mx-auto overflow-hidden pb-10">
		<div class="marquee-1">
			{#each [...buzzwordStrips.top, ...buzzwordStrips.top] as thing}
				<div
					class="min-w-max px-8 py-2 border-carafe-light border bg-linear-to-b from-50% to-50% from-carafe to-carafe-light border-b-carafe shadow-lg text-sm font-semibold text-mblack brightness-125"
				>
					{thing}
				</div>
			{/each}
		</div>
		<div class="mt-1 marquee-2 flex flex-row gap-1">
			{#each [...buzzwordStrips.bottom, ...buzzwordStrips.bottom] as thing}
				<div
					class="min-w-max px-8 py-2 border-carafe-light border bg-linear-to-b from-50% to-50% from-carafe to-carafe-light border-b-carafe scale-z-1 shadow-lg text-sm font-semibold text-mblack brightness-125"
				>
					{thing}
				</div>
			{/each}
		</div>
	</section>

	<!--PROJECTS SECTION -->

	<section id="projects" class=" mt-20 container mx-auto">
		<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
			My Projects
			<div class="diamond-bullet"></div>
		</h3>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
			{#each projects as project}
				<div class="bg-black/10 hover:bg-black/20 flex flex-col group">
					{#if project.images?.length > 0}
						<div class=" overflow-hidden relative aspect-[3/2.2] w-full">
							<div class="flex-1 w-full h-full flex p-4">
								<img
									src={project?.images[0]}
									alt="{project.name} featured image"
									class="object-cover w-full drop-shadow-xl drop-shadow-black drop-shadow-2xl h-full object-top"
								/>
							</div>

							<div
								class="absolute bottom-0 bg-mblack w-[120%] left-0 h-[18%] after:inset-0 after:absolute after:z-10 after:bg-black/10 group-hover:after:bg-black/20
								rotate-4 shadow-[0px_-2px_6px_rgba(0,0,0,0.5)] origin-top-left
								
								"
							></div>
						</div>
					{/if}
					<div class="flex gap-2 flex-col p-4 pt-0 flex-1 justify-end">
						<p class="text-lg text-cream/80 font-medium">{project.name}</p>

						<div class=" flex gap-1 flex-row flex-wrap mb-1">
							{#each project.tags as tag}
								<div
									class="over bg-carafe-light/20 text-carafe-light text-sm font-semibold px-2 py-1 flex gap-0.5 flex-1 min-w-max"
								>
									{tag}
								</div>
							{/each}
						</div>

						<p class="group-hover:hidden text-sm text-pewter leading-[150%]">
							{project.description.slice(0, 220)}
							{#if project.description.length > 220}
								<span>... </span>
								<span class="text-carafe-light text-sm">read more </span>
							{/if}
						</p>

						<p class=" hidden group-hover:block text-sm text-pewter leading-[150%]">
							{project.description}
							<br />
							<br />
							<br />

							<span class="text-carafe-light font-bold text-sm">{project.client}</span>
						</p>
						<div class="flex-1"></div>
						{#if project.url}
							<a href={project.url} class="button flex gap-2">
								<Link class="aspect-square w-4" />
								<span>View Project</span>
							</a>
						{:else}
							<div class="pri-button cursor-not-allowed opacity-30 flex gap-2">
								<Lock class="aspect-square w-4" />
								<span>Private Project</span>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!--ABOUT SECTION TOTALLY VIBE CODED(no human)-->

	<section
		id="about"
		class=" py-20 pb-20 mx-auto overflow-hidden bg-linear-to-b from-transparent to-black/70"
	>
		<div class="container flex flex-col mx-auto">
			<h3 class="mb-10 text-cream text-3xl text-right flex items-center justify-end gap-5">
				About Me
				<div class="diamond-bullet"></div>
			</h3>

			<div class="flex">
				<div class="sm:flex-2 relative flex items-center -z-10">
					<div
						class=" absolute neumorphic aspect-square h-[60%] rotate- -left-0 skew-[20deg] translate-y-[60%] flex bg-linear-to-b! from-white/2! via-white/5 to-white/0 backdrop-blur-sm from-30%"
					>
						<div
							class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
						></div>
					</div>

					<div
						class=" absolute neumorphic aspect-square h-[50%] rotate- -left-0 skew-[-20deg] translate-x-[160%] translate-y-[60%] bg-linear-60! from-white/2! via-white/10 to-white/0 backdrop-blur-sm from-30%"
					>
						<div
							class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
						></div>
					</div>

					<div
						class=" absolute neumorphic aspect-square h-[80%] rotate- -left-0 skew-[-20deg] -translate- flex bg-white/0! from-white/0 via-white/2 to-white/0 backdrop-blur-sm from-30%"
					>
						<div
							class=" z-10 absolute neumorphic-inner aspect-square h-full scale-[0.7] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm"
						></div>
					</div>
				</div>
				<div class="flex-7 pb-30 md:pb-40">
					<div class="text-cream/80 text-base md:text-lg leading-[200%]">
						{#each aboutSections as about}
							<p class="opacity-50 font-medium text-base mb-4 uppercase">{about.title}</p>
							<p class="text-justify mb-12">
								{@html about.content.join('<br />')}
							</p>
						{/each}
					</div>
					<div class="my-6 flex gap-2 flex-col sm:flex-row">
						<a href="/me/manuel-diamond-cv.pdf" class="block button">
							<div class="centered gap-2">
								Download Full CV
								<FileIcon class="" />
							</div>
						</a>
					</div>
				</div>
				<div class="gap-[6px] flex-2 hidden lg:flex centered drop-shadow-xl drop-shadow-black">
					{#each Array(7) as _, i}
						<div
							class="h-full w-[3px] {i % 2 === 0
								? 'bg-linear-to-b'
								: 'bg-linear-to-t '}  from-carafe/80 via-carafe-light to-carafe/0 rounded-full"
						></div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- TOOLS SECTION -->

	<section class="px-4 md:px-8">
		<div
			class=" container mx-auto border-pewter border-[16px] sm:border-[24px] md:border-[32px] bg-linear-120 from-transparent to-white/20 from-[] to-[51%] backdrop-blur-md md:py-12 py-6 px-0! relative -mt-[160px] shadow-2xl shadow-black/50

			relative
			"
		>
			<div class="absolute inset-0 neumorphic-inner bg-transparent overflow-hidden">
				<div class=" mix-blend-lighten absolute -z-10 inset-0 opacity-15 grain"></div>
			</div>
			<div class="">
				<div class="md:px-8 px-4 mb-10">
					<h3
						class=" text-pewter uppercase font-bold text-2xl max-sm:text-xl text-left flex items-center justify-start gap-5"
					>
						POWERED BY
					</h3>
					<p class="max-sm:text-sm text-base text-pewter">Tools and libraries i'm familiar with</p>
				</div>
				<div class="w-full marquee-wrapper flex flex-col gap-4">
					{#each [tools, languages] as techstack, id}
						<div
							class=" {(id + 1) % 2 === 1 ? 'marquee-1' : 'marquee-2'} gap-8! max-md:gap-4! flex"
						>
							{#each [...techstack, ...techstack] as tech}
								<div class="">
									<img
										src={tech.image}
										alt={tech.name}
										class=" w-8 sm:w-12 md:w-18
										object-contain aspect-square grayscale-50 drop-shadow-lg drop-shadow-black/50"
									/>
									<span class="font-medium md:text-sm text-white/80 sm:tex-xs text-[10px] min-w-max"
										>{tech.name}</span
									>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CONTACT SECTION -->

	<section id="contact" class="overflow-hidden pt-20">
		<div class="container mx-auto relative">
			<h3
				class="mb-10 text-cream text-3xl overflow-hidden text-right flex items-center justify-end gap-5"
			>
				Contact
				<div class="diamond-bullet"></div>
			</h3>
			<div class="flex flex-col gap-5 md:flex-row">
				<div
					class=" grid grid-cols-1 sm:grid-cols-2 gap-5 border border-cream/50 p-5 max-sm:p-3 max-sm:gap-3 text-pewter shadow-lg shadow-black/40 bg-linear-to-br from-transparent via-white/10 to-white/5 w-full max-w-[500px] max-md:text-sm backdrop-blur-md"
				>
					<p class="text-lg max-sm:text-base text-cream col-span-full">Send a message</p>
					<input required type="text" placeholder="Name" class="w-full input" />
					<input required type="text" placeholder="Contact" class="w-full input" />
					<textarea
						placeholder="Message"
						class="flex-1 col-span-full w-full min-h-32 input"
						defaultValue="Let's get in touch!"
					></textarea>
					<button class="col-span-full pri-button flex gap-2 centered"
						>Send <Send class="" /></button
					>
				</div>
				<div
					class="flex flex-col border border-cream/50 text-cream sm:p-5 p-3 backdrop-blur-md shadow-lg shadow-black/40 relative overflow-hidden"
				>
					<p class="text-base sm:text-lg pb-5 max-sm:pb-2.5">Contact Details</p>
					<div class="grid grid-cols-2 lg:grid-cols-3 gap-3 max-sm:gap-2">
						{#each contactDetails as { url, icon: Icon, label }}
							<a href={url} class="block button max-sm:text-xs overfl-hi text-sm overflow-hidden">
								<div class="flex flex-col gap-2">
									<Icon />
									<span>{label}</span>
								</div>
							</a>
						{/each}
					</div>

					<img
						src="/me/coooollll_shiizz-removebg-preview.png"
						alt="Manual standing in the corner"
						class="bottom-0 right-[-45px] grayscale-50 brightness-200 w-auto absolute h-[200px] object-contain drop-shadow-xl drop-shadow-black"
					/>
				</div>
			</div>
		</div>
		<div class="container mx-auto relative">
			<div class="aspect-square -z-10 absolute bottom-0 translate-y-1/3 left-0 rotate-45 w-[80%]">
				{@render box(20, 90)}
			</div>
		</div>
		<!-- FOOTER SECTION -->
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
	</section>
</main>
