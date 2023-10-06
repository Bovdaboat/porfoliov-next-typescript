import React from 'react';
import Image from "next/image";

const ProjectCard = (props: {
    title: string;
    description: string;
    imageSrc: string;
    liveUrl: string;
}) => {
    return (
        <div className="items-center bg-white rounded-lg shadow sm:flex ">
            <a href={props.liveUrl}>
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.imageSrc} alt={props.title} />
            </a>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{props.title}</a>
                </h3>
                <span className="text-black font-bold">Photographer portfolio</span>
                <p className="mt-3 mb-4 font-light text-black dark:text-black">{props.description}</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a>
                            <Image className="" src="/Icons/react-dark.svg" width={30} height={30} alt="next js logo" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Image className="" src="/Icons/nextjs-solid.svg" width={30} height={30} alt="next js logo" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Image className="" src="/Icons/tailwindcss-dark.svg" width={30} height={30} alt="next js logo" />
                        </a>
                    </li>
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
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white pt-10">Projects</h2>
                <p className="font-light lg:mb-16 sm:text-xl text-white">Click on Live to visit the App's</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 text-black">
                <ProjectCard
                    title="Photographer Portfolio"
                    description="A straightforward presentation showcasing a portfolio of client projects, employed as a valuable asset for his freelance business."
                    imageSrc="/Images/colblug.png"
                    liveUrl="https://col-port-bqbnyur85-bovdaboat.vercel.app/"
                />
                <ProjectCard
                    title="Pug NFT Page"
                    description="An application showcasing a curated collection of pug-themed digital assets, meticulously designed and developed with artistic integrity, and seamlessly deployed on the OpenSea blockchain platform."
                    imageSrc="/Images/pugnft.png"
                    liveUrl="https://stellatsunamipage-n3sqn4avh-bovdaboat.vercel.app/"
                />
                {/* Add more ProjectCard components as needed */}
            </div>
        </div>
    );
};

export default Projects;
