import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, ShieldCheck, Ruler, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="/interior2.png"
          alt="Special Details"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Special Details
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            نصنع التفاصيل التي تُحدث الفارق في عالم التصميم والإشراف
          </motion.p>
          <motion.a
            href="#about"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            اكتشف المزيد
          </motion.a>
        </div>
      </section>

      {/* About + Mission + Vision */}
      <section
        className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20"
        id="about"
      >
        {[
          {
            id: "about",
            title: "من نحن",
            text: (
              <>
                <span className="font-bold text-black">"Special Details"</span>{" "}
                هي شركة استشارات هندسية متخصصة في تقديم الحلول المتكاملة للبناء.
                نؤمن بأن التفاصيل تصنع الفرق وأن كل مساحة تستحق أن تصمم بذوق
                ودقة وجودة عالية
              </>
            ),
          },
          {
            id: "mission",
            title: "رسالتنا",
            text: `أن نقدم خدمات استشارية في التصميم والإشراف بمستوى احترافي عال، تتميز بالدقة والاهتمام بالتفاصيل، والتزام كامل بمعايير الجودة والوقت.`,
          },
          {
            id: "vision",
            title: "رؤيتنا",
            text: `أن نكون الاسم الأبرز في عالم الاستشارات الهندسية عبر تقديم حلول مبتكرة، وخدمة راقية، وتصميمات تعبر عن ذوق كل عميل.`,
          },
        ].map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Card className="border-none shadow-md hover:shadow-xl transition rounded-2xl p-4 h-full">
              <CardHeader className="flex items-center justify-between border-b pb-32">
                <CardTitle className="text-3xl font-bold text-primary">
                  {item.title}
                </CardTitle>
                <img
                  src="/logo3.png"
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-loose text-sm">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="container text-center py-20">
        <motion.h2
          className="text-2xl font-bold text-primary mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          لماذا تختار Special Details
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          لأنه باختيارك لنا سوف تحصل على
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/eng-icon.png"
              className="w-12 h-12 text-primary mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">تصميم هندسي</h3>
          </motion.div>

          {[
            { icon: Ruler, text: "إشراف هندسي" },
            { icon: ShieldCheck, text: "جودة تنفيذ" },
            { icon: Clock, text: "احترام الوقت" },
            { icon: DollarSign, text: "شفافية التكاليف" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{item.text}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
