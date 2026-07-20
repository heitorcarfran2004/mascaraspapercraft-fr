"use client";

import { useState } from "react";
import {
  Check,
  Gift,
  ShieldCheck,
  Download,
  ThumbsUp,
  User,
} from "lucide-react";

import dynamic from "next/dynamic";

import { CtaButton } from "@/components/cta-button";
import { checkout, pricing } from "@/content/site";

// Carregado sob demanda: o modal (e o Radix Dialog) sai do bundle inicial,
// aliviando o First Load JS. O comportamento do upsell continua idêntico.
const UpsellModal = dynamic(
  () => import("./upsell-modal").then((m) => m.UpsellModal),
  { ssr: false },
);

const trustIcons = [ShieldCheck, Download, ThumbsUp];

export function Pricing() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const { basic, master, trustBadges, guarantee } = pricing;

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Scegli <span className="gradient-text">il tuo kit</span>
          </h2>
          <p className="text-muted-foreground">
            Nessun abbonamento! Paghi una volta
            <br />
            ed è tuo per sempre
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-md mx-auto">
          {/* Kit Iniciante */}
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-1">{basic.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-3">
                {basic.tagline}
              </p>
            </div>

            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-foreground">
                {basic.price}
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              {basic.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsUpsellOpen(true)}
              className="w-full py-3 px-6 rounded-full border border-[hsl(35_20%_60%)] text-[hsl(30_15%_27%)] font-medium hover:border-primary hover:text-foreground transition-colors"
            >
              {basic.cta}
            </button>
          </div>

          {/* Coleção Mestre */}
          <div className="relative bg-[#FDF8F3] rounded-2xl p-6 shadow-elevated border-2 border-dashed border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                {master.badge}
              </span>
            </div>

            <div className="text-center mb-[19px] pt-2">
              <h3 className="text-[25px] font-bold mb-1 mt-[2px]">{master.name}</h3>
            </div>

            <div className="text-center mb-[19px]">
              <p className="text-muted-foreground line-through text-[16px]">
                {master.originalPrice}
              </p>
              <p className="text-4xl font-bold text-primary">{master.price}</p>
              <div className="inline-block mt-2">
                <span className="bg-success/20 text-success px-4 py-1 rounded-full text-xs font-bold uppercase">
                  {master.savings}
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

            <CtaButton href={checkout.master} className="w-full">
              {master.cta}
            </CtaButton>
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-[17px] uppercase">
              <User className="w-3.5 h-3.5" />
              {master.socialProof}
            </p>
          </div>

          {/* Selos de confiança */}
          <div className="flex flex-col gap-3 mt-6">
            {trustBadges.map((badge, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={badge}
                  className="bg-[#FDF8F3] rounded-2xl py-4 px-6 flex flex-col items-center justify-center border border-border/50"
                >
                  <Icon
                    className="w-6 h-6 text-muted-foreground mb-2"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-foreground font-medium">
                    {badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Garantia */}
          <div className="bg-[#FDF8F3] rounded-2xl p-8 mt-6 text-center border-2 border-dashed border-muted-foreground/30">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              {guarantee.kicker}
            </p>
            <h4 className="font-bold text-2xl mb-4">{guarantee.title}</h4>
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

      <UpsellModal open={isUpsellOpen} onOpenChange={setIsUpsellOpen} />
    </section>
  );
}
