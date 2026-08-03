import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Rocket,
  BarChart3,
  ShoppingCart,
  Smartphone,
  PenTool,
  Gauge,
  ShieldCheck,
  RotateCcw,
  LifeBuoy,
  Globe,
  CalendarClock,
  Puzzle,
  MoreHorizontal,
  Check,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    icon: Rocket,
    name: "Launch Solution",
    price: "Starting at $500",
    blurb:
      "Perfect for startups, entrepreneurs, and small businesses establishing their online presence.",
    features: [
      "Up to 3 professionally designed pages",
      "Responsive design for desktop, tablet, and mobile",
      "Contact form integration",
      "Professional layout and branding",
      "Domain connection",
      "Client-provided content and branding assets",
    ],
    featured: false,
  },
  {
    icon: BarChart3,
    name: "Growth Solution",
    price: "Starting at $1,000",
    blurb:
      "Designed for businesses ready to expand their online presence and generate more leads.",
    features: [
      "Up to 10 professionally designed pages",
      "Custom layouts and branding",
      "Responsive website design",
      "Contact forms",
      "Basic SEO optimization",
      "Domain connection",
      "Enhanced user experience",
    ],
    featured: true,
  },
  {
    icon: ShoppingCart,
    name: "Premium Solution",
    price: "Starting at $1,500",
    blurb: "Built for businesses ready to scale with advanced features and functionality.",
    features: [
      "E-commerce functionality",
      "Online booking or scheduling",
      "Secure payment integration",
      "Custom website features",
      "Enhanced SEO optimization",
      "Advanced integrations",
      "Scalable website architecture",
    ],
    featured: false,
  },
];

const everySolution = [
  { icon: Smartphone, label: "Mobile-Friendly Design" },
  { icon: PenTool, label: "Professional Layout & Branding" },
  { icon: Gauge, label: "Fast-Loading Performance" },
  { icon: ShieldCheck, label: "Basic Website Security" },
  { icon: RotateCcw, label: "One Round of Revisions" },
  { icon: LifeBuoy, label: "Website Launch Support" },
];

const paymentMethods = [
  "Major Credit & Debit Cards",
  "PayPal",
  "Zelle",
  "Venmo",
  "Apple Pay",
];

const customSolutions = [
  { icon: Globe, label: "Websites" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: CalendarClock, label: "Booking Systems" },
  { icon: Puzzle, label: "Integrations" },
  { icon: MoreHorizontal, label: "And More" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Elevating Brands. Designing Success.
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Website{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Modern website solutions that elevate your brand, build credibility, and help your
              business grow online.
            </p>
          </motion.div>

          {/* Pricing tiers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                className={`group relative rounded-2xl border bg-card p-8 transition-colors duration-300 ${
                  tier.featured
                    ? "border-primary/50 shadow-glow"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    Most Popular
                  </span>
                )}

                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <tier.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold mb-4">{tier.name}</h2>
                  <div className="w-10 h-px bg-border mb-4" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Investment
                  </p>
                  <p className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    {tier.price}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tier.blurb}</p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Every solution includes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-8 max-w-6xl mx-auto rounded-2xl border border-border bg-card/50 p-8 md:p-10"
          >
            <h2 className="font-display text-center text-lg font-semibold uppercase tracking-[0.2em] text-primary mb-8">
              Every Solution Includes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {everySolution.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Payment + Custom solutions */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h2 className="font-display text-lg font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                Flexible Payment Options
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We make it easy to invest in your business with secure payment options, including:
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="text-xs font-medium px-3 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                Flexible payment plans available for qualifying projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h2 className="font-display text-lg font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                Custom Digital Solutions
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Need something beyond a website? We offer customized digital solutions tailored to
                your business goals, brand, and long-term growth.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-6">
                {customSolutions.map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center gap-2">
                    <div className="w-11 h-11 rounded-full border border-border bg-secondary/50 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug max-w-[72px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 max-w-3xl mx-auto text-center text-sm md:text-base uppercase tracking-[0.15em] text-muted-foreground leading-relaxed"
          >
            Serving entrepreneurs, nonprofits, and small businesses with professional websites
            designed to make a lasting impression.
          </motion.p>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Start your project</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
