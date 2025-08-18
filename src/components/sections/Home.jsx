import React from "react";
import {RevealOnScroll} from "../RevealOnScroll.jsx";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-black leading-right">
                        Hello, I'm Ivan Bondaruk
                    </h1>

                    <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                    </p>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Home;