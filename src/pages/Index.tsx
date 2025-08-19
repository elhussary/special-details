import HeroSection from "@/components/hero-section";
import Services from "@/components/Services/services";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Services */}
      <Services />

      {/* Intro */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            لمسة إبداعية في كل تصميم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            نحرص دائمًا على تقديم تصاميم داخلية مميزة تمزج بين الجمال والوظيفة،
            لنحول مساحتك إلى تجربة استثنائية.
          </motion.p>
        </div>
      </section>

      {/* Portfolio*/}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-4xl font-bold mb-4 md:mb-0">المعرض</h2>
            <a
              href="/portfolio"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              تصفح اعمالنا
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                src: "/portfolio/CLASSIC/1.jpg",
                title: "النمط الكلاسيكي",
                description:
                  "مستوحى من الديكور الأوروبي القديم مع تفاصيل زخرفية، أعمدة، أثاث ضخم وفخم.",
              },
              {
                src: "/portfolio/SCANDINAVIAN/8-1.jpg",
                title: "النمط الاسكندنافي",
                description:
                  "البساطة، وضوح الخطوط، ألوان فاتحة، إضاءة طبيعية وأثاث عملي.",
              },
              {
                src: "/portfolio/BOHO/10-1.jpg",
                title: "النمط البوهيمي",
                description:
                  "ألوان جريئة، سجاد منقوش، أثاث متنوع، قطع فنية يدوية، نباتات داخلية.",
              },
              {
                src: "/portfolio/WABI-SABI/11-1.jpg",
                title: "النمط الوابي سابي",
                description:
                  "بساطة، إبراز المساحات الفارغة، جودة كل عنصر، مواد طبيعية وألوان هادئة.",
              },
              {
                src: "/portfolio/EARTHY/12-1.jpg",
                title: "النمط الأرضي",
                description:
                  "ألوان طبيعية دافئة وخامات طبيعية مع إدخال عناصر نباتية.",
              },
              {
                src: "/portfolio/MODERN/4-1.jpg",
                title: "النمط الحديث",
                description:
                  "خطوط نظيفة، أشكال هندسية واضحة، أثاث عملي ومساحات مفتوحة.",
              },
              {
                src: "/portfolio/NEO-CLASSIC/6-1.jpg",
                title: "النمط النيو كلاسيكي",
                description:
                  "مزيج بين الكلاسيكي والحديث، زخارف خفيفة، أثاث أنيق بلمسات بسيطة.",
              },
              {
                src: "/portfolio/MINIMALIST/9-1.jpg",
                title: "النمط البسيط",
                description:
                  "مساحات فارغة، ألوان هادئة، تنظيم عالي، أثاث محدود وإضاءة طبيعية.",
              },
              {
                src: "/portfolio/INDUSTRIAL/7-1.jpg",
                title: "النمط الصناعي",
                description:
                  "مستوحى من المصانع والمخازن، استخدام المعادن والطوب المكشوف والخرسانة.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
