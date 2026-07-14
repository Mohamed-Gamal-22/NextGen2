"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Project = {
  id: number;
  tag: string;
  enTitle: string;
  shortDesc: string;
  arTitle: string;
  arDesc: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    tag: "مشروع تطوير",
    enTitle: "MStore",
    shortDesc: "مشروع نفذته NextGen يجمع بين التصميم العصري، الأداء السريع، وتجربة المستخدم السلسة لتقديم حلول رقمية عالية الجودة.",
    arTitle: "إم ستور",
    arDesc: "تُعدّ مانج كودينج واحدة من أكبر الشركات في إندونيسيا، حيث نقدم خدمات تطوير مواقع الويب، وإنشاء المتاجر الإلكترونية، وتطوير المواقع باستخدام ووردبريس.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    tag: "تصميم وتطوير",
    enTitle: "Azora Business",
    shortDesc: "منصة ويب متطورة مخصصة لإدارة العمليات المالية واللوجستية للشركات الصغيرة والمتوسطة بأعلى معايير الأمان.",
    arTitle: "أزورا بيزنس",
    arDesc: "تم تصميم وتطوير المنصة لتوفير واجهة مستخدم متكاملة لإدارة الفواتير والمدفوعات والمستودعات بشكل سحابي وسلس للغاية.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    tag: "تطبيق ذكي",
    enTitle: "OneTravel App",
    shortDesc: "تطبيق هاتف ذكي لحجز تذاكر الطيران والفنادق يوفر عروضاً حصرية وتجربة مستخدم سريعة وديناميكية.",
    arTitle: "ون ترافيل",
    arDesc: "قمنا بتصميم الواجهات وتطوير التطبيق لأنظمة iOS وأندرويد مع ربطه ببوابات دفع متعددة ونظام إشعارات ذكي لخدمة المسافرين.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    tag: "منصة تعليمية",
    enTitle: "EduLearn",
    shortDesc: "منصة تعليم عن بعد متكاملة تدعم الفصول الافتراضية المباشرة وأنظمة الاختبارات التفاعلية للطلاب والمعلمين.",
    arTitle: "إديو ليرن",
    arDesc: "تطوير نظام تعليمي حديث يعتمد على الذكاء الاصطناعي لتخصيص مسار التعلم للطلاب مع لوحة تحكم شاملة لإدارة المحتوى الأكاديمي.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    tag: "تطبيق طبي",
    enTitle: "Sehaty Clinic",
    shortDesc: "منصة استشارات طبية فورية تتيح للمرضى التواصل مع الأطباء وحجز المواعيد والحصول على التقارير الطبية.",
    arTitle: "عيادة صحتي",
    arDesc: "تطوير لوحة تحكم للأطباء وتطبيق جوال للمرضى يدعم المحادثات الكتابية والمرئية المشفرة لضمان الخصوصية وسرعة الخدمة.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    tag: "منصة عقارية",
    enTitle: "Residence Hub",
    shortDesc: "موقع إلكتروني لعرض العقارات والوحدات السكنية مع خرائط تفاعلية وجولات ثلاثية الأبعاد للمشاريع الجديدة.",
    arTitle: "ريزيدنس هوب",
    arDesc: "بناء منصة تتيح للمطورين العقاريين عرض وحداتهم مباشرة للعملاء مع نظام محادثة فوري وتصفية ذكية للوحدات المتاحة.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Dragging states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Responsive logic to set number of visible cards on client side
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-play scroll logic (every 4 seconds)
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Wrap back to start if we exceed the scroll limit
        if (nextIndex > projects.length - visibleCards) {
          return 0;
        }
        return nextIndex;
      });
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [visibleCards, isPaused, isDragging]);

  // Drag handler functions
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setIsPaused(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);

    // Threshold for slide trigger (RTL adjusted)
    if (dragOffset > 60) {
      // Dragged right (RTL: next slides)
      setCurrentIndex((prev) => Math.min(prev + 1, projects.length - visibleCards));
    } else if (dragOffset < -60) {
      // Dragged left (RTL: prev slides)
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
    setDragOffset(0);
  };

  // Handle dot navigation
  const totalSteps = projects.length - visibleCards + 1;

  const translatePercent = currentIndex * (100 / visibleCards);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f4f8ff]/30 to-[#f8faff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f3d4f] sm:text-4xl">
            معرض <span className="text-[#0066FF]">أعمالنا ومشاريعنا الأخيرة</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
            نستعرض معكم نخبة من المشاريع والحلول الرقمية التي قمنا بتطويرها لعملائنا، مدمجة بأحدث التقنيات وأفضل تصاميم تجربة المستخدم.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden px-1 cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            className={`flex gap-6 ${isDragging ? "" : "transition-transform duration-500 ease-in-out"}`}
            style={{
              transform: `translateX(calc(${translatePercent}% + ${dragOffset}px))`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex"
              >
                {/* Project Card */}
                <div className="w-full bg-white border border-gray-100/80 rounded-3xl p-5 shadow-lg shadow-blue-100/10 flex flex-col justify-start transition-all hover:shadow-xl hover:shadow-blue-200/20 hover:border-blue-100/50">
                  {/* Top Part */}
                  <div>
                    <div className="flex gap-4 items-start flex-row">
                      {/* Right: Content details */}
                      <div className="flex-1 text-right">
                        <span className="inline-block border border-blue-200 bg-blue-50/50 text-[#0066FF] px-3 py-1 rounded-full text-[10px] font-bold mb-3">
                          {project.tag}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {project.enTitle}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-normal">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Left: Image mockup preview */}
                      <div className="w-[45%] aspect-[4/3] rounded-2xl border border-gray-100 overflow-hidden shrink-0 relative bg-gray-50">
                        <img
                          src={project.image}
                          alt={project.enTitle}
                          className="w-full h-full object-cover select-none"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="border-t border-dashed border-gray-100 my-4" />

                  {/* Bottom Part */}
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.arTitle}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-normal">
                      {project.arDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        {totalSteps > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#0066FF] w-8" : "bg-blue-100 hover:bg-blue-200 w-2.5"
                }`}
                aria-label={`الذهاب إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
