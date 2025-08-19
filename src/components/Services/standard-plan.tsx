import { CheckCircle2, Star, Zap, Shield } from "lucide-react";

const StandardPlan = () => {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 group transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
      {/* Badge */}
      <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
        <Zap size={14} />
        <span>الأكثر طلباً</span>
      </div>

      {/* الصورة */}
      <section className="relative overflow-hidden h-96">
        <img
          src={"/standard-interior.png"}
          alt="خدمات التشطيب"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </section>

      {/* المحتوى */}
      <div className="p-4 space-y-8">
        {/* العنوان الرئيسي */}
        <header className="border-b border-gray-200 pb-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">فئة</h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">
                STANDARD
              </h2>
            </div>
            <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
              <Star size={16} />
              <span>اقتصادية</span>
            </div>
          </div>
        </header>

        {/* الوصف */}
        <section className="space-y-5">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">
              تشطيب عملي بأساسيات متقنة
            </h4>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              حل مثالي للميزانيات المحدودة مع ضمان جودة أساسية. تشطيب يعتمد على
              المواد الأساسية الموثوقة مع تنفيذ دقيق.
            </p>
          </div>
        </section>

        {/* المميزات */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="text-emerald-600" size={20} />
            <h5 className="font-bold text-lg text-gray-800">
              المميزات الأساسية
            </h5>
          </div>

          <ul className="grid grid-cols-1 gap-4">
            {[
              "أعمال إنشائية متكاملة",
              "تأسيس كهرباء وسباكة حسب المخططات",
              "أرضيات بورسلان صيني/هندي",
              "أبواب HDF بتركيب محترف",
              "ألوان محايدة (بيج - رمادي - أبيض - رخامي)",
              "سباكة ماركات موثوقة",
              "تشطيب حمامات متكامل",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
              >
                <CheckCircle2 className="text-emerald-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* قسم إضافي - المواد المستخدمة */}
        <section className="bg-emerald-50 p-4 rounded-lg space-y-3">
          <h6 className="font-bold text-emerald-800 flex items-center gap-2">
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
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            المواد المستخدمة
          </h6>
          <div className="flex flex-wrap gap-2">
            {["بورسلان صيني", "دهانات جوتن", "أدوات سانكو", "بورسلان هندي"].map(
              (mat, i) => (
                <span
                  key={i}
                  className="bg-white text-emerald-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {mat}
                </span>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StandardPlan;
