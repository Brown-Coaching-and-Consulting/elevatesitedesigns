import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Northwind Coffee Co.",
    category: "Hospitality • E-commerce",
    description:
      "A warm, story-driven storefront with subscription ordering and in-store pickup for a specialty roaster.",
    url: "https://northwindcoffee.example.com",
    gradient: "from-amber-500/30 to-orange-700/30",
  },
  {
    name: "Vertex Fitness Studio",
    category: "Fitness • Booking",
    description:
      "Class scheduling, trainer profiles, and Stripe-powered memberships built for a boutique gym brand.",
    url: "https://vertexfitness.example.com",
    gradient: "from-emerald-500/30 to-teal-700/30",
  },
  {
    name: "Harbor & Hearth Realty",
    category: "Real Estate • Lead Gen",
    description:
      "Property search with map view, agent directory, and integrated CRM lead capture for a coastal brokerage.",
    url: "https://harborhearth.example.com",
    gradient: "from-blue-500/30 to-indigo-700/30",
  },
  {
    name: "Pivot Legal Group",
    category: "Professional Services",
    description:
      "Editorial-style site for a boutique law firm with case study archive and consultation booking flow.",
    url: "https://pivotlegal.example.com",
    gradient: "from-slate-500/30 to-zinc-700/30",
  },
  {
    name: "Bloom Botanicals",
    category: "Retail • Shopify",
    description:
      "A vibrant DTC plant shop with custom Shopify theme, AR plant preview, and Apple Pay checkout.",
    url: "https://bloombotanicals.example.com",
    gradient: "from-fuchsia-500/30 to-rose-700/30",
  },
  {
    name: "Sable & Stone Architects",
    category: "Architecture • Portfolio",
    description:
      "Minimalist, image-forward portfolio with case study deep-dives and press archive for a design studio.",
    url: "https://sablestone.example.com",
    gradient: "from-stone-500/30 to-neutral-700/30",
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
              Sites we've{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                shipped
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-foreground/80 px-6 text-center">
                      {project.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-primary mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
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
