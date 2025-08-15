import HeroSection from "@/components/hero-section";
import Navigation from "@/components/Layout/navigation";
import Services from "@/components/Services/services";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Services />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* العنوان والزرار */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-4xl font-bold mb-4 md:mb-0">المعرض</h2>
            <a
              href="/protorfilo"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              تصفح اعمالنا
            </a>
          </div>

          {/* الصور */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            <img
              src="/interior1.png"
              alt="Interior 1"
              className="w-full h-64 object-cover shadow-md"
            />
            <img
              src="/interior2.png"
              alt="Interior 2"
              className="w-full h-64 object-cover shadow-md"
            />
            <img
              src="/interior3.png"
              alt="Interior 3"
              className="w-full h-64 object-cover  shadow-md"
            />
            <img
              src="/interior3.png"
              alt="Interior 3"
              className="w-full h-64 object-cover shadow-md"
            />
            <img
              src="/interior3.png"
              alt="Interior 3"
              className="w-full h-64 object-cover shadow-md"
            />
            <img
              src="/interior3.png"
              alt="Interior 3"
              className="w-full h-64 object-cover  shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
