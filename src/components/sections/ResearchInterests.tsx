import { motion } from "framer-motion";
import { SectionLayout } from "./SectionLayout";
import { RESEARCH_INTERESTS } from "@/data/mock-data";

export function ResearchInterests() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionLayout 
      id="research" 
      title="Research Interests" 
      background="muted"
    >
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {RESEARCH_INTERESTS.map((interest) => (
          <motion.div 
            key={interest.id} 
            variants={item}
            className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <interest.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 font-serif">
              {interest.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  );
}
