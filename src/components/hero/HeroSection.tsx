import ActiveAgentsCard from "./cards/ActiveAgentsCard";
import BalanceCard from "./cards/BalanceCard";
import BookingCard from "./cards/BookingCard";
import RevenueCard from "./cards/RevenueCard";
import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white px-4 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8 lg:pt-8 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* lg+ layout: fixed-height zone, cards + text both positioned independently */}
        <div className="relative hidden lg:block lg:min-h-[520px] xl:min-h-[560px]">
          <div className="pointer-events-none absolute inset-0">
            <BookingCard className="absolute top-4 left-3 origin-center -rotate-[8deg] xl:top-6 xl:left-5" />
            <ActiveAgentsCard className="absolute top-4 right-3 origin-center rotate-[7deg] xl:top-6 xl:right-5" />
            <BalanceCard className="absolute bottom-4 left-3 origin-center rotate-[6deg] xl:bottom-6 xl:left-5" />
            <RevenueCard className="absolute right-3 bottom-4 origin-center -rotate-[7deg] xl:right-5 xl:bottom-6" />
          </div>

          <div className="relative z-10 flex min-h-[520px] items-center justify-center xl:min-h-[560px]">
            <div className="max-w-3xl text-center">
              <HeroBadge />
              <HeroContent />
            </div>
          </div>
        </div>

        {/* below lg: content + grid in normal flow */}
        <div className="lg:hidden">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <HeroBadge />
            <HeroContent />
          </div>

          <div className="relative z-10 mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:gap-6">
            <BookingCard className="mx-auto w-full max-w-[220px]" />
            <ActiveAgentsCard className="mx-auto w-full max-w-[220px]" />
            <BalanceCard className="mx-auto w-full max-w-[220px]" />
            <RevenueCard className="mx-auto w-full max-w-[220px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
