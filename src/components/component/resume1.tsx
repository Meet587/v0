/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})
**/
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Resume1() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div>johndoe@email.com</div>
            <Separator orientation="vertical" />
            <div>+1 (555) 123-4567</div>
            <Separator orientation="vertical" />
            <div>linkedin.com/in/johndoe</div>
          </div>
        </div>
        <Button variant="secondary">Download PDF</Button>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-8 grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <div className="text-sm text-muted-foreground">Acme Inc. | Jan 2020 - Present</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                <li>Collaborated with cross-functional teams to design and implement new features.</li>
                <li>Participated in code reviews and provided feedback to improve code quality.</li>
                <li>Implemented automated testing and deployment pipelines to ensure reliable releases.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Intern</h3>
              <div className="text-sm text-muted-foreground">Widgets Inc. | Jun 2019 - Aug 2019</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Assisted in the development of a web-based inventory management system.</li>
                <li>Participated in daily stand-up meetings and sprint planning sessions.</li>
                <li>Gained experience in Agile software development methodologies.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <div className="text-sm text-muted-foreground">University of Example | 2015 - 2019</div>
              <p className="mt-2 text-sm">
                Graduated with a 3.8 GPA. Relevant coursework included Data Structures, Algorithms, and Software
                Engineering.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">MongoDB</Badge>
            <Badge variant="secondary">Git</Badge>
            <Badge variant="secondary">Agile</Badge>
            <Badge variant="secondary">Test-Driven Development</Badge>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Awards & Certifications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Certified Scrum Master</h3>
              <div className="text-sm text-muted-foreground">Scrum Alliance | 2021</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Best Hackathon Project</h3>
              <div className="text-sm text-muted-foreground">Acme Hackathon | 2020</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
