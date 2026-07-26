import { Star } from "lucide-react";

import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-[30px] md:text-[40px] font-bold leading-[40px] md:leading-[54px]">
            Ceux Qui Achètent{" "}
            <span className="block gradient-text">Approuvent et Recommandent</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl p-8 shadow-card card-hover border-2 border-dashed border-muted-foreground/30"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
