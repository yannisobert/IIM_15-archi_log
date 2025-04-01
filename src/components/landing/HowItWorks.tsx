export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">How It Works</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Using PeeMap is simple and intuitive
                    </p>
                </div>
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 mt-12">
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                            1
                        </div>
                        <h3 className="text-xl font-bold">Try the App</h3>
                        <p className="text-muted-foreground">Add PeeMap to your home screen for quick access</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                            2
                        </div>
                        <h3 className="text-xl font-bold">Log Your Visit</h3>
                        <p className="text-muted-foreground">Tap a button when you're done to record your location</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                            3
                        </div>
                        <h3 className="text-xl font-bold">View Your Map</h3>
                        <p className="text-muted-foreground">See all your visits displayed on an interactive map</p>
                    </div>
                </div>
            </div>
        </section>
    )
}