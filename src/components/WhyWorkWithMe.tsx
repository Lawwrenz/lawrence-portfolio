import { motion } from "framer-motion";
import { Puzzle, Settings2, Handshake, Brain, ListChecks, TrendingUp } from "lucide-react";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

const benefits = [
  {
    icon: Puzzle,
    title: "Business-First Thinking",
    description:
      "I take time to understand your business, goals, and workflows before recommending any solution.",
  },
  {
    icon: Settings2,
    title: "Systems That Scale",
    description:
      "I design processes and automation that continue supporting your business as it grows.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description:
      "I value clear communication, accountability, professionalism, and delivering work you can depend on.",
  },
  {
    icon: Brain,
    title: "AI With Purpose",
    description:
      "I use AI strategically to solve real business challenges—not simply because it's new technology.",
  },
  {
    icon: ListChecks,
    title: "Structured Execution",
    description:
      "Every project follows a clear, organized process from planning and implementation to testing and refinement.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "I believe every workflow, process, and system can be refined to become more efficient over time.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Soft gradient background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--light-bg)/0.35)] to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(var(--accent)/0.06)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--light-bg)/0.6)] blur-3xl pointer-events-none" />

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
            <span>⭐</span> Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-5">
            Building Better Systems Through Thoughtful Execution
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            I believe successful operations are built on trust, clarity, and continuous improvement.
            Whether I'm supporting executives, designing workflows, or implementing AI-powered solutions,
            my focus is always on creating practical systems that help businesses operate more efficiently and grow with confidence.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col h-full bg-card/80 backdrop-blur-xl border border-border/60 rounded-[20px] p-7 shadow-card transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,40,84,0.12),0_0_40px_-12px_hsl(var(--accent)/0.25)] hover:border-accent/40"
            >
              {/* Subtle top accent glow */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-[20px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-secondary" size={24} />
              </div>

              <h3 className="text-lg font-bold text-primary mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
