"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {ModeToggle} from "@/components/Toggle-mode";

const Navbar: React.FC = () => {

  const [isClick, setIsClick ] = useState(false)

    const toggleNavbar = () => {
      setIsClick(!isClick)
    }

    return (
        <nav className=" text-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-green-50">
                <div className=" flex items-center  justify-between h-16 font-mono">
                    <div className="flex items-center">
                    <div className="flex shrink-0">
                    <a className="text-2xl" href="https://www.linkedin.com/in/ignat-gabov-97319a145/">BovDaBoat</a>
                    </div>
                    </div>
                    <div className="hidden md:block text-primary">
                    <div className="ml-4 flex items-center space-x-4 p-2">
                        <ModeToggle />
                        <a  href="/" className="">
                            Home
                        </a>
                        <a  href="/skills" className="">
                            Skills
                        </a>
                        <a  href="/projects" className="">
                            Project's
                        </a>
                        <a  href="/about" className="">
                            About
                        </a>
                        <a  href="/contact" className="">
                            Contact
                        </a>
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
                        <a  href="/" className="text-primary block p-2">
                            Home
                        </a>
                        <a  href="/skills" className=" block p-2">
                            Skills
                        </a>
                        <a  href="/projects" className=" block p-2">
                            Project's
                        </a>
                        <a  href="/about" className=" block p-2">
                            About
                        </a>
                        <a  href="/contact" className=" block p-2">
                            Contact
                        </a>
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
