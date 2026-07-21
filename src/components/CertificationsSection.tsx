import { motion } from "framer-motion";
import { Award, Bot, Briefcase, GraduationCap, Users } from "lucide-react";
import certAIAUT from "@/assets/cert-ai-automation-systems-architect.png";
import certSoftware from "@/assets/cert-software-engineering.png";
import certAI from "@/assets/cert-ai-career.png";
import certVA from "@/assets/cert-virtual-assistant.png";
import certPF from "@/assets/cert-professional-foundations.png";
import certZendesk from "@/assets/cert-zendesk.png";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

const stats = [
  {
    icon: Award,
    value: "6+",
    label: "Professional Certifications",
  },
  {
    icon: Briefcase,
    value: "7+",
    label: "Business Projects",
  },
  {
    icon: Users,
    value: "2",
    label: "Client Engagements",
  },
  {
    icon: Bot,
    value: "AI",
    label: "Automation Focus",
  },
];

const certifications = [
  {
    image: certAIAUT,
    title: "AI Automation & Systems Architect",
    issuer: "NexithAi",
    description:
      "Advanced training in AI automation, intelligent business systems, workflow architecture, AI agents, and scalable automation solutions.",
  },
  {
    image: certSoftware,
    title: "Software Engineering",
    issuer: "ALX Africa",
    description:
      "Strong technical foundation for developing modern digital products and scalable software solutions.",
  },
  {
    image: certAI,
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    description:
      "Practical AI, responsible AI, prompt engineering, workplace productivity, and AI adoption.",
  },
  {
    image: certVA,
    title: "Virtual Assistant",
    issuer: "ALX Africa",
    description:
      "Executive support, operations, project coordination, documentation, and remote collaboration.",
  },
  {
    image: certPF,
    title: "Professional Foundations",
    issuer: "ALX Africa",
    description:
      "Leadership, communication, professionalism, teamwork, and workplace effectiveness.",
  },
  {
    image: certZendesk,
    title: "Zendesk Chat for Customer Service Agents",
    issuer: "Udemy",
    description:
      "Customer communication, live chat support, ticket handling, and service excellence.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Soft background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(var(--light-bg)/0.35)] to-white pointer-events-none" />
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--accent)/0.06)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--light-bg)/0.6)] blur-3xl pointer-events-none" />

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
            <GraduationCap size={14} /> Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-primary mb-5">
            Committed to Learning. Focused on Excellence.
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            I believe continuous learning is essential for delivering exceptional business outcomes.
            These certifications represent my ongoing investment in executive operations, AI automation,
            software engineering, customer experience, and modern business systems.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
              className="flex flex-col items-center text-center p-5 md:p-6 rounded-[20px] bg-card/60 backdrop-blur-xl border border-border/50 shadow-sm hover:shadow-[0_12px_40px_-12px_rgba(15,40,84,0.12),0_0_30px_-10px_hsl(var(--accent)/0.25)] transition-all duration-[250ms]"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-[hsl(var(--accent)/0.12)] text-secondary">
                <stat.icon size={20} />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-medium text-muted-foreground leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col h-full bg-card/80 backdrop-blur-xl border border-border/60 rounded-[20px] overflow-hidden shadow-card transition-all duration-[250ms] hover:shadow-[0_20px_50px_-12px_rgba(15,40,84,0.15),0_0_40px_-12px_hsl(var(--accent)/0.3)] hover:border-accent/40"
            >
              {/* Thumbnail — fixed height, original aspect ratio preserved */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[hsl(var(--light-bg)/0.6)] to-white border-b border-border/50 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate issued by ${cert.issuer}`}
                  className="w-full h-full object-contain transition-transform duration-[250ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-[hsl(var(--accent)/0.12)] border border-[hsl(var(--accent)/0.2)] text-xs font-semibold text-secondary mb-3">
                  {cert.issuer}
                </span>
                <h3 className="text-lg font-bold text-primary tracking-tight mb-3 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
