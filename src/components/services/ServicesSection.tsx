import Link from "next/link";

// 1. Browser Mockup for Web Development Card
const BrowserMockup = () => (
  <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-1.5 shadow-2xl relative overflow-hidden select-none">
    {/* Address Bar Header */}
    <div className="flex items-center gap-2 px-2 py-1.5 bg-black/20 rounded-t-lg mb-2">
      {/* 3 dots */}
      <div className="flex gap-1.5 items-center shrink-0">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
      </div>
      {/* URL bar */}
      <div className="flex-1 bg-black/10 rounded-md px-3 py-0.5 text-[9px] text-white/60 text-left font-mono truncate">
        www.nextgen-agency.com
      </div>
    </div>
    {/* Web content skeleton */}
    <div className="space-y-2 p-1">
      {/* Hero card */}
      <div className="h-14 rounded bg-white/10 flex items-center justify-between px-3">
        <div className="space-y-1">
          <div className="h-2 w-16 bg-white/30 rounded animate-pulse" />
          <div className="h-1.5 w-24 bg-white/20 rounded" />
        </div>
        <div className="h-6 w-6 rounded bg-white/20" />
      </div>
      {/* Grid columns */}
      <div className="grid grid-cols-2 gap-2">
        <div className="h-16 rounded bg-white/5 p-2 space-y-1.5">
          <div className="h-1.5 w-12 bg-white/20 rounded" />
          <div className="h-1 w-full bg-white/10 rounded" />
          <div className="h-1 w-[80%] bg-white/10 rounded" />
        </div>
        <div className="h-16 rounded bg-white/5 p-2 space-y-1.5">
          <div className="h-1.5 w-12 bg-white/20 rounded" />
          <div className="h-1 w-full bg-white/10 rounded" />
          <div className="h-1 w-[80%] bg-white/10 rounded" />
        </div>
      </div>
    </div>
  </div>
);

// 2. UI/UX Wireframe Mockup for UI/UX Design Card
const UIUXMockup = () => (
  <div className="absolute -left-6 -bottom-6 w-[200px] h-[150px] bg-slate-50 border border-gray-100 rounded-2xl shadow-xl shadow-blue-500/5 p-3 flex flex-col justify-between overflow-hidden pointer-events-none">
    {/* Figma style layout editor visual */}
    <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="h-1.5 w-16 bg-gray-200 rounded" />
      </div>
      <div className="h-3.5 w-8 bg-blue-100 rounded text-[7px] text-[#0066FF] flex items-center justify-center font-bold">
        92%
      </div>
    </div>
    
    <div className="flex-1 space-y-2">
      {/* Grid boxes */}
      <div className="flex gap-2">
        <div className="flex-1 h-10 border border-dashed border-blue-300 rounded bg-blue-50/30 flex items-center justify-center">
          <span className="text-[10px] text-blue-500">✦</span>
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-2 w-full bg-gray-200 rounded" />
          <div className="h-2 w-[70%] bg-gray-100 rounded" />
          <div className="h-3 w-10 bg-gray-100 rounded mt-1" />
        </div>
      </div>
      
      {/* Alignment guidelines */}
      <div className="w-full h-[1px] bg-blue-300/40 relative">
        <div className="absolute -top-1 left-1/3 h-2.5 w-2.5 border border-blue-500 bg-white rounded-sm" />
        <div className="absolute -top-1 left-2/3 h-2.5 w-2.5 border border-blue-500 bg-white rounded-sm" />
      </div>
    </div>
  </div>
);

// 3. Mobile App Phone Mockup for Mobile Apps Card
const MobileMockup = () => (
  <div className="absolute -left-4 -bottom-8 w-[130px] h-[200px] bg-slate-900 border-[3px] border-slate-800 rounded-[24px] shadow-2xl relative overflow-hidden flex flex-col p-1.5 select-none pointer-events-none">
    {/* Dynamic Island */}
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-10" />
    
    {/* App content */}
    <div className="flex-1 bg-white rounded-[18px] p-2 overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mt-1">
        <div className="h-3 w-3 rounded-full bg-sky-100" />
        <div className="h-2 w-12 bg-gray-100 rounded" />
      </div>
      
      {/* Main card */}
      <div className="bg-sky-50 rounded-lg p-1.5 my-2 space-y-1">
        <div className="h-1.5 w-8 bg-sky-200 rounded" />
        <div className="h-1 w-full bg-gray-200 rounded" />
        <div className="h-1 w-2/3 bg-gray-200 rounded" />
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-3 gap-1">
        <div className="aspect-square bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
        <div className="aspect-square bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
        <div className="aspect-square bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="border-t border-gray-100 pt-1 flex justify-around">
        <div className="h-1.5 w-3 bg-[#0066FF] rounded-full" />
        <div className="h-1.5 w-1.5 bg-gray-300 rounded-full" />
        <div className="h-1.5 w-1.5 bg-gray-300 rounded-full" />
      </div>
    </div>
  </div>
);

// 4. Shopify Shopping Bag Mockup for Shopify Stores Card
const ShopifyMockup = () => (
  <div className="w-full max-w-[220px] sm:max-w-[250px] aspect-square flex items-center justify-center relative overflow-hidden select-none">
    {/* Glowing backdrop */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_70%)] pointer-events-none" />
    
    <svg
      className="w-[85%] h-[85%] drop-shadow-xl text-white/95"
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bag handles */}
      <path
        d="M60 65C60 30 78 15 100 15C122 15 140 30 140 65"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Bag body */}
      <path
        d="M30 65L45 195C46 203 53 209 61 209H139C147 209 154 203 155 195L170 65H30Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Engraved Shopify 'S' Logo style curve */}
      <path
        d="M125 105C125 90 95 85 95 105C95 125 110 120 110 135C110 150 78 145 78 135"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-90"
      />
    </svg>
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
              نساعدك في إنشاء مواقع إلكترونية عصرية، سهلة الاستخدام، ومُحسّنة لمحركات البحث (SEO)، وبتصميم احترافي يعكس هوية علامتك التجارية.
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
          <div className="relative overflow-hidden flex flex-row md:flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#0066FF] to-[#004dc7] rounded-3xl p-6 sm:p-8 md:p-10 text-white w-full md:w-[calc(50%-12px)] lg:w-[62%] lg:order-2 min-h-[350px] shadow-lg shadow-blue-500/10">
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">تطوير المواقع الالكترونية</h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
                نساعدك في بناء موقع إلكتروني احترافي لشركتك يتميز بتصميم عصري، سهل الاستخدام، محسن لمحركات البحث (SEO)، وبتصميم نظيف ومنظم.
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
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                نصمم واجهات مستخدم جذابة وسهلة الاستخدام تضمن أفضل تجربة لعملائك وتزيد من نسب التحويل للعلامة التجارية.
              </p>
            </div>
            
            {/* Visual bottom mockup */}
            <div className="relative w-full h-[100px] overflow-visible">
              <UIUXMockup />
            </div>

            <div className="mt-4 relative z-10">
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">تطوير تطبيقات الهواتف</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                نطور تطبيقات هاتف ذكية وسريعة متوافقة مع أنظمة iOS وأندرويد بأحدث التقنيات مع تجربة مستخدم سلسة.
              </p>
            </div>

            {/* Visual bottom mockup */}
            <div className="relative w-full h-[100px] overflow-visible">
              <MobileMockup />
            </div>

            <div className="mt-4 relative z-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-gray-900 hover:text-[#0066FF] transition-colors"
              >
                ابدأ معنا. <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          {/* Card 4: Shopify Stores (Large Blue Card) */}
          <div className="relative overflow-hidden flex flex-row md:flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#0066FF] to-[#004dc7] rounded-3xl p-6 sm:p-8 md:p-10 text-white w-full md:w-[calc(50%-12px)] lg:w-[62%] lg:order-3 min-h-[350px] shadow-lg shadow-blue-500/10">
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">متاجر Shopify</h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
                نساعدك في بناء متجر إلكتروني احترافي على منصة Shopify يتميز بتصميم عصري، سهل الاستخدام، ومتكامل مع كافة بوابات الدفع والشحن.
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
