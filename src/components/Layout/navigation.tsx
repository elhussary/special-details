const Navigation = () => {
  return (
    <nav className="bg-primary text-white">
      <div className="container px-4 py-4 flex justify-between items-center h-20">
        <a href="/">
          <img src="/logo1.png" alt="LOGO" width={300} height={300} />
        </a>

        <div className="hidden md:flex gap-8">
          <a href="/" className="hover:text-red-300 transition-colors">
            الرئيسية
          </a>

          <a href="/about" className="hover:text-red-300 transition-colors">
            من نحن
          </a>

          <a href="/portfolio" className="hover:text-red-300 transition-colors">
            اعمالنا
          </a>

          <a href="/contact" className="hover:text-red-300 transition-colors">
            تواصل معنا
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
