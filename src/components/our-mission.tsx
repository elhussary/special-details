import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const OurMission = () => {
  return (
    <Card className="border-none shadow-none" id="mission">
      <CardHeader className="flex items-center gap-3 border-b justify-between h-16">
        <CardTitle className="text-4xl md:text-5xl font-semibold">
          رسالتنا
        </CardTitle>
        <img src="/logo3.png" alt="Mission" width={150} height={150} />
      </CardHeader>

      <CardContent className="text-muted-foreground">
        <p className="leading-loose">
          أن نقدم خدمات استشارية وتشطيبية بمستوى احترافي عال. تتميز بالدقة في
          التنفيذ، والاهتمام بالتفاصيل، والتزام كامل بمعايير الجودة والوقت، بما
          يضمن رضا العميل وتحقيق رؤيته بكل شفافية وإتقان.
        </p>
      </CardContent>
    </Card>
  );
};

export default OurMission;
