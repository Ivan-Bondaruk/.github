import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {Footer} from "@/components/Footer.jsx";
import {OhmsLawHero} from "@/components/Hero/OhmsLawHero.jsx";
import {OhmsLawAbout} from "@/components/About/OhmsLawAbout.jsx";
import {Helmet} from "react-helmet-async";

export const OhmsLaw = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Helmet>
                <title>ibOh's Law</title>
                <meta name="description" content="Main page of ibOh's Law" />
                <meta name="keywords" content="app, mobile, ios, android, apple, google, education, tool, utility, school, physics" />
            </Helmet>

            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />

            <main>
                <OhmsLawHero/>
                <OhmsLawAbout/>
            </main>

            <Footer />
        </div>
    );
};