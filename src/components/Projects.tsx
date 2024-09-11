import { Libre_Franklin } from 'next/font/google';

const libra = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
});

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className={`${libra.className} py-12 md:py-24`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
                    <p className="text-muted-foreground text-lg">Practical Experience in Full-Stack Web Development.</p>
                </div>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:mt-4 md:mt-10' >
                    {[1, 2, 3, 4, 5, 6].map((_,i) => {
                        return (
                            <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            key={`${i}-card`}
                            >
                                <Link href="#" className="block" prefetch={false}>
                                    <CardHeader className="bg-muted p-4 md:p-6">
                                        <CardTitle className="text-lg font-semibold">Project 6</CardTitle>
                                        <CardDescription className="text-muted-foreground line-clamp-2">
                                            A brief description of your sixth project, showcasing your frontend development skills.
                                        </CardDescription>
                                    </CardHeader>
                                </Link>
                                <CardContent className="p-4 md:p-6">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                                            prefetch={false}
                                        >
                                            <EyeIcon className="w-4 h-4" />
                                            Live Preview
                                        </Link>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:underline"
                                            prefetch={false}
                                        >
                                            <GithubIcon className="w-4 h-4" />
                                            GitHub
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
            {/* {isHovered && <CustomCursor isHovered={isHovered} />} */}
        </section>
    );
}

function EyeIcon(props: any) {
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
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
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
