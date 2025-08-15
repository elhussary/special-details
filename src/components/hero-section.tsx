import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container z-10 flex justify-center text-center">
        <div className="space-y-8 animate-fade-in text-white ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            مرحبا بكم في عالم{" "}
            <span className="text-gradient block pb-0 pt-8">
              SPECIAL DETAILS
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 leading-relaxed text-balance">
            حيث تتحول الرؤية إلى واقع بأدق التفاصيل. نحن في{" "}
            <strong>SPECIAL DETAILS</strong> نؤمن أن كل مشروع هو قصة فريدة تستحق
            أن تروى بجودة استثنائية ودقة متناهية سواء كنت تبحث عن تشطيب عملي
            واقتصادي، أو تصميم راق وفاخر، نحن هنا لنلبي طموحاتك بمستويات متعددة
            من الخدمة تناسب جميع الاحتياجات. اكتشف معنا الخيارات المناسبة
            للتشطيب، وصمم مساحتك بأسلوب يعكس ذوقك وميزانيتك.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
