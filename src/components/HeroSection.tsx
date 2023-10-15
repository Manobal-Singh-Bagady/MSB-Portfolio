import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { DownloadIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { TypeAnimation } from 'react-type-animation'
import TyperAnimation from './TyperAnimation'

const HeroSection = () => {
	return (
		<section>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className='scroll-m-20 text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-300'>
							Hello, I&apos;m
						</span>{' '}
						<br />
						<TyperAnimation />
						{/* Manobal */}
					</h1>
					<p className='leading-7 mb-6 [&:not(:first-child)]:mt-6 text-gray-400 sm:text-lg lg:text-xl'>
						I love developing Full-Stack Web Applications,
						Open-Source, Bleeding edge technologies and Anime.
					</p>
					<div className='flex gap-2'>
						<Button className='w-full sm:w-fit'>Connect</Button>
						<Button className='w-full sm:w-fit' variant='secondary'>
							<DownloadIcon className='me-1' /> Resume
						</Button>
					</div>
				</div>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-gray-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
						<Image
							src='/images/hero_emoji_1-removebg-preview.png'
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
							alt='hero emoji png'
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
