import { motion } from "framer-motion";
import { Smartphone, CreditCard, PenTool, Sparkles, Search } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description:
      "Your business, everywhere. We ensure your site feels like a native app on every smartphone.",
  },
  {
    icon: CreditCard,
    title: "Online Payment Integration",
    description:
      "Get paid faster. Seamless setup for Stripe, PayPal, or Apple Pay included.",
  },
  {
    icon: PenTool,
    title: "Business Stationery",
    description:
      "Consistency is key. From business cards to letterheads, we align your physical brand with your digital one.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Efficiency",
    description:
      "We use AI to bridge the gap between 'fast' and 'flawless,' delivering premium results at a fraction of the traditional agency timeline.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Rank higher, get found faster. We bake search engine optimization into every page we build.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section className="py-28 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Included
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No hidden fees. No upsells. Just a complete web presence for your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
