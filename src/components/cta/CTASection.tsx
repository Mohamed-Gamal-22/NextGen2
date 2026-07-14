import Link from "next/link";

// High-tech wireframe cube SVG
const FloatingCube = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-28 h-28 stroke-[0.75] stroke-blue-500/35 fill-none opacity-40 animate-pulse ${className}`}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Box */}
    <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
    {/* Inner Box Lines */}
    <line x1="50" y1="15" x2="50" y2="55" />
    <line x1="15" y1="35" x2="50" y2="55" />
    <line x1="85" y1="35" x2="50" y2="55" />
    {/* Vertices Connector */}
    <line x1="50" y1="55" x2="50" y2="95" />
    <line x1="15" y1="75" x2="50" y2="95" />
    <line x1="85" y1="75" x2="50" y2="95" />
    {/* Center detail */}
    <circle cx="50" cy="55" r="3" fill="#0066FF" className="opacity-60" />
  </svg>
);

// High-tech wireframe pyramid SVG
const FloatingPyramid = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-24 h-24 stroke-[0.75] stroke-sky-400/30 fill-none opacity-45 ${className}`}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="50,10 90,75 10,75" />
    <line x1="50" y1="10" x2="50" y2="75" />
    <line x1="50" y1="75" x2="90" y2="75" />
    <line x1="50" y1="75" x2="10" y2="75" />
    <polygon points="50,10 50,75 90,75" className="stroke-sky-500/10" />
  </svg>
);

export default function CTASection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0c1e36] via-[#071122] to-[#03060c] rounded-[32px] px-6 py-16 sm:px-12 sm:py-24 md:py-28 text-white w-full border border-white/5 shadow-2xl shadow-blue-950/40 text-center flex flex-col items-center justify-center">
        
        {/* Neon High-Tech Background Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#0066FF" strokeWidth="1" strokeOpacity="0.25" fill="none">
            {/* Left circuits */}
            <path d="M 0 120 L 180 120 L 250 190 L 450 190" />
            <path d="M 120 0 L 120 90 L 70 140 L 0 140" />
            <path d="M 0 280 L 100 280 L 140 320" />
            {/* Right circuits */}
            <path d="M 1280 220 L 1080 220 L 1010 150 L 750 150" />
            <path d="M 1150 400 L 1150 310 L 1200 260 L 1280 260" />
            <path d="M 1280 100 L 1200 100 L 1160 60" />
          </g>
          
          {/* Glowing joints */}
          <g fill="#00ccff" opacity="0.5">
            <circle cx="180" cy="120" r="3.5" className="animate-pulse" />
            <circle cx="250" cy="190" r="3" />
            <circle cx="120" cy="90" r="3" />
            <circle cx="1080" cy="220" r="3.5" className="animate-pulse" />
            <circle cx="1010" cy="150" r="3" />
            <circle cx="1150" cy="310" r="3" />
          </g>
        </svg>

        {/* Floating tech wireframes */}
        <FloatingCube className="absolute -right-6 -bottom-6 sm:right-6 sm:bottom-6 rotate-12" />
        <FloatingCube className="absolute -left-8 -top-8 sm:left-4 sm:top-4 -rotate-12 scale-75" />
        <FloatingPyramid className="absolute right-12 top-10 rotate-45 scale-75 hidden md:block" />
        <FloatingPyramid className="absolute left-16 bottom-8 -rotate-12 hidden md:block" />

        {/* Central glowing orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(0,102,255,0.18)_0%,transparent_70%)]"
        />

        {/* Content details */}
        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            هل أنت مستعد لبناء المستقبل؟
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-blue-100/80 font-normal">
            كن شريكاً لفريق هندسي متميز يقدّر الدقة والجودة بقدر ما تفعل. دعنا نحوّل تحدياتك التقنية المعقدة إلى حلول برمجية مبتكرة وأنيقة.
          </p>
          <div className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#0066FF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:bg-[#0052cc] hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
            >
              ابدأ مشروعك الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
