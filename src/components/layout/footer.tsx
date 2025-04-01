import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex items-center gap-2">
                    <Image
                        width={100}
                        height={100}
                        src="/logo.svg"
                        alt="PeeMap logo"
                        className="w-6 h-6"
                    />
                    <span className="text-lg font-bold">PeeMap</span>
                </div>
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} PeeMap. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}