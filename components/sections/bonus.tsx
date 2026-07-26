import Image from "next/image";

import { bonuses } from "@/content/site";

export function Bonus() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="tag-badge mb-4">🎁 3 Bonus Exclusifs</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Offerts <span className="gradient-text">Aujourd'hui</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card card-hover border-2 border-dashed border-muted-foreground/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={bonus.image}
                  alt={bonus.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{bonus.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {bonus.subtitle}
                </p>
                <span className="inline-block bg-success/15 text-success px-3 py-1.5 rounded-full text-sm font-semibold">
                  De {bonus.originalPrice} por: GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
