import Image from "next/image";

const AboutMe : React.FC = () => {
    return(

            <div id="AboutMe" className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="md:order-1 pt-20">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-primary mb-4 pb-10">
                            About Me
                        </h1>
                        <div className="bg-white rounded-xl p-4 font-mono">
                            <p className="text-black text-lg mb-6">
                                I have a strong passion for crafting clean code and designing user-friendly web experiences.
                                Beyond the realm of coding, I hold a deep appreciation for cherished moments with my
                                loved ones, which includes spending quality time with my adorable dogs. Let&apos;s
                                collaborate to bring life to engaging web projects and transform our creative
                                ideas into reality.
                            </p>
                        </div>
                    </div>


                    <div className="md:order-2 pt-20">
                        <Image src="/Images/pugs.jpeg" alt="pugs" className="w-full h-auto rounded-md" />
                    </div>
                </div>
            </div>
        );
    };

    export default AboutMe;
