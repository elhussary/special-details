import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="container px-4 py-4 flex justify-between items-center h-20">
        <a href="/">
          <img src="/logo1.png" alt="LOGO" width={150} height={150} />
        </a>

        {/* القائمة على md+ */}
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

        {/* Hamburger على الجوال */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* القائمة المنسدلة على الجوال */}
      {isOpen && (
        <div className="md:hidden bg-primary text-white px-4 pb-4 space-y-4 animate-slide-down">
          <a href="/" className="block hover:text-red-300 transition-colors">
            الرئيسية
          </a>
          <a
            href="/about"
            className="block hover:text-red-300 transition-colors"
          >
            من نحن
          </a>
          <a
            href="/portfolio"
            className="block hover:text-red-300 transition-colors"
          >
            اعمالنا
          </a>
          <a
            href="/contact"
            className="block hover:text-red-300 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
