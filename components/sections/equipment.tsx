import { Ban } from "lucide-react";

import { equipment } from "@/content/site";

export function Equipment() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Ban className="w-4 h-4 text-primary" />
            Senza Materiali Costosi
          </span>
          <h2 className="text-[1.876rem] md:text-[2.376rem] font-extrabold leading-snug">
            Dal cellulare <span className="gradient-text">alle tue mani</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 shadow-soft text-center border-2 border-dashed border-muted-foreground/30"
            >
              {/* Ícone circular com efeito de anel duplo */}
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
