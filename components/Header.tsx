import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-0 py-5 flex items-center gap-2.5 overflow-hidden relative z-10">
      <nav className="flex-1 flex items-center justify-center gap-[35px] min-h-0 min-w-0">
        <Link 
          href="/" 
          className="font-oswald font-semibold text-sm text-[#ebebeb] uppercase tracking-[0.84px] leading-6 underline decoration-solid"
        >
          Home
        </Link>
        <Link 
          href="/mountain-experience" 
          className="font-oswald font-semibold text-sm text-white/75 uppercase tracking-[0.84px] leading-6"
        >
          Mountain Experience
        </Link>
        <Link 
          href="/ceremony-locations" 
          className="font-oswald font-semibold text-sm text-white/75 uppercase tracking-[0.84px] leading-6"
        >
          Ceremony Locations
        </Link>
        <Link 
          href="/reception" 
          className="font-oswald font-semibold text-sm text-white/75 uppercase tracking-[0.84px] leading-6"
        >
          Our Reception
        </Link>
        <Link 
          href="/pricing" 
          className="font-oswald font-semibold text-sm text-white/75 uppercase tracking-[0.84px] leading-6"
        >
          Our Pricing
        </Link>
        <Link 
          href="/real-moments" 
          className="font-oswald font-semibold text-sm text-white/75 uppercase tracking-[0.84px] leading-6"
        >
          Real Moments
        </Link>
      </nav>
      <div className="flex items-center rounded-[50px]">
        <Link 
          href="/contact" 
          className="bg-[#5e8591] px-[38px] py-[15px] flex items-center justify-center overflow-hidden font-oswald font-semibold text-sm text-white uppercase tracking-[0.84px] leading-6"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
