type Project = {
	name: string;
	description: string | string[];
	tags: string[];
	client: string;
	url?: string;
	images: string[];
	techstack?: string[];
	technical_description?: [];
	additionalLinks?: { url: string; label: string }[];
	collaborators?: string[];
};

/*
	* {
	* }
	* ,{
		name:"Living Stars School Website",
		description:"Website for a primary and secondary school in Nigeria. The website features live blogs section, Virtual tour of the school environment,",
		client: 'Living Stars School',
		tags:[
			"Responsive Design", " 
		],
		images:[],
		url:"l",
	},*/

export const projects: Project[] = [
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
		url: 'https://curverentals.com'
	},
	{
		name: 'Curve Bookings',
		description:
			'A app that helps university students finding hostels and apartments for rent around their university. It provides them details like pricing, location, room availability, occupancy, amantities, distance to campus, etc. It fetures a slot booking system for managing availabiliy. The system includes a Hostel Management System as an administrative dashboard to manage the application.',
		tags: ['Hostel Management System', 'Dashboard', 'Secure Payments'],
		client: 'Curve Labz',

		images: [
			'/Curve/curvebookings-1780887823.png',
			'/Curve/curvebookings-1780887719.png',
			'/Curve/curvebookings-1780887641.png',
			'/Curve/curvebookings-1780887595.png',
			'/Curve/curvebookings-1780887584.png',
			'/Curve/curvebookings-1780887530.png',
			'/Curve/curvebookings-1780887505.png'
		].reverse(),
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
		description: 'A website for one the logistics subsidiary of RS group of companies.',
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
		images: [
			'/RS/notify-dash.png',
			'/RS/notify-contacts.png',
			'/RS/notify message.png',
			'/RS/notify-select.png'
		]
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
		images: [
			'/AREF/checkin-typing.png',
			'/AREF/pincode.png',
			'/AREF/card-back.png',
			'/AREF/card-front.png',
			'/AREF/adminpaga.png',
			'/AREF/loginadmin.png',
			'/AREF/checkin home.png',
			'/AREF/set-code.png'
		]
	},
	{
		name: "Bluewhale's CRM",
		description:
			"A customized CRM fork that captures leads from BlueWhales's RealEstate website opportunities, and sales. It features a dashboard, CRM, sales, marketing, and customer service modules.",
		client: 'BlueWhale, under CurveLabz',
		tags: ['CRM', 'System Customization', 'Meta Ads Integration', 'Laravel', 'Vue'],
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
		client: 'TE Sites',
		tags: ['Website', 'Responsive Design', 'Cloudflare', 'SMS Integration'],
		images: [
			'/TE Sites/homepage.png',
			'/TE Sites/1780866349.png',
			'/TE Sites/get in touch.png',
			'/TE Sites/1780866376.png',
			'/TE Sites/1780866354.png',
			'/TE Sites/1780866397.png',
			'/TE Sites/footer.png'
		],
		url: 'https://demo.tesites.online'
	},
	{
		name: 'TE Sites Appointment Booking System',
		description:
			'A Dental Management System for TE Sites. It features a micro CRM, for keeping and accessing customer records, micro CMS for updating some content and blogs for the website, and most importantly SMS notifications for both the customer and the dental practice to keep up with appointments',
		client: 'TE Sites',
		tags: ['SMS Integration', 'CRM Tools', 'CMS Tools', 'Fullstack Development'],
		images: [
			'/TE Sites/te-appointmentsdash.png',
			'/TE Sites/te-appointments1780879297.png',
			'/TE Sites/te-appointments1780879291.png',
			'/TE Sites/te-appointments1780879271.png',
			'/TE Sites/te-appointments1780879234.png'
		]
	},

	/*{
		name:"SarfoVerse Portfolio",
		description:"A personal portfolio website for a Sarfo, a copywriter. It features a blog which displays live data from substack, a portfolio, and a contact form with SMS notifications.",
		client: 'Mikegold Sarfo Ashong Listowell',
		tags:[
			"Blog",
			"Substack",
			"Portfolio",
			"Contact Form",
			"SMS Notifications",
		],
		url:"sarfoverse.online",
		images:[],
	}*/ {
		name: 'Church Management System',
		description:
			'An administrative dashboard for managing the church members, groups and activities. It features a dashboard, member management, church groups & ministires, church events, and a communications module for broadcasting messages to all church members',
		client: 'Newness Chapel',
		tags: ['Administrative Dashboard', 'Records keeping System'],
		images: [
			'/ChMS/1780881442.png',
			'/ChMS/1780881426.png',
			'/ChMS/1780881414.png',
			'/ChMS/1780881356.png',
			'/ChMS/1780881351.png',
			'/ChMS/chms-login.png',
			'/ChMS/dash.png'
		]
	},
	{
		name: 'FirstBank Online Money Transfer',
		description:
			"A demo website for FirstBank's cross country money transfer system. It included an admin Dashboard with  Developed under ITANDT Solutions in 2023.",
		client: 'FirstBank Nigeria, under ITANDT Solutions',
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
		].reverse()
	},
	{
		name: 'Logistics Management System',
		description:
			'A logistics management system that allows for tracking and managing of goods and services. It features a dashboard, a tracking system, and a reporting module for tracking and analyzing goods and services.',
		client: 'RMB Logistics',
		tags: ['Logistics Management System', 'Dashboard', 'Tracking System'],
		images: [
			'/LogisticsSystem/dash.png',
			'/LogisticsSystem/login.png',
			'/LogisticsSystem/1780886561.png',
			'/LogisticsSystem/1780886528.png'
		]
	},
	{
		name: 'Gift-Beneficiariy System',
		description:
			'A web app that allows Churches to view and manage items available for destribution and their beneficiaries. distributions. It features a dashboard, a distribution management system, and a reporting module for tracking and analyzing distributions.',
		client: ' Under ITANDT Solutions',
		tags: ['Church Management System', 'Barcode Scanner'],
		images: [
			'/Gifts-System/dona.png',
			'/Gifts-System/idcard.png',
			'/Gifts-System/create beneficiary.png',
			'/Gifts-System/main.png',
			'/Gifts-System/1780878962.png',
			'/Gifts-System/1780878949.png',
			'/Gifts-System/1780878887.png',
			'/Gifts-System/login.png'
		]
	},
	{
		name: 'Tasty Chef',
		description:
			'A demo web app that allows users to place orders for food online. It includes, a product catalogue, a shopping cart, and a checkout page. This was one of my early stage projects developed for a university presentation.',
		client: 'Demo',
		tags: ['Food Ordering App', 'Paystack Payment', 'Mobile First Design', 'NextJS'],
		images: [
			'/TastyChef/tasty.jpeg',
			'/TastyChef/favourites.jpg',
			'/TastyChef/detail.jpg',
			'/TastyChef/auth.jpg'
		],
		url: 'https://tastychef.vercel.app/'
	}
];
