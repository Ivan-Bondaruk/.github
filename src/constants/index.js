export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const navPages = [
    { name: "Home", path: "/" },
    {
        name: "Ohm's Law",
        path: "/ohms-law",
        children: [
            { name: "iOS", path: "/ohms-law/ios" },
        ],
    },
];

export const ohmsNav = [
    { name: "Ohm's Law iOS", icon: "/icons/ohmsios.svg", path: "/ohms-law/ios" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const footerNav = [
    { name: "Privacy Policy", path: "/privacy/" },
    { name: "Terms of Use", path: "/terms/" },
]