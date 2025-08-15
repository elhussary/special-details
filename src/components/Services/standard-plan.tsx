import { CheckCircle2 } from "lucide-react";

const StandardPlan = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* الصورة */}
      <section>
        <img
          src={"/vip-interior.png"}
          alt="خدمات التشطيب"
          className=" rounded-xl"
        />
      </section>

      {/* النصوص */}
      <section className="space-y-10">
        {/* العنوان */}
        <div className="flex items-center  border-b pb-2 gap-3">
          <h3 className="text-xl font-bold">فئات التشطيب</h3>
          <span className="text-3xl font-bold  italic">Standard</span>
        </div>

        {/* الوصف */}
        <div className="space-y-4">
          <h4 className="font-semibold">تشطيب عملي بأساسيات متقنة</h4>

          <p className="text-muted-foreground leading-relaxed text-sm">
            تم تصميم هذه الفئة لتناسب العملاء الذين يبحثون عن تشطيب اقتصادي
            وفعال، يجمع بين البساطة الوظيفية والمواد الأساسية ذات الجودة
            المقبولة.
          </p>
        </div>

        {/* المميزات */}
        <div className="space-y-6">
          <h5 className=" font-bold">تشمل فئة Standard على:</h5>
          <ul className="space-y-3 text-sm">
            {[
              "الأعمال الإنشائية والأساسية",
              "تأسيس الكهرباء والسباكة طبقاً للمخططات",
              "الأرضيات: بورسلين صيني/هندي (60×60 أو 120×120)",
              "الأبواب: HDF بديكورات بسيطة",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}

            {/* الحمامات */}
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>الحمامات</span>
              </div>
              <ul className="list-disc ms-8 space-y-2 ">
                <li>
                  أرضيات وحوائط بورسلين متوسط-عالي الجودة (رخامي أو حجري)
                  بمقاسات 60×120 أو 30×90
                </li>
                <li>ألوان محايدة (بيج - رمادي - أبيض) مطفي أو لامع</li>
                <li>إمكانية عمل Wall Accent</li>
                <li>أدوات صحية من ماركات موثوقة</li>
                <li>حوض + وحدة MDF مقاوم للماء</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StandardPlan;
