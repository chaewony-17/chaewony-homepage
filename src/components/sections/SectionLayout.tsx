import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionLayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "muted";
}

export function SectionLayout({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  background = "default" 
}: SectionLayoutProps) {
  return (
    <section 
      id={id} 
      className={`py-24 ${background === "muted" ? "bg-muted/30" : "bg-background"} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-1 bg-primary mt-6 rounded-full" />
        </motion.div>
        
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
