const Experience = () => {
    return (
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Frontend & Backend Developer with Expertise in Modern Web Technologies.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-6 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">Frontend Developer</h3>
                            <p className="text-muted-foreground font-semibold">Finstudioz Technologies Private Limited | April 2023 - Present</p>
                            <ul className="list-disc ps-6">
                                <li className="text-muted-foreground">Spearheaded the development of a multi-role chartered accountant web application</li>
                                <li className="text-muted-foreground">Single-handedly built the frontend using React.js and Redux</li>
                                <li className="text-muted-foreground">Expanded role to backend development, contributing significantly to a Nest.js project</li>
                                <li className="text-muted-foreground">Collaborated on a mutual fund investment web app, strengthening fintech domain knowledge</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">Web Developer Intern</h3>
                            <p className="text-muted-foreground">XYZ Corp. | 2019 - 2020</p>
                            <p className="text-muted-foreground">
                                Worked on building and maintaining responsive websites using HTML, CSS, and JavaScript. Gained
                                experience in front-end development and project management.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

function BriefcaseIcon(props: any) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    );
}

export default Experience;