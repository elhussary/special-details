import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container min-h-screen py-12 space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">📞 تواصل معنا</h1>
        <p className="text-muted-foreground">
          إذا كان لديك أي استفسار، لا تتردد في التواصل معنا
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <section className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-6">نموذج التواصل</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">الاسم</label>
              <input
                type="text"
                placeholder="أدخل اسمك"
                className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">رقم الهاتف</label>
              <input
                type="tel"
                placeholder="أدخل رقم هاتفك"
                className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">الموضوع</label>
              <input
                type="text"
                placeholder="موضوع الرسالة"
                className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 font-medium">الرسالة</label>
              <textarea
                placeholder="اكتب رسالتك هنا..."
                className="border rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                إرسال
              </button>
            </div>
          </form>
        </section>

        <section className="lg:w-1/3 space-y-6 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">معلومات الاتصال</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>أبوظبي، منطقة الخالدية، بناية الجابر للمجوهرات</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>00971565422122</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>Sepcialdetails@gmail.com</span>
            </li>
          </ul>
        </section>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">موقعنا</h2>
        <div className="w-full h-80 border rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.216082093605!2d54.361!3d24.466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e65f65b85c3b5%3A0x6d726e9c49d2e5cb!2z2KfZhNiz2KfYtNin2Kog2YbYp9iv2YrZhtin2Kog2KfZhNmH2KfYsdin2Ko!5e0!3m2!1sar!2sae!4v1615504238953!5m2!1sar!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
