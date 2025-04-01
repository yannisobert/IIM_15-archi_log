import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function HeaderLanding() {
    return (
        <header
            className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        width={100}
                        height={100}
                        src="/logo.svg"
                        alt="PeeMap logo"
                        className="w-6 h-6"
                    />
                    <span className="text-xl font-bold">PeeMap</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link href="#features" className="text-sm font-medium hover:text-primary">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
                        How It Works
                    </Link>
                    <Link href="#privacy" className="text-sm font-medium hover:text-primary">
                        Privacy
                    </Link>
                    <Link href="#try-it" className="text-sm font-medium hover:text-primary">
                        Try it
                    </Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Button size="sm" className="hidden md:inline-flex" variant="outline">
                        Log In
                    </Button>
                    <Button size="sm" className="hidden md:inline-flex">
                        Sign Up
                    </Button>
                </div>
                <Button size="sm" className="md:hidden" variant="outline">
                    Log In
                </Button>
            </div>
        </header>
    );
}