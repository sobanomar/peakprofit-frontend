import { UserPlus, BarChart3, Wallet, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingCardsGrid() {
  return (
    <ul
      className="grid grid-cols-1 grid-rows-none gap-4 
               md:grid-cols-12 md:grid-rows-2 
               lg:grid-cols-12 lg:grid-rows-2 lg:gap-4 
               xl:max-h-[34rem] xl:grid-rows-2"
    >
      <GridItem
        area="md:[grid-area:1/1/2/7] lg:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/7]"
        icon={<UserPlus className="h-6 w-6 text-brand" />}
        title="Sign Up"
        description="Sign up, select your challenge, and start trading immediately."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] lg:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/7]"
        icon={<Wallet className="h-6 w-6 text-brand" />}
        title="Get Funding"
        description="Pass our challenge and you can trade a Simulated funded account in as little as 3 days."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] lg:[grid-area:2/1/3/7] xl:[grid-area:1/7/2/13]"
        icon={<BarChart3 className="h-6 w-6 text-brand" />}
        title="Trade"
        description="Trade your account using your strategy and following our trading guidelines."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] lg:[grid-area:2/7/3/13] xl:[grid-area:2/7/3/13]"
        icon={<TrendingUp className="h-6 w-6 text-brand" />}
        title="Scale Up"
        description="Scale Your Account up to $1Million in Simulated Funding."
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      {/* Changes made:
        1. bg-white/5 (or bg-black/20) for the semi-transparent base
        2. backdrop-blur-md for the frosted effect
        3. border-white/10 for a soft "specular" edge 
      */}
      <div
        className={cn(
          "relative h-full rounded-[1.25rem] border-[0.75px] p-2 md:rounded-[1.5rem] md:p-3",
          "transition-all duration-300",
          " backdrop-blur-3xl border-white/10 hover:bg-white/[0.08] bg-gradient-to-b from-white/[0.08] to-transparent shadow-2xl",
        )}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Glassy icon container */}
            <div className="w-fit rounded-lg border-[0.75px] border-white/10  p-2 backdrop-blur-lg">
              {icon}
            </div>
            <div className="space-y-3 text-left">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-zinc-300/80">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
