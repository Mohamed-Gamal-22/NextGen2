import Link from "next/link";
import Image from "next/image";

// 1. Browser Mockup for Web Development Card
const BrowserMockup = () => (
  <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] rounded-xl shadow-2xl relative overflow-hidden select-none">
    <Image
      src="/browser-mockup.png"
      alt="تطوير المواقع الالكترونية"
      fill
      sizes="(max-width: 640px) 280px, 320px"
      className="object-cover"
      loading="lazy"

    />
  </div>
);

// 2. UI/UX Wireframe Mockup for UI/UX Design Card
const UIUXMockup = () => (
  <div className="w-full aspect-[1.5] rounded-2xl shadow-xl relative overflow-hidden select-none border border-gray-100/50">
    <Image
      src="/uiux-mockup.jpg"
      alt="تصميم واجهات المستخدم UI/UX"
      fill
      sizes="(max-width: 640px) 100vw, 400px"
      className="object-cover transition duration-500 hover:scale-105"
      loading="lazy"
    />
  </div>
);

// 3. Mobile App Phone Mockup for Mobile Apps Card
const MobileMockup = () => (
  <div className="w-full aspect-[1.5] rounded-2xl shadow-xl relative overflow-hidden select-none border border-gray-100/50">
    <Image
      src="/mobile-mockup.jpg"
      alt="تطوير تطبيقات الهواتف"
      fill
      sizes="(max-width: 640px) 100vw, 400px"
      className="object-cover transition duration-500 hover:scale-105"
      loading="lazy"
    />
  </div>
);

// 4. Shopify Shopping Bag Mockup for Shopify Stores Card
const ShopifyMockup = () => (
  <div className="w-full max-w-[400px] sm:max-w-[480px] aspect-[1.5] rounded-2xl shadow-2xl relative overflow-hidden select-none border border-white/10">
    <Image
      src="/shopify-mockup.jpg"
      alt="متاجر شوبيفاي وتكامل إيزي أوردر"
      fill
      sizes="(max-width: 640px) 100vw, 480px"
      className="object-cover transition duration-500 hover:scale-105"
      loading="lazy"
    />
  </div>
);

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-[#edf4fe]/40 to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl text-right">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f3d4f] sm:text-4xl">
              لنعمل معًا{" "}
              <span className="text-[#0066FF]">ونحوّل فكرتك إلى واقع رقمي</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              نساعدك في إنشاء مواقع إلكترونية عصرية، سهلة الاستخدام، ومُحسّنة
              لمحركات البحث (SEO)، وبتصميم احترافي يعكس هوية علامتك التجارية.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#0066FF] bg-transparent px-7 py-3 text-base font-bold text-[#0066FF] shadow-xs transition hover:bg-[#0066FF]/5"
            >
              ابدأ الآن
            </Link>
          </div>
        </div>

        {/* Alternating Card Layout using Flexbox wrapping */}
        <div className="mt-14 flex flex-wrap gap-6">
          {/* Card 1: Web Development (Large Blue Card) */}
          <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#0066FF] to-[#004dc7] rounded-3xl p-6 sm:p-8 md:p-10 text-white w-full md:w-[calc(50%-12px)] lg:w-[62%] lg:order-2 min-h-[350px] shadow-lg shadow-blue-500/10">
            {/* Right side contents */}
            <div className="flex-1 text-right flex flex-col justify-center">
              {/* Globe Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                تطوير المواقع الالكترونية
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
                نساعدك في بناء موقع إلكتروني احترافي لشركتك يتميز بتصميم عصري،
                سهل الاستخدام، محسن لمحركات البحث (SEO)، وبتصميم نظيف ومنظم.
              </p>
              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-white hover:underline decoration-white underline-offset-4"
                >
                  ابدأ معنا. <span className="text-xs">↗</span>
                </Link>
              </div>
            </div>

            {/* Left side illustration */}
            <div className="flex-1 w-full flex justify-center md:justify-center lg:justify-start mt-6 md:mt-8 lg:mt-0 lg:mr-6">
              <BrowserMockup />
            </div>
          </div>

          {/* Card 2: UI/UX Design (Small White Card) */}
          <div className="relative overflow-hidden flex flex-col justify-between bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(38%-24px)] lg:order-1 min-h-[350px] shadow-lg shadow-blue-100/30">
            <div>
              {/* Nib Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF]/5 text-[#0066FF] mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                تصميم واجهات المستخدم UI/UX
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                نصمم واجهات مستخدم جذابة وسهلة الاستخدام تضمن أفضل تجربة لعملائك
                وتزيد من نسب التحويل للعلامة التجارية.
              </p>
            </div>

            {/* Visual mockup */}
            <div className="mt-6 mb-6 w-full">
              <UIUXMockup />
            </div>

            <div className="relative z-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-gray-900 hover:text-[#0066FF] transition-colors"
              >
                ابدأ معنا. <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Mobile Apps (Small White Card) */}
          <div className="relative overflow-hidden flex flex-col justify-between bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(38%-24px)] lg:order-4 min-h-[350px] shadow-lg shadow-blue-100/30">
            <div>
              {/* Phone Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                تطوير تطبيقات الهواتف
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                نطور تطبيقات هاتف ذكية وسريعة متوافقة مع أنظمة iOS وأندرويد
                بأحدث التقنيات مع تجربة مستخدم سلسة.
              </p>
            </div>

            {/* Visual mockup */}
            <div className="mt-6 mb-6 w-full">
              <MobileMockup />
            </div>

            <div className="relative z-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-gray-900 hover:text-[#0066FF] transition-colors"
              >
                ابدأ معنا. <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          {/* Card 4: Shopify Stores (Large Blue Card) */}
          <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#0066FF] to-[#004dc7] rounded-3xl p-6 sm:p-8 md:p-10 text-white w-full md:w-[calc(50%-12px)] lg:w-[62%] lg:order-3 min-h-[350px] shadow-lg shadow-blue-500/10">
            {/* Right side contents */}
            <div className="flex-1 text-right flex flex-col justify-center">
              {/* Bag Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                متاجر Shopify وتكامل EasyOrders
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
                نساعدك في بناء متجر إلكتروني احترافي على منصة Shopify وربطه وتكامله مع نظام EasyOrders لإدارة وتسهيل الطلبات بشكل آلي وسلس للغاية.
              </p>
              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-white hover:underline decoration-white underline-offset-4"
                >
                  ابدأ معنا. <span className="text-xs">↗</span>
                </Link>
              </div>
            </div>

            {/* Left side illustration */}
            <div className="flex-1 w-full flex justify-center md:justify-center lg:justify-start mt-6 md:mt-8 lg:mt-0 lg:mr-6">
              <ShopifyMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
