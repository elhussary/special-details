import PremiumPlan from "./premium-plan";
import StandardPlan from "./standard-plan";
import VipPlan from "./vip-plan";

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            ما هي خدماتنا؟
          </h2>
          <div className="w-20 h-1 gradient-hero rounded-full mx-auto"></div>
        </div>

        <section className="container mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* صورة جانبية */}
            <div className="space-y-6">
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/img2.png"
                  alt="تصميم داخلي"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* المحتوى النصي */}
            <div className="space-y-8">
              <ul className="space-y-6 leading-relaxed">
                <li>
                  <strong>الدهانات:</strong> معجون دهان بلاستيكي أبيض أو ألوان
                  محايدة (طبقتان)
                </li>
                <li>
                  <strong>الحمامات:</strong> خلّاطات من ماركات اقتصادية، وحدات
                  حمام بسيطة (مرحاض - حوض - مرآة)
                </li>
                <li>
                  <strong>الأبواب:</strong> أبواب داخلية من خشب MDF-HDF ببطانة
                  PVC أو دهان دوكو، باب رئيسي - متوسط الجودة
                </li>
                <li>
                  <strong>الإضاءة:</strong> تركيب SPOT LIGHT
                </li>
              </ul>

              {/* مميزات الفئة */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-xl font-bold">مميزات الفئة</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <p>أسرع مدة تنفيذ</p>
                  <p>مناسبة للميزانيات المحدودة</p>
                  <p>مدة التنفيذ: من 30 يوم إلى 45 يوم (حسب مساحة المشروع)</p>
                  <p>إشراف هندسي أساسي طوال المشروع</p>
                  <p>إمكانية الترقية لاحقاً لإضافات أخرى</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Standard */}
          <StandardPlan />

          {/* Premium */}
          <PremiumPlan />

          {/* VIP */}
          <VipPlan />
        </div>
      </div>
    </section>
  );
};

export default Services;
