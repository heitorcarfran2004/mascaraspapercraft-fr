import Image from "next/image";

/**
 * Carrossel da galeria: marquee contínuo que desliza sozinho para a direita.
 * Mostra ao menos 2 imagens por vez com "peek" da próxima, e pausa ao passar o mouse.
 * A lista é duplicada para o loop ser perfeitamente contínuo (translateX -50% → 0).
 *
 * Server Component de propósito: a animação e o hover são puro CSS, então não há
 * motivo para mandar JavaScript deste componente para o navegador.
 */
export function GalleryCarousel({ images }: { images: string[] }) {
  const loop = [...images, ...images];
  // Velocidade constante: ~3,5s por imagem.
  const duration = images.length * 3.5;

  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animation: `gallery-marquee ${duration}s linear infinite` }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square w-[150px] shrink-0 mr-3 overflow-hidden rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-card sm:mr-4 sm:w-[190px] md:w-[230px]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="230px"
              quality={60}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Esmaecimento suave nas bordas para reforçar o efeito de continuidade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
