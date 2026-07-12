type RevenueCardProps = {
  className?: string;
};

const bars = [
  { height: "h-6", active: false },
  { height: "h-8", active: false },
  { height: "h-10", active: false },
  { height: "h-12", active: false },
  { height: "h-16", active: true },
];

export default function RevenueCard({ className = "" }: RevenueCardProps) {
  return (
    <div
      className={`w-[200px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-blue-200/40 backdrop-blur-sm sm:w-[220px] lg:w-[240px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900">Revenue</span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
          +24%
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-2 px-1">
        {bars.map((bar, index) => (
          <div
            key={index}
            className={`w-full rounded-md ${bar.height} ${
              bar.active ? "bg-[#0066FF]" : "bg-blue-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
