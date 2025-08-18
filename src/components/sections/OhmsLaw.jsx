import React from "react";
import OhmsProducts from "../OhmsProducts.jsx";
import PageHeader from "../PageHeader.jsx";
import GetToKnow from "../GetToKnow.jsx";

const OhmsLaw = () => {
    return (
        <main className="bg-white min-h-screen text-black">
            <OhmsProducts />

            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-black leading-right">
                    ibOhm's Law 1.5
                </h1>

                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Ohm’s Law is the perfect tool for students, engineers, and anyone working with electricity. Quickly calculate current, voltage, resistance, and power with ease and precision.
                </p>

                <p className="tex-gray-400 text-sm mb-8 max-w-lg mx-auto">
                   Coming soon: a new version of ibOhm's Law with enhanced features and improved user experience. Stay tuned for updates!
                </p>
            </div>

            <PageHeader
                title="Get the highlights."
                description=""
            />
            <GetToKnow/>
        </main>
    );
};

export default OhmsLaw;