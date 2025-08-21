import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {initGA, logPageView} from "@/analytics.js";

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        initGA(); // инициализация один раз
    }, []);

    useEffect(() => {
        logPageView(location.pathname + location.search);
    }, [location]);

    return null;
};

export default AnalyticsTracker;