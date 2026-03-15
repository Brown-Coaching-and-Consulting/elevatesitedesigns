const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display font-semibold text-foreground">
          Elevate Site Designs
        </p>
        <p>&copy; {new Date().getFullYear()} Elevate Site Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
