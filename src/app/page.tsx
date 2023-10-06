import Image from 'next/image'
import Landing from "@/app/Landing/page";
import Skills from "@/app/Skills/page";
import Projects from "@/app/Projects/page";
import AboutMe from "@/app/AboutMe/page";
import Contact from "@/app/Contact/page";

export default function Home() {
  return (
    <main>
        <div>
      <Landing />
        </div>
        <div>
            <Skills />
        </div>
        <div>
            <Projects  />
        </div>
        <div>
            <AboutMe />
        </div>
        <div>
            <Contact />
        </div>
    </main>
  )
}
