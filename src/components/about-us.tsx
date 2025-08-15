import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <Card className="border-none shadow-none" id="about">
      <CardHeader className="flex items-center gap-3 border-b justify-between h-16">
        <CardTitle className="text-4xl md:text-5xl font-semibold">
          من نحن
        </CardTitle>
        <img src="/logo3.png" alt="About Us" width={150} height={150} />
      </CardHeader>

      <CardContent className="text-muted-foreground">
        <p className="leading-loose">
          "Special Details" هي شركة استشارات هندسية متخصصة في تقديم حلول متكاملة
          لأعمال التشطيب والتصميم الداخلي، نؤمن بأن التفاصيل تصنع الفرق، وأن كل,
          مساحة تستحق أن تصمم بذوق، ودقة، وجودة عالية. نعمل بشغف لنحول أفكار
          عملائنا إلى واقع ملموس، مع الالتزام بأعلى معايير الجودة، والدقة في
          التنفيذ، واحترام الوقت والميزانية. نعتمد في عملنا على فريق هندسي ذو
          خبرة، وشبكة متخصصة من الفنيين والموردين لضمان تقديم خدمات تشطيب
          متكاملة تناسب جميع الاحتياجات، من البسيطة إلى الفاخرة.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutUs;
