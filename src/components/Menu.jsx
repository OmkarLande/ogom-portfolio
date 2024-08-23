"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import "./Menu.css"
import Image from 'next/image'
import { color, motion } from 'framer-motion'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: '/experiences', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
];

export const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 });

        tl.current = gsap
            .timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });

    }, { scope: container })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Logo />
                </div>
                <motion.div
                    whileHover={{ scale: 1.25, color: "#F67831", rotate: "-1.2deg" }}
                    whileTap={{ scale: 0.95, rotate: "5deg" }}
                    transition={{
                        duration: 0.125,
                        ease: "easeInOut"
                    }}
                    className="menu-open" onClick={toggleMenu}
                >
                    Menu
                </motion.div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Logo />
                    </div>
                    <div
                        className="menu-close" onClick={toggleMenu}
                    >
                        <motion.p
                            whileHover={{ scale: 1.25, color: "#fff", rotate: "-1.2deg" }}
                            whileTap={{ scale: 0.95, rotate: "5deg", color: "#fff" }}
                            transition={{
                                duration: 0.125,
                                ease: "easeInOut"
                            }}
                        >
                            Close
                        </motion.p>
                    </div>
                </div>
                <div className="menu-close-icon">
                    <p>&#x2715;</p>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className="menu-link">
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-info-col">
                            <a href="#">X &#8599;</a>
                            <a href="#">Instagram &#8599;</a>
                            <a href="#">LinkedIn &#8599;</a>
                            <a href="#">Dribble &#8599;</a>
                        </div>
                        <div className="menu-info-col">
                            <p>Infro@OgOm.com</p>
                            <p>123123123</p>
                        </div>
                    </div>
                </div>
                {/* <div className="menu-preview">
                    <p>View Showreel </p>
                </div> */}
            </div>
        </div>
    )
}

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