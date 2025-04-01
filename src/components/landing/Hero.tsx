import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import Image from "next/image";

export default function HeaderLanding() {
    return (
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Track Your Bathroom Breaks with PeeMap
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                The fun and practical way to log, track, and remember your bathroom visits. Never forget
                                where
                                you've been!
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="gap-1">
                                <Download className="h-5 w-5"/>
                                Try Now
                            </Button>
                            <Button variant="outline" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center justify-center">
                        <div
                            className="relative h-[450px] w-[225px] overflow-hidden rounded-[2.5rem] border-[8px] border-muted bg-background shadow-xl">
                            <div className="absolute inset-0 bg-muted flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    width={400}
                                    height={800}
                                    alt="PeeMap App Screenshot"
                                    className="w-2/3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}