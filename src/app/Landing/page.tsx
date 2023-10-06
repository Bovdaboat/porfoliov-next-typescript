import React from "react";
import Image from "next/image";

const Landing: React.FC = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="text-center">
                <h1 className="text-5xl text-primary font-bold mt-22 pt-20">Hello Friend&apos;s</h1>
                <Image
                    src="/Images/mainImg.png"
                    alt="boat Image"
                    className="mx-auto rounded-full"
                    width={500}
                    height={500}
                />
                <p className="text-primary mt-2 px-4 font-mono">
                    I&apos;m Ignat, known as Bov in the tech world, and I excel in frontend development.
                </p>
            </div>
        </div>
    );
};

export default Landing;

