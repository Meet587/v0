import Image from "next/image";
import Link from "next/link";

const HeroMain = () => {
    return (
        <section id="hero" className="bg-background py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Self-Taught Full-Stack Developer Crafting Scalable Solutions</h1>
                    <p className="max-w-[500px] ps-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed my-16">
                        Building efficient web applications with React, Next.js, and modern backend technologies
                    </p>
                    <div className="flex flex-col">
                        <p className="ps-1 my-2">Explore My Work</p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                View Projects
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Contact Me
                            </Link>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" target="_blank" className="text-muted-foreground hover:underline" prefetch={false}>
                                <GithubIcon className="w-6 h-6" />
                            </Link>
                            <Link href="#" target="_blank" className="text-muted-foreground hover:underline" prefetch={false}>
                                <LinkedinIcon className="w-6 h-6" />
                            </Link>
                            <Link href="#" target="_blank" className="text-muted-foreground hover:underline" prefetch={false}>
                                <SquareStackIcon className="w-6 h-6" />
                            </Link>
                            <Link href="#" target="_blank" className="text-muted-foreground hover:underline" prefetch={false}>
                                <CodeIcon className="w-6 h-6" />
                            </Link>
                            <Link href="#" target="_blank" className="text-muted-foreground hover:underline" prefetch={false}>
                                <LeetCodeIcon className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    src="/placeholder.svg"
                    width="400"
                    height="400"
                    alt="Hero"
                    className="rounded-xl object-cover hidden lg:block"
                    style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
            </div>
        </section>
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

function GithubIcon(props: any) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon(props: any) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function SquareStackIcon(props: any) {
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
            <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
            <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
            <rect width="8" height="8" x="14" y="14" rx="2" />
        </svg>
    );
}

function StackOverflowIcon(props: any) {
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
            <path d="M7 17.5L3 21v-5.5l4-3.5zM12 17.5l-4-3.5V8l4 3.5V17.5zM17 21l-4-3.5v-5.5l4 3.5V21zM22 17.5l-4-3.5V8l4 3.5V17.5z" />
            <path d="M7 9l-1 1m4-1l1 1m-4 4l-1 1m4-1l1 1m-4-8l1-1m4 1l-1-1m4 4l1-1m-4 1l1 1" />
        </svg>
    );
}

function LeetCodeIcon(props: any) {
    return (
        // <svg
        //     {...props}
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="24"
        //     height="24"
        //     viewBox="0 0 24 24"
        //     fill="none"
        //     stroke="currentColor"
        //     strokeWidth="2"
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        // >
        //     <path d="M3 12h18M3 16h18M3 8h18M3 4h18M10 16l4 4 4-4" />
        // </svg>
        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
    );
}



export default HeroMain;