import { motion } from "framer-motion";
import { ArrowRight, Eye, Workflow, Briefcase, Globe2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lawrence-portrait-hero-8k.jpg";

const transition = { type: "spring" as const, duration: 0.7, bounce: 0 };

const trustItems = [
  { icon: Briefcase, label: "Executive Support" },
  { icon: Workflow, label: "Business Operations" },
  { icon: Cpu, label: "AI Automation" },
  { icon: Globe2, label: "Available Worldwide" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white">
      {/* Soft blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--light-bg)/0.35)] to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(var(--accent)/0.15)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--light-bg)/0.6)] blur-3xl pointer-events-none" />

      {/* Faint geometric grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--secondary)/0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)/0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Abstract workflow lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M 0 500 Q 300 300 600 450 T 1200 350"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.4"
        />
        <path
          d="M 0 200 Q 400 400 800 250 T 1200 500"
          stroke="hsl(var(--secondary))"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.3"
        />
      </svg>

      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[hsl(var(--accent)/0.25)] shadow-sm text-xs font-semibold text-secondary mb-6">
              <span>🚀</span> Helping Businesses Run Smarter
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.08] text-primary text-balance mb-6">
              Helping Founders Build{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Smarter Businesses
              </span>{" "}
              Through Executive Operations & AI Automation.
            </h1>

            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-[58ch] mb-8">
              I partner with founders, executives, and growing businesses to streamline operations, deliver dependable executive support, and build AI-powered systems that reduce manual work, improve productivity, and create scalable business processes.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" asChild className="rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all">
                <a href="#portfolio">
                  <Eye size={18} /> View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                <a href="#contact">
                  Let's Connect <ArrowRight size={18} />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-md">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-border/60"
                >
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--light-bg)/0.6)] flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-secondary" />
                  </div>
                  <span className="text-xs font-semibold text-primary">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            {/* Glow */}
            <div className="absolute inset-8 bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent blur-3xl rounded-full" />

            {/* Glassmorphism frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl shadow-secondary/10 p-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[hsl(var(--light-bg))] to-white">
                <img
                  src={heroImage}
                  alt="Lawrence Ezealor — Executive Operations & AI Automation Specialist"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={1280}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
