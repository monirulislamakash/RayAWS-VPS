'use client'

import { motion } from 'framer-motion'

export default function AnimateContainer({ children, direction }: { children: React.ReactNode, direction?: 'downToUp' | 'rightToLeft' | 'leftToRight' }) {

    const downToUp = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.5 }
    }

    const rightToLeft = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.5 }
    }

    const leftToRight = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.5 }
    }



    return <motion.div 
        initial={direction === 'downToUp' ? downToUp.initial : direction === 'rightToLeft' ? rightToLeft.initial : leftToRight.initial}
        whileInView={direction === 'downToUp' ? downToUp.animate : direction === 'rightToLeft' ? rightToLeft.animate : leftToRight.animate}
        viewport={{ once: true }}
        transition={direction === 'downToUp' ? downToUp.transition : direction === 'rightToLeft' ? rightToLeft.transition : leftToRight.transition}
    
        
    >{children}</motion.div>
}