// Footer.jsx
const Footer = () => {
  return (
    <footer className="py-10 mt-16 border bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="">
          {/* Logo */}
          <div className="">
            <img
              src="/home-logo.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
            <p className="text-sm text-gray-400">
              ابوظبي منطقة الخالدية بناية الجابر للمجوهرات
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 text-center md:text-right">
            <a
              href="tel:00971565422122"
              className="hover:text-white transition"
            >
              00971565422122
            </a>
            <a
              href="mailto:Sepcialdetail@gmail.com"
              className="hover:text-white transition"
            >
              Sepcialdetail@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
