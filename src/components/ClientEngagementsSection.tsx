import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import exhaleLogo from "@/assets/exhalemind-logo.jpeg.asset.json";
import onfireLogo from "@/assets/onfire-logo.jpeg.asset.json";

const clients = [
  {
    logo: exhaleLogo.url,
    alt: "ExhaleMind Wellness logo",
    company: "ExhaleMind Wellness",
    industry: "Mental Health & Wellness",
    summary:
      "Designed and developed a modern, accessible website that strengthens ExhaleMind Wellness's digital presence. Implemented online appointment scheduling, newsletter subscription workflows, and an intuitive user experience that helps clients easily access mental health services.",
    badges: [
      "Website Design & Development",
      "Calendly Integration",
      "Newsletter Automation",
      "User Experience Design",
      "Workflow Optimization",
    ],
    logoBg: "bg-[#f5f1e8]",
  },
  {
    logo: onfireLogo.url,
    alt: "Onfire Studios logo",
    company: "Onfire Studios",
    industry: "Creative Media Agency",
    summary:
      "Supported business operations through executive assistance, customer communication, workflow coordination, and administrative management, helping the team maintain efficient operations and deliver an exceptional client experience.",
    badges: [
      "Executive Assistance",
      "Customer Operations",
      "Workflow Coordination",
      "Administrative Support",
      "Client Communication",
    ],
    logoBg: "bg-white",
  },
];

const ClientEngagementsSection = () => {
  return (
    <section id="clients" className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--light-bg)/0.25)] to-white pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[hsl(var(--accent)/0.08)] blur-3xl pointer-events-none" />

      <div className="container relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[hsl(var(--accent)/0.25)] shadow-sm text-xs font-semibold text-secondary mb-6">
            <span>🤝</span> Businesses I've Partnered With
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-5">
            Selected Client Engagements
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
            Every business has unique operational challenges. I've had the opportunity to support organizations through executive operations, website development, customer experience, workflow optimization, and AI-powered business solutions. Here are a few examples of that work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {clients.map((client, i) => (
            <motion.article
              key={client.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-3xl border border-white/70 bg-white/60 backdrop-blur-xl shadow-xl shadow-secondary/5 p-6 sm:p-8 transition-all duration-[250ms] hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40"
            >
              {/* Logo container */}
              <div className={`${client.logoBg} rounded-2xl border border-border/60 h-44 flex items-center justify-center p-8 mb-6 overflow-hidden`}>
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-[250ms] group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-1">
                  {client.company}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  {client.industry}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {client.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {client.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[hsl(var(--light-bg)/0.5)] text-secondary border border-[hsl(var(--accent)/0.15)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border/60">
                  <a
                    href="#"
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-accent transition-colors"
                  >
                    View Case Study
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-[250ms] group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientEngagementsSection;
