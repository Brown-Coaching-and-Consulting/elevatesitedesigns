import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import hurtHelpHealImg from "@/assets/portfolio/hurt-help-heal.png";
import hurtHelpHealShopImg from "@/assets/portfolio/hurt-help-heal-shop.png";
import harborHearthImg from "@/assets/portfolio/harbor-hearth.jpg";
import pivotLegalImg from "@/assets/portfolio/pivot-legal.jpg";
import bloomBotanicalsImg from "@/assets/portfolio/bloom-botanicals.jpg";
import sableStoneImg from "@/assets/portfolio/sable-stone.jpg";

const projects = [
  {
    name: "Hurt Help Heal Initiative",
    category: "Non-Profit • Community",
    description:
      "A compassionate resource hub connecting individuals with counseling, support groups, and wellness programs for holistic healing.",
    url: "https://hurthelphealinitiative.com",
    gradient: "from-sky-500/30 to-cyan-700/30",
    image: hurtHelpHealImg,
    services: [
      "Custom Web Design",
      "Mobile App Integration",
      "Donation Portal Setup",
      "SEO Optimization",
    ],
  },
  {
    name: "Hurt Help Heal Shop",
    category: "Wellness • E-commerce",
    description:
      "A curated storefront offering apparel, self-care essentials, and supportive resources that fund the initiative's mission.",
    url: "https://shop.hurthelphealinitiative.com",
    gradient: "from-rose-500/30 to-pink-700/30",
    image: hurtHelpHealShopImg,
    services: [
      "E-commerce Store",
      "Stripe & PayPal Checkout",
      "Mobile App Integration",
      "Order Fulfillment Setup",
    ],
  },
  {
    name: "Harbor & Hearth Realty",
    category: "Real Estate • Lead Gen",
    description:
      "Property search with map view, agent directory, and integrated CRM lead capture for a coastal brokerage.",
    url: "https://harborhearth.example.com",
    gradient: "from-blue-500/30 to-indigo-700/30",
    image: harborHearthImg,
    services: [
      "Custom Web Design",
      "CRM Integration",
      "AI-Powered Search",
      "SEO Optimization",
    ],
  },
  {
    name: "Pivot Legal Group",
    category: "Professional Services",
    description:
      "Editorial-style site for a boutique law firm with case study archive and consultation booking flow.",
    url: "https://pivotlegal.example.com",
    gradient: "from-slate-500/30 to-zinc-700/30",
    image: pivotLegalImg,
    services: [
      "Brand & Web Design",
      "Consultation Booking",
      "Business Stationery",
      "SEO Optimization",
    ],
  },
  {
    name: "Bloom Botanicals",
    category: "Retail • Shopify",
    description:
      "A vibrant DTC plant shop with custom Shopify theme, AR plant preview, and Apple Pay checkout.",
    url: "https://bloombotanicals.example.com",
    gradient: "from-fuchsia-500/30 to-rose-700/30",
    image: bloomBotanicalsImg,
    services: [
      "Shopify Theme",
      "PayPal & Apple Pay",
      "Mobile App Integration",
      "AI Product Recommendations",
    ],
  },
  {
    name: "Sable & Stone Architects",
    category: "Architecture • Portfolio",
    description:
      "Minimalist, image-forward portfolio with case study deep-dives and press archive for a design studio.",
    url: "https://sablestone.example.com",
    gradient: "from-stone-500/30 to-neutral-700/30",
    image: sableStoneImg,
    services: [
      "Portfolio Web Design",
      "CMS Setup",
      "Business Stationery",
      "SEO Optimization",
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sites We've{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Designed
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A selection of recent client websites built by Elevate Site Designs — each one
              free to launch, fast, and crafted around the client's brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors duration-300"
              >
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} website preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-primary mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      Services Provided
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Want to be our next case study?
            </h2>
            <p className="text-muted-foreground mb-6">
              We'll build your site for free. You bring the business — we'll bring the pixels.
            </p>
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

export default Portfolio;
