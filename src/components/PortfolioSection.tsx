import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import exhaleMindCover from "@/assets/exhalemind-project-cover.png.asset.json";
import renciaCover from "@/assets/rencia-support-cover.png.asset.json";
import telegramOrderCover from "@/assets/telegram-order-bot-cover.png.asset.json";
import dailyFxCover from "@/assets/daily-fx-alert-cover.png.asset.json";
import emailManagementCover from "@/assets/email-management-cover.png.asset.json";
import calendarManagementCover from "@/assets/calendar-management-cover.png.asset.json";
import ragKnowledgeCover from "@/assets/rag-knowledge-assistant-cover.png.asset.json";



const featuredProjects = [
  {
    image: exhaleMindCover.url,
    badge: "🌐 Website Development",
    title: "ExhaleMind Wellness",
    industry: "Mental Health & Wellness",
    summary:
      "Designed and developed a modern, responsive website that strengthens ExhaleMind Wellness's digital presence while making it easy for visitors to explore services, schedule appointments, and subscribe to updates.",
    challenge:
      "The client needed a professional online presence that reflected the quality of their mental health services while providing an intuitive booking experience and improving visitor engagement.",
    solution:
      "Designed and developed a responsive website using Lovable, implemented Calendly appointment scheduling, integrated newsletter subscription functionality with Supabase and Resend, improved the overall user experience, and optimized the site's structure for accessibility and trust.",
    technologies: [
      "Lovable",
      "Supabase",
      "Calendly",
      "Resend",
      "Responsive Web Design",
    ],
    impact: [
      "Established a professional online presence",
      "Simplified appointment booking",
      "Improved visitor experience",
      "Enabled newsletter subscriber growth",
      "Strengthened digital credibility",
    ],
  },
  {
    image: renciaCover.url,
    badge: "🤖 AI Customer Support",
    title: "AI Customer Support Assistant",
    client: "Rencia Salon & Spa",
    industry: "Beauty & Wellness",
    summary:
      "Designed and developed an AI-powered customer support assistant that helps customers learn about salon services, answer frequently asked questions, and streamline appointment bookings through an intelligent conversational experience.",
    challenge:
      "The business needed a faster and more efficient way to respond to customer enquiries, provide service information, and capture appointment requests without relying entirely on manual communication.",
    solution:
      "Built an AI-powered customer support assistant using n8n that provides information about salon and spa services, answers common customer questions, guides users through the appointment booking process, and automatically captures booking details for follow-up. The workflow also maintains conversation context using Postgres Chat Memory and routes booking requests through intelligent workflow logic.",
    technologies: [
      "n8n",
      "OpenAI",
      "Telegram Bot API",
      "Postgres Chat Memory",
      "Google Sheets",
    ],
    impact: [
      "Faster response to customer enquiries",
      "Streamlined appointment booking",
      "Reduced repetitive customer support tasks",
      "Improved customer engagement",
      "Organized booking records",
    ],
  },
  {
    image: telegramOrderCover.url,
    badge: "⚙️ Workflow Automation",
    title: "Telegram Order Management Bot",
    industry: "Retail & Business Automation",
    summary:
      "Developed an automated Telegram ordering system that allows customers to place orders, verify payments, and receive automated updates throughout the fulfilment process.",
    challenge:
      "Manual order processing created unnecessary delays and increased administrative work.",
    solution:
      "Built an intelligent Telegram bot that streamlines order collection, payment verification, and customer notifications through automated workflows.",
    technologies: [
      "Telegram Bot API",
      "n8n",
      "Automation Workflows",
      "Payment Integration",
    ],
    impact: [
      "Faster order processing",
      "Reduced manual administration",
      "Improved customer communication",
      "Better operational efficiency",
    ],
  },
  {
    image: dailyFxCover.url,
    badge: "📊 Workflow Automation",
    title: "Daily FX Alert System",
    industry: "Finance & Productivity",
    summary:
      "Designed an automated workflow that retrieves live exchange rates and delivers scheduled updates directly to Telegram users.",
    challenge:
      "Manually checking exchange rates every day was repetitive and inefficient.",
    solution:
      "Created an automated workflow that fetches live exchange rates from external APIs and sends formatted daily notifications.",
    technologies: [
      "n8n",
      "HTTP Request",
      "Telegram API",
      "Scheduling",
    ],
    impact: [
      "Automated daily updates",
      "Saved valuable time",
      "Improved information accessibility",
      "Reduced repetitive manual work",
    ],
  },
  {
    image: emailManagementCover.url,
    badge: "💼 Executive Operations",
    title: "Email Management System",
    industry: "Executive Support",
    summary:
      "Designed a structured email management workflow that improves inbox organisation, prioritises important communications, and enables timely follow-up.",
    challenge:
      "Busy professionals often struggle to manage high volumes of email efficiently.",
    solution:
      "Implemented a practical email management framework using labels, folders, prioritisation techniques, and workflow best practices.",
    technologies: [
      "Gmail",
      "Google Workspace",
      "Productivity Systems",
    ],
    impact: [
      "Better inbox organisation",
      "Faster response times",
      "Reduced email clutter",
      "Improved executive productivity",
    ],
  },
  {
    image: calendarManagementCover.url,
    badge: "📅 Executive Operations",
    title: "Calendar Management System",
    industry: "Executive Support",
    summary:
      "Created an organised scheduling system that helps executives manage meetings, prevent scheduling conflicts, and maximise productivity.",
    challenge:
      "Poor calendar management often results in scheduling conflicts and lost productivity.",
    solution:
      "Implemented a structured scheduling process that improves availability management, meeting coordination, and time allocation.",
    technologies: [
      "Google Calendar",
      "Calendly",
      "Google Workspace",
    ],
    impact: [
      "Improved scheduling efficiency",
      "Reduced conflicts",
      "Better time management",
      "Increased productivity",
    ],
  },
  {
    image: ragKnowledgeCover.url,
    badge: "🧠 AI Knowledge System",
    title: "RAG Knowledge Assistant",
    client: "Giovanni Electronics Ltd.",
    industry: "Retail Electronics",
    summary:
      "Designed and implemented an AI-powered Retrieval-Augmented Generation (RAG) assistant that enables intelligent question answering by retrieving information from a company knowledge base before generating responses.",
    challenge:
      "Employees and customers needed quick access to accurate product and company information without manually searching through documentation.",
    solution:
      "Built a Retrieval-Augmented Generation (RAG) system using n8n and Pinecone Vector Database. The solution automatically processes PDF documents from Google Drive, converts them into vector embeddings, stores them in Pinecone, and retrieves the most relevant information before generating AI-powered responses with confidence scoring.",
    technologies: [
      "OpenAI",
      "Pinecone",
      "n8n",
      "Google Drive",
      "PDF Knowledge Base",
      "Recursive Character Text Splitter",
      "Vector Embeddings",
    ],
    impact: [
      "Faster knowledge retrieval",
      "More accurate AI responses",
      "Reduced manual document searching",
      "Scalable AI knowledge base",
      "Improved operational efficiency",
    ],
  },
];


const projects = [
  {
    icon: null,
    title: "AI Gmail Classification System",
    description: "AI-powered classifier that triages incoming emails into priority, support, and sales lanes with auto-drafted responses.",
    tools: ["Gmail API", "OpenAI", "n8n"],
    impact: "Saved 8+ hours/week on inbox management",
  },
  {
    icon: null,
    title: "Automated Payment Confirmation System",
    description: "End-to-end payment verification and customer notification workflow with audit trail and exception handling.",
    tools: ["n8n", "Gmail", "Airtable"],
    impact: "Zero missed confirmations in 6 months",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wide">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground">
            Featured Solutions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real automation systems and digital solutions built for real businesses — focused on measurable operational impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured case studies */}
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group md:col-span-2 flex flex-col rounded-3xl border border-white/70 bg-white/60 backdrop-blur-xl shadow-xl shadow-secondary/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/15 hover:border-accent/40"
            >
              <div className="p-5 sm:p-7">
                <div className="rounded-[20px] overflow-hidden shadow-lg shadow-secondary/10 border border-border/60 bg-white mb-6">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    width={1200}
                    height={675}
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--light-bg)/0.5)] border border-[hsl(var(--accent)/0.2)] text-xs font-semibold text-secondary mb-4">
                  <span>{project.badge.split(" ")[0]}</span>
                  <span>{project.badge.split(" ").slice(1).join(" ")}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-1">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-sm font-semibold text-secondary/90 mb-0.5">
                    {project.client}
                  </p>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
                  {project.industry}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1.5">Project Summary</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1.5">The Challenge</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-2">The Solution</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-3">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[hsl(var(--light-bg)/0.5)] text-secondary border border-[hsl(var(--accent)/0.15)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-3">The Outcome</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[hsl(var(--accent)/0.12)] flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-secondary" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.article>
          ))}

          {/* Other project cards */}
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-xl flex items-center justify-center">
                  <ArrowUpRight className="text-accent" size={22} />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((t) => (
                  <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-light-bg text-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">Impact</p>
                <p className="text-sm font-medium text-foreground">{project.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
