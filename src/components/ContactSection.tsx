import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Send, Loader2, CheckCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_URL = "https://formspree.io/f/xjgadbap";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _gotcha: "",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you shortly.",
      });
    } catch {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try emailing me directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-light-bg">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wide">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-6">
              Let's build smarter systems together
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-[50ch]">
              Ready to automate workflows, streamline customer systems, or scale operations? Send a message or book a discovery call.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:lawrenceezealor1@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  lawrenceezealor1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm text-muted-foreground">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-accent" />
                <span className="text-sm text-muted-foreground">Available for remote work worldwide</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-3">Schedule a quick call to discuss how I can support your business.</p>
              <Button variant="default" size="lg" asChild>
                <a href="https://calendly.com/lawrenceezealor1/new-meeting" target="_blank" rel="noopener noreferrer">
                  <CalendarCheck size={18} /> Book a Call
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card flex flex-col items-center justify-center text-center min-h-[340px] gap-4">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Thank you for your message!</h3>
                <p className="text-muted-foreground">I will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-5">
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: undefined })); }}
                    placeholder="Your name"
                    disabled={loading}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: undefined })); }}
                    placeholder="your@email.com"
                    disabled={loading}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors((p) => ({ ...p, message: undefined })); }}
                    placeholder="Tell me about your project..."
                    rows={5}
                    disabled={loading}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button variant="secondary" size="lg" type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
