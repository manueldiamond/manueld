export type Collaborator = {
	name: string;
	url?: string;
	role?: string;
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
	technical_description?: [];
	additionalLinks?: { url: string; label: string }[];
	collaborators?: Collaborator[];
};

export const projects: Project[] = [
	{
		name: 'BridgeX Mobile App',
		description:
			'A services marketplace that allows users to request services, find work and connect with local artisans nearby. A 2-in-one platform for Service Users and Service Providers. Features realtime notifications and location tracking. ',
		tags: [
			'Android',
			'iOS',
			'Fullstack Development',
			'Location Based',
			'Realtime Systems',
			'Chat Systems',
			'Dual User Application'
		],
		client: { name: 'Bridge and Ladder Synergy', url: 'https://bridgexng.com' },
		clientLabel: 'Built for',
		url: 'https://bridgexng.com',
		images: [
			'/bridge/bridgex-home.png',
			'/bridge/create req.jpeg',
			'/bridge/chatpage.png',
			'/bridge/sidebar.jpeg'
		],
		techstack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express'],
		collaborators: [
			{ name: 'Manuel Diamond', role: 'Fullstack' },
			{ name: 'Likem Dzokoto', url: 'https://github.com/LikemDzokoto', role: 'Backend' },
			{ name: 'Abdul Shakur', url: 'https://drpawgh.com', role: 'UI/UX' }
		]
	},
	{
		name: 'BridgeX Website',
		description:
			'A website for the BridgeX mobile app. A 2-in-one platform for Service Users and Service Providers.',
		tags: ['Website', 'Next.js', 'Responsive Design', 'Blog'],
		client: { name: 'Bridge and Ladder Synergy', url: 'https://bridgexng.com' },
		clientLabel: 'Built for',
		url: 'https://bridgexng.com',
		images: [
			'/bridge/download page.png',
			'/bridge/brig web home.png',
			'/bridge/get-help.png',
			'/bridge/download card.png'
		],
		techstack: ['Next.js', 'TypeScript'],
		collaborators: [{ name: 'Manuel Diamond' }]
	},
	{
		name: 'BridgeX Admin Dashboard',
		description:
			'Admin dashboard for managing the BridgeX mobile app. A 2-in-one platform for Service Users and Service Providers.',
		tags: ['Analytics', 'Platform Management', 'Fullstack Development', 'Admin Dashboard'],
		client: { name: 'Bridge and Ladder Synergy', url: 'https://bridgexng.com' },
		clientLabel: 'Built for',
		images: [
			'/bridge/bx-admin-home.png',
			'bridge/1780698699.png',
			'/bridge/1780698679.png',
			'/bridge/1780698668.png',
			'/bridge/1780698660.png',
			'/bridge/bxadmin-pies.png'
		],
		techstack: ['React', 'TypeScript', 'Node.js'],
		collaborators: [
			{ name: 'Manuel Diamond', role: 'Fullstack' },
			{ name: 'Likem Dzokoto', url: 'https://github.com/LikemDzokoto', role: 'Backend' },
			{ name: 'Abdul Shakur', url: 'https://drpawgh.com', role: 'UI/UX' }
		]
	},
	{
		name: 'Curve Rentals App',
		description: 'A web app that allows users to rent out their spare time to other users.',
		tags: ['AI Chatbot', 'Fullstack Development', 'Admin Dashboard'],
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		images: [
			'https://curvelabz.com/wp-content/uploads/2026/03/Screenshot-2026-03-18-at-4.54.39-PM-scaled-e1773853271695-768x406.png'
		],
		url: 'https://curverentals.com',
		techstack: ['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'AI SDK', 'Cloudinary'],
		collaborators: [{ name: 'Manuel Diamond' }]
	},
	{
		name: 'Curve Bookings',
		description:
			'A app that helps university students finding hostels and apartments for rent around their university. It provides them details like pricing, location, room availability, occupancy, amantities, distance to campus, etc. It fetures a slot booking system for managing availabiliy. The system includes a Hostel Management System as an administrative dashboard to manage the application.',
		tags: ['Hostel Management System', 'Dashboard', 'Secure Payments'],
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		images: [
			'/Curve/curvebookings-1780887823.png',
			'/Curve/curvebookings-1780887719.png',
			'/Curve/curvebookings-1780887641.png',
			'/Curve/curvebookings-1780887595.png',
			'/Curve/curvebookings-1780887584.png',
			'/Curve/curvebookings-1780887530.png',
			'/Curve/curvebookings-1780887505.png'
		].reverse(),
		url: 'https://curvebookings.vercel.app',
		techstack: ['React', 'Next.js', 'TypeScript', 'Paystack', 'Motion'],
		collaborators: [
			{ name: 'Manuel Diamond', role: 'Lead' },
			{ name: 'Ali Seidu', url: 'https://github.com/aliseidu8855', role: 'Backend' },
			{ name: 'Joseph Mawuli', url: 'https://github.com/orgs/curvebookings/people/MawuliMyth', role: 'Mobile' },
			{ name: 'Isaac Aheto', url: 'https://curvelabz.com' },
			{ name: 'Christopher Odor', url: 'https://curvelabz.com' }
		]
	},
	{
		name: 'Vehiville Web (v1)',
		description:
			'Early stage development of Vehiville. A vehicle solutions platform allowing for rentals, sales and maintenance of vehicles. This project(v1) was discontinued in favour a mobile application.',
		tags: ['Custom Wordpress Code', 'PHP', 'Database Design', 'Secure Payment'],
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		url: 'https://rsvehiville.rsgroupgh.com/',
		images: [
			'/vehiville/rs-vehiville6.png',
			'/vehiville/rs-vehiville4.png',
			'/vehiville/rs-vehiville7.png'
		],
		techstack: ['WordPress', 'PHP', 'Paystack'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Isaac Aheto' },
			{ name: 'Christopher Odor' }
		]
	},
	{
		name: 'Enterprise Resource Planning System',
		description:
			'The deployment and customization of an ERP System for internal operations at RS Group. This project involved cloud systems config, server ',
		tags: ['Cloud System Deployment', 'Server Configuration', 'ERP Deployment'],
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Deployed under',
		images: ['/rserp.png'],
		techstack: ['Frappe', 'Docker', 'Nginx', 'ERPNext'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Oscar Denfu' },
			{ name: 'Programming Sai' },
			{ name: 'Raymond Jnr' },
			{ name: 'Michael Gyamfi' },
			{ name: 'Christopher Odor' },
			{ name: 'Isaac Aheto' },
			{ name: 'Dominic Kobina Aidoo', url: 'https://github.com/Gen3ratorX' }
		]
	},
	{
		name: 'RS Lantern',
		description: 'A website for one the logistics subsidiary of RS group of companies.',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		url: 'https://rslantern.rsgroupgh.com/',
		tags: ['Wordpress', 'Frontend Development', 'Responsive Design'],
		images: ['/rs-lantern.png'],
		techstack: ['WordPress', 'PHP'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Isaac Aheto' },
			{ name: 'Christopher Odor' }
		]
	},
	{
		name: 'AI powered Website Chatbot',
		description:
			'A chatbot that reads business informations, captures lead data and answers users questions with accurate business information.  It also gives helpful links to pages on the website and recommended follow-up questions for the user. The AI is trained on the as much business information as is provided. This is a custom coded wordpress plugin and as such can be added onto any website.',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		tags: ['AI Chatbot', 'Wordpress', 'Lead Capture', 'CRM', 'Fullstack Development', 'PHP'],
		images: ['/rs-chatbot.png'],
		url: 'https://rsgroupgh.com/',
		techstack: ['PHP', 'WordPress', 'AI'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Isaac Aheto' },
			{ name: 'Christopher Odor' }
		]
	},
	{
		name: 'RS Notify',
		description:
			'A micro crm tool that allows managing and grouping customers and staff in an organisation for easy communication. The system supports SMS and Email message broadcasts for customers, staff memebers and curated groups. It handles automatically scheduled messaging, Marketing campaigns and Birthday Messages',
		tags: ['CRM Tools', 'SMS Integration', 'Fullstack Development'],
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		images: [
			'/RS/notify-dash.png',
			'/RS/notify-contacts.png',
			'/RS/notify message.png',
			'/RS/notify-select.png'
		],
		techstack: ['React', 'Supabase', 'TanStack Query', 'Recharts'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Isaac Aheto' },
			{ name: 'Christopher Odor' }
		]
	},
	{
		name: 'Vehiville Web (v2)',
		description:
			'A vehicle solutions platform allowing users to buy, rent, sell and request maintenance of their vehicles. It features a dual user system for regular users to buy and rent, as well as for dealers to list their vehicles on the platform. This is the success or the the original project(v2) and is in active development. Team developed',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
		tags: ['Database Design', 'Secure Payment', 'KYC integration'],
		images: [
			'/vehiville/vehiville-v2-car-sale.png',
			'/vehiville/vehivilleV2-main.png',
			'/vehiville/vehivilleV2-1780710011.png',
			'/vehiville/vehivilleV2-1780709992.png'
		],
		url: 'https://vehiville.com/',
		techstack: ['React', 'Supabase', 'TanStack Query', 'TanStack Table', 'Hook Form'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Oscar Denfu', role: 'Main' },
			{ name: 'Programming Sai' },
			{ name: 'Raymond Jnr' },
			{ name: 'Michael Gyamfi' }
		]
	},
	{
		name: 'Vehiville Admin System (v2)',
		description:
			'Under the new development of Vehiville, a dedicated administrative platform designed to manage users, compliance, vehicles, rentals, sales, business algorithm constraints,  and maintenance of vehicles. This project(v2) was discontinued in favour a mobile application',
		client: { name: 'RS Group of Companies', url: 'https://rsgroupgh.com' },
		clientLabel: 'Built under',
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
		],
		techstack: ['React', 'Supabase', 'TanStack Query', 'TanStack Table', 'Hook Form'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Oscar Denfu' },
			{ name: 'Christopher Odor' },
			{ name: 'Programming Sai' },
			{ name: 'Michael Gyamfi' },
			{ name: 'Raymond Jnr' }
		]
	},
	{
		name: 'AREF 2026 Admission Portal',
		description:
			'Fullstack development of the ticket validation and management system for the biggest real estate event in Africa (Africa Real Estate Festival 2026). ',
		tags: ['Event Ticket Management System', 'Laravel', 'Fullstack Development'],
		client: { name: 'Curve Labz', url: 'https://curvelabz.com' },
		clientLabel: 'Built under',
		images: [
			'/AREF/checkin-typing.png',
			'/AREF/pincode.png',
			'/AREF/card-back.png',
			'/AREF/card-front.png',
			'/AREF/adminpaga.png',
			'/AREF/loginadmin.png',
			'/AREF/checkin home.png',
			'/AREF/set-code.png'
		],
		techstack: ['React', 'PHP', 'Laravel', 'React Query', 'Framer Motion'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Christopher Odor' }
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
			'/Labadi/dash.png',
			'/Labadi/leads.png',
			'/Labadi/lead view page.png',
			'/Labadi/create mail.png',
			'/Labadi/mails.png',
			'/Labadi/email-signature.png',
			'/Labadi/notifications.png',
			'/Labadi/login.png'
		],
		techstack: ['Laravel', 'Vue', 'Krayin'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Christopher Odor' }
		],
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
		tags: ['Website', 'Responsive Design', 'SMS Integration'],
		images: [
			'/TE Sites/homepage.png',
			'/TE Sites/1780866349.png',
			'/TE Sites/get in touch.png',
			'/TE Sites/1780866376.png',
			'/TE Sites/1780866354.png',
			'/TE Sites/1780866397.png',
			'/TE Sites/footer.png'
		],
		url: 'https://demo.tesites.online',
		techstack: ['Next.js', 'TypeScript'],
		collaborators: [{ name: 'Manuel Diamond' }]
	},
	{
		name: 'TE Sites Appointment Booking System',
		description:
			'A Dental Management System for TE Sites. It features a micro CRM, for keeping and accessing customer records, micro CMS for updating some content and blogs for the website, and most importantly SMS notifications for both the customer and the dental practice to keep up with appointments',
		client: { name: 'TE Sites', url: 'https://tesites.online' },
		clientLabel: 'Built under',
		tags: ['SMS Integration', 'CRM Tools', 'CMS Tools', 'Fullstack Development'],
		images: [
			'/TE Sites/te-appointmentsdash.png',
			'/TE Sites/te-appointments1780879297.png',
			'/TE Sites/te-appointments1780879291.png',
			'/TE Sites/te-appointments1780879271.png',
			'/TE Sites/te-appointments1780879234.png'
		],
		techstack: ['Next.js', 'TypeScript', 'SMS API'],
		collaborators: [{ name: 'Manuel Diamond' }]
	},
	{
		name: 'Church Management System',
		description:
			'An administrative dashboard for managing the church members, groups and activities. It features a dashboard, member management, church groups & ministires, church events, and a communications module for broadcasting messages to all church members',
		client: { name: 'Newness Chapel' },
		clientLabel: 'Built for',
		tags: ['Administrative Dashboard', 'Records keeping System'],
		images: [
			'/ChMS/1780881442.png',
			'/ChMS/1780881426.png',
			'/ChMS/1780881414.png',
			'/ChMS/1780881356.png',
			'/ChMS/1780881351.png',
			'/ChMS/chms-login.png',
			'/ChMS/dash.png'
		],
		techstack: ['React', 'Express', 'MongoDB', 'Chart.js'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Travis', url: 'https://github.com/manueldiamond' }
		]
	},
	{
		name: 'FirstBank Online Money Transfer',
		description:
			"A demo website for FirstBank's cross country money transfer system. It included an admin Dashboard with  Developed under ITANDT Solutions in 2023.",
		client: { name: 'ITANDT Solutions', url: 'https://itandtsolutions.net' },
		clientLabel: 'Built under',
		tags: ['Website', 'Admin Dashboard', 'Responsive Design'],
		images: [
			'/FirstOnline/1780880656.png',
			'/FirstOnline/1780880645.png',
			'/FirstOnline/1780880527.png',
			'/FirstOnline/1780880466.png',
			'/FirstOnline/1780880446.png',
			'/FirstOnline/dashboard2.png',
			'/FirstOnline/dashboard1.png',
			'/FirstOnline/frontpage-2.png',
			'/FirstOnline/converterwidget.png',
			'/FirstOnline/hero.png'
		].reverse(),
		techstack: ['Next.js', 'Framer Motion'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Mr. Ezrah', url: 'https://github.com/TheShagwell' }
		]
	},
	{
		name: 'Logistics Management System',
		description:
			'A logistics management system that allows for tracking and managing of goods and services. It features a dashboard, a tracking system, and a reporting module for tracking and analyzing goods and services.',
		client: { name: 'Secure Cargo' },
		clientLabel: 'Built under',
		tags: ['Logistics Management System', 'Dashboard', 'Tracking System'],
		images: [
			'/LogisticsSystem/dash.png',
			'/LogisticsSystem/login.png',
			'/LogisticsSystem/1780886561.png',
			'/LogisticsSystem/1780886528.png'
		],
		techstack: ['React', 'React Hook Form', 'Framer Motion', 'Fuse.js'],
		collaborators: [
			{ name: 'Manuel Diamond' },
			{ name: 'Ali Seidu', url: 'https://github.com/aliseidu8855' }
		]
	},
	{
		name: 'Gift-Beneficiariy System',
		description:
			'A web app that allows Churches to view and manage items available for destribution and their beneficiaries. distributions. It features a dashboard, a distribution management system, and a reporting module for tracking and analyzing distributions.',
		client: { name: 'ITANDT Solutions', url: 'https://itandtsolutions.net' },
		clientLabel: 'Built under',
		tags: ['Distribution Management', 'Barcode Scanner'],
		images: [
			'/Gifts-System/dona.png',
			'/Gifts-System/idcard.png',
			'/Gifts-System/create beneficiary.png',
			'/Gifts-System/main.png',
			'/Gifts-System/1780878962.png',
			'/Gifts-System/1780878949.png',
			'/Gifts-System/1780878887.png',
			'/Gifts-System/login.png'
		],
		techstack: ['Next.js', 'Framer Motion', 'React Hook Form', 'Barcode Scanner'],
		collaborators: [
			{ name: 'Manuel Diamond', url: 'https://manuel.tesites.online' },
			{ name: 'Danny Starz', url: 'https://github.com/Dannystarrz' }
		]
	},
	{
		name: 'Tasty Chef',
		description:
			'A demo web app that allows users to place orders for food online. It includes, a product catalogue, a shopping cart, and a checkout page. This was one of my early stage projects developed for a university presentation.',
		client: { name: '' },
		clientLabel: 'Demo',
		tags: ['Food Ordering App', 'Paystack Payment', 'Mobile First Design', 'Next.js'],
		images: [
			'/TastyChef/tasty.jpeg',
			'/TastyChef/favourites.jpg',
			'/TastyChef/detail.jpg',
			'/TastyChef/auth.jpg'
		],
		url: 'https://tastychef.vercel.app/',
		techstack: ['Next.js', 'Paystack'],
		collaborators: [
			{ name: 'Manuel Diamond', role: 'Main' },
			{ name: 'Tabi Malik' }
		]
	}
];
