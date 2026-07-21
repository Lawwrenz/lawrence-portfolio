import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <a href="#" className="font-brand text-4xl md:text-5xl text-primary-foreground leading-none">
          Lawrence<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="https://calendly.com/lawrenceezealor1/new-meeting" target="_blank" rel="noopener noreferrer">
              <CalendarCheck size={16} /> Book a Call
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-b border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2" asChild>
            <a href="https://calendly.com/lawrenceezealor1/new-meeting" target="_blank" rel="noopener noreferrer">
              <CalendarCheck size={16} /> Book a Call
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
