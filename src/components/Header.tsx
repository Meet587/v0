import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <CodeIcon className="w-6 h-6" />
                <span className="sr-only">Portfolio</span>
            </Link>
            <nav className="hidden md:flex gap-4 sm:gap-6">
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                    prefetch={false}
                >
                    Projects
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                    prefetch={false}
                >
                    Experience
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                    prefetch={false}
                >
                    Contact
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 bg-background shadow-lg">
                    <nav className="grid gap-2 p-4">
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                            prefetch={false}
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                            prefetch={false}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                            prefetch={false}
                        >
                            Experience
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                            prefetch={false}
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                            prefetch={false}
                        >
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
};

function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}


function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

export default Header;