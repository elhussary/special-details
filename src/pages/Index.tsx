import AboutUs from "@/components/about-us";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import OurMission from "@/components/our-mission";
import OurVision from "@/components/our-vision";
import Services from "@/components/Services/services";
import { MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      {/* About Us, Mission & Vision */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <AboutUs />

        <div className="space-y-10">
          <OurMission />
          <OurVision />
        </div>
      </div>
      {/* Services Section */}
      <Services />

      {/* Footer */}
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
              <span>00971565422122</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>Sepcialdetails@gmail.com</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Index;
