import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { SectionLayout } from "./SectionLayout";
import { PERSONAL_INFO } from "@/data/mock-data";

export function Contact() {
  return (
    <SectionLayout 
      id="contact" 
      title="Get in Touch" 
      background="muted"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
            I am always open to discussing new research collaborations, speaking opportunities, or just nerding out about machine learning and complex systems. Feel free to reach out via email!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                <p className="text-muted-foreground">
                  {PERSONAL_INFO.location}<br/>
                  {PERSONAL_INFO.institution}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Let's Connect</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Hi Alex, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                />
              </div>
              <button 
                type="submit"
                onClick={() => alert("This is a static mockup. Form submission is not implemented.")}
                className="w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message <ExternalLink size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
