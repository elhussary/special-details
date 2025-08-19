import { CheckCircle2, Crown, Sparkles, Gem } from "lucide-react";

const VipPlan = () => {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100 group transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
      <div className="absolute top-4 left-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
        <Crown size={14} />
        <span>VIP Exclusive</span>
      </div>

      <section className="relative h-96 overflow-hidden">
        <img
          src={"/vip-interior.png"}
          alt="خدمات التشطيب"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </section>

      <div className="p-4 space-y-8 h-full">
        <header className="border-b border-gray-200 pb-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">فئة</h3>
              <h2 className="text-4xl font-bold text-purple-600 mt-1">VIP</h2>
            </div>
            <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
              <Sparkles size={16} />
              <span>فخامة مطلقة</span>
            </div>
          </div>
        </header>

        <section className="space-y-5">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg text-purple-800 mb-2">
              الفخامة المصممة خصيصاً لك
            </h4>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              تجربة تشطيب فاخرة بمعايير عالمية. كل التفاصيل مصممة حسب طلبك
              باستخدام أفضل المواد وأحدث التقنيات.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Gem className="text-purple-600" size={20} />
            <h5 className="font-bold text-lg text-gray-800">مميزات VIP</h5>
          </div>

          <ul className="grid grid-cols-1  gap-4">
            {[
              "بورسلان إسباني فاخر بمقاسات كبيرة",
              "أنظمة ذكية متكاملة (منزل ذكي)",
              "رخام طبيعي في المناطق الرئيسية",
              "أبواب خشب طبيعي عالي الجودة",
              "تصميم إضاءة متكامل مع RGB",
              "حمامات بتصميم فندقي فاخر",
              "أعمال نجارة وديكورات مخصصة",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg"
              >
                <CheckCircle2 className="text-purple-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-purple-50 p-4 rounded-lg space-y-3">
          <h6 className="font-bold text-purple-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            خدمات VIP الحصرية
          </h6>
          <div className="flex flex-wrap gap-2">
            {[
              "تصميم داخلي مخصص",
              "مواد مستوردة",
              "متابعة أسبوعية",
              "صيانة مجانية",
            ].map((serv, i) => (
              <span
                key={i}
                className="bg-white text-purple-800 px-1.5 py-1 rounded-full text-xs font-medium"
              >
                {serv}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VipPlan;
