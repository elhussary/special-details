import { CheckCircle2 } from "lucide-react";

const VipPlan = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* الصورة */}
      <section>
        <img
          src={"/vip-interior.png"}
          alt="خدمات التشطيب"
          className="rounded-xl "
        />
      </section>

      {/* النصوص */}
      <section className="space-y-10">
        {/* العنوان */}
        <div className="flex items-center border-b pb-2 gap-3">
          <h3 className="text-2xl font-bold">فئات التشطيب</h3>
          <span className="text-3xl font-bold italic text-primary">VIP</span>
        </div>

        {/* الوصف */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-primary">
            الفخامة المصممة خصيصا لك.
          </h4>

          <p className="text-muted-foreground leading-relaxed">
            عندما يتحول منزلك إلى لوحة فنية تعكس زوقك الرفيع و توفر لك كل
            الرفاهيات
          </p>
        </div>

        {/* المميزات */}
        <div className="space-y-6">
          <h5 className="text-lg font-bold">تشمل فئة VIP على:</h5>
       <ul className="space-y-4">
  {/* البورسلين والخامات */}
  <li className="flex items-start gap-2">
    <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
    <div className="leading-relaxed">
      بورسلين إسباني مستورد بمقاسات كبيرة (120×120 - 60×180 - 120×240) برسومات رخام طبيعية مشطوفة.
      <br />
      رخام طبيعي (كرارا - مارلينا - ترافرتين) في المداخل أو الحوائط.
      <br />
      دمج خامات فاخرة: خشب طبيعي، معادن نحاسية/ذهبية، وزجاج معشق.
    </div>
  </li>

  {/* الأنظمة الذكية */}
  <li className="flex items-start gap-2">
    <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
    <div className="leading-relaxed">
      <span className="font-semibold">أنظمة ذكية:</span>
      تحكم بالإضاءة، التكييف، الستائر، والصوت عبر التطبيق أو الريموت.
      <br />
      مزودة بـ SOUND SYSTEM و SMART LOCK.
    </div>
  </li>

  {/* الأبواب والوحدات الخشبية */}
  <li className="flex items-start gap-2">
    <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
    <div className="leading-relaxed">
      <span className="font-semibold">الأبواب والوحدات:</span>
      أبواب خشب طبيعي أو قشرة فاخرة (WENGE-TEAK-OAK) بمقابض نحاس/استانلس.
      <br />
      دواليب وأبواب مدمجة بالحائط بنظام SOFT CLOSE.
    </div>
  </li>

  {/* الحمامات */}
  <li className="flex items-start gap-2">
    <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
    <div className="leading-relaxed">
      <span className="font-semibold">الحمامات:</span>
      تصميم فندقي مع بانيو وجاكوزي، إضاءة مرايا، وحدات عاتمة وخزائن خفية.
      <br />
      دش زجاجي فاخر بتصريف خفي.
    </div>
  </li>
</ul>

        </div>
      </section>
    </div>
  );
};

export default VipPlan;
