import Image from "next/image";

const Skills: React.FC = () => {
    return(
        <section id="/skills" className="pt-20 mt-20">
            <div className="flex justify-center ">
                <div className="container mx-auto px-4 flex justify-center pt-20">
                    <div className="w-2/3">
                        <h1 className="text-4xl font-bold mb-6 text-center">Skill&apos;s</h1>
                        <div className="rounded-lg bg-base-200 dark:bg-white light:bg-base-200 text-black p-4 pt-8 mt-20
                        shadow-md dark:shadow-lg ">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">Languages</h2>
                                <ul className="list-disc list-inside">
                                    <li className="mb-3 pt-5">
                                        <Image src="/Icons/javascript.svg" height="20" width="20" alt="JavaScript icon" className="w-6 h-6 mr-2 inline" />
                                        JavaScript/TypeScript
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/solidity.svg" height="20" width="20" alt="Solidity icon" className="w-6 h-6 mr-2 inline" />
                                        Solidity
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">CSS</h2>
                                <p className="mb-3 pt-5">
                                    <Image src="/Icons/tailwindcss-dark.svg"  height="20" width="20" alt="Tailwind CSS icon" className="w-6 h-6 mr-2 inline" />
                                    Tailwind CSS, Vanilla CSS
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Frameworks/Libraries</h2>
                                <ul className="list-disc list-inside">
                                    <li className="mb-3 pt-5">
                                        <Image src="/Icons/react-dark.svg"  height="20" width="20" alt="React icon" className="w-6 h-6 mr-2 inline" />
                                        React
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/nextjs-solid.svg"  height="20" width="20" alt="Next.js icon" className="w-6 h-6 mr-2 inline" />
                                        Next.js
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/astro.svg"  height="20" width="20" alt="Astro icon" className="w-6 h-6 mr-2 inline" />
                                        Astro
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/daisyui.svg"  height="20" width="20" alt="Daisy UI icon" className="w-8 h-8 mr-2 inline" />
                                        Daisy UI
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/hardhat.svg"  height="20" width="20" alt="Astro icon" className="w-6 h-6 mr-2 inline" />
                                        Hardhat
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/wordpress.svg"  height="20" width="20" alt="Astro icon" className="w-6 h-6 mr-2 inline" />
                                        WordPress
                                    </li>
                                    <li className="mb-3">
                                        <Image src="/Icons/wix.svg"  height="20" width="20" alt="Astro icon" className="w-6 h-6 mr-2 inline" />
                                        Wix Studio
                                    </li>
                                    <li className="mb-3">

                                        Shadcn/UI
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills