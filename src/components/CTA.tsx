import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+()\-\s\d]+$/, "Phone can only contain digits, spaces, +, -, ()"),
  message: z.string().trim().min(10, "Tell us a bit more about your project").max(1000),
});

const CTA = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`New project inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:hello@elevatesitedesigns.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Thanks!", description: "Your email client should open shortly." });
    }, 600);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Elevate
            </span>
            ?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tell us about your project. We'll design and build a preview at zero cost — review it, and if you love it, it's yours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl mx-auto space-y-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              maxLength={100}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              maxLength={255}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Project details</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What kind of site do you need? Any features in mind?"
              rows={5}
              maxLength={1000}
              required
            />
          </div>
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-base"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Free Project Consultation"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            Or email us at{" "}
            <a href="mailto:hello@elevatesitedesigns.com" className="text-primary hover:underline">
              hello@elevatesitedesigns.com
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default CTA;
