import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/contact-us";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroMain from "@/components/Hero";
import Projects  from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroMain />
        <Projects />
        <Experience />
        <AboutMe />
        <ContactUs />
        {/* <TechStack /> */}
      </main>
      <Footer />
    </div>
  );
}
