import { motion } from "framer-motion";
import { FileText, ExternalLink, Code } from "lucide-react";
import { SectionLayout } from "./SectionLayout";
import { PUBLICATIONS } from "@/data/mock-data";

export function Publications() {
  return (
    <SectionLayout 
      id="publications" 
      title="Selected Publications" 
      subtitle="A curated list of my recent academic publications. For a complete list, please refer to my Google Scholar profile."
    >
      <div className="space-y-8">
        {PUBLICATIONS.map((pub, index) => (
          <motion.div 
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border group hover:before:bg-primary before:transition-colors duration-300"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
            
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`flex gap-6 ${pub.image ? "flex-col sm:flex-row" : ""}`}>
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <p className="text-foreground/80 mb-1 font-medium">
                    {pub.authors}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                    <span className="text-primary font-semibold italic">
                      {pub.venue}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground font-medium">
                      {pub.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {pub.links.pdf && (
                      <LinkButton href={`${import.meta.env.BASE_URL}${pub.links.pdf}`} icon={<FileText size={16} />} text="PDF" newTab />
                    )}
                    {pub.links.scholar && (
                      <LinkButton href={pub.links.scholar} icon={<ExternalLink size={16} />} text="Google Scholar" newTab />
                    )}
                    {pub.links.url && (
                      <LinkButton href={pub.links.url} icon={<ExternalLink size={16} />} text="View Article" newTab />
                    )}
                    {pub.links.code && (
                      <LinkButton href={pub.links.code} icon={<Code size={16} />} text="Code" />
                    )}
                    {pub.links.video && (
                      <LinkButton href={pub.links.video} icon={<ExternalLink size={16} />} text="Video" />
                    )}
                    {pub.links.bibtex && (
                      <LinkButton href={pub.links.bibtex} icon={<FileText size={16} />} text="BibTeX" variant="outline" />
                    )}
                  </div>
                </div>

                {/* Publication image */}
                {pub.image && (
                  <div className="sm:w-64 sm:flex-shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}${pub.image.replace(/^\//, "")}`}
                      alt={pub.title}
                      className="w-full h-44 sm:h-full object-cover rounded-xl border border-border"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}

function LinkButton({ href, icon, text, variant = "primary", newTab }: { href: string; icon: React.ReactNode; text: string; variant?: "primary" | "outline"; newTab?: boolean }) {
  const baseClasses = "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200";
  const variants = {
    primary: "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
    outline: "bg-transparent border border-border text-muted-foreground hover:border-primary hover:text-primary"
  };
  
  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {icon}
      <span>{text}</span>
    </a>
  );
}
