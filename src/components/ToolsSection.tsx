import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Briefcase,
  Globe,
  Palette,
  Users,
  Code2,
  Webhook,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import logoMonday from "@/assets/logo-monday.png";
import logoCanva from "@/assets/logo-canva.png";
import logoSlack from "@/assets/logo-slack.svg";
import logoGoHighLevel from "@/assets/logo-gohighlevel.png";

type Tool = {
  name: string;
  logo?: string;
  icon?: LucideIcon;
  iconColor?: string;
  /** Optional text badge fallback (used when no official logo renders reliably) */
  badge?: string;
  badgeColor?: string; // tailwind text color class
  badgeBg?: string; // tailwind bg color class
};

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  tools: Tool[];
};

const si = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const capabilities: Capability[] = [
  {
    title: "AI & Intelligent Systems",
    description:
      "Building intelligent assistants, AI workflows, RAG systems, and business automation powered by modern language models.",
    icon: Bot,
    tools: [
      { name: "OpenAI", badge: "AI", badgeColor: "text-white", badgeBg: "bg-[#10A37F]" },
      { name: "Claude", logo: si("anthropic", "D97757") },
      { name: "Gemini", logo: si("googlegemini", "8E75B2") },
      { name: "Pinecone", badge: "PC", badgeColor: "text-white", badgeBg: "bg-[#111111]" },
      { name: "Perplexity", logo: si("perplexity", "1FB8CD") },
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Connecting business applications, automating repetitive tasks, and designing scalable workflows.",
    icon: Workflow,
    tools: [
      { name: "n8n", logo: si("n8n", "EA4B71") },
      { name: "Make", logo: si("make", "6D00CC") },
      { name: "Zapier", logo: si("zapier", "FF4A00") },
      { name: "REST APIs", icon: Code2, iconColor: "text-accent" },
      { name: "Webhooks", icon: Webhook, iconColor: "text-primary" },
    ],
  },
  {
    title: "Business Operations",
    description:
      "Organizing business processes, CRM management, documentation, productivity, and operational excellence.",
    icon: Briefcase,
    tools: [
      { name: "Google Workspace", logo: si("google", "4285F4") },
      { name: "Airtable", logo: si("airtable", "18BFFF") },
      { name: "HubSpot", logo: si("hubspot", "FF7A59") },
      { name: "Monday.com", logo: logoMonday },
      { name: "Notion", logo: si("notion", "000000") },
      { name: "GoHighLevel", logo: logoGoHighLevel },
    ],
  },
  {
    title: "Website & Development",
    description:
      "Developing modern websites, backend integrations, and scalable digital experiences.",
    icon: Globe,
    tools: [
      { name: "Lovable", icon: Sparkles, iconColor: "text-accent" },
      { name: "Supabase", logo: si("supabase", "3FCF8E") },
      { name: "GitHub", logo: si("github", "181717") },
      { name: "HTML5", logo: si("html5", "E34F26") },
      { name: "CSS3", badge: "CSS", badgeColor: "text-white", badgeBg: "bg-[#1572B6]" },
    ],
  },
  {
    title: "Creative & Content",
    description:
      "Creating professional visual content, presentations, videos, and AI-enhanced creative assets.",
    icon: Palette,
    tools: [
      { name: "Canva", logo: logoCanva },
      { name: "CapCut", badge: "CC", badgeColor: "text-white", badgeBg: "bg-gradient-to-br from-[#00E1FF] to-[#FF3E80]" },
      { name: "Runway", badge: "RW", badgeColor: "text-white", badgeBg: "bg-[#111111]" },
      { name: "Whisk", icon: Sparkles, iconColor: "text-secondary" },
    ],
  },
  {
    title: "Communication & Collaboration",
    description:
      "Managing projects, collaborating with teams, and maintaining seamless communication across distributed work environments.",
    icon: Users,
    tools: [
      { name: "Slack", logo: logoSlack },
      { name: "Microsoft Teams", badge: "MT", badgeColor: "text-white", badgeBg: "bg-[#4B53BC]" },
      { name: "Zoom", logo: si("zoom", "0B5CFF") },
      { name: "Telegram", logo: si("telegram", "26A5E4") },
      { name: "Discord", logo: si("discord", "5865F2") },
    ],
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 md:py-28 bg-light-bg relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 backdrop-blur border border-border text-xs font-semibold text-primary shadow-sm mb-5">
            🛠️ Tools & Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-foreground mb-4">
            The Technology Behind Smarter Business Operations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Great systems are powered by the right combination of technology and strategy.
            I leverage modern AI platforms, automation tools, business systems, and
            collaboration software to streamline operations, eliminate repetitive work,
            and help businesses scale with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, ci) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: ci * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative bg-card/80 backdrop-blur-md border border-border rounded-[20px] p-7 flex flex-col shadow-[0_4px_20px_-4px_rgba(15,40,84,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(73,136,196,0.35)] hover:border-accent/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-secondary/15 border border-accent/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title + desc */}
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-[-0.02em]">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cap.description}
                </p>

                {/* Tools grid */}
                <div className="mt-auto pt-5 border-t border-border/60">
                  <div className="grid grid-cols-3 gap-3">
                    {cap.tools.map((tool) => {
                      const ToolIcon = tool.icon;
                      return (
                        <div
                          key={tool.name}
                          className="flex flex-col items-center gap-1.5"
                          title={tool.name}
                        >
                          <div className="w-12 h-12 rounded-xl bg-white border border-border/70 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                            {ToolIcon ? (
                              <ToolIcon
                                className={`w-6 h-6 ${tool.iconColor ?? "text-primary"}`}
                                strokeWidth={1.8}
                              />
                            ) : tool.badge ? (
                              <div
                                className={`w-full h-full flex items-center justify-center ${tool.badgeBg ?? "bg-primary"} ${tool.badgeColor ?? "text-white"} text-[11px] font-bold tracking-tight`}
                              >
                                {tool.badge}
                              </div>
                            ) : (
                              <img
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                className="w-7 h-7 object-contain"
                                loading="lazy"
                              />
                            )}
                          </div>
                          <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight truncate w-full">
                            {tool.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-accent/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
