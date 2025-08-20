import {Briefcase, Code, User} from "lucide-react";
import { Link } from "react-router-dom";

export const OhmsLawAbout = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> app</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Ultimate Ohm’s Law calculator in your pocket
                        </h3>

                        <p className="text-muted-foreground">
                            I found that most of the apps that focus on Ohm's Law are awkward to use. So I set out to make an easy to use and versatile Ohm's Law calculator.
                        </p>

                        <p className="text-muted-foreground">
                            Now available in the Apple App Store for iOS 17 and above, the app is easy to use, intuitive and has minimal ads that don't spoil the user experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="https://apps.apple.com/us/app/ibohms-law/id6749692589" target="_blank"  rel="noopener noreferrer"  className="cosmic-button">
                                {" "}
                                Download Now
                            </a>

                            <Link to="/software/ohmslaw/policy" target="_blank"  rel="noopener noreferrer"  className="cosmic-button">
                                {" "}
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Active development</h4>
                                    <p className="text-muted-foreground">
                                        The application is constantly being upgraded and everything
                                        is being done to get a fast and better user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Simple and user-friendly design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Measurement system</h4>
                                    <p className="text-muted-foreground">
                                        You can choose which units of measurement
                                        to use for each input parameter and for the result.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};