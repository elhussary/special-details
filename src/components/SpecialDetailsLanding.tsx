import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.png";
import aboutImage from "@/assets/about-us.png";
import visionImage from "@/assets/vision.png";

import vipImage from "@/assets/vip-interior.png";
import Navbar from "./Layout/navbar";

export const SpecialDetailsLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-20" gradient>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              مرحبا بكم في عالم{" "}
              <span className="text-gradient block pb-0 pt-8">
                SPECIAL DETAILS
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              حيث تتحول الرؤية إلى واقع بأدق التفاصيل. نحن في SPECIAL DETAILS
              نؤمن أن كل مشروع هو قصة فريدة تستحق أن تروى بجودة استثنائية ودقة
              متناهية سواء كنت تبحث عن تشطيب عملي واقتصادي، أو تصميم راق وفاخر،
              نحن هنا لنلبي طموحاتك بمستويات متعددة من الخدمة تناسب جميع
              الاحتياجات. اكتشف معنا الخيارات المناسبة للتشطيب، وصمم مساحتك
              بأسلوب يعكس ذوقك وميزانيتك.
            </p>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="shadow-glow hover:shadow-elegant animate-glow"
              >
                استكشف خدماتنا
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                تواصل معنا
              </Button>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-30"></div>
            <img
              src={heroImage}
              alt="Hero Interior Design"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elegant"
            />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-card/5">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              من نحن
            </h2>
            <div className="w-20 h-1 gradient-hero rounded-full"></div>

            <p className="text-lg text-muted-foreground leading-loose">
              "Special Details" هي شركة استشارات هندسية متخصصة في تقديم حلول
              متكاملة لأعمال التشطيب والتصميم الداخلي، نؤمن بأن التفاصيل تصنع
              الفرق، وأن كل مساحة تستحق أن تصمم بذوق، ودقة، وجودة عالية. نعمل
              بشغف لنحول أفكار عملائنا إلى واقع ملموس، مع الالتزام بأعلى معايير
              الجودة، والدقة في التنفيذ، واحترام الوقت والميزانية. نعتمد في
              عملنا على فريق هندسي ذو خبرة، وشبكة متخصصة من الفنيين والموردين
              لضمان تقديم خدمات تشطيب متكاملة تناسب جميع الاحتياجات، من البسيطة
              إلى الفاخرة
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              نعمل بشغف لنحول أفكار عملائنا إلى واقع ملموس، مع الالتزام بأعلى
              معايير الجودة، والدقة في التنفيذ، واحترام الوقت والميزانية.
            </p>
          </div>

          <GlassCard>
            <img
              src={aboutImage}
              alt="فريق العمل"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </GlassCard>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section gradient>
        <div className="container mx-auto space-y-20">
          {/* Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard>
              <img
                src={visionImage}
                alt="رسالتنا"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </GlassCard>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                رسالتنا
              </h2>
              <div className="w-20 h-1 gradient-hero rounded-full"></div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                أن نقدم خدمات استشارية وتشطيبية بمستوى احترافي عال. تتميز بالدقة
                في التنفيذ، والاهتمام بالتفاصيل، والتزام كامل بمعايير الجودة
                والوقت، بما يضمن رضا العميل وتحقيق رؤيته بكل شفافية وإتقان.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                رؤيتنا
              </h2>
              <div className="w-20 h-1 gradient-hero rounded-full"></div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                أن نكون الاسم الأبرز في عالم الاستشارات الهندسية والتشطيبات، عبر
                تقديم حلول مبتكرة، وخدمة راقية، وتصميمات تعبر عن ذوق كل عميل،
                لنصبح الشريك الأول لكل من يبحث عن التميز في التفاصيل
              </p>
            </div>

            <GlassCard className="lg:order-1">
              <img
                src={aboutImage}
                alt="رؤيتنا"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-card/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              خدماتنا
            </h2>
            <div className="w-20 h-1 gradient-hero rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Standard Category */}
            <GlassCard className="space-y-8">
              <div className="flex items-center gap-4 pb-6 border-b border-primary/20">
                <div className="text-right">
                  <h3 className="text-2xl font-bold">فئات التشطيب</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-primary-foreground text-xl font-bold">
                      ✓
                    </span>
                  </div>
                </div>

                <span className="text-3xl font-bold text-primary italic">
                  Standard
                </span>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">
                  تشطيب عملي بأساسيات متقنة
                </h4>

                <p className="text-muted-foreground leading-relaxed">
                  تم تصميم هذه الفئة لتناسب العملاء الذين يبحثون عن تشطيب
                  اقتصادي وفعال، يجمع بين البساطة الوظيفية والمواد الأساسية ذات
                  الجودة المقبولة.
                </p>

                <div className="space-y-4">
                  <h5 className="font-semibold text-primary">
                    تشمل فئة Standard على:
                  </h5>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      الأعمال الإنشائية والأساسية
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      تأسيس أعمال الكهرباء طبقاً للمخططات
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      تأسيس أعمال السباكة
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      الأرضيات: بورسلين صيني أو هندي بمقاسات 60×60 / 120×120
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      الأبواب: أبواب HDF بديكورات بسيطة
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* Service Image */}
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={"/standard-interior.png"}
                alt="خدمات التشطيب"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elegant"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <GlassCard className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-primary/20">
                <div className="text-right">
                  <h3 className="text-2xl font-bold">فئات التشطيب</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-primary-foreground text-xl font-bold">
                      ✓
                    </span>
                  </div>
                </div>

                <span className="text-3xl font-bold text-primary italic">
                  Premium
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">
                  هذه الفئة هي خيار مثالي لمن يبحث عن جودة ولمسة جمالية عصرية
                </h4>

                <div className="space-y-3">
                  <h5 className="font-semibold text-primary text-lg">
                    تشمل فئة Premium على:
                  </h5>

                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">الأرضيات:</span>
                        <p className="mt-1">
                          بورسلين بجودة عالية بمقاسات 60×60 / 120×120 (مطفي،
                          لامع)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">الدهانات:</span>
                        <p className="mt-1">
                          دهانات متعددة الألوان مع حائط مميز ACCENT WALL
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">السقف:</span>
                        <p className="mt-1">
                          سقف بتصميم هندسي بسيط + SPOT LIGHT وإضاءة LED مخفية مع
                          إضافة وحدات إضاءة ديكورية (أباليك)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">
                          الحوائط والتشطيبات:
                        </span>
                        <p className="mt-1 leading-loose">
                          حوائط مغطاة بألواح زخرفية فاخرة (خشب - جلد - مرايات
                          ديكورية - ألواح 3D)
                          <br />
                          استخدام دهانات بتقنيات خاصة
                          <br />
                          إمكانية تنفيذ لوحات فنية مدمجة في التصميم
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">الأسقف والإضاءة:</span>
                        <p className="mt-1 leading-loose">
                          تصميم أسقف متعدد المستويات بجبس بودر + بيت نور مركب
                          بإضاءة RGB قابلة للتحكم
                          <br />
                          نجف كريستال فاخر
                          <br />
                          استخدام وحدات إنارة ذكية تعمل بأنظمة SMART HOME
                          <br />
                          دمج إضاءة غير مباشرة على الحوائط والأرضيات لإبراز
                          العناصر المعمارية
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* Service Image */}
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={"/premium-interior.png"}
                alt="خدمات التشطيب"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elegant"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-primary/20">
                <div className="text-right">
                  <h3 className="text-2xl font-bold">فئات التشطيب</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-primary-foreground text-xl font-bold">
                      ✓
                    </span>
                  </div>
                </div>

                <span className="text-3xl font-bold text-primary italic">
                  VIP
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">
                  عندما يتحول منزلك إلى لوحة فنية تعكس ذوقك الرفيع وتوفر لك كل
                  الرفاهيات
                </h4>

                <div className="space-y-3">
                  <h5 className="font-semibold text-primary text-lg">
                    تشمل فئة VIP على:
                  </h5>

                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">الخامات:</span>
                        <p className="mt-1 leading-loose">
                          البورسلين المستورد الإسباني بمقاسات كبيرة (120×120 -
                          60×180 - 120×240) برسومات رخام طبيعي مشطوفة بدقة
                          <br />
                          استخدام رخام طبيعي في مدخل أو ممرات أو حوائط (رخام
                          كرارا - مارلينا - ترافرتين)
                          <br />
                          دمج خامات فاخرة مثل الخشب الطبيعي - معادن نحاسية أو
                          ذهبية - الزجاج المعشق
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">
                          أنظمة ذكية وراحة معيشية:
                        </span>
                        <p className="mt-1 leading-loose">
                          التحكم في الإضاءة: التكييف - الستائر - الصوت من خلال
                          التطبيق أو الريموت
                          <br />
                          SOUND SYSTEM
                          <br />
                          SMART LOCK
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">
                          الأبواب والوحدات الخشبية:
                        </span>
                        <p className="mt-1 leading-loose">
                          أبواب من خشب طبيعي أو ملبسة بقشرة فاخرة
                          (WENGE-TEAK-OAK)
                          <br />
                          مقابض مستوردة من نحاس أو استانلس بتصميم خاص
                          <br />
                          دواليب وأبواب مدمجة بالحائط بنظام SOFT CLOSE
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-semibold">الحمامات:</span>
                        <p className="mt-1 leading-loose">
                          حمامات فندقية التصميم ببانيو وجاكوزي
                          <br />
                          إضاءة داخلية للمرايا
                          <br />
                          وحدات عاتمة وخزائن خفية
                          <br />
                          دش زجاجي فاخر بتصريف خفي
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={vipImage}
                alt="خدمات التشطيب"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section gradient>
        <div className="container mx-auto text-center">
          <GlassCard className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              هل أنت مستعد لتحويل مساحتك؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              تواصل معنا اليوم واكتشف كيف يمكننا تحويل رؤيتك إلى واقع بأدق
              التفاصيل
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow hover:shadow-elegant">
                احصل على استشارة مجانية
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                اطلع على أعمالنا
              </Button>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/20 py-12">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-gradient mb-4">
            SPECIAL DETAILS
          </div>
          <p className="text-muted-foreground">
            حيث تتحول الرؤية إلى واقع بأدق التفاصيل
          </p>
        </div>
      </footer>
    </div>
  );
};
