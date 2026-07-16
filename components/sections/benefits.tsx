import Image from "next/image";

import { benefits } from "@/content/site";

export function Benefits() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Più di un hobby...
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Perché dovresti{" "}
            <span className="gradient-text">iniziare oggi?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background rounded-2xl overflow-hidden shadow-card card-hover border-2 border-dashed border-muted-foreground/30"
            >
              <div className="overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={0}
                  height={0}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
