const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
        <a href="#">
          <img src="/logo1.png" alt="LOGO" width={300} height={300} />
        </a>

        <div className="hidden md:flex gap-8 text-white">
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

export default Navigation;
