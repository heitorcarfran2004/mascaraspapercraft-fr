import type { Metadata } from "next";
import { Check, Gift, User } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { Faq } from "@/components/sections/faq";
import { backOffer, pricing } from "@/content/site";

export const metadata: Metadata = {
  title: "Offerta esclusiva — Espaço Criativo",
  description: backOffer.subtitle,
  // Pagina di uscita: non deve essere indicizzata né competere con la landing.
  robots: { index: false, follow: false },
};

export default function OffertaSpeciale() {
  const { master, guarantee } = pricing;

  return (
    <main className="min-h-screen">
      {/* Banner di urgenza */}
      <header className="w-full bg-[#e11e14] text-white text-xs sm:text-sm font-bold shadow-md">
        <div className="mx-auto max-w-5xl px-4 py-2.5 text-center uppercase tracking-[0.12em]">
          {backOffer.banner}
        </div>
      </header>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Intestazione dell'offerta */}
          <div className="text-center mb-10">
            <span className="tag-badge mb-4">{backOffer.badge}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              {backOffer.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {backOffer.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {/* Card dell'offerta scontata */}
            <div
              id="pricing"
              className="relative bg-[#FDF8F3] rounded-2xl p-6 shadow-elevated border-2 border-dashed border-primary"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                  {master.badge}
                </span>
              </div>

              <div className="text-center mb-[19px] pt-2">
                <h2 className="text-[25px] font-bold mb-1 mt-[2px]">
                  {master.name}
                </h2>
              </div>

              <div className="text-center mb-[19px]">
                <p className="text-muted-foreground line-through text-[16px]">
                  {backOffer.originalPrice}
                </p>
                <p className="text-4xl font-bold text-primary">
                  {backOffer.price}
                </p>
                <div className="inline-block mt-2">
                  <span className="bg-success/20 text-success px-4 py-1 rounded-full text-xs font-bold uppercase">
                    {backOffer.savings}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {master.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">
                  BONUS INCLUSI
                </p>
                <ul className="space-y-2">
                  {master.bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-center gap-3">
                      <Gift className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {bonus}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <CtaButton href={backOffer.checkout} className="w-full">
                {master.cta}
              </CtaButton>
              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-[17px] uppercase">
                <User className="w-3.5 h-3.5" />
                {master.socialProof}
              </p>
            </div>

            {/* Garanzia */}
            <div className="bg-[#FDF8F3] rounded-2xl p-8 mt-6 text-center border-2 border-dashed border-muted-foreground/30">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                {guarantee.kicker}
              </p>
              <h3 className="font-bold text-2xl mb-4">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {guarantee.text}
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-12 h-[2px] bg-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Espaço</p>
                  <p className="text-xs text-muted-foreground">Criativo</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-[2px] bg-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Firma</p>
                  <p className="text-xs text-muted-foreground">autorizzata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </main>
  );
}
