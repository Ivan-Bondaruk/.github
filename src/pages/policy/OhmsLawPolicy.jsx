import {useState} from "react";
import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {OhmsLawHero} from "@/components/Hero/OhmsLawHero.jsx";
import {OhmsLawAbout} from "@/components/About/OhmsLawAbout.jsx";
import {Footer} from "@/components/Footer.jsx";
import {Section} from "lucide-react";
import {OhmsLawPolicyHero} from "@/components/Hero/OhmsLawPolicyHero.jsx";

const sections = [
    {
        title: "Information Collection and Use",
        content: (
            <div className="text-left text-lg leading-relaxed">
                The app itself does not collect any personally identifiable information.
                However, it integrates third-party services that may collect certain data for analytics and advertising.

                These services include:
                <ul className="list-disc ml-6 mt-2">
                    <li>Google AdMob – for showing ads</li>
                    <li>Firebase Analytics – for tracking usage and crashes</li>
                </ul>
                They may collect:
                <ul className="list-disc ml-6 mt-2">
                    <li>Device type and OS version</li>
                    <li>IP address</li>
                    <li>App usage behavior</li>
                    <li>Approximate location</li>
                </ul>
            </div>
        )
    },
    {
        title: "Third-Party Services",
        content: (
            <div className="text-left text-lg leading-relaxed">
                The app uses third-party services to enhance functionality and provide analytics. These services may collect data as described in their own privacy policies.
                <ul className="list-disc ml-6 mt-2">
                    <li>
                        <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Google AdMob Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Firebase Privacy and Security
                        </a>
                    </li>

                    <li>
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Google Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        )
    },
    {
        title: "Log Data",
        content: (
            <div className="text-left text-lg leading-relaxed">
                If the app crashes or encounters an error, it may send crash logs to Firebase Crashlytics.
                This helps improve app stability and performance.

                Collected data may include:
                <ul className="list-disc ml-6 mt-2">
                    <li>Device and system info</li>
                    <li>Crash details and stack traces</li>
                    <li>Timestamp and app version</li>
                </ul>
            </div>
        )
    },
    {
        title: "Cookies",
        content: (
            <div className="text-left text-lg leading-relaxed">
                This app does not use cookies.
                However, third-party services (such as AdMob) may use technologies similar to cookies to personalize ads.
            </div>
        )
    },
    {
        title: "Data Security",
        content: (
            <div className="text-left text-lg leading-relaxed">
                We do not store any personal data.
                All analytics or advertising data is handled by trusted third-party services, which follow industry-standard security measures.
            </div>
        )
    },
    {
        title: "Children's Privacy",
        content: (
            <div className="text-left text-lg leading-relaxed">
                This app is not intended for children under 13.
                If you are a parent or guardian and believe your child has provided personal data, contact us immediately.
            </div>
        )
    },
    {
        title: "Data Security",
        content: (
            <div className="text-left text-lg leading-relaxed">
                We may update this Privacy Policy from time to time.
                You will be notified by the updated date at the top of this page.
            </div>
        )
    },
];

export const OhmsLawPolicy = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Функция toggleSection должна быть внутри компонента
    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />

            <main>
                <OhmsLawPolicyHero/>

                <section className="py-24 px-4 relative">
                    <div className="max-w-4xl mx-auto p-6 font-sans min-h-screen">
                        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                        {sections.map((section, index) => (
                            <div key={index} className="border-b border-gray-700">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="w-full text-left py-4 flex justify-between items-center text-lg font-medium hover:text-blue-400 transition"
                                >
                                    {section.title}
                                    <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="pb-4">{section.content}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};