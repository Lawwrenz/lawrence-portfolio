import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lawrence completely transformed how we manage operations. His attention to detail and proactive approach saved us countless hours every week.",
    author: "Eric A.",
    role: "CEO",
  },
  {
    quote:
      "Working with Lawrence feels like having an extra operations partner. He's organized, reliable, proactive, and always one step ahead. His structured approach brought clarity and efficiency to our daily workflow.",
    author: "Chris A.",
    role: "Startup Founder",
  },
  {
    quote:
      "Lawrence built a fantastic website for us. What stood out most was how intentional he was throughout the entire process. Every design decision and feature felt carefully considered, and his attention to detail gave us confidence from start to finish. The final website exceeded our expectations, and we couldn't be happier with the outcome.",
    author: "ExhaleMind Wellness",
    role: "Mental Health & Wellness Organization",
  },
];

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Soft background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(var(--light-bg)/0.35)] to-white pointer-events-none" />
      <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--accent)/0.06)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--light-bg)/0.6)] blur-3xl pointer-events-none" />

      <div className="container relative max-w-6xl mx-auto px-4">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[hsl(var(--accent)/0.25)] shadow-sm text-xs font-semibold text-secondary mb-6 uppercase tracking-wide">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-5">
            Trusted by Clients. Valued for Results.
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Building great systems is important—but building trust is even more valuable. Here's what clients have said about working with me.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col h-full bg-card/80 backdrop-blur-xl border border-border/60 rounded-[20px] p-7 md:p-8 shadow-card transition-all duration-[250ms] hover:shadow-[0_20px_50px_-12px_rgba(15,40,84,0.15),0_0_40px_-12px_hsl(var(--accent)/0.3)] hover:border-accent/40"
            >
              {/* Decorative quote */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-[250ms]">
                <Quote size={40} className="text-accent" />
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="relative flex-1">
                <Quote size={20} className="absolute -left-1 -top-1 text-accent/20" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-6">
                  {t.quote}
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-base font-bold text-primary tracking-tight">{t.author}</p>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
