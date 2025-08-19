import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const ModernDesign = () => {
  const [selectedModernImage, setSelectedModernImage] = useState(
    "/portfolio/MODERN/4-1.jpg"
  );

  const modernImages = [
    "/portfolio/MODERN/4-1.jpg",
    "/portfolio/MODERN/4-2.jpg",
    "/portfolio/MODERN/4-3.jpg",
    "/portfolio/MODERN/4-4.jpg",
  ];

  return (
    <Card
      className="border-none glass-morphism animate-slide-in-right card-hover-effect shadow-none"
      style={{ animationDelay: "0.3s" }}
    >
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="relative  order-2 lg:order-1">
            <div>
              <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={selectedModernImage || "/placeholder.svg"}
                  alt="النمط الحديث"
                  className="w-full h-[500px] object-cover animate-image-transition"
                  key={selectedModernImage}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {modernImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedModernImage(image)}
                    className={`relative rounded-xl overflow-hidden animate-thumbnail-hover transition-all duration-300 ${
                      selectedModernImage === image
                        ? "ring-1 ring-violet-300 shadow-xl scale-105"
                        : "ring-2 ring-border hover:ring-primary/40 hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`النمط الحديث ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="flex items-center gap-6 mb-12">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-180" />
              <div className="h-px bg-border flex-1"></div>
              <Badge
                variant="outline"
                className="text-xl px-8 py-4 border-primary text-primary font-bold"
              >
                MODERN
              </Badge>
            </div>

            <h3 className="text-3xl font-black text-foreground mb-12 tracking-tight">
              النمط الحديث
            </h3>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <p className="font-medium">
                يتميز بخطوط نظيفة وأشكال هندسية واضحة مع أثاث عملي بدون زخارف
                ومساحات مفتوحة
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold text-foreground">
                    الألوان المحايدة
                  </h4>
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-white border-3 border-gray-300 shadow-lg"></div>
                    <div className="w-7 h-7 rounded-full bg-gray-400 border-3 border-border shadow-lg"></div>
                    <div className="w-7 h-7 rounded-full bg-gray-800 border-3 border-border shadow-lg"></div>
                  </div>
                  <p className="text-base font-medium">أبيض - رمادي - أسود</p>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-foreground">المواد العصرية</h4>
                  <p className="font-medium">الزجاج والمعدن والخشب المصنع</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-primary">
                  يناسب المساحات الصغيرة ومحبي البساطة والعملية
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernDesign;
