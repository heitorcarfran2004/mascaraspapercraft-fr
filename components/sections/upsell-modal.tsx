"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { checkout, upsell } from "@/content/site";

interface UpsellModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function UpsellModal({ open, onOpenChange }: UpsellModalProps) {
  const [timeLeft, setTimeLeft] = useState<number>(upsell.countdownSeconds);

  useEffect(() => {
    if (!open) {
      setTimeLeft(upsell.countdownSeconds);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden border-0 rounded-3xl">
        {/* Cabeçalho */}
        <div className="bg-[#FDF8F3] py-3 px-4 text-center border-b border-border">
          <p className="text-xs font-bold tracking-widest text-foreground uppercase">
            {upsell.header}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="p-6 text-center">
          <DialogTitle className="text-xl font-bold mb-2">
            {upsell.titleLead}{" "}
            <span className="gradient-text">{upsell.titleHighlight}</span>{" "}
            {upsell.titleTail}
          </DialogTitle>

          <p className="text-sm text-muted-foreground mb-6">
            {upsell.description}
          </p>

          {/* Caixa da oferta */}
          <div className="border border-border rounded-xl py-5 px-6 mb-6">
            <p className="text-xs font-bold tracking-widest text-muted-foreground mb-2 uppercase">
              {upsell.offerLabel}
            </p>
            <p className="text-sm text-muted-foreground line-through">
              {upsell.originalPrice}
            </p>
            <p className="text-4xl font-bold text-success">{upsell.price}</p>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-destructive">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">
                Scade tra {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          {/* Botões */}
          <CtaButton href={checkout.upsell} className="mb-3 w-full font-semibold uppercase">
            {upsell.acceptCta}
          </CtaButton>

          <a
            href={checkout.basic}
            className="block w-full py-3 px-6 rounded-full border border-border text-muted-foreground font-medium hover:border-primary hover:text-foreground transition-colors text-center"
          >
            {upsell.declineCta}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
