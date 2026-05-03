import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Elevate
          </span>{" "}
          Site Designs
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm"
        >
          <a href="/#services" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Services</a>
          <a href="/portfolio" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="/#about" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>About</a>
          <a href="/#contact" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
