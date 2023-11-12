import { ThemeProvider } from '@/components/theme-provider'
import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'MSB',
	icons: { icon: '/favicons/favicon.ico' },
	description:
		'Manobal Singh Bagady | A developer from India. Welcome to my portfolio website, where you can find out more about me and my work as a web developer. I am Manobal Singh Bagady, a developer from India who is proficient in web development with NextJS.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return <html lang='en'>
		<body className={inter.className}>
			<ThemeProvider attribute='class' defaultTheme='dark'>
				{children}
			</ThemeProvider>
		</body>
	</html>
}
