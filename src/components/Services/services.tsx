"use client";

import PremiumPlan from "./premium-plan";
import StandardPlan from "./standard-plan";
import VipPlan from "./vip-plan";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-16 container">
      <div className="container mx-auto">
        {/* العنوان */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">ما هي خدماتنا؟</h2>
          <p className=" text-muted-foreground leading-relaxed">
            نقدم حلول متكاملة في التصميم والإشراف لنلبي جميع احتياجاتك بأعلى
            جودة وأفضل سعر.
          </p>
        </motion.div>

        {/* صورة + تفاصيل */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* صورة */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/modern-elegant-bathroom.png"
              alt="خدماتنا في التصميم الداخلي"
              className="rounded-2xl shadow-xl border border-border w-full max-h-[600px] object-cover"
            />
          </motion.div>

          {/* التفاصيل */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                icon: "🖌️",
                title: "الدهانات",
                desc: "طبقتان معجون ودهان بلاستيكي (أبيض أو ألوان محايدة)",
              },
              {
                icon: "🚿",
                title: "الحمامات",
                desc: "خلّاطات من ماركات اقتصادية، وحدات حمام بسيطة (مرحاض - حوض - مرآة)",
              },
              {
                icon: "🚪",
                title: "الأبواب",
                desc: "MDF/HDF مطلي PVC أو دهان دوكو + باب رئيسي",
              },
              { icon: "💡", title: "الإضاءة", desc: "تركيب Spot Light" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="bg-accent/90 p-3 rounded-lg shadow-md hover:scale-110 transition">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* مميزات */}
            <motion.div
              className="bg-card/50 p-6 rounded-xl border border-border mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="text-lg font-semibold mb-4">⭐ مميزات الفئة:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• أسرع مدة تنفيذ</li>
                <li>• مناسبة للميزانيات المحدودة</li>
                <li>• مدة التنفيذ: 30–45 يوم</li>
                <li>• إشراف هندسي أساسي طوال المشروع</li>
                <li>• إمكانية الترقية لإضافات لاحقاً</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* الخطط */}
      <motion.div
        className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-0"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StandardPlan />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <PremiumPlan />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <VipPlan />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
