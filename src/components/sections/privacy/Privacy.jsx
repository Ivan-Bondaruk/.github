import React from "react";
import GetToKnow from "../../GetToKnow.jsx";
import PrivacyApps from "../../PrivacyApps.jsx";

const Privacy = () => {
    return (
        <main className="bg-white min-h-screen text-black">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-black leading-right">
                    Find everything you need to know about my privacy policy here.
                </h1>

                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Get to know how I handle your data, what information I collect, and how I use it. Your privacy is important to me, and I am committed to protecting it.
                </p>
            </div>

            <PrivacyApps
                title="Apps Privacy Policy"
            />
        </main>
    )
}

export default Privacy;