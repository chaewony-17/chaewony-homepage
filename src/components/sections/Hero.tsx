import { motion } from "framer-motion";
import { GraduationCap, Github, Linkedin, Mail, Sparkles, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/mock-data";

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-lg sm:text-xl text-muted-foreground mb-3 font-medium">
              {PERSONAL_INFO.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground tracking-tight leading-tight mb-4">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-primary font-medium mb-2">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {PERSONAL_INFO.institution}
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            {/* Featured News Callout */}
            <motion.a
              href={PERSONAL_INFO.featuredNews.link}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-start gap-3 mb-10 px-5 py-4 rounded-2xl bg-primary/8 border border-primary/20 hover:bg-primary/12 transition-colors duration-200 max-w-2xl text-left group"
            >
              <Sparkles size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {PERSONAL_INFO.featuredNews.text}
              </p>
            </motion.a>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href={PERSONAL_INFO.socials.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <GraduationCap size={20} />
                <span>Google Scholar</span>
              </a>
              
              <div className="flex items-center gap-3">
                <SocialIcon href={PERSONAL_INFO.socials.github} icon={<Github size={20} />} ariaLabel="GitHub" external />
                <SocialIcon href={PERSONAL_INFO.socials.linkedin} icon={<Linkedin size={20} />} ariaLabel="LinkedIn" external />
                <SocialIcon href={PERSONAL_INFO.cvLink} icon={<FileText size={20} />} ariaLabel="Curriculum Vitae" external />
                <SocialIcon href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail size={20} />} ariaLabel="Email" />
              </div>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.png`} 
                alt={PERSONAL_INFO.name}
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-background shadow-xl"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, ariaLabel, external }: { href: string; icon: React.ReactNode; ariaLabel: string; external?: boolean }) {
  return (
    <a 
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
    >
      {icon}
    </a>
  );
}
