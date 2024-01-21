import React from "react";
import Image from "next/image";

const Landing: React.FC = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="text-center">
                <div className="text-4xl text-primary font-bold mt-22 pt-20 mx-7">
                <h1 className="text-4xl text-primary font-bold mt-22 pt-20 mx-7">
                    Looking for a website that speaks to your unique style?
                    <span className=" p-3 text-blue-700">Let&apos;s set sail on this journey!</span>
                </h1>
                </div>
                <Image
                    src="/Images/mainImg.png"
                    alt="boat Image"
                    className="mx-auto rounded-full"
                    width={500}
                    height={500}
                />
                <p className="text-primary mt-2 px-10 font-mono">

                    Hello, I&apos;m Ignat, aka Bov in tech. I specialize in frontend development, crafting seamless
                    interfaces for web 2.0 and web 3.0. Let&apos;s enhance your digital presence together
                </p>
            </div>
        </div>
    );
};

export default Landing;

