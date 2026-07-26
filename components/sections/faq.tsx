"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/cta-button";
import { faqs } from "@/content/site";
import { scrollToPricing } from "@/lib/scroll";

export function Faq() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Questions Fréquentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="bg-background rounded-xl border-2 border-dashed border-muted-foreground/30 px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <CtaButton onClick={scrollToPricing}>JE COMMENCE MAINTENANT</CtaButton>
        </div>
      </div>
    </section>
  );
}
