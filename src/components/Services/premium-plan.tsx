import { CheckCircle2 } from "lucide-react";

const PremiumPlan = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* الصورة */}
      <section>
        <img
          src={"/vip-interior.png"}
          alt="خدمات التشطيب"
          className="rounded-xl"
        />
      </section>

      {/* النصوص */}
      <section className="space-y-10">
        {/* العنوان */}
        <div className="flex items-center border-b pb-2 gap-3">
          <h3 className="text-xl font-bold">فئات التشطيب</h3>
          <span className="text-3xl font-bold italic">Premium</span>
        </div>

        {/* الوصف */}
        <div className="space-y-4">
          <h4 className="font-semibold text-primary">
            توازن بين الجودة والجمال
          </h4>

          <p className="text-muted-foreground leading-relaxed text-sm">
            هذة الفئة هي خيار مثالی لمن بيحث عن جودة و لمسة جمالية عصرية
          </p>
        </div>

        {/* المميزات */}
        <div className="space-y-6">
          <h5 className="font-bold">تشمل فئة Premium على:</h5>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
              <span>
                <strong>الأرضيات:</strong> بورسلين بجودة عالية بمقاسات 60×60 /
                120×120 (مطفي، لامع)
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
              <span>
                <strong>الدهانات:</strong> دهانات متعددة الألوان مع حائط مميز
                ACCENT WALL
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
              <span>
                <strong>السقف:</strong> تصميم هندسي بسيط + SPOT LIGHT وإضاءة LED
                مخفية + وحدات إضاءة ديكورية
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
              <span>
                <strong>الحوائط والتشطيبات:</strong> ألواح زخرفية فاخرة (خشب -
                جلد - مرايات - ألواح 3D) + دهانات خاصة + لوحات فنية مدمجة
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
              <span>
                <strong>الأسقف والإضاءة:</strong> أسقف متعددة المستويات بجبس
                بودر، إضاءة RGB ذكية، نجف كريستال، وإضاءة غير مباشرة لإبراز
                التصميم
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PremiumPlan;
