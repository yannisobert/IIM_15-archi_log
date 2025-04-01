import {Map, MapPin, Navigation, Shield, Users} from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="bg-muted py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        PeeMap offers a range of features to enhance your bathroom tracking experience
                    </p>
                </div>
                <div
                    className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <MapPin className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold">Location Tracking</h3>
                        <p className="text-muted-foreground">Automatically log the location of your bathroom visits</p>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <Map className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold">Interactive Map</h3>
                        <p className="text-muted-foreground">View all your visits on an interactive map interface</p>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <Navigation className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold">Bathroom Finder</h3>
                        <p className="text-muted-foreground">Locate nearby public restrooms when you're in need</p>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <Users className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold">Social Sharing</h3>
                        <p className="text-muted-foreground">Share your bathroom adventures with friends (if you want
                            to!)</p>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <Shield className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold">Privacy Controls</h3>
                        <p className="text-muted-foreground">Full control over what data is stored and shared</p>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <path d="M12 2v20"/>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold">Statistics</h3>
                        <p className="text-muted-foreground">Track patterns and get insights about your bathroom
                            habits</p>
                    </div>
                </div>
            </div>
        </section>
    )
}