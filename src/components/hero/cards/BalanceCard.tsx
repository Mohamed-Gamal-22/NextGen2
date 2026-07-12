type BalanceCardProps = {
  className?: string;
};

export default function BalanceCard({ className = "" }: BalanceCardProps) {
  return (
    <div
      className={`w-[210px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-blue-200/40 backdrop-blur-sm sm:w-[230px] lg:w-[250px] ${className}`}
    >
      <p className="text-xs font-medium text-gray-400">Available Balance</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
        $142,500.00
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0066FF]/10">
            <div className="h-3 w-3 rounded-full bg-[#0066FF]" />
          </div>
          <span className="text-sm font-semibold text-gray-800">Azora Business</span>
        </div>

        <div className="flex gap-1.5">
          <div className="h-6 w-9 rounded-md bg-rose-100" />
          <div className="h-6 w-9 rounded-md bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
