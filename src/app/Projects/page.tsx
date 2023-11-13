import React from 'react';
import Image from "next/image";

const ProjectCard = (props: {
    title: string;
    description: string;
    imageSrc: string;
    iconSrcs: string[]; // Array of icon sources
    liveUrl: string;
}) => {
    return (
        <div className="items-center bg-white rounded-lg shadow sm:flex">
            <a href={props.liveUrl}>
                <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                       src={props.imageSrc}
                       width="800"
                       height='800'
                       alt={props.title} />
            </a>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                    <a href="#">{props.title}</a>
                </h3>
                <span className="text-black font-bold"></span>
                <p className="mt-3 mb-4 font-light text-black dark:text-black">{props.description}</p>
                <ul className="flex space-x-4 sm:mt-0">
                    {props.iconSrcs.map((iconSrc, index) => (
                        <li key={index}>
                            <a>
                                <Image className="" src={iconSrc} width={30} height={30} alt={`icon-${index}`} />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="p-7">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        <a href={props.liveUrl}>Live</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 pt-20">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white pt-10">Project&apos;s</h2>
                <p className="font-light lg:mb-16 sm:text-xl text-white">Click on Live to visit the App&apos;s</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 text-primary">
                <ProjectCard
                    title="Photographer Portfolio"
                    description="A straightforward presentation showcasing a portfolio of client projects, employed as a valuable asset for his freelance business."
                    imageSrc="/Images/colblug.png"
                    iconSrcs={[
                        "/Icons/react-dark.svg",
                        "/Icons/javascript.svg",
                        "/Icons/nextjs-solid.svg",
                        "/Icons/tailwindcss-dark.svg",
                        "/Icons/daisyui.svg"
                    ]}
                    liveUrl="https://col-port.vercel.app/"
                />
                <ProjectCard
                    title="Pug NFT Page"
                    description="An application showcasing a curated collection of pug-themed digital assets, meticulously designed and developed with artistic integrity, and seamlessly deployed on the OpenSea blockchain platform."
                    imageSrc="/Images/pugnft.png"
                    iconSrcs={[
                        "/Icons/react-dark.svg",
                        "/Icons/javascript.svg",
                        "/Icons/hardhat.svg",
                        "/Icons/solidity.svg",
                        "/Icons/nextjs-solid.svg",
                        "/Icons/tailwindcss-dark.svg",
                        "/Icons/daisyui.svg"
                    ]}
                    liveUrl="https://k1-pug-nft-page-78t6.vercel.app/"
                />
                <ProjectCard
                    title="Blog"
                    description="
                            This blog is proudly hosted on WordPress, a powerful and versatile platform that has
                    proven to be an invaluable resource for individuals and businesses alike."
                    imageSrc="/Images/wordpressweb.png"
                    iconSrcs={[
                        "/Icons/wordpress.svg"
                    ]}
                    liveUrl="https://entropytechtips.wordpress.com"
                />
                <ProjectCard
                    title="E-commerce website beauty products"
                    description="
                             I crafted a gorgeous e-commerce site for beauty products using Wix Studio.
                            Its user-friendly tools allowed me to design and personalize the site effortlessly.
                            I loaded it with captivating images, detailed product descriptions, and a smooth checkout
                            experience. With Wix's SEO features and social media integration, I'm all set to dazzle
                            customers and boost sales."
                    imageSrc="/Images/wixstudio.png"
                    iconSrcs={[
                        "/Icons/wix.svg"
                    ]}
                    liveUrl="https://ignatgabov31.wixstudio.io/my-site-4"
                />
                {/* Add more ProjectCard components with different iconSrcs as needed */}
            </div>
        </div>
    );
};

export default Projects;
