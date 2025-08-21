import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-PHYBCEXJXK"); // твой Measurement ID из GA4
};

export const logPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};