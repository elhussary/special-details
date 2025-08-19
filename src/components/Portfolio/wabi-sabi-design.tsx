import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const WabiSabiDesign = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/portfolio/WABI-SABI/11-1.jpg"
  );

  const images = [
    "/portfolio/WABI-SABI/11-1.jpg",
    "/portfolio/WABI-SABI/11-2.jpg",
    "/portfolio/WABI-SABI/11-3.jpg",
  ];

  return (
    <Card
      className="border-none glass-morphism animate-slide-in-right card-hover-effect shadow-none"
      style={{ animationDelay: "0.4s" }}
    >
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* الصور */}
          <div className="relative order-2 lg:order-1">
            <div>
              <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="النمط الوابي سابي"
                  className="w-full h-[500px] object-cover animate-image-transition"
                  key={selectedImage}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative rounded-xl overflow-hidden animate-thumbnail-hover transition-all duration-300 ${
                      selectedImage === image
                        ? "ring-1 ring-yellow-400 shadow-xl scale-105"
                        : "ring-2 ring-border hover:ring-primary/40 hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`النمط الوابي سابي ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* النص */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="flex items-center gap-6 mb-12">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-180" />
              <div className="h-px bg-border flex-1"></div>
              <Badge
                variant="outline"
                className="text-xl px-8 py-4 border-yellow-600 text-yellow-700 font-bold"
              >
                WABI SABI
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-12 tracking-tight">
              النمط الوابي سابي
            </h3>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <p className="font-medium">
                يعتمد على البساطة والحد الأدنى من العناصر، إبراز المساحات
                الفارغة، والتركيز على جودة كل عنصر.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold text-foreground">الألوان</h4>
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-beige-400 shadow-lg border-2 border-border"></div>
                    <div className="w-7 h-7 rounded-full bg-green-olive shadow-lg border-2 border-border"></div>
                    <div className="w-7 h-7 rounded-full bg-gray-300 shadow-lg border-2 border-border"></div>
                  </div>
                  <p className="text-base font-medium">
                    درجات البيج، الأخضر الزيتوني، الأبيض، الرمادي – مستوحاة من
                    الطبيعة
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-foreground">المواد</h4>
                  <p className="font-medium">
                    الخشب، الطين، الحجر، ترك المواد على صورتها والاحتفاظ بالملمس
                    العضوي لها.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-primary">
                  يناسب عشاق الطبيعة والمواد العضوية، محبي الهدوء والسلام
                  الداخلي، والأشخاص المهتمين بالاستدامة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WabiSabiDesign;
