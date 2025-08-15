const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${"/hero-bg.png"})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container z-10 flex justify-center text-center">
        <div className="space-y-5 text-white">
          <h1 className="text-5xl font-black">
            مرحبا بكم في عالم{" "}
            <span className="block pb-0 pt-8">SPECIAL DETAILS</span>
          </h1>

          <p className="text-gray-300 leading-loose text-balance text-sm">
            حيث تتحول الرؤية إلى واقع بأدق التفاصيل. نحن في{" "}
            <strong>SPECIAL DETAILS</strong> نؤمن أن كل مشروع هو قصة فريدة تستحق
            أن تروى بجودة استثنائية ودقة متناهية سواء كنت تبحث عن تشطيب عملي
            واقتصادي، أو تصميم راق وفاخر، نحن هنا لنلبي طموحاتك بمستويات متعددة{" "}
            <br />
            من الخدمة تناسب جميع الاحتياجات. اكتشف معنا الخيارات المناسبة
            للتشطيب، وصمم مساحتك بأسلوب يعكس ذوقك وميزانيتك.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
