import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-gray-300">
      <div className="container flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo */}

        {/* Contact Info */}
        <ul className="flex flex-col gap-4  md:text-left">
          <li className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <span>أبوظبي، منطقة الخالدية، بناية الجابر للمجوهرات</span>
          </li>

          <li className="flex items-center gap-3">
            <Phone className="w-6 h-6 " />

            <a href="tel:00971565422122">
              <span>00971565422122</span>
            </a>
          </li>

          <li className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <a href="mailto:Sepcialdetails@gmail.com">
              Sepcialdetails@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
