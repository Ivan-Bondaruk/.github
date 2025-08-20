import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {Footer} from "@/components/Footer.jsx";
import {OhmsLawHero} from "@/components/Hero/OhmsLawHero.jsx";
import {OhmsLawAbout} from "@/components/About/OhmsLawAbout.jsx";

export const OhmsLaw = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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