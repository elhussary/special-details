import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Ruler,
  DollarSign,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* About + Mission + Vision */}
      <section className="container grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
        {/* About Us */}
        <Card className="border-none shadow-none rounded-2xl p-4" id="about">
          <CardHeader className="flex items-center justify-between border-b pb-3">
            <CardTitle className="text-3xl font-bold text-primary">
              من نحن
            </CardTitle>
            <img
              src="/logo3.png"
              alt="About Us"
              className="w-26 h-24 object-contain"
            />
          </CardHeader>
          <CardContent className="text-muted-foreground pt-4">
            <p className="leading-loose text-sm">
              "Special Details" هي شركة استشارات هندسية متخصصة في تقديم حلول
              متكاملة لأعمال التشطيب والتصميم الداخلي. نؤمن بأن التفاصيل تصنع
              الفرق، وأن كل مساحة تستحق أن تصمم بذوق، ودقة، وجودة عالية. نعمل
              بشغف لنحول أفكار عملائنا إلى واقع ملموس، مع الالتزام بأعلى معايير
              الجودة، والدقة في التنفيذ، واحترام الوقت والميزانية.
            </p>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="border-none shadow-none rounded-2xl p-4" id="mission">
          <CardHeader className="flex items-center justify-between border-b pb-3">
            <CardTitle className="text-3xl font-bold text-primary">
              رسالتنا
            </CardTitle>
            <img
              src="/logo3.png"
              alt="Mission"
              className="w-24 h-24 object-contain"
            />
          </CardHeader>
          <CardContent className="text-muted-foreground pt-4">
            <p className="leading-loose text-sm">
              أن نقدم خدمات استشارية وتشطيبية بمستوى احترافي عال، تتميز بالدقة
              والاهتمام بالتفاصيل، والتزام كامل بمعايير الجودة والوقت.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="border-none shadow-none rounded-2xl p-4" id="vision">
          <CardHeader className="flex items-center justify-between border-b pb-3">
            <CardTitle className="text-3xl font-bold text-primary">
              رؤيتنا
            </CardTitle>
            <img
              src="/logo3.png"
              alt="Vision"
              className="w-24 h-24 object-contain"
            />
          </CardHeader>
          <CardContent className="text-muted-foreground pt-4">
            <p className="leading-loose text-sm">
              أن نكون الاسم الأبرز في عالم الاستشارات الهندسية والتشطيبات، عبر
              تقديم حلول مبتكرة، وخدمة راقية، وتصميمات تعبر عن ذوق كل عميل.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us */}
      <section className="container text-center py-12">
        <h2 className="text-3xl font-bold text-primary mb-3">
          لماذا تختار Special Details
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          لأنه باختيارك لنا سوف تحصل على
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Ruler className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg">إشراف هندسي</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg">جودة تنفيذ</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg">احترام الوقت</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <DollarSign className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg">شفافية التكاليف</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
