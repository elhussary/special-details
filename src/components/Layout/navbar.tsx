const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/10 border-b border-border/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-gradient">
          <a href="#">
            <img src="/home-logo.png" alt="LOGO" width={250} height={250} />
          </a>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#hero" className="hover:text-primary transition-colors">
            الرئيسية
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            من نحن
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            رسالتنا
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            رؤيتنا
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            خدماتنا
          </a>
          <a href="/portfolio" className="hover:text-primary transition-colors">
            اعمالنا
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            تواصل معنا
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
