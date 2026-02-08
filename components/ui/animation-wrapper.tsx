"use client"

import { motion, useInView, Variant, HTMLMotionProps } from "framer-motion"
import { useRef, ReactNode } from "react"

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    direction?: "up" | "down" | "left" | "right" | "none"
    delay?: number
    duration?: number
    className?: string
    once?: boolean
}

export function FadeIn({
    children,
    direction = "up",
    delay = 0,
    duration = 0.5,
    className = "",
    once = true,
    ...props
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    delay?: number
    staggerChildren?: number
    className?: string
    once?: boolean
}

export function StaggerContainer({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className = "",
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: staggerChildren,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
