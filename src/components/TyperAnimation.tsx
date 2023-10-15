'use client'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const TyperAnimation = () => {
	const [textColor, setTextColor] = useState('pink-600')
	return (
		<div className={`w-[310px] sm:w-auto text-${textColor}`}>
			<TypeAnimation
				sequence={[
					'Manobal',
					3000,
					() => setTextColor('white'),
					'A Web Developer,',
					1500,
					'A Python Programmer,',
					1500,
					'An Electrical Engineer,',
					1500,
					'An Otaku,',
					1500,
					() => setTextColor('yellow-300'),
					'A Nerd.',
					2000,
					() => setTextColor('pink-600'),
				]}
				wrapper='span'
				cursor={true}
				repeat={Infinity}
				className='scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mb-4'
			/>
		</div>
	)
}

export default TyperAnimation
