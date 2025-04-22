import React from 'react'

const SectionHeader = ({
    title,
    eyebrow,
    description,
}:{
    title: string,
    eyebrow: string,
    description: string
}) => {
  return (
    <>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r 
          from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif font-medium text-3xl md:text-5xl text-center mt-6">
          {title}
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md lg:text-xl mx-auto">
          {description}
        </p>
    </>
  )
}

export default SectionHeader