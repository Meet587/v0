/** Add fonts into your Next.js project:

import { Cormorant_Garamond } from 'next/font/google'

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

**/
export function Resume2() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div>
              <MailIcon className="w-4 h-4 mr-1 inline-block" />
              john.doe@example.com
            </div>
            <div>
              <PhoneIcon className="w-4 h-4 mr-1 inline-block" />
              +1 (555) 123-4567
            </div>
            <div>
              <GlobeIcon className="w-4 h-4 mr-1 inline-block" />
              johndoe.com
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/placeholder.svg"
            width={80}
            height={80}
            alt="John Doe"
            className="rounded-full"
            style={{ aspectRatio: "80/80", objectFit: "cover" }}
          />
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-8 grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-muted-foreground">Acme Inc. | 2019 - Present</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Developed and maintained complex web applications using React, Node.js, and MongoDB.</li>
                <li>Collaborated with cross-functional teams to design and implement new features and improvements.</li>
                <li>
                  Participated in code reviews, pair programming, and knowledge-sharing sessions to improve code quality
                  and team efficiency.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Web Developer Intern</h3>
              <p className="text-muted-foreground">Globex Corporation | 2018</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  Assisted in building and maintaining responsive web applications using HTML, CSS, and JavaScript.
                </li>
                <li>
                  Participated in daily stand-ups and scrum meetings to track project progress and address any issues.
                </li>
                <li>Gained experience in version control, task management, and deployment workflows.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University of Example | 2014 - 2018</p>
              <p className="mt-2 text-sm">
                Graduated with a GPA of 3.8 and received the Dean's List award for academic excellence.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-muted/20 rounded-md p-4 text-sm">
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <ul className="space-y-1">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-md p-4 text-sm">
              <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
              <ul className="space-y-1">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Django</li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-md p-4 text-sm">
              <h3 className="font-semibold mb-2">Tools & Technologies</h3>
              <ul className="space-y-1">
                <li>Git</li>
                <li>GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-lg font-semibold">AWS Certified Solutions Architect - Associate</h3>
              <p className="text-muted-foreground">Amazon Web Services | 2021</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Certified Scrum Master</h3>
              <p className="text-muted-foreground">Scrum Alliance | 2020</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
