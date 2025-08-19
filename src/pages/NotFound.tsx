import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl w-full"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-8xl md:text-9xl font-black text-primary mb-6 drop-shadow-lg"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          404
        </motion.h1>

        <motion.img
          src="/lost-traveler-desert.png"
          alt="مسافر تائه يبحث عن الطريق"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto max-w-xs md:max-w-sm h-auto mb-8 rounded-xl shadow-md"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-5"
        >
          <Card className="p-8  border-none backdrop-blur-lg shadow-none">
            <h2
              className="text-2xl md:text-3xl font-bold text-card-foreground mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              عذراً! الصفحة غير موجودة
            </h2>
            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              يبدو أنك حاولت الوصول إلى رابط غير صحيح أو لم يعد متاحاً. يمكنك
              العودة للصفحة الرئيسية للمتابعة.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              <a href="/">العودة إلى الصفحة الرئيسية</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
