import Image from "next/image";
import {Ban} from "lucide-react";

export default function Privacy() {
    return (
        <section id="privacy" className="bg-muted py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Your Privacy Matters</h2>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                            We take your privacy seriously. All your data is stored locally on your device by default.
                            You
                            control
                            what's shared and what stays private.
                        </p>
                        <ul className="mt-8 grid gap-4">
                            <li className="flex items-center gap-2">
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
                                    className="h-5 w-5 text-primary"
                                >
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span>Local storage by default</span>
                            </li>
                            <li className="flex items-center gap-2">
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
                                    className="h-5 w-5 text-primary"
                                >
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span>Optional cloud backup</span>
                            </li>
                            <li className="flex items-center gap-2">
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
                                    className="h-5 w-5 text-primary"
                                >
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span>Granular sharing controls</span>
                            </li>
                            <li className="flex items-center gap-2">
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
                                    className="h-5 w-5 text-primary"
                                >
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span>Data export and deletion options</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <Image
                            width={200}
                            height={200}
                            src="/logo.svg"
                            alt="PeeMap logo"
                            className="rounded-lg object-cover absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />

                        <Ban width={200} height={200}
                             className="absolute h-full absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                             color={'#877931'}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}