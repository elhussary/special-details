import { motion } from "framer-motion";
import ModernDesign from "@/components/Portfolio/modern-design";
import ClassicDesign from "@/components/Portfolio/classic-design";
import NeoClassicDesign from "@/components/Portfolio/neo-classic-design";
import Industrial from "@/components/Portfolio/industrial-design";
import ScandinavianDesign from "@/components/Portfolio/scandinavian-design";
import MinimalistDesign from "@/components/Portfolio/minimalist-design";
import BohoDesign from "@/components/Portfolio/boho-design";
import WabiSabiDesign from "@/components/Portfolio/wabi-sabi-design";
import EarthyStyle from "@/components/Portfolio/earthy-design";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* الخلفية */}
        <img
          src="/interior3.jpg"
          alt="تصميم داخلي"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* المحتوى */}
        <div className="relative z-10 text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            رحلة في عوالم التصميم
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            حيث يلتقي الإبداع مع التفاصيل الدقيقة، لنخلق مساحات تنبض بالحياة
            وتروي قصصاً فريدة.
          </motion.p>
        </div>
      </section>

      {/* المقدمة */}
      <section className="container mx-auto py-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold  mb-6">المقدمة</h2>
          <p className="leading-loose text-muted-foreground">
            فى عالم التصميم يمكن التميز الحقيقى فى التفاصيل الصغيرة التى تصنع
            الفارق وتمنح كل مساحة هويتها الخاصة. نحن فى{" "}
            <span className="text-primary font-semibold">سبيشيال ديتلز</span>{" "}
            نؤمن أن سر الابداع يكمن فى ملاحظة تلك التفاصيل الدقيقة التى قد تغيب
            عن الأعين لكنها تترك بصمة لاتنسى فى كل مشروع. <br />
            منذ انطلاقنا جعلنا من شغفنا بالتفاصيل فلسفة عملنا لنقدم لعملائنا
            حلولا تصميمية تجمع بين الجمال والعملية والابتكار. كل مساحة نصممها هى
            لوحة فريدة نرسمها بعناية لنروى قصة تعكس شخصية أصحابها وتلبي
            تطلعاتهم. <br />
            يأخذكم هذا البورتفوليو فى رحلة داخل عالم سبيشيال ديتلز حيث نعرض
            أنماط التصميم المختلفة والتى يمكن من خلالها اختيار العالم المناسب
            لك.
          </p>
        </motion.div>
      </section>

      {/* أقسام التصاميم */}
      <section className="container overflow-hidden space-y-12">
        {/* Classic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ClassicDesign />
        </motion.div>

        {/* Modern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ModernDesign />
        </motion.div>

        {/* Neo Classic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <NeoClassicDesign />
        </motion.div>

        {/* Industrial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Industrial />
        </motion.div>

        {/* Scandinavian */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ScandinavianDesign />
        </motion.div>

        {/* Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MinimalistDesign />
        </motion.div>

        {/* Boho */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BohoDesign />
        </motion.div>

        {/* Wabi Sabi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <WabiSabiDesign />
        </motion.div>

        {/* Earthy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <EarthyStyle />
        </motion.div>
      </section>
    </main>
  );
}
