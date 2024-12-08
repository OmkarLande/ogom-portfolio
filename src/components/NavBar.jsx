'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
// import { DropDown } from './DropDown'
import { motion } from "framer-motion"
import UpperNav from './UpperNav'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


export const NavBar = () => {


    return (
        <nav className=" p-4 flex items-center justify-around relative">
            <Link href="/">
                <Logo />
            </Link>

            <div className={` flex-col md:flex-row gap-5 flex items-center md:flex `}>
                {/* <NavLeft /> */}
                <UpperNav />
            </div>
        </nav>
    )
}

//nav left
const NavLeft = () => {
    return (
        <>
            <Link href="/projects">
                <motion.div
                    whileHover={{ scale: 1.25, color: "#F67831", rotate: "-1.2deg" }}
                    whileTap={{ scale: 0.95, rotate: "5deg" }}
                    transition={{
                        duration: 0.125,
                        ease: "easeInOut"
                    }}
                >
                    Projects
                </motion.div>
            </Link>
            <Link href="/skills">
                <motion.div
                    whileHover={{ scale: 1.25, color: "#F67831", rotate: "-1.2deg" }}
                    whileTap={{ scale: 0.95, rotate: "5deg" }}
                    transition={{
                        duration: 0.125,
                        ease: "easeInOut"
                    }}
                >
                    Skills
                </motion.div>
            </Link>
            <Link href="/experience">
                <motion.div
                    whileHover={{ scale: 1.25, color: "#F67831", rotate: "-1.2deg" }}
                    whileTap={{ scale: 0.95, rotate: "5deg" }}
                    transition={{
                        duration: 0.125,
                        ease: "easeInOut"
                    }}
                >
                    Experience
                </motion.div>
            </Link>
            <Link href="/contact">
                <motion.div
                    whileHover={{ scale: 1.25, color: "#F67831", rotate: "-1.2deg" }}
                    whileTap={{ scale: 0.95, rotate: "5deg" }}
                    transition={{
                        duration: 0.125,
                        ease: "easeInOut"
                    }}
                >
                    Contact
                </motion.div>
            </Link>
            {/* dropdown */}
            <motion.div
                whileHover={{ scale: 1.25, color: "#F67831", rotate: "-1.2deg" }}
                whileTap={{ scale: 0.95, rotate: "5deg" }}
                transition={{
                    duration: 0.125,
                    ease: "easeInOut"
                }}
            >
                {/* <DropDown /> */}
            </motion.div>
        </>
    )
}

//logo
const Logo = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
        >
            <Image
                src="/logo.svg"
                alt="logo"
                width={80}
                height={80}
            />
        </motion.div>
    )
}
