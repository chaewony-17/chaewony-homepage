import { motion } from "framer-motion";
import { SectionLayout } from "./SectionLayout";
import { NEWS } from "@/data/mock-data";

export function News() {
  return (
    <SectionLayout 
      id="news" 
      title="Recent News" 
    >
      <div className="max-w-3xl">
        <div className="space-y-6">
          {NEWS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start group"
            >
              <div className="min-w-[100px] pt-1">
                <span className="text-sm font-bold tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  {item.date}
                </span>
              </div>
              <div className="flex-1 pb-6 sm:border-l border-border sm:pl-6 relative">
                {/* Desktop timeline node */}
                <div className="hidden sm:block absolute left-[-5px] top-2.5 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
                
                <p className="text-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
