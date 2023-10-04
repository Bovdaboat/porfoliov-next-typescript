import React from "react";

const Landing: React.FC = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <img
                    src="your-image-url.jpg"
                    alt="Your Image"
                    className="mx-auto h-32 w-32 rounded-full"
                />
                <h1 className="text-4xl font-bold mt-4">Welcome to Your Website</h1>
                <p className="text-gray-600 mt-2">
                    This is the best place for all your needs.
                </p>
            </div>
        </div>
    );
};

export default Landing;
