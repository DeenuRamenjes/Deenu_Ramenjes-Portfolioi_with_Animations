import React from 'react'
import StarIcon from '@/assets/icons/star.svg'
import { twMerge } from 'tailwind-merge'


const Cardheader = ({title,discription,className}:{title:string ,discription:string,className?:string}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10",className)}>
        <div className="inline-flex items-center gap-2">
        <StarIcon className='size-9' />
        <h3 className="font-serif text-3xl">{title}</h3>
        </div>
        <p className="text-sm lg:text-base lg:max-w-sm text-white/60 mt-2 ">
            {discription}
        </p>
    </div >
  )
}

export default Cardheader