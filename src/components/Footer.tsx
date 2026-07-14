import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Responsive Grid */}
        {/* Large: 4 columns, md: 3 columns, sm: 2 columns, default: 1 column */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Column 1: Company Details */}
          <div className="flex flex-col gap-6 text-right">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src="/logo.png"
                alt="شعار نكست جين"
                width={150}
                height={53}
                className="w-[125px] h-[53px] object-cover"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 font-normal">
              تقديم حلول برمجية مخصصة وعالية الدقة لأكثر الشركات طموحاً في العالم.
            </p>
            {/* Social Share Circles */}
            <div className="flex gap-3 justify-start items-center">
              {/* Share Icon */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 transition hover:border-[#0066FF] hover:text-[#0066FF] cursor-pointer"
                aria-label="مشاركة"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 10.742l4.636-2.318m0 7.152l-4.636-2.318M21 12a3 3 0 11-6 0 3 3 0 016 0zm-6-6a3 3 0 11-6 0 3 3 0 016 0zm0 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>

              {/* Branch/Network Icon */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 transition hover:border-[#0066FF] hover:text-[#0066FF] cursor-pointer"
                aria-label="الشبكة"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>

              {/* Globe Icon */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 transition hover:border-[#0066FF] hover:text-[#0066FF] cursor-pointer"
                aria-label="الموقع الإلكتروني"
              >
                <svg
                  className="h-5 w-5"
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
              </button>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div className="text-right">
            <h3 className="text-base font-bold text-gray-900 mb-6">الخبرات</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  التحول السحابي
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  منصات SaaS المخصصة
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  هندسة البيانات
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  الأنظمة البيئية للهواتف
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-right">
            <h3 className="text-base font-bold text-gray-900 mb-6">المصادر</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#methodology" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  منهجية العمل
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  دراسات الحالة
                </Link>
              </li>
              <li>
                <Link href="#white-papers" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  الأوراق البيضاء
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  المدونة التقنية
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="text-right">
            <h3 className="text-base font-bold text-gray-900 mb-6">الشروط القانونية</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#privacy" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  شروط الخدمة
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors font-normal">
                  سياسة ملفات تعريف الارتباط
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright sub-section */}
        <div className="mt-16 border-t border-gray-100 pt-8 text-center sm:text-right">
          <p className="text-xs text-gray-400 font-normal">
            &copy; {new Date().getFullYear()} نكست جين (NEXTGEN). جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}
