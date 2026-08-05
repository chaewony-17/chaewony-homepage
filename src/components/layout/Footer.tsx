import { PERSONAL_INFO } from "@/data/mock-data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href={PERSONAL_INFO.socials.github} className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={PERSONAL_INFO.socials.scholar} className="text-muted-foreground hover:text-primary transition-colors">
              Google Scholar
            </a>
            <a href={PERSONAL_INFO.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
