import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/navbar";

function App() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="container pt-32">
        {/* Hero Section */}
        <section className="grid grid-cols-2 gap-10 py-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">
              مرحبا بكم في عالم SPECIAL ،DETAILS
            </h1>

            <p className="leading-loose text-muted-foreground">
              حيث تتحول الرؤية إلى واقع بأدق التفاصيل. نحن في DETAILS SPECIAL
              نؤمن أن كل مشروع هو قصة فريدة تستحق أن تروى بجودة استثنائية ودقة
              متناهية سواء كنت تبحث عن تشطيب عملي واقتصادي، أو تصميم راق وفاخر،
              نحن هنا للبي طموحاتك بمستويات متعددة من الخدمة تناسب جميع
              الاحتياجات. اكتشف معنا الخيارات المناسبة للتشطيب، وصمم مساحتك
              بأسلوب يعكس ذوقك وميزانيتك.
            </p>
          </div>

          <div>
            <img src="/hero-banner.png" alt="hero" />
          </div>
        </section>

        {/* من نحن */}
        <section className="grid grid-cols-2 gap-10 py-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">من نحن</h2>

            <p className="leading-loose text-muted-foreground">
              "Details Special "هي شركة استشارات هندسية متخصصة في تقديم حلول
              متكاملة لأعمال التشطيب والتصميم الداخلي، نؤمن بأن التفاصيل تصنع
              الفرق، وأن كل مساحة تستحق أن تصمم بذوق، ودقة، وجودة عالية. نعمل
              بشغف لنحول أفكار عملائنا إلى واقع ملموس، مع الالتزام بأعلى معايير
              الجودة، والدقة في التنفيذ، واحترام الوقت والميزانية. نعتمد في
              عملنا على فريق هندسي ذو خبرة، وشبكة متخصصة من الفنيين والموردين
              لضمان تقديم خدمات تشطيب متكاملة تناسب جميع الاحتياجات، من البسيطة
              إلى الفاخرة
            </p>
          </div>

          <div>
            <img
              src="/1.png"
              alt="about-us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </section>

        {/* رسالتنا */}
        <section className="grid grid-cols-2 gap-10 py-20">
          <div>
            <img
              src="/1.png"
              alt="about-us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">رسالتنا</h2>

            <p className="leading-loose text-muted-foreground">
              أن نقدم خدمات استشارية وتشطيبية بمستوى احترافي عال . تتميز بالدقة
              في التنفيذ، والاهتمام بالتفاصيل، والتزام كامل بمعايير الجودة
              والوقت، بما يضمن رضا العميل وتحقيق رؤيته بكل شفافية وإتقان.
            </p>
          </div>
        </section>

        {/* رؤيتنا */}
        <section className="grid grid-cols-2 gap-10 py-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">رؤيتنا</h2>

            <p className="leading-8 text-muted-foreground">
              أن نكون الاسم الأبرز في عالم الاستشارات الهندسية والتشطيبات، عبر
              تقديم حلول مبتكرة، وخدمة راقية، وتصميمات تعبر عن ذوق كل عميل،
              لنصبح الشريك الأول لكل من يبحث عن التميز في التفاصيل
            </p>
          </div>

          <div>
            <img
              src="/1.png"
              alt="about-us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </section>

        {/* خدماتنا */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16">خدماتنا</h2>

          {/* Standard فئات التشطيب */}
          <div className="flex">
            <section className="flex-1 px-10">
              <div className="flex  gap-3 items-center mb-8">
                <div className="text-right">
                  <h1 className="text-3xl font-bold">فئات التشطيب</h1>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full ml-2 flex items-center justify-center">
                    <span className="text-black text-xl">✓</span>
                  </div>

                  <span className="text-4xl font-bold italic">Standard</span>
                </div>
              </div>

              <div className="border-t-4 border-white mb-8"></div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  {" "}
                  تشطيب عملى بأساسيات متقنة
                </h2>

                <div className="space-y-4 text-lg">
                  <p className="leading-relaxed">
                    ■ تم تصميم هذة الفئة لتناسب العملاء اللذين يبحثون عن تشطيب
                    اقتصادی و فعال, يجمع بين السلاطة الوظيفية و المواد الأساسية
                    ذات الجودة المقبولة
                  </p>

                  <p className="leading-relaxed">
                    تشمل فئة <span className="font-bold">Standard</span> على
                  </p>
                </div>

                <ul className="space-y-4 list-disc text-lg">
                  <li>الأعمال الإنشائية و أساسية</li>

                  <li>تأسيس أعمال الكهرباء طبقا للمخططات</li>

                  <li>تأسيس أعمال السباكة</li>

                  <li>
                    تأسيس نقاط الزارة و المفاتيح و المقايس وفق احتياج المساحة
                  </li>

                  <li>
                    الأرضيات
                    <p className="p-2">
                      بورسلين صيني أو هندي بمقاسات 60 × 60 / 120 × 120 إختيارات
                      متعددة الألوان
                    </p>
                  </li>

                  <li>
                    الابواب
                    <p className="p-2">أبواب HDF بديكورات بسيطة</p>
                  </li>

                  <li className="list-disc">
                    الحمامات
                    <p className="p-2 leading-loose">
                      أرضيات و حوائط بورسلين جودة متوسطة للعالية
                      <br /> مقاسات مثل 60 × 120 أو 30 × 90s
                      <br /> ألوان محايدة (بيج - رمادي - أبيض - رخامي)
                      <br /> تصميم رخامي أو حجري .
                      <br /> مطفى أو لامع مع إمكانية عمل ACCENT WALL
                      <br /> الأدوات الصحية من ماركة موثوقة
                      <br /> مثل (IDEAL STANDARD - DURAVIT - JAC)
                      <br /> حوض + وحدة من MDF مقاوم للماء
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <img src="/test2.png" alt="about-us" />
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
