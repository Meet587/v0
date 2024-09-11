import Link from "next/link";

const AboutMe = () => {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6 m-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                            I'm a self-taught developer with an insatiable curiosity for emerging technologies. My journey began with React.js, but my eagerness to understand the full web development spectrum led me to master both frontend and backend technologies.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
                    <div className="bg-background rounded-lg p-6 space-y-4">
                        <h3 className="text-xl font-semibold">My Story</h3>
                        <p className="text-muted-foreground">
                            I am a self-taught React.js developer with over 1.5 years of hands-on experience in a fintech product-based company. My journey began as a fresher, and I quickly honed my skills in CSS, Bootstrap, SCSS, JavaScript, and React.js. Working on a mutual fund investment web app laid the foundation for my expertise in frontend development.
                        </p>
                        <p className="text-muted-foreground">
                            I’m naturally curious, which led me to explore backend technologies, including Node.js, Express.js, MongoDB, SQL, and Nest.js. I believe in constantly evolving and refining my skill set, from mastering frontend frameworks like React and Next.js to building full-stack applications using cutting-edge technologies.
                        </p>
                    </div>
                    <div className="bg-background rounded-lg p-6 space-y-4">
                        <h3 className="text-xl font-semibold">My Expertise</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                                <CodeIcon className="w-8 h-8 text-muted-foreground" />
                                <span className="text-sm font-semibold">Front-End</span>
                                <p className="text-xs text-muted-foreground">React, Next js, HTML, CSS, JavaScript</p>
                            </div>
                            <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                                <ServerIcon className="w-8 h-8 text-muted-foreground" />
                                <span className="text-sm font-semibold">Back-End</span>
                                <p className="text-xs text-muted-foreground">Node.js, Express, Nest.js, Appwrite    </p>
                            </div>
                            <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                                <BrushIcon className="w-8 h-8 text-muted-foreground" />
                                <span className="text-sm font-semibold">Design</span>
                                <p className="text-xs text-muted-foreground">Figma, Adobe Creative Cloud, Sketch, Prototyping</p>
                            </div>
                            <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                                <DatabaseIcon className="w-8 h-8 text-muted-foreground" />
                                <span className="text-sm font-semibold">Databases</span>
                                <p className="text-xs text-muted-foreground">MySQL, PostgreSQL, MongoDB, Firebase</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            View Resume
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


function BrushIcon(props: any) {
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
            <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
            <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
        </svg>
    );
}

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


function DatabaseIcon(props: any) {
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
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}

function ServerIcon(props: any) {
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
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    );
}

export default AboutMe;