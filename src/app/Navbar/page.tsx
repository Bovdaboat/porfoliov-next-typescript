"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {

  const [isClick, setIsClick ] = useState(false)

    const toggleNavbar = () => {
      setIsClick(!isClick)
    }

    return (
        <nav className=" text-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-green-50 rounded">
                <div className=" flex items-center  justify-between h-16 font-mono">
                    <div className="flex items-center">
                    <div className="flex shrink-0">
                    <a className=" text-2xl" href="https://www.linkedin.com/in/ignat-gabov-97319a145/">BovDaBoat</a>
                    </div>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-4 p-2">
                        <a  href="/" className="text-white">
                            Home
                        </a>
                        <a  href="/skills" className="text-white">
                            Skills
                        </a>
                        <a  href="/projects" className="text-white">
                            Project's
                        </a>
                        <a  href="/about" className="text-white">
                            About
                        </a>
                        <a  href="/contact" className="text-white">
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
                                        src="/Icons/ui-menu-grid.svg"
                                        width={20}
                                        height={20}
                                        alt="icon menu" />
                                ) : (
                                    <Image
                                        src="/Icons/ui-menu-grid-negative.svg"
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
                        <a  href="/" className="text-white block p-2">
                            Home
                        </a>
                        <a  href="/skills" className="text-white block p-2">
                            Skills
                        </a>
                        <a  href="/projects" className="text-white block p-2">
                            Project's
                        </a>
                        <a  href="/about" className="text-white block p-2">
                            About
                        </a>
                        <a  href="/contact" className="text-white block p-2">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
