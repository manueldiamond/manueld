import { SiGithub, SiInstagram, SiWhatsapp, SiX, SiYoutube } from '@icons-pack/svelte-simple-icons';
import { Mail, Phone } from 'lucide-svelte';

export const contact = {
	email: 'info@manueldiamond.com',
	phoneno: '+233539512886'
};

export const contactDetails = [
	{ url: 'mailto:info@manueldiamond.com', icon: Mail, label: 'info@manueldiamond.com', wide: true },
	{
		url: 'mailto:manueldiamondlistowell@gmail.com',
		icon: Mail,
		label: 'manueldiamondlistowell@gmail.com',
		wide: true
	},
	{ url: 'tel:+233539512886', icon: Phone, label: '(+233) 53 951 2886' },
	{ url: 'https://wa.me/+233539512886', icon: SiWhatsapp, label: 'Whatsapp' },
	{ url: 'https://x.com/manuel_diamond', icon: SiX, label: '@manuel_diamond' },
	{ url: 'https://github.com/manueldiamond', icon: SiGithub, label: 'manueldiamond' },
	{
		url: 'https://www.instagram.com/manuel.diamond/',
		icon: SiInstagram,
		label: '@manuel.diamond'
	},
	{ url: 'https://www.youtube.com/channel/@manueldiamond', icon: SiYoutube, label: 'YouTube' }
];
