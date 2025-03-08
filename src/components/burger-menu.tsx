"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSidebar } from "./ui/sidebar";
import { useState } from "react";

interface BurgerMenuProps {
    className?: string;
}


export function BurgerMenu({ className }: BurgerMenuProps){
    const { toggleSidebar, openMobile } = useSidebar();
    const [ isHovered, setIsHovered ] = useState(false);
    // Variants for the burger menu lines
    const topLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 6 },
        hover: { y: -1 },
    }

    const middleLineVariants = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
        hover: { x: isHovered ? -2 : 0 },
    }

    const bottomLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -6 },
        hover: { y: 1 },
    }
    return (
        <motion.button
            className={cn("flex justify-center items-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50", className)}
            onClick={toggleSidebar}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            aria-label="Toggle menu"
            initial="close"
            animate={openMobile ? "open" : isHovered ? "hover" : "closed"}
            whileTap={{ scale: 0.95 }}
        >
            <div className="h-6 w-5 flex flex-col justify-between">
                <motion.div 
                    className="w-full h-0.5 bg-primary rounded-full"
                    variants={topLineVariants}
                    transition={{ duration: 0.2 }}
                />
                <motion.div 
                    className="w-full h-0.5 bg-primary rounded-full"
                    variants={middleLineVariants}
                    transition={{ duration: 0.2 }}
                />
                <motion.div 
                    className="w-full h-0.5 bg-primary rounded-full"
                    variants={bottomLineVariants}
                    transition={{ duration: 0.2 }}
                />
            </div>
        </motion.button>
    )
}