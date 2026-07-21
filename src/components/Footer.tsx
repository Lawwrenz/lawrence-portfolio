import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Executive Support", href: "#services" },
  { label: "Business Operations", href: "#services" },
  { label: "AI Automation", href: "#services" },
  { label: "Website Development", href: "#services" },
  { label: "Workflow Optimization", href: "#services" },
  { label: "AI Customer Support Solutions", href: "#services" },
];

const resources = [
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1qvSAaW1DJo_KIxyjQAxJmLPWxAQYNb-f/view?usp=sharing",
    external: true,
  },
  { label: "Certifications", href: "#certifications" },
  {
    label: "Discovery Call",
    href: "https://calendly.com/lawrenceezealor1/new-meeting",
    external: true,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/lawrence-ezealor",
    external: true,
  },
  { label: "GitHub Portfolio", href: "https://github.com/", external: true },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lawrence-ezealor",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:lawrenceezealor1@gmail.com",
    icon: Mail,
    external: false,
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-[hsl(var(--secondary)/0.15)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-[hsl(var(--accent)/0.08)] blur-3xl pointer-events-none" />

      <div className="container relative max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Main four-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">
                Lawrence Digital Labs
                <span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6 max-w-[32ch]">
              Helping businesses streamline operations, implement AI automation, and build smarter systems through thoughtful execution and modern technology.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="group w-10 h-10 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-200"
                >
                  <s.icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200" />
                    </span>
                    {link.external && (
                      <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 md:my-14 h-px bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Lawrence Digital Labs. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Built with intention. Designed for impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
