import { motion } from "framer-motion";
import nevaMealsImg from "@/assets/portfolio/neva-meals.jpg";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import hurtHelpHealImg from "@/assets/portfolio/hurt-help-heal.png";
import hurtHelpHealShopImg from "@/assets/portfolio/hurt-help-heal-shop.png";
import barbershopImg from "@/assets/portfolio/ironclad-barbershop.jpg";
import salonImg from "@/assets/portfolio/lumiere-salon.jpg";
import bloomBotanicalsImg from "@/assets/portfolio/bloom-botanicals.jpg";


const projects = [
  {
    name: "Hurt Help Heal Initiative",
    category: "Non-Profit • Community",
    description:
      "A compassionate resource hub connecting individuals with counseling, support groups, and wellness programs for holistic healing.",
    url: "https://hurthelphealinitiative.com/resources/",
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
    url: "https://shop.hurthelphealinitiative.com/collections/hoodies",
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
    name: "Ironclad Barbershop",
    category: "Barbershop • Booking",
    description:
      "A premium barbershop site with online booking, service menu, and barber profiles built for a modern men's grooming brand.",
    url: "https://ironcladbarbershop.example.com",
    gradient: "from-amber-500/30 to-zinc-800/30",
    image: barbershopImg,
    services: [
      "Custom Web Design",
      "Online Booking System",
      "Mobile App Integration",
      "SEO Optimization",
    ],
  },
  {
    name: "Lumière Beauty Salon",
    category: "Beauty • Booking",
    description:
      "An elegant salon site featuring service menus, stylist portfolios, and seamless online appointment booking.",
    url: "https://lumieresalon.example.com",
    gradient: "from-rose-400/30 to-pink-600/30",
    image: salonImg,
    services: [
      "Custom Web Design",
      "Online Booking System",
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
    name: "Neva Meals",
    category: "Catering • Events",
    description:
      "A full-service catering and private chef experience by Chef Geneva Jeanty, featuring bold Haitian & Caribbean flavor for intimate dinners, weddings, corporate events, and wellness pop-ups.",
    url: "https://nevameals.com",
    gradient: "",
    image: nevaMealsImg,
    imageFit: "contain",
    services: [
      "Custom Web Design",
      "Online Booking System",
      "Brand Identity",
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
            {projects.map((project, i) => {
              const isLive = !project.url.includes("example.com");
              const linkProps = isLive
                ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
                : { onClick: (e: React.MouseEvent) => e.preventDefault() };
              return (
              <motion.a
                key={project.name}
                {...linkProps}
                aria-disabled={!isLive}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-xl border ${
                  project.gradient ? "border-border" : "border-white"
                } bg-card overflow-hidden transition-colors duration-300 ${
                  isLive ? "hover:border-primary/40 cursor-pointer" : "cursor-default"
                }`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    project.gradient ? `bg-gradient-to-br ${project.gradient}` : "bg-white"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} website preview`}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full ${
                      project.imageFit === "contain" ? "object-contain" : "object-cover object-top"
                    } transition-transform duration-500 ${
                      isLive ? "group-hover:scale-105" : ""
                    }`}
                  />
                  <div
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center transition-colors ${
                      isLive ? "group-hover:bg-primary group-hover:text-primary-foreground" : ""
                    }`}
                  >
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
              );
            })}
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
