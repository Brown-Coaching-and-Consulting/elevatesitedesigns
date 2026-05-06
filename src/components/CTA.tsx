import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail } from "lucide-react";

const contactSchema = z
  .object({
    name: z.string().trim().min(1, "Please enter your name").max(100),
    businessName: z.string().trim().min(1, "Please enter your business name").max(150),
    city: z.string().trim().min(1, "Please enter your city").max(100),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number")
      .max(20, "Phone number is too long")
      .regex(/^[+()\-\s\d]+$/, "Phone can only contain digits, spaces, +, -, ()"),
    email: z.string().trim().email("Please enter a valid email").max(255),
    hasWebsite: z.enum(["yes", "no"], { required_error: "Please select yes or no" }),
    siteType: z.string().trim().min(1, "Please tell us what kind of site you need").max(300),
    brandColors: z.string().trim().min(1, "Please share your brand colors (or 'none')").max(200),
    features: z.string().trim().max(1000).optional().or(z.literal("")),
    hasSocial: z.enum(["yes", "no"], { required_error: "Please select yes or no" }),
    socialPage: z.string().trim().max(300).optional().or(z.literal("")),
  })
  .refine((d) => d.hasSocial === "no" || (d.socialPage && d.socialPage.trim().length > 0), {
    path: ["socialPage"],
    message: "Please share your social media page",
  });

type FormState = {
  name: string;
  businessName: string;
  city: string;
  phone: string;
  email: string;
  hasWebsite: "" | "yes" | "no";
  siteType: string;
  brandColors: string;
  features: string;
  hasSocial: "" | "yes" | "no";
  socialPage: string;
};

const initialForm: FormState = {
  name: "",
  businessName: "",
  city: "",
  phone: "",
  email: "",
  hasWebsite: "",
  siteType: "",
  brandColors: "",
  features: "",
  hasSocial: "",
  socialPage: "",
};

const CTA = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

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
    const d = result.data;
    const subject = encodeURIComponent(`New project inquiry from ${d.name} (${d.businessName})`);
    const body = encodeURIComponent(
      [
        `Name: ${d.name}`,
        `Business: ${d.businessName}`,
        `City: ${d.city}`,
        `Phone: ${d.phone}`,
        `Email: ${d.email}`,
        `Has website already: ${d.hasWebsite}`,
        ``,
        `Project details / site type: ${d.siteType}`,
        `Brand colors: ${d.brandColors}`,
        `Features in mind: ${d.features || "—"}`,
        ``,
        `Social media to integrate: ${d.hasSocial}`,
        `Social page: ${d.socialPage || "—"}`,
      ].join("\n"),
    );
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
          className="max-w-2xl mx-auto space-y-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business name</Label>
              <Input
                id="businessName"
                value={form.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                placeholder="Your business"
                maxLength={150}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="City"
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(555) 123-4567"
                maxLength={20}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              maxLength={255}
              required
            />
          </div>

          <div className="space-y-3">
            <Label>Do you have a website already?</Label>
            <RadioGroup
              value={form.hasWebsite}
              onValueChange={(v) => update("hasWebsite", v as "yes" | "no")}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem id="hasWebsite-yes" value="yes" />
                <Label htmlFor="hasWebsite-yes" className="font-normal cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="hasWebsite-no" value="no" />
                <Label htmlFor="hasWebsite-no" className="font-normal cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="siteType">Project details — what kind of site do you need?</Label>
            <Textarea
              id="siteType"
              value={form.siteType}
              onChange={(e) => update("siteType", e.target.value)}
              placeholder="e.g. e-commerce store, portfolio, restaurant site, booking platform..."
              rows={3}
              maxLength={300}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brandColors">Brand colors</Label>
            <Input
              id="brandColors"
              value={form.brandColors}
              onChange={(e) => update("brandColors", e.target.value)}
              placeholder="e.g. navy blue & gold, or 'none yet'"
              maxLength={200}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Any features in mind?</Label>
            <Textarea
              id="features"
              value={form.features}
              onChange={(e) => update("features", e.target.value)}
              placeholder="Online payments, booking system, blog, contact forms, etc."
              rows={3}
              maxLength={1000}
            />
          </div>

          <div className="space-y-3">
            <Label>Do you have a business social media page that needs to be integrated?</Label>
            <RadioGroup
              value={form.hasSocial}
              onValueChange={(v) => update("hasSocial", v as "yes" | "no")}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem id="hasSocial-yes" value="yes" />
                <Label htmlFor="hasSocial-yes" className="font-normal cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="hasSocial-no" value="no" />
                <Label htmlFor="hasSocial-no" className="font-normal cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          {form.hasSocial === "yes" && (
            <div className="space-y-2">
              <Label htmlFor="socialPage">What is your social media business page?</Label>
              <Input
                id="socialPage"
                value={form.socialPage}
                onChange={(e) => update("socialPage", e.target.value)}
                placeholder="https://instagram.com/yourbusiness"
                maxLength={300}
                required
              />
            </div>
          )}

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
