import Image from 'next/image'
import Landing from "@/app/Landing/page";
import Skills from "@/app/Skills/page";
import Projects from "@/app/Projects/page";

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
    </main>
  )
}
