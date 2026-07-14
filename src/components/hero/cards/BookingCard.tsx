type BookingCardProps = {
  className?: string;
  widthClasses?: string;
};

export default function BookingCard({
  className = "",
  widthClasses = "w-[220px] sm:w-[240px] lg:w-[260px]",
}: BookingCardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-4 shadow-lg shadow-blue-100/50 ${widthClasses} ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066FF] text-white">
          <svg
            className="h-5 w-5 -rotate-45"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold tracking-wide text-gray-400 uppercase">
            Booking #8921
          </p>
          <p className="truncate text-sm font-bold text-gray-900">London to Tokyo</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[75%] rounded-full bg-[#0066FF]" />
        </div>
        <p className="mt-2 text-xs text-gray-500">Processing Payment - 75%</p>
      </div>
    </div>
  );
}
