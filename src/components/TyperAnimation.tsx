'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TyperAnimation = () => {
	return (
		<div>
			<TypeAnimation
				sequence={[
					'Manobal',
					2000,
					'A Web Developer',
					2000,
					'An Electrical Engineer',
					2000,
					'An Otaku',
					2000,
				]}
				wrapper='span'
				cursor={true}
				repeat={Infinity}
				className='scroll-m-20 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-4'
			/>
		</div>
	)
}

export default TyperAnimation
