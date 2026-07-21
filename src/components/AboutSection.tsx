import { motion } from "framer-motion";
import {
  Headphones,
  Briefcase,
  Settings2,
  Globe2,
  Code2,
  Bot,
  Target,
  Users,
  Network,
  TrendingUp,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import lawrencePortrait from "@/assets/lawrence-portrait-cropped.png.asset.json";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

const careerTimeline = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Learned the importance of clear communication and customer-first thinking.",
  },
  {
    icon: Briefcase,
    title: "Executive Assistance",
    description: "Supported founders and executives with calendars, inboxes, and operations.",
  },
  {
    icon: Settings2,
    title: "Business Operations",
    description: "Documented processes, managed CRMs, and optimized day-to-day workflows.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Built digital experiences that help businesses present and convert better.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Designed intelligent systems that reduce manual work and scale operations.",
  },
];

const approachItems = [
  {
    icon: Target,
    title: "Business First",
    description: "I understand business challenges before recommending solutions.",
  },
  {
    icon: Users,
    title: "People Focused",
    description: "Technology should simplify work and improve experiences.",
  },
  {
    icon: Network,
    title: "Systems Thinking",
    description: "I build scalable systems that grow with the business.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Every workflow can be refined to become smarter and more efficient.",
  },
];

const quickFacts = [
  {
    icon: Globe2,
    label: "Working with Clients Worldwide",
  },
  {
    icon: Briefcase,
    label: "Executive Operations & AI Automation Specialist",
  },
  {
    icon: Settings2,
    label: "Business Systems & Workflow Optimization",
  },
  {
    icon: Handshake,
    label: "Available for Freelance & Remote Opportunities",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Soft gradient background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--light-bg)/0.35)] to-white pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(var(--accent)/0.08)] blur-3xl pointer-events-none" />

      <div className="container relative max-w-6xl mx-auto px-4">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[hsl(var(--accent)/0.25)] shadow-sm text-xs font-semibold text-secondary mb-6">
            <span>👋</span> Meet Lawrence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-5">
            Helping Businesses Build Better Systems, Not Just Better Workflows
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - portrait + timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
            className="relative"
          >
            {/* Portrait frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl shadow-secondary/10 p-3 mb-10">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[hsl(var(--light-bg))] to-white">
                <img
                  src={lawrencePortrait.url}
                  alt="Lawrence Ezealor — Executive Operations & AI Automation Specialist"
                  className="w-full h-full object-cover"
                  width={720}
                  height={900}
                />
              </div>
            </div>

            {/* Career timeline */}
            <div className="relative pl-4">
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-accent via-secondary to-accent/30" />
              <div className="space-y-6">
                {careerTimeline.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="relative flex items-start gap-4"
                  >
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-[hsl(var(--accent)/0.25)] shadow-md flex items-center justify-center shrink-0">
                      <step.icon size={22} className="text-secondary" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm font-bold text-primary mb-0.5">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - story + approach + quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <div className="prose prose-sm max-w-none text-muted-foreground mb-10">
              <p className="text-base lg:text-lg leading-relaxed mb-5">
                Hi, I'm <strong className="text-primary">Lawrence Ezealor</strong>, an Executive Operations & AI Automation Specialist passionate about helping businesses work smarter through efficient systems, dependable operational support, and intelligent automation.
              </p>
              <p className="text-base leading-relaxed mb-5">
                My career began in customer support and executive assistance, where I learned that successful businesses rely on more than hard work—they rely on well-designed systems. Working closely with founders, executives, and growing teams gave me firsthand insight into the everyday operational challenges that can slow a business down.
              </p>
              <p className="text-base leading-relaxed mb-5">
                Over time, I expanded my expertise into business operations, website development, workflow optimization, and AI automation. Today, I combine strategic operational thinking with modern technology to create practical solutions that reduce manual work, improve productivity, and help businesses scale with confidence.
              </p>
              <p className="text-base leading-relaxed mb-6">
                Whether I'm supporting executives, documenting processes, building AI-powered workflows, or developing digital experiences, my goal remains the same:
              </p>
              <blockquote className="relative pl-5 py-4 pr-4 rounded-2xl bg-[hsl(var(--light-bg)/0.4)] border-l-4 border-accent">
                <p className="text-base lg:text-lg font-medium text-primary italic">
                  "To help businesses operate more efficiently so their teams can focus on what matters most."
                </p>
              </blockquote>
            </div>

            {/* My Approach */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-primary mb-5">My Approach</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {approachItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center mb-3">
                      <item.icon size={20} className="text-secondary" />
                    </div>
                    <h4 className="text-sm font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-5">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {quickFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-border/60"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[hsl(var(--light-bg)/0.6)] flex items-center justify-center flex-shrink-0">
                      <fact.icon size={18} className="text-secondary" />
                    </div>
                    <span className="text-sm font-semibold text-primary leading-tight">{fact.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
