"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary"
                        >
                            <span className="font-heading text-3xl font-bold text-primary-foreground">
                                M
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-1 w-32 overflow-hidden rounded-full bg-muted"
                        >
                            <div className="h-full w-full bg-primary" />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
