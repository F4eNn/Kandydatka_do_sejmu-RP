import React from 'react'

import { Wrapper } from '../ui/Wrapper'
import { priorities } from '@/constants/priorities'
import { PrioritieCard } from '../ui/PrioritieCard'
import { Heading } from '../ui/Heading'

export const Priorities = () => {
	return (
		<section className=' custom-shadow overflow-x-hidden relative mx-3 mt-[820px] rounded-xl bg-white py-20 md:mt-[290px] lg:mx-8  lg:mt-[390px] lg:rounded-lg lg:py-32 '>
			<Wrapper>
				<div>
					<Heading as='h2' className='mb-16 text-3xl lg:mb-32 lg:text-5xl'>
						Moje priorytety
					</Heading>
					<div className=' space-y-20 lg:space-y-28 w-full'>
						{priorities.map((items, idx) => {
							if (idx % 2 !== 0) {
								return <PrioritieCard key={idx} {...items} axeX='40px' bg='bg-secondary' marginLeft='ml-auto' />
							}
							return <PrioritieCard key={idx} {...items} axeX='-40px' />
						})}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
