import {ArrowDown} from "lucide-react";

export const OhmsLawPolicyHero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> ibOhm's Law</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
                            Privacy
            </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
                            Policy
            </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        ibOhm's Law Privacy Policy describes how I, uses, and shares your personal data.
                    </p>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        You will be given an opportunity to review this product-specific information before using these features.
                        You also can view this information at any time, either in settings related to those features.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};