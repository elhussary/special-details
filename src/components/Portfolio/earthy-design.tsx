import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const EarthyStyle = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/portfolio/EARTHY/12-1.jpg"
  );

  const images = [
    "/portfolio/EARTHY/12-1.jpg",
    "/portfolio/EARTHY/12-2.jpg",
    "/portfolio/EARTHY/12-3.jpg",
    "/portfolio/EARTHY/12-4.jpg",
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
                  alt="النمط الأرضي"
                  className="w-full h-[500px] object-cover animate-image-transition"
                  key={selectedImage}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                      alt={`النمط الأرضي ${index + 1}`}
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
                EARTHY
              </Badge>
            </div>

            <h3 className="text-3xl font-black text-foreground mb-12 tracking-tight">
              النمط الأرضي
            </h3>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <p className="font-medium">
                يعتمد على استحضار أجواء الطبيعة داخل المساحات السكنية من خلال
                ألوان مستوحاة من الطبيعة مثل البيج، البني الطيني، الرمادي
                الحجري، والصدأ. هذه الألوان تعطي إحساسًا بالدفء والهدوء.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold text-foreground">الألوان</h4>
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-beige-400 shadow-lg border-2 border-border"></div>
                    <div className="w-7 h-7 rounded-full bg-brown-500 shadow-lg border-2 border-border"></div>
                    <div className="w-7 h-7 rounded-full bg-gray-300 shadow-lg border-2 border-border"></div>
                    <div className="w-7 h-7 rounded-full bg-orange-700 shadow-lg border-2 border-border"></div>
                  </div>
                  <p className="text-base font-medium">
                    البيج – البني الطيني – الرمادي الحجري – الصدأ
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-foreground">المواد</h4>
                  <p className="font-medium">
                    الحجر، الجلود، القطن، الكتان، الصوف، مع إدخال عناصر نباتية
                    طبيعية.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-primary">
                  يناسب الأشخاص عشاق الطبيعة ومن يبحثون على أجواء دافئة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarthyStyle;
