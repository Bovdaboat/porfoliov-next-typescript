"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {ModeToggle} from "@/components/Toggle-mode";


const Navbar: React.FC = () => {

    const [navbarBackground, setNavbarBackground] = useState<string>("bg-base");

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarBackground("bg-secondary"); // Change background color when scrolled
        } else {
            setNavbarBackground("bg-base-100"); // Reset background color when at the top
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const [isClick, setIsClick ] = useState(false)

    const toggleNavbar = () => {
      setIsClick(!isClick)
    }

    return (
        <nav className={`text-primary sticky top-0 ${navbarBackground}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-green-50">
                <div className=" flex items-center  justify-between h-16 font-mono">
                    <div className="flex items-center">
                    <div className="flex shrink-0">
                    <a className="text-2xl" href="/">BovDaBoat</a>
                    </div>
                    </div>
                    <div className="hidden md:block text-primary">
                    <div className="ml-4 flex items-center space-x-4 p-2">
                        <ModeToggle />
                        <Link  href="/" className="">
                            Home
                        </Link>
                        <Link  href="/Skills" className="">
                            Skills
                        </Link>
                        <Link  href="/Projects" className="">
                            Project&apos;s
                        </Link>
                        <Link  href="/ProposalPage" className="">
                            Procedure
                        </Link>
                        <Link  href="/AboutMe" className="">
                            About
                        </Link>
                        <Link  href="/Contact" className="">
                            Contact
                        </Link>
                    </div>
                    </div>
                        <div className="md:hidden flex items-center">
                            <button
                            className="inline-flex items items-center justify-center p-2 rounded-md focus:outline-none
                            "
                            onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <Image
                                        src="/Icons/th-menu.svg"
                                        width={20}
                                        height={20}
                                        alt="icon menu" />
                                ) : (
                                    <Image
                                        src="/Icons/th-menu-outline.svg"
                                        width={20}
                                        height={20}
                                        alt="icon menu" />
                                )}
                            </button>
                        </div>
            </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link  href="/" className="text-primary block p-2">
                            Home
                        </Link>
                        <Link  href="/Skills" className=" block p-2">
                            Skills
                        </Link>
                        <Link  href="/Projects" className=" block p-2">
                            Project&apos;s
                        </Link>
                        <Link  href="/ProposalPage" className=" block p-2   ">
                            Procedure
                        </Link>
                        <Link  href="/AboutMe" className=" block p-2">
                            About
                        </Link>
                        <Link  href="/Contact" className=" block p-2">
                            Contact
                        </Link>
                        <div className="px-4 pt-2">
                        <ModeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
