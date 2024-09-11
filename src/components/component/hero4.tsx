
/**
import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})
  
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Hero4() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">John Doe</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">Full-Stack Developer | UI/UX Designer</p>
            </div>
            <p className="max-w-[800px] text-muted-foreground md:text-xl">
              I'm a passionate and experienced full-stack developer with a strong background in UI/UX design. I love
              creating beautiful and functional web applications that solve real-world problems.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I've worked on.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center text-center space-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-primary-foreground">Project 1</h3>
                  <p className="text-primary-foreground">A web application for managing tasks and projects.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center text-center space-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-primary-foreground">Project 2</h3>
                  <p className="text-primary-foreground">A mobile app for tracking fitness and nutrition.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center text-center space-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-primary-foreground">Project 3</h3>
                  <p className="text-primary-foreground">An e-commerce platform for selling handmade goods.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out my work history and the companies I've been a part of.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                </div>
                <p className="text-muted-foreground">
                  Developed and maintained web applications for a leading technology company. Worked on the front-end
                  and back-end, using React, Node.js, and various other technologies.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>2019 - 2022</span>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                </div>
                <p className="text-muted-foreground">
                  Designed user interfaces and user experiences for a variety of web and mobile applications.
                  Collaborated with cross-functional teams to create intuitive and visually appealing designs.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>2016 - 2019</span>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Web Developer Intern</h3>
                </div>
                <p className="text-muted-foreground">
                  Gained hands-on experience in web development, working on various projects and learning new
                  technologies. Collaborated with senior developers to build and maintain web applications.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>2015 - 2016</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about my background and expertise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
              <div className="bg-background rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">My Story</h3>
                <p className="text-muted-foreground">
                  I've always been passionate about technology and design. After completing my degree in Computer
                  Science, I started my career as a web developer and quickly fell in love with the process of building
                  beautiful and functional web applications.
                </p>
                <p className="text-muted-foreground">
                  Over the years, I've honed my skills in both front-end and back-end development, as well as UI/UX
                  design. I'm constantly learning and exploring new technologies to stay ahead of the curve and deliver
                  the best possible solutions for my clients.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">My Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                    <CodeIcon className="w-8 h-8 text-muted-foreground" />
                    <span className="text-sm font-semibold">Front-End</span>
                    <p className="text-xs text-muted-foreground">React, Vue.js, Angular, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                    <ServerIcon className="w-8 h-8 text-muted-foreground" />
                    <span className="text-sm font-semibold">Back-End</span>
                    <p className="text-xs text-muted-foreground">Node.js, Express, PHP, Ruby on Rails, Django</p>
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
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'd love to hear from you! Feel free to reach out with any questions or opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4 py-12">
              <form className="grid gap-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" rows={5} />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
              <div className="flex justify-center gap-4">
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <GitlabIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <TwitterIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BriefcaseIcon(props:any) {
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
  )
}


function BrushIcon(props:any) {
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
  )
}


function CalendarDaysIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CodeIcon(props:any) {
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
  )
}


function DatabaseIcon(props:any) {
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
  )
}


function GitlabIcon(props:any) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
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
  )
}


function ServerIcon(props:any) {
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
  )
}


function TwitterIcon(props:any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
