import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const OurVision = () => {
  return (
    <Card className="border-none shadow-none" id="vision">
      <CardHeader className="flex items-center gap-3 border-b justify-between h-16">
        <CardTitle className="text-4xl md:text-5xl font-semibold">رؤيتنا</CardTitle>
        <img src="/logo3.png" alt="Vision" width={150} height={150} />
      </CardHeader>

      <CardContent className="text-muted-foreground">
        <p className="leading-loose">
          أن نكون الاسم الأبرز في عالم الاستشارات الهندسية والتشطيبات، عبر تقديم
          حلول مبتكرة، وخدمة راقية، وتصميمات تعبر عن ذوق كل عميل، لنصبح الشريك
          الأول لكل من يبحث عن التميز في التفاصيل.
        </p>
      </CardContent>
    </Card>
  );
};

export default OurVision;
