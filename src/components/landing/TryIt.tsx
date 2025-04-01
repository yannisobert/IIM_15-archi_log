import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";

export default function TryIt() {
    return (
        <section id="try-it" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get PeeMap Today</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Try our Progressive Web App on your device
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                        <Button size="lg" className="gap-1">
                            <Download className="h-5 w-5"/>
                            Try it Now
                        </Button>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="flex flex-col items-center rounded-lg border bg-background p-6 text-center">
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
                                className="h-10 w-10 mb-4 text-primary"
                            >
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                                <line x1="12" y1="18" x2="12.01" y2="18"/>
                            </svg>
                            <h3 className="text-xl font-bold">iOS</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Open in Safari, tap Share, then "Add to Home Screen"
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg border bg-background p-6 text-center">
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
                                className="h-10 w-10 mb-4 text-primary"
                            >
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                                <path d="M12 18h.01"/>
                            </svg>
                            <h3 className="text-xl font-bold">Android</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Open in Chrome, tap Menu, then "Add to Home Screen"
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg border bg-background p-6 text-center">
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
                                className="h-10 w-10 mb-4 text-primary"
                            >
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                <line x1="8" y1="21" x2="16" y2="21"/>
                                <line x1="12" y1="17" x2="12" y2="21"/>
                            </svg>
                            <h3 className="text-xl font-bold">Desktop</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Open in Chrome, click Menu, then "Try PeeMap"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}