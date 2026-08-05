import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { Publications } from "@/components/sections/Publications";
import { Projects } from "@/components/sections/Projects";
import { News } from "@/components/sections/News";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <ResearchInterests />
        <Publications />
        <Projects />
        <News />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
