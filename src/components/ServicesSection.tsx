import { motion } from "framer-motion";
import { Briefcase, Workflow, Bot, Globe2, ArrowRight } from "lucide-react";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

const services = [
  {
    icon: Briefcase,
    title: "Executive & Administrative Support",
    description:
      "Helping executives stay organized, focused, and productive through dependable administrative support, proactive communication, and efficient day-to-day coordination.",
    tags: [
      "Calendar Management",
      "Inbox Management",
      "Travel Coordination",
      "Meeting Scheduling",
      "Document Preparation",
      "Client Communication",
    ],
  },
  {
    icon: Workflow,
    title: "Operations & Process Management",
    description:
      "Building structured operational systems that improve efficiency, reduce bottlenecks, and support business growth.",
    tags: [
      "SOP Documentation",
      "CRM Management",
      "Workflow Design",
      "Process Optimization",
      "Project Coordination",
      "Customer Operations",
    ],
  },
  {
    icon: Bot,
    title: "AI & Workflow Automation",
    description:
      "Designing intelligent automation solutions that reduce repetitive work, improve accuracy, and allow teams to focus on higher-value work.",
    tags: [
      "AI Assistants",
      "Workflow Automation",
      "API Integrations",
      "n8n",
      "Business Process Automation",
      "AI Productivity",
    ],
  },
  {
    icon: Globe2,
    title: "Websites & Digital Solutions",
    description:
      "Creating modern digital experiences that help businesses build credibility, attract customers, and improve engagement.",
    tags: [
      "Business Websites",
      "Landing Pages",
      "Booking Systems",
      "Portfolio Websites",
      "Newsletter Integration",
      "Digital Optimization",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Soft gradient background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--light-bg)/0.35)] to-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(var(--accent)/0.06)] blur-3xl pointer-events-none" />

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
            <span>💼</span> Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-5">
            How I Help Businesses
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Whether you need reliable executive support, streamlined operations, intelligent automation, or a stronger online presence, I help businesses build efficient systems that save time, improve productivity, and support sustainable growth.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col bg-card border border-border rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:border-accent transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-secondary" size={24} />
                </div>

                <h3 className="text-lg font-bold text-primary mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-light-bg text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors mt-auto"
                >
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/60 bg-gradient-to-br from-[hsl(var(--light-bg)/0.5)] to-white/80 backdrop-blur-xl shadow-2xl shadow-secondary/10 p-8 md:p-12"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 tracking-tight">
              Need a solution tailored to your business?
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Every business is unique. Let's discuss how I can help streamline your operations, support your team, and build systems that work smarter.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Let's Talk <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
