import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Navbar from '@/components/Navbar'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Navbar />

			<div className='container mx auto py-4 px-12'>
				<HeroSection />
			</div>
		</main>
	)
}
