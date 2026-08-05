import { motion } from "framer-motion";
import { Github, Globe, FileText, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SectionLayout } from "./SectionLayout";
import { PROJECTS } from "@/data/mock-data";

export function Projects() {
  return (
    <SectionLayout 
      id="projects" 
      title="Research Projects" 
      background="muted"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 sm:h-60 overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <Github size={18} /> Code
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <Globe size={18} /> Live Demo
                  </a>
                )}
                {project.links.paper && (
                  <a
                    href={`${import.meta.env.BASE_URL}${project.links.paper}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm font-medium"
                  >
                    <FileText size={18} /> Paper
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
