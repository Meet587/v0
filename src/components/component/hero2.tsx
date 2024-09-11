/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Eczar } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

eczar({
  subsets: ['latin'],
  display: 'swap',
})

**/
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Hero2() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">John Doe Portfolio</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:underline" prefetch={false}>
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:underline" prefetch={false}>
                Projects
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:underline" prefetch={false}>
                Experience
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:underline" prefetch={false}>
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:underline" prefetch={false}>
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="w-full h-[80dvh] bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center"
        >
          <div className="max-w-4xl px-4 text-center space-y-6 text-primary-foreground">
            <h1 className="text-5xl font-bold">Welcome to my Portfolio</h1>
            <p className="text-xl">Discover my latest projects and learn more about my experience.</p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Projects
            </Link>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Latest Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the projects I've been working on recently.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Project 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Project 2"
                  className="w-full h-48 object-cover rounded-t-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Project 3"
                  className="w-full h-48 object-cover rounded-t-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out my work history and the companies I've been a part of.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Acme Inc.</h3>
                  <p className="text-muted-foreground">Software Engineer</p>
                  <p className="text-muted-foreground">2020 - Present</p>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Globex Corporation</h3>
                  <p className="text-muted-foreground">Front-End Developer</p>
                  <p className="text-muted-foreground">2018 - 2020</p>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Stark Industries</h3>
                  <p className="text-muted-foreground">Intern</p>
                  <p className="text-muted-foreground">2017 - 2018</p>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="John Doe"
                  className="rounded-full w-48 h-48 object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hi, I'm John Doe, a passionate software engineer with a love for building innovative and user-friendly
                  web applications. With several years of experience in the industry, I've honed my skills in various
                  technologies and frameworks, always striving to stay up-to-date with the latest trends and best
                  practices.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  In my free time, I enjoy exploring new technologies, contributing to open-source projects, and
                  mentoring aspiring developers. I'm also an avid reader and enjoy hiking in the great outdoors.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or just want to say hello? Feel free to reach out!
              </p>
            </div>
            <form className="max-w-md mx-auto mt-12 space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md bg-muted text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-muted text-muted-foreground"
              />
              <Textarea placeholder="Message" className="w-full px-4 py-2 rounded-md bg-muted text-muted-foreground" />
              <Button
                type="submit"
                className="w-full h-10 rounded-md bg-primary text-primary-foreground font-medium shadow transition-colors hover:bg-primary/90"
              >
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="#" prefetch={false}>
              Home
            </Link>
            <Link href="#" prefetch={false}>
              Projects
            </Link>
            <Link href="#" prefetch={false}>
              Experience
            </Link>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Social</h3>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" prefetch={false}>
              GitHub
            </Link>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <p>
              John Doe
              <br />
              123 Main St.
              <br />
              Anytown, USA 12345
            </p>
            <p>
              Email:{" "}
              <Link href="#" prefetch={false}>
                john@example.com
              </Link>
            </p>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-center text-xs text-muted-foreground">
          &copy; 2024 John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
