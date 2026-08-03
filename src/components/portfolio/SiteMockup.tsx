import { Scissors, Sparkles } from "lucide-react";

const BrowserChrome = ({ url }: { url: string }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-black/20">
    <span className="w-2 h-2 rounded-full bg-white/40" />
    <span className="w-2 h-2 rounded-full bg-white/40" />
    <span className="w-2 h-2 rounded-full bg-white/40" />
    <span className="ml-2 text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 truncate">
      {url}
    </span>
  </div>
);

export const BarbershopMockup = () => (
  <div className="absolute inset-0 flex flex-col bg-zinc-900">
    <BrowserChrome url="ironcladbarbershop.com" />
    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
      <span className="font-display text-xs font-bold tracking-widest text-white">
        IRONCLAD
      </span>
      <span className="flex items-center gap-2 text-[8px] uppercase tracking-wide text-white/50 pr-10">
        <span>Cuts</span>
        <span>Fades</span>
        <span>Shaves</span>
      </span>
    </div>
    <div className="relative flex-1 flex flex-col items-start justify-center px-4 py-3">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
        <Scissors className="w-7 h-7 text-amber-500/70" />
      </div>
      <p className="font-display text-lg sm:text-xl font-bold text-white leading-tight max-w-[70%]">
        Sharp Cuts.
        <br />
        Bold Confidence.
      </p>
      <p className="mt-2 text-[9px] text-white/50 max-w-[65%] leading-relaxed">
        Modern grooming for the modern man.
      </p>
      <span className="mt-3 text-[9px] font-semibold px-3 py-1.5 rounded-md bg-amber-500 text-black">
        Book Your Appointment
      </span>
    </div>
  </div>
);

export const SalonMockup = () => (
  <div className="absolute inset-0 flex flex-col bg-rose-50">
    <BrowserChrome url="lumieresalon.com" />
    <div className="flex items-center justify-between px-4 py-2 border-b border-rose-200/70 bg-white/40">
      <span className="font-display text-xs font-semibold tracking-wide text-rose-600">
        Lumière
      </span>
      <span className="flex items-center gap-2 text-[8px] uppercase tracking-wide text-rose-400 pr-10">
        <span>Color</span>
        <span>Balayage</span>
        <span>Styling</span>
      </span>
    </div>
    <div className="relative flex-1 flex flex-col items-start justify-center px-4 py-3">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-rose-400/10 flex items-center justify-center">
        <Sparkles className="w-7 h-7 text-rose-400/70" />
      </div>
      <p className="font-display text-lg sm:text-xl font-bold text-rose-950 leading-tight max-w-[70%]">
        Radiant Color.
        <br />
        Effortless Style.
      </p>
      <p className="mt-2 text-[9px] text-rose-900/50 max-w-[65%] leading-relaxed">
        Elevate your look with our master stylists.
      </p>
      <span className="mt-3 text-[9px] font-semibold px-3 py-1.5 rounded-md bg-rose-400 text-white">
        Book an Appointment
      </span>
    </div>
  </div>
);
