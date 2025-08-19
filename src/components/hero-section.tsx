import { motion } from "framer-motion";
import { MouseIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/interior3.png")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            مرحباً بكم في عالم{" "}
            <span className="block mt-4">SPECIAL DETAILS</span>
          </motion.h1>

          <motion.p
            className="leading-loose mt-6 max-w-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            حيث تتحول الرؤية إلى واقع بأدق التفاصيل. نحن في{" "}
            <strong className="text-white">SPECIAL DETAILS</strong> نؤمن أن كل
            مشروع هو قصة فريدة تستحق أن تروى بجودة استثنائية ودقة متناهية.
          </motion.p>
        </div>

        <motion.div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#intro"
            className="inline-block p-4 rounded-full bg-white/10 hover:bg-white/20 transition animate-bounce text-white"
          >
            <MouseIcon className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* Intro */}
      <section id="intro" className="py-20 bg-white dark:bg-gray-900">
        <motion.div
          className="container mx-auto px-6 text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              عن <span className="text-primary">SPECIAL DETAILS</span>
            </h2>

            <img
              src="/logo3.png"
              alt="Special Details Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          <p className="text-muted-foreground leading-loose">
            نحن نقدم حلولاً شاملة تناسب جميع الاحتياجات، سواء كنت تبحث عن تصميم
            عملي واقتصادي، أو تصميم فاخر وراقي. هدفنا أن نعكس ذوقك الخاص ونترجم
            طموحاتك إلى واقع ملموس بمستوى خدمة استثنائي. اكتشف معنا كيف يمكننا
            مساعدتك في تصميم والإشراف على التنفيذ لمساحتك بطريقة مبتكرة تجمع بين
            الجمال والوظيفة، مع ضمان الجودة في كل تفصيلة.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
