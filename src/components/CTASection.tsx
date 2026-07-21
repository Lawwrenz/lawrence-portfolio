import { motion } from "framer-motion";
import { Globe, Handshake, Zap, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

const trustIndicators = [
  {
    icon: Globe,
    title: "Available Worldwide",
    description: "Supporting businesses remotely across different time zones.",
  },
  {
    icon: Handshake,
    title: "Open to Freelance & Contract",
    description: "Available for short-term projects, long-term partnerships, and consulting engagements.",
  },
  {
    icon: Zap,
    title: "Responsive & Reliable",
    description: "I aim to respond to all enquiries within one business day.",
  },
];

const CTASection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Soft blue-to-indigo gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--light-bg)/0.5)] to-[hsl(var(--accent)/0.08)] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--accent)/0.12)] blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-[hsl(var(--secondary)/0.1)] blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Abstract geometric shapes */}
      <div className="absolute top-16 right-[15%] w-28 h-28 rounded-[20px] bg-[hsl(var(--accent)/0.05)] border border-[hsl(var(--accent)/0.12)] rotate-12 pointer-events-none" />
      <div className="absolute bottom-24 left-[10%] w-24 h-24 rounded-full bg-[hsl(var(--secondary)/0.05)] border border-[hsl(var(--secondary)/0.12)] pointer-events-none" />
      <div className="absolute top-1/2 right-[8%] w-16 h-16 rounded-[12px] bg-[hsl(var(--light-bg)/0.4)] border border-[hsl(var(--accent)/0.15)] -rotate-12 pointer-events-none" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[hsl(var(--accent)/0.3)]"
            style={{ left: `${12 + i * 15}%`, top: `${18 + (i % 3) * 26}%` }}
            animate={{ y: [0, -50, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </div>

      <div className="container relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="relative rounded-[24px] bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl border border-[hsl(var(--accent)/0.2)] shadow-[0_24px_70px_-20px_rgba(15,40,84,0.12),0_0_50px_-25px_hsl(var(--accent)/0.18)] p-10 md:p-16 lg:p-20 overflow-hidden"
        >
          {/* Inner glass accents */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--accent)/0.08)] blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[hsl(var(--light-bg)/0.55)] blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative text-center max-w-3xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[hsl(var(--accent)/0.25)] shadow-sm text-xs font-semibold text-secondary mb-6 uppercase tracking-wide"
            >
              <Rocket size={14} /> Ready to Take the Next Step?
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-6"
            >
              Let's Build Smarter Business Systems Together
            </motion.h2>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-[60ch] mx-auto"
            >
              Whether you're looking for dependable executive support, streamlined business operations, AI-powered automation, or a modern digital solution, I'd love to learn about your goals and explore how we can build systems that save time, reduce complexity, and support long-term growth.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.25 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="h-14 px-8 text-base rounded-xl hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a
                  href="https://calendly.com/lawrenceezealor1/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Discovery Call <ArrowRight size={18} />
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.3 }}
              className="mt-14 pt-10 border-t border-[hsl(var(--accent)/0.15)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trustIndicators.map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--accent)/0.15)] flex items-center justify-center mb-3">
                      <item.icon size={22} className="text-secondary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[26ch]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
