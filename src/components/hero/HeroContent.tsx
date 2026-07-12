export default function HeroContent() {
  return (
    <>
      <h1 className="text-3xl leading-tight font-bold text-[#0f3d4f] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
        أنشئ موقعًا إلكترونيًا احترافيًا مع NEXTGEN
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
        نساعدك على إنشاء موقع إلكتروني عصري، سهل الاستخدام، مُحسّن لمحركات البحث
        (SEO) ويتميز بتصميم نظيف واحترافي يعكس هوية علامتك التجارية.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <button
          type="button"
          className="w-full rounded-xl bg-linear-to-r from-[#0066FF] to-[#3d8bff] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-105 sm:w-auto sm:text-base"
        >
          ابدأ مشروعك الآن
        </button>
        <button
          type="button"
          className="w-full rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-800 shadow-md shadow-gray-200/60 transition hover:bg-gray-50 sm:w-auto sm:text-base"
        >
          استشارة مجانية
        </button>
      </div>
    </>
  );
}
