const Contact: React.FC = () => {
    return(
        <div id="Contact" className=" h-screen text-primary text-3xl font-mono p-6 pt-20">
            <div className="flex justify-center p-6 font-bold text-primary">
                Contact Me
            </div>
            <h1 className="font-mono text-xl m-3 text-primary mt-20">
                {/* Add any additional content here */}
            </h1>
            <div className="">
            <form
                action="https://formsubmit.co/b2d2feb8ead734c989509b99352b3205"
                method="POST"
                className="max-w-md mx-auto mt-5 p-4 border rounded shadow-lg bg-gray-500"
            >
                <input
                    className="input input-bordered input-lg w-full p-3 mb-4"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    maxLength={100}
                />
                <input
                    className="input input-bordered input-lg w-full p-3 mb-4"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}"
                />
                <textarea
                    className="input input-bordered input-lg w-full p-3 mb-4"
                    placeholder="Message"
                    rows={4}
                    name="message"
                    required
                    maxLength={2000}
                ></textarea>
                <button type="submit" className="btn w-full p-4 mt-5 text-primary">
                    Send Message
                </button>
            </form>
                <footer className=" text-primary py-4 mt-20">
                    <div className="container mx-auto text-center">
                        <p className="text-sm">&copy; {new Date().getFullYear()} BovDaBoat. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
        );
    };

    export default Contact