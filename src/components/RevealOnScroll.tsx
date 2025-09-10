"use client"

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type RevealDirection = 'left' | 'right' | 'up' | 'down' | 'none'

interface RevealOnScrollProps {
    children: React.ReactNode;
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    className?: string;
}

const RevealOnScroll = ({
    children,
    direction = 'none',
    delay = 0,
    duration = 0.5,
    className = ''
}: RevealOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null)
    
    // Define initial and animate states based on direction
    const getVariants = () => {
        const distance = 50;
        
        const initialStates = {
            left: { x: -distance, opacity: 0 },
            right: { x: distance, opacity: 0 },
            up: { y: distance, opacity: 0 },
            down: { y: -distance, opacity: 0 },
            none: { opacity: 0 }
        };
        
        return {
            hidden: initialStates[direction],
            visible: { 
                x: 0, 
                y: 0, 
                opacity: 1,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        };
    };

    return (
        <motion.div
            ref={ref}
            className={`reveal ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={getVariants()}
        >
            {children}
        </motion.div>
    );
}

export default RevealOnScroll