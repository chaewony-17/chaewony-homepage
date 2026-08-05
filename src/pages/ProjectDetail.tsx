import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/mock-data";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link href="/#projects" className="text-primary hover:underline">← Back to projects</Link>
        </div>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 border-b border-border pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-base text-primary font-medium italic">{details.venue}</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl overflow-hidden border border-border shadow-lg h-64 sm:h-80 bg-muted"
        >
          <img
            src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        <Section title="Overview" delay={0.1}>
          <p className="text-foreground/80 leading-relaxed text-lg">{details.overview}</p>
        </Section>

        <Section title="Motivation" delay={0.2}>
          <p className="text-foreground/80 leading-relaxed">{details.motivation}</p>
        </Section>

        <Section title="Methodology" delay={0.3}>
          <p className="text-foreground/80 leading-relaxed">{details.methodology}</p>
        </Section>

        <Section title="Results" delay={0.4}>
          <p className="text-foreground/80 leading-relaxed">{details.results}</p>
        </Section>

        <Section title="Tools & Technologies" delay={0.5}>
          <div className="flex flex-wrap gap-3">
            {details.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-xl"
              >
                {tool}
              </span>
            ))}
          </div>
        </Section>

        {/* In Progress Badge */}
        {details.inProgress && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4 border-t border-border flex flex-wrap items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-100 text-amber-800 border border-amber-200 font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Paper in Preparation — M.S. Thesis (Publishing)
            </span>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <ExternalLink size={18} />
              All Projects
            </Link>
          </motion.div>
        )}

        {/* PDF Links */}
        {!details.inProgress && (details.pdf || (details.pdfs && details.pdfs.length > 0)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4 border-t border-border flex flex-wrap gap-4"
          >
            {details.pdf && (
              <a
                href={`${import.meta.env.BASE_URL}${details.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={18} />
                View Paper PDF
              </a>
            )}
            {details.pdfs && details.pdfs.map((p: { label: string; path: string }) => (
              <a
                key={p.path}
                href={`${import.meta.env.BASE_URL}${p.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={18} />
                {p.label}
              </a>
            ))}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <ExternalLink size={18} />
              All Projects
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Section({ title, children, delay }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay ?? 0 }}
    >
      <h2 className="text-xl font-serif font-bold text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}
