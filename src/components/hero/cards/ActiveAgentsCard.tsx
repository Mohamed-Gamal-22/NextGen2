type ActiveAgentsCardProps = {
  className?: string;
};

const avatars = [
  "bg-sky-400",
  "bg-violet-400",
  "bg-amber-400",
];

export default function ActiveAgentsCard({ className = "" }: ActiveAgentsCardProps) {
  return (
    <div
      className={`w-[200px] rounded-2xl border border-gray-100 bg-white p-4 shadow-lg shadow-blue-100/50 sm:w-[220px] lg:w-[240px] ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-400/30" />
          <span className="text-sm font-semibold text-gray-900">Active Agents</span>
        </div>
        <span className="text-[10px] font-medium text-gray-400">Live Now</span>
      </div>

      <div className="mt-4 flex items-center">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {avatars.map((color, index) => (
            <div
              key={color}
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white ${color} text-xs font-bold text-white`}
            >
              {index + 1}
            </div>
          ))}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-bold text-gray-600">
            +12
          </div>
        </div>
      </div>
    </div>
  );
}
