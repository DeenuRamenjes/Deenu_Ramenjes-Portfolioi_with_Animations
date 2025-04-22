"use client"

import React, { useEffect, useRef } from 'react'

const RevealOnScroll = ({children}:{children:React.ReactNode}) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                element.classList.add('visible')
            }
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px"
        })

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return <div ref={ref} className='reveal'>{children}</div>
}

export default RevealOnScroll