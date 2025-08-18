import React from "react";

const footerData = [
    {
        title: "Software",
        links: [
            { text: "ibOhm's Law", href: "/ohms-law" },
        ],
    },
    {
        title: "Internet Services",
        links: [
            { text: "Privacy Policy", href: "/privacy" },
        ],
    },
];

const UpFooter = () => {
    return (
        <footer className="bg-white text-black py-10">
            <nav
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
                aria-label="Directory"
            >
                {footerData.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="font-semibold text-black mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className="hover:text-gray transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </footer>
    )
}

export default UpFooter;
