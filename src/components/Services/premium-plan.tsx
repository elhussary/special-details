import { CheckCircle2, Award, Palette, Sun } from "lucide-react";

const PremiumPlan = () => {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 group transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
      <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
        <Award size={14} />
        <span>الأفضل قيمة</span>
      </div>

      <section className="relative overflow-hidden h-96">
        <img
          src={"/premium-interior.png"}
          alt="خدمات التشطيب"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </section>

      <div className="p-4 space-y-8">
        <header className="border-b border-gray-200 pb-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">فئة</h3>
              <h2 className="text-4xl font-bold text-blue-600 mt-1">PREMIUM</h2>
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
              <Palette size={16} />
              <span>تصميم متميز</span>
            </div>
          </div>
        </header>

        <section className="space-y-5">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg text-blue-800 mb-2">
              توازن بين الجودة والجمال
            </h4>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              تشطيب عالي الجودة مع لمسات تصميمية عصرية. نقدم لك مواد ممتازة
              وتفاصيل دقيقة تعكس ذوقك الرفيع.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sun className="text-blue-600" size={20} />
            <h5 className="font-bold text-lg text-gray-800">
              المميزات الحصرية
            </h5>
          </div>

          <ul className="grid grid-cols-1 gap-4">
            {[
              "بورسلان إسباني عالي الجودة",
              "تصميم إضاءة LED متكامل",
              "أسقف جبس بودر بتصاميم عصرية",
              "أبواب قشرة خشب طبيعي",
              "دهانات فاخرة بلمسات فنية",
              "أرضيات مشطوفة الحواف",
              "حمامات بتصميم فندقي",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg"
              >
                <CheckCircle2 className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-lg space-y-3">
          <h6 className="font-bold text-blue-800 flex items-center gap-2">
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
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            خيارات التصميم
          </h6>
          <div className="flex flex-wrap gap-2">
            {[
              "إضاءة ذكية",
              "ألوان مخصصة",
              "جداريات ديكورية",
              "أرضيات كبيرة",
            ].map((opt, i) => (
              <span
                key={i}
                className="bg-white text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {opt}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PremiumPlan;
