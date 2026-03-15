import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Glow overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className="container relative z-10 px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium"
          >
            Free Website — No Catch
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            We Build Your Website{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              For Free
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium web design powered by AI. Mobile-ready, payment-integrated, and SEO-optimized — delivered at zero cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Get Your Free Site <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              See Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
