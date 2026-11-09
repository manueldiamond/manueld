export type Collaborator = {
	name: string;
	url?: string;
	role?: string;
	image?: string;
};

const manuelDiamond: Collaborator = {
	name: 'Manuel Diamond',
	url: 'https://manuel.tesites.online',
	image: '/diamond.webp'
};

const christopherOdor: Collaborator = {
	name: 'Christopher Odor',
	url: 'https://curvelabz.com',
	image: '/curve-blue.webp'
};

const isaacAheto: Collaborator = {
	name: 'Isaac Aheto',
	url: 'https://curvelabz.com',
	image: '/curve-red.webp'
};

export type Client = {
	name: string;
	url?: string;
};

export type Project = {
	name: string;
	description: string | string[];
	tags: string[];
	client: Client;
	clientLabel?: string;
	url?: string;
	images: string[];
	techstack?: string[];
	technical_description?: string;
	additionalLinks?: { url: string; label: string }[];
	collaborators?: Collaborator[];
	/** Work under NDA: no images, no links, rendered with the confidential placeholder. */
	confidential?: boolean;
};

export const projects: Project[] = [
	{
		name: 'Odadea 96 Network',
		description:
			"A private network for the PRESEC class of 1996. Members find each other, post updates, list businesses and opportunities, run events and ventures, and browse the year group's heritage archive and scanned year book.",
		technical_description:
			'React single-page app and a Hono API, both on Cloudflare Workers with D1 and R2. Zod contracts shared between web and API, Playwright end to end tests, and an admin workspace for membership requests, reports and moderation.',
		tags: ['Alumni Network', 'Messaging', 'Events', 'Venture Lab', 'Admin Dashboard'],
		client: { name: 'Odadea 96', url: 'https://odadea96.org' },
		clientLabel: 'Built for',
		images: [
			'/odadea96/home.webp',
			'/odadea96/member-home.webp',
			'/odadea96/network.webp',
			'/odadea96/venture-lab.webp',
			'/odadea96/venture-calculator.webp',
			'/odadea96/member-profile.webp',
			'/odadea96/discover.webp',
			'/odadea96/heritage.webp',
			'/odadea96/admin-dashboard.webp'
		],
		techstack: ['React', 'Vite', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Zod', 'Playwright'],
		collaborators: [manuelDiamond]
	},
	{
		name: 'The Builders Circle',
		description:
			'An invite-only community app for builders who learn, belong and lift each other. New members take a builder assessment, get an archetype and capability profile, then work through a 90 day journey of lessons, quizzes and challenges reviewed by the founders.',
		technical_description:
			'React web and admin apps plus an Expo mobile app in one Turborepo, on Supabase for magic-link auth, data and realtime messages and notifications. Invite-only sign up is enforced by a database trigger, not in the browser.',
		tags: ['Community Platform', 'Assessments', 'Learning Hub', 'Realtime Chat', 'Admin Dashboard'],
		client: { name: 'The Builders Circle' },
		clientLabel: 'Built for',
		images: [
			'/builders-circle/archetype-result.webp',
			'/builders-circle/home-journey.webp',
			'/builders-circle/grow-lesson.webp',
			'/builders-circle/quiz-passed.webp',
			'/builders-circle/stage-complete.webp',
			'/builders-circle/admin-dashboard.webp',
			'/builders-circle/admin-archetypes.webp',
			'/builders-circle/admin-challenges.webp'
		],
		techstack: ['React', 'Vite', 'Expo', 'React Native', 'Supabase', 'Turborepo', 'Tailwind CSS'],
		collaborators: [manuelDiamond]
	},
	{
		name: 'National Scale Project',
		description:
			'Worked on a national-level project involving an ecosystem of 20+ unified communication systems. Project details are hidden due to confidentiality.',
		tags: ['National Scale', 'Unified Communications', 'Confidential'],
		client: { name: 'Confidential' },
		clientLabel: 'Client',
		images: [],
		techstack: ['Java', 'Spring Boot', 'Python', 'Django', 'React', 'TypeScript'],
		confidential: true
	},
	{
		name: 'BridgeX Mobile App',
		description:
			'A services marketplace that allows users to request services, find work and connect with local artisans nearby. Features realtime notifications and location tracking. ',
		tags: ['Android', 'iOS', 'Location Based', 'Realtime Systems', 'Chat Systems'],
		client: { name: 'Bridge and Ladder Synergy', url: 'https://bridgexng.com' },
		clientLabel: 'Built for',
		url: 'https://bridgexng.com',
		images: [
			'/bridge/bridgex-home.webp',
			'/bridge/create req.webp',
			'/bridge/chatpage.webp',
			'/bridge/sidebar.webp'
		],
		techstack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express'],
		collaborators: [
			{ ...manuelDiamond, role: 'Fullstack' },
			{ name: 'Likem Dzokoto', url: 'https://github.com/LikemDzokoto', role: 'Backend' },
			{ name: 'Abdul Shakur', url: 'https://drpawgh.com', role: 'UI/UX' },
			{ name: 'Lateef Yusuf', url: 'https://github.com/yusuflateef', role: 'Manager' }
		]
	},
	{
		name: 'BridgeX Website',
		description: 'A website for the BridgeX mobile app.',
		tags: ['Website', 'Next.js', 'Blog'],
		client: { name: 'Bridge and Ladder Synergy', url: 'https://bridgexng.com' },
		clientLabel: 'Built for',
		url: 'https://bridgexng.com',
		images: [
			'/bridge/download page.webp',
			'/bridge/brig web home.webp',
			'/bridge/get-help.webp',
			'/bridge/download card.webp'
		],
		techstack: ['Next.js', 'TypeScript'],
		collaborators: [manuelDiamond]
	},
	{
		name: 'BridgeX Admin Dashboard',
		description: 'Admin dashboard for managing the BridgeX mobile app.',
		tags: ['Analytics', 'Platform Management', 'Admin Dashboard'],
		client: { name: 'Bridge and Ladder Synergy', url: 'https://bridgexng.com' },
		clientLabel: 'Built for',
		images: [
			'/bridge/bx-admin-home.webp',
			'/bridge/1780698699.webp',
			'/bridge/1780698679.webp',
			'/bridge/1780698668.webp',
			'/bridge/1780698660.webp',
			'/bridge/bxadmin-pies.webp'
		],
		techstack: ['React', 'TypeScript', 'Node.js'],
		collaborators: [
			{ ...manuelDiamond, role: 'Fullstack' },
			{ name: 'Likem Dzokoto', url: 'https://github.com/LikemDzokoto', role: 'Backend' },
			{ name: 'Abdul Shakur', url: 'https://drpawgh.com', role: 'UI/UX' },
			{ name: 'Lateef Yusuf', url: 'https://github.com/yusuflateef', role: 'Manager' }
		]
	},
	{
		name: 'Curve Rentals App',
		description:
			'A property rental platform with an AI-powered chat interface for browsing available listings. Currently in demo phase.',
		tags: ['AI Chatbot', 'Admin Dashboard'],
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		images: [
			'https://curvelabz.com/wp-content/uploads/2026/03/Screenshot-2026-03-18-at-4.54.39-PM-scaled-e1773853271695-768x406.png'
		],
		url: 'https://curverentals.com',
		techstack: [
			'Next.js',
			'React',
			'TypeScript',
			'Express',
			'PostgreSQL',
			'Redis',
			'AI SDK',
			'Cloudinary'
		],
		collaborators: [
			{ ...manuelDiamond, role: 'Fullstack' },
			{ ...christopherOdor, role: 'Product Design' }
		]
	},
	{
		name: 'Curve Bookings',
		description:
			'A app that helps university students finding hostels and apartments for rent around their university. It provides them details like pricing, location, room availability, occupancy, amenities, distance to campus, etc. It fetures a slot booking system for managing availabiliy. The system includes a Hostel Management System as an administrative dashboard to manage the application.',
		tags: ['Hostel Management System', 'Dashboard', 'Secure Payments'],
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		images: [
			'/Curve/curvebookings-1780887823.webp',
			'/Curve/curvebookings-1780887719.webp',
			'/Curve/curvebookings-1780887641.webp',
			'/Curve/curvebookings-1780887595.webp',
			'/Curve/curvebookings-1780887584.webp',
			'/Curve/curvebookings-1780887530.webp',
			'/Curve/curvebookings-1780887505.webp'
		].reverse(),
		url: 'https://curvebookings.vercel.app',
		techstack: ['React', 'Next.js', 'TypeScript', 'Paystack', 'Motion'],
		collaborators: [
			{ ...manuelDiamond, role: 'Web Frontend' },
			{ name: 'Ali Seidu', url: 'https://github.com/aliseidu8855', role: 'Backend' },
			{
				name: 'Joseph Mawuli',
				url: 'https://github.com/orgs/curvebookings/people/MawuliMyth',
				role: 'Mobile'
			},
			isaacAheto,
			christopherOdor
		]
	},
	{
		name: 'Vehiville Web (v1)',
		description:
			'Early stage development of Vehiville. A vehicle solutions platform allowing for rentals, sales and maintenance of vehicles.',
		tags: ['Custom Wordpress Code', 'PHP', 'Database Design', 'Secure Payment'],
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		url: 'https://rsvehiville.rsgroupgh.com/',
		images: [
			'/vehiville/rs-vehiville6.webp',
			'/vehiville/rs-vehiville4.webp',
			'/vehiville/rs-vehiville7.webp'
		],
		techstack: ['WordPress', 'PHP', 'Paystack'],
		collaborators: [manuelDiamond, isaacAheto, christopherOdor]
	},
	{
		name: 'Enterprise Resource Planning System',
		description:
			'Deployment and configuration of ERPNext for internal operations at RS Group. Involved server setup, Frappe customization, and custom app development.',
		tags: ['Cloud System Deployment', 'Server Configuration', 'ERP Deployment'],
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Deployed under',
		images: ['/rserp.webp'],
		techstack: ['Frappe', 'Docker', 'Nginx', 'ERPNext'],
		collaborators: [
			manuelDiamond,
			christopherOdor,
			isaacAheto,
			{ name: 'Michael Gyamfi', url: 'https://github.com/mikegyamfi' },
			{ name: 'Dominic Kobina Aidoo', url: 'https://github.com/Gen3ratorX' },
			{ name: 'Erasmus Charwey', url: 'https://github.com/ErasmusBill' },
			{ name: 'Raymond Jnr' }
		]
	},
	{
		name: 'RS Lantern',
		description: 'A website for one the logistics subsidiary of RS group of companies.',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		url: 'https://rslantern.rsgroupgh.com/',
		tags: ['Wordpress', 'Frontend Development'],
		images: ['/rs-lantern.webp'],
		techstack: ['WordPress', 'PHP'],
		collaborators: [manuelDiamond, isaacAheto, christopherOdor]
	},
	{
		name: 'AI powered Website Chatbot',
		description:
			'A chatbot that reads business informations, captures lead data and answers users questions with accurate business information.  It also gives helpful links to pages on the website and recommended follow-up questions for the user. The AI is trained on the as much business information as is provided. This is a custom coded wordpress plugin and as such can be added onto any website.',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		tags: ['AI Chatbot', 'Wordpress', 'Lead Capture', 'CRM', 'PHP'],
		images: ['/rs-chatbot.webp'],
		url: 'https://rsgroupgh.com/',
		techstack: ['PHP', 'WordPress', 'AI'],
		collaborators: [manuelDiamond, isaacAheto, christopherOdor]
	},
	{
		name: 'RS Notify',
		description:
			'A micro crm tool that allows managing and grouping customers and staff in an organisation for easy communication. The system supports SMS and Email message broadcasts for customers, staff memebers and curated groups. It handles automatically scheduled messaging, Marketing campaigns and Birthday Messages',
		tags: ['CRM Tools', 'SMS Integration'],
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		images: [
			'/RS/notify-dash.webp',
			'/RS/notify-contacts.webp',
			'/RS/notify message.webp',
			'/RS/notify-select.webp'
		],
		techstack: ['React', 'Supabase', 'TanStack Query', 'Recharts'],
		collaborators: [manuelDiamond]
	},
	{
		name: 'Vehiville Web (v2)',
		description:
			'A vehicle solutions platform allowing users to buy, rent, sell and request maintenance of their vehicles. It features a dual user system for regular users to buy and rent, as well as for dealers to list their vehicles on the platform. This is the success or the the original project(v2) and is in active development. Team developed',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		tags: ['Database Design', 'Secure Payment', 'KYC integration'],
		images: [
			'/vehiville/vehiville-v2-car-sale.webp',
			'/vehiville/vehivilleV2-main.webp',
			'/vehiville/vehivilleV2-1780710011.webp',
			'/vehiville/vehivilleV2-1780709992.webp'
		],
		url: 'https://vehiville.com/',
		techstack: ['React', 'Supabase', 'TanStack Query', 'TanStack Table', 'Hook Form'],
		collaborators: [
			manuelDiamond,
			christopherOdor,
			isaacAheto,
			{ name: 'Oscar Denfu', url: 'https://github.com/ofoetey', role: 'Main' },
			{ name: 'Programming Sai', url: 'https://github.com/Programming-Sai' },
			{ name: 'Michael Gyamfi', url: 'https://github.com/mikegyamfi' },
			{ name: 'Erasmus Charwey', url: 'https://github.com/ErasmusBill' },
			{ name: 'Michael Perry', url: 'https://github.com/theniitettey' },
			{ name: 'Raymond Jnr' }
		]
	},
	{
		name: 'Vehiville Admin System (v2)',
		description:
			'Under the new development of Vehiville, a dedicated administrative platform designed to manage users, compliance, vehicles, rentals, sales, business algorithm constraints,  and maintenance of vehicles.',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		tags: ['Dashboard Analytics', 'CMS', 'Multimedia compression', 'Secure Role Based Access'],
		images: [
			'/vehiville/mainlogin.webp',
			'/vehiville/home dash.webp',
			'/vehiville/multi apps.webp',
			'/vehiville/1780698976.webp',
			'/vehiville/1780698909.webp',
			'/vehiville/1780698890.webp',
			'/vehiville/1780698879.webp',
			'/vehiville/1780698858.webp',
			'/vehiville/1780698835.webp',
			'/vehiville/1780698931.webp',
			'/vehiville/1780698940.webp',
			'/vehiville/1780698962.webp'
		],
		techstack: ['React', 'Tanstack Start', 'TanStack Table'],
		collaborators: [
			{ ...manuelDiamond, role: 'Main' },
			{ name: 'Oscar Denfu', url: 'https://github.com/ofoetey' },
			christopherOdor,
			isaacAheto,
			{ name: 'Programming Sai', url: 'https://github.com/Programming-Sai' },
			{ name: 'Michael Gyamfi', url: 'https://github.com/mikegyamfi' },
			{ name: 'Erasmus Charwey', url: 'https://github.com/ErasmusBill' },
			{ name: 'Michael Perry', url: 'https://github.com/theniitettey' },
			{ name: 'Raymond Jnr' }
		]
	},
	{
		name: 'AREF 2026 Admission Portal',
		description:
			'Fullstack development of the ticket validation and management system for the biggest real estate event in Africa (Africa Real Estate Festival 2026). ',
		tags: ['Event Ticket Management System', 'Laravel'],
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		images: [
			'/AREF/checkin-typing.webp',
			'/AREF/pincode.webp',
			'/AREF/card-back.webp',
			'/AREF/card-front.webp',
			'/AREF/adminpaga.webp',
			'/AREF/loginadmin.webp',
			'/AREF/checkin home.webp',
			'/AREF/set-code.webp'
		],
		techstack: ['React', 'PHP', 'Laravel', 'React Query', 'Framer Motion'],
		collaborators: [
			{ ...manuelDiamond, role: 'Fullstack' },
			{ ...christopherOdor, role: 'System Design' }
		]
	},
	{
		name: "Bluewhale's CRM",
		description:
			"A customized CRM fork that captures leads from BlueWhales's RealEstate website opportunities, and sales. It features a dashboard, CRM, sales, marketing, and customer service modules.",
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		tags: ['CRM', 'System Customization', 'Meta Ads Integration'],
		images: [
			'/Labadi/dash.webp',
			'/Labadi/leads.webp',
			'/Labadi/lead view page.webp',
			'/Labadi/create mail.webp',
			'/Labadi/mails.webp',
			'/Labadi/email-signature.webp',
			'/Labadi/notifications.webp',
			'/Labadi/login.webp'
		],
		techstack: ['Laravel', 'Vue', 'Krayin'],
		collaborators: [manuelDiamond, christopherOdor],
		additionalLinks: [
			{
				label: 'Krayin Repo(Not customized)',
				url: 'https://github.com/krayin/krayin-docker'
			}
		]
	},
	{
		name: 'Dental Website',
		description:
			'A Dental website template developed for TE Sites. It features a responsive design, contact form and a Book Appointment Form which feeds into the TE Sites Appointment Booking system',
		client: { name: 'TE Sites', url: 'https://tesites.online' },
		clientLabel: 'Built under',
		tags: ['Website', 'SMS Integration'],
		images: [
			'/TE Sites/homepage.webp',
			'/TE Sites/1780866349.webp',
			'/TE Sites/get in touch.webp',
			'/TE Sites/1780866376.webp',
			'/TE Sites/1780866354.webp',
			'/TE Sites/1780866397.webp',
			'/TE Sites/footer.webp'
		],
		url: 'https://demo.tesites.online',
		techstack: ['Next.js', 'TypeScript'],
		collaborators: [manuelDiamond]
	},
	{
		name: 'TE Sites Appointment Booking System',
		description:
			'A Dental Management System for TE Sites. It features a micro CRM, for keeping and accessing customer records, micro CMS for updating some content and blogs for the website, and most importantly SMS notifications for both the customer and the dental practice to keep up with appointments',
		client: { name: 'TE Sites', url: 'https://tesites.online' },
		clientLabel: 'Built under',
		tags: ['SMS Integration', 'CRM Tools', 'CMS Tools'],
		images: [
			'/TE Sites/te-appointmentsdash.webp',
			'/TE Sites/te-appointments1780879297.webp',
			'/TE Sites/te-appointments1780879291.webp',
			'/TE Sites/te-appointments1780879271.webp',
			'/TE Sites/te-appointments1780879234.webp'
		],
		techstack: ['Next.js', 'TypeScript', 'SMS API'],
		collaborators: [manuelDiamond]
	},
	{
		name: 'Church Management System',
		description:
			'An administrative dashboard for managing the church members, groups and activities. It features a dashboard, member management, church groups & ministires, church events, and a communications module for broadcasting messages to all church members',
		client: { name: 'Newness Chapel' },
		clientLabel: 'Built for',
		tags: ['Administrative Dashboard', 'Records keeping System'],
		images: [
			'/ChMS/1780881442.webp',
			'/ChMS/1780881426.webp',
			'/ChMS/1780881414.webp',
			'/ChMS/1780881356.webp',
			'/ChMS/1780881351.webp',
			'/ChMS/chms-login.webp',
			'/ChMS/dash.webp'
		],
		techstack: ['React', 'Express', 'MongoDB', 'Chart.js'],
		collaborators: [manuelDiamond, { name: 'Amuzu Daniel', url: 'https://github.com/Ludaprince' }]
	},
	{
		name: 'FirstBank Online Money Transfer',
		description:
			"A demo website for FirstBank's cross country money transfer system. It included an admin Dashboard with  Developed under ITANDT Solutions in 2023.",
		client: { name: 'ITANDT Solutions', url: 'https://itandtsolutions.net' },
		clientLabel: 'Built under',
		tags: ['Website', 'Admin Dashboard'],
		images: [
			'/FirstOnline/1780880656.webp',
			'/FirstOnline/1780880645.webp',
			'/FirstOnline/1780880527.webp',
			'/FirstOnline/1780880466.webp',
			'/FirstOnline/1780880446.webp',
			'/FirstOnline/dashboard2.webp',
			'/FirstOnline/dashboard1.webp',
			'/FirstOnline/frontpage-2.webp',
			'/FirstOnline/converterwidget.webp',
			'/FirstOnline/hero.webp'
		].reverse(),
		techstack: ['Next.js', 'Framer Motion'],
		collaborators: [
			manuelDiamond,
			{ name: 'Ezra Erewharighe', url: 'https://github.com/TheShagwell' }
		]
	},
	{
		name: 'Logistics Management System',
		description:
			'A logistics management system that allows for tracking and managing of goods and services. It features a dashboard, a tracking system, and a reporting module for tracking and analyzing goods and services.',
		client: { name: 'Secure Cargo' },
		clientLabel: 'Built for',
		tags: ['Logistics Management System', 'Dashboard', 'Tracking System'],
		images: [
			'/LogisticsSystem/dash.webp',
			'/LogisticsSystem/login.webp',
			'/LogisticsSystem/1780886561.webp',
			'/LogisticsSystem/1780886528.webp'
		],
		techstack: ['React', 'React Hook Form', 'Framer Motion', 'Fuse.js'],
		collaborators: [
			{ ...manuelDiamond, role: 'Frontend' },
			{ name: 'Ali Seidu', url: 'https://github.com/aliseidu8855', role: 'Backend' }
		]
	},
	{
		name: 'Gift-Beneficiary System',
		description:
			'A web app that allows Churches to view and manage items available for destribution and their beneficiaries. distributions. It features a dashboard, a distribution management system, and a reporting module for tracking and analyzing distributions.',
		client: { name: 'ITANDT Solutions', url: 'https://itandtsolutions.net' },
		clientLabel: 'Built under',
		tags: ['Distribution Management', 'Barcode Scanner'],
		images: [
			'/Gifts-System/dona.webp',
			'/Gifts-System/idcard.webp',
			'/Gifts-System/create beneficiary.webp',
			'/Gifts-System/main.webp',
			'/Gifts-System/1780878962.webp',
			'/Gifts-System/1780878949.webp',
			'/Gifts-System/1780878887.webp',
			'/Gifts-System/login.webp'
		],
		techstack: ['Next.js', 'Framer Motion', 'React Hook Form', 'Barcode Scanner'],
		collaborators: [manuelDiamond, { name: 'Danny Starz', url: 'https://github.com/Dannystarrz' }]
	},
	{
		name: 'Tasty Chef',
		description:
			'A demo web app that allows users to place orders for food online. It includes, a product catalogue, a shopping cart, and a checkout page.',
		client: { name: 'Demo Project' },
		clientLabel: 'Built as',
		tags: ['Food Ordering App', 'Paystack Payment', 'Mobile First Design', 'Next.js'],
		images: [
			'/TastyChef/tasty.webp',
			'/TastyChef/favourites.webp',
			'/TastyChef/detail.webp',
			'/TastyChef/auth.webp'
		],
		url: 'https://tastychef.vercel.app/',
		techstack: ['Next.js', 'Paystack'],
		collaborators: [{ ...manuelDiamond, role: 'Main' }, { name: 'Tabi Malik' }]
	}
];
