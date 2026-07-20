/**
 * Fonte unica di verità del funnel di vendita (versione IT).
 * Modifica testi, prezzi, immagini e link di checkout QUI — i componenti
 * si limitano a consumare questi dati.
 */

/* ------------------------------------------------------------------ */
/* Link di checkout e tracciamento                                     */
/* ------------------------------------------------------------------ */

/** Checkout Hotmart (IT) — i prezzi qui sotto devono corrispondere a ogni offerta. */
export const checkout = {
  /** Piano completo "Collezione Master" — 13,90 € (CTA principale). */
  master:
    "https://pay.hotmart.com/O106798463O?off=192oitym&checkoutMode=10",
  /** Upsell del modale — 9,90 € (piano completo scontato). */
  upsell:
    "https://pay.hotmart.com/O106798463O?off=444hcq8l&checkoutMode=10",
  /** Piano base — 6,90 €. */
  basic: "https://pay.hotmart.com/O106798463O?off=017rh4t3&checkoutMode=10",
} as const;

/** Dove torna il browser premendo "indietro" (back-redirect). */
export const backRedirectUrl = "https://mascaraspaperback.vercel.app/";

/** Pixel UTMify (IT) usato nel tracciamento delle conversioni. */
export const utmifyPixelId = "6a5d8b514f38a2f389a0d8fb";

/* ------------------------------------------------------------------ */
/* Dimostrazione video ("Compra senza paura")                          */
/* ------------------------------------------------------------------ */

export const productDemo = {
  eyebrow: "GUARDA IN PRATICA",
  titleLead: "Compra",
  titleHighlight: "Senza Paura",
  subtitle:
    "Premi play e guarda il prodotto da dentro: come lo ricevi, come vi accedi e la qualità dei modelli.",
  video: {
    playerId: "vid-6a4d0c6f38fbf93867be47df",
    script:
      "https://scripts.converteai.net/59fb2471-bbf9-48ae-ad59-009b3aba8bd1/players/6a4d0c6f38fbf93867be47df/v4/player.js",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Intestazione / Hero                                                 */
/* ------------------------------------------------------------------ */

export const hero = {
  badgeCount: "+500",
  badgeLabel: "MODELLI APPROVATI",
  titleLead: "Trasforma la carta in",
  titleHighlight: "Maschere 3D",
  titleTail: "incredibili",
  subtitle:
    "Ottieni più di 500 modelli pronti da scaricare, stampare e montare per creare maschere spettacolari a casa",
  cta: "VOGLIO INIZIARE ORA",
  image: {
    src: "/images/hero.jpeg",
    alt: "Maschere 3D di carta",
    width: 1024,
    height: 1024,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Vantaggi                                                            */
/* ------------------------------------------------------------------ */

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    image: "/images/beneficios/beneficio1.jpg",
    title: "Costumi incredibili spendendo poco",
    description:
      "Crea costumi da togliere il fiato per feste in maschera o compleanni a tema",
  },
  {
    image: "/images/beneficios/beneficio2.jpg",
    title: "Perfetto per eventi, foto e decorazione",
    description:
      "Crea maschere uniche che attirano l'attenzione a feste, compleanni, servizi fotografici e persino nella decorazione di casa",
  },
  {
    image: "/images/beneficios/beneficio3.jpg",
    title: "Terapia antistress",
    description:
      "Stacca dagli schermi e concentrati sul momento presente. Ritagliare e montare la carta è un modo semplice ed efficace per rilassare la mente.",
  },
  {
    image: "/images/beneficios/beneficio4.jpg",
    title: "L'attività perfetta in famiglia",
    description:
      "Un'attività creativa da fare con figli, nipoti o nipotini. Meno schermo, più chiacchiere, più ricordi creati insieme.",
  },
];

/* ------------------------------------------------------------------ */
/* Galleria                                                            */
/* ------------------------------------------------------------------ */

export interface GalleryCategory {
  title: string;
  subtitle: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Animali",
    subtitle: "Dal più tenero al più selvaggio",
    images: [
      "/images/galeria/animais/carrossel-animal1.jpeg",
      "/images/galeria/animais/carrossel-animal2.jpeg",
      "/images/galeria/animais/carrossel-animal3.jpeg",
      "/images/galeria/animais/carrossel-animal4.jpeg",
      "/images/galeria/animais/carrossel-animal5.jpeg",
      "/images/galeria/animais/carrossel-animal6.jpeg",
      "/images/galeria/animais/carrossel-animal7.jpeg",
      "/images/galeria/animais/carrossel-animal8.jpeg",
      "/images/galeria/animais/carrossel-animal9.jpeg",
      "/images/galeria/animais/carrossel-animal10.jpeg",
    ],
  },
  {
    title: "Cartoni & Nostalgia",
    subtitle: "Personaggi che hanno segnato generazioni",
    images: [
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos1.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos2.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos3.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos4.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos5.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos6.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos7.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos9.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos10.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos11.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos12.jpeg",
    ],
  },
  {
    title: "Universo dei Supereroi",
    subtitle: "I difensori più amati dello schermo",
    images: [
      "/images/galeria/herois/carrossel-heroi1.jpeg",
      "/images/galeria/herois/carrossel-heroi2.jpeg",
      "/images/galeria/herois/carrossel-heroi3.jpeg",
      "/images/galeria/herois/carrossel-heroi4.jpeg",
      "/images/galeria/herois/carrossel-heroi5.jpeg",
      "/images/galeria/herois/carrossel-heroi6.jpeg",
      "/images/galeria/herois/carrossel-heroi7.jpeg",
      "/images/galeria/herois/carrossel-heroi8.jpeg",
      "/images/galeria/herois/carrossel-heroi9.jpeg",
      "/images/galeria/herois/carrossel-heroi10.jpeg",
    ],
  },
  {
    title: "Cattivi & Horror",
    subtitle: "Dai cattivi più temuti ai mostri più grandi",
    images: [
      "/images/galeria/viloes-terror/carrossel-vilao1.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao2.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao3.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao4.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao5.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao6.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao7.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao8.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao9.jpeg",
    ],
  },
  {
    title: "Mondo Gamer",
    subtitle: "Dalle sale giochi a Fortnite, per chi ama giocare",
    images: [
      "/images/galeria/mundo-gamer/carrossel-gamer1.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer2.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer3.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer4.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer5.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer6.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer7.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer8.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer9.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer10.jpeg",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Materiale necessario                                                */
/* ------------------------------------------------------------------ */

import {
  Printer,
  FileText,
  Scissors,
  type LucideIcon,
} from "lucide-react";

export interface EquipmentItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const equipment: EquipmentItem[] = [
  {
    icon: Printer,
    title: "1. Stampante comune",
    description:
      "Funziona con qualsiasi stampante domestica A4 (a getto d'inchiostro o laser).",
  },
  {
    icon: FileText,
    title: "2. Carta economica",
    description:
      "Usa carta normale da 75g per fare pratica o carta da 180g (la trovi in qualsiasi cartoleria) per più resistenza.",
  },
  {
    icon: Scissors,
    title: "3. Colla e forbici",
    description:
      "Colla vinilica, forbici a punta arrotondata e righello. Materiali semplici che hai già in casa.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonianze                                                       */
/* ------------------------------------------------------------------ */

/**
 * PROVVISORIO: traduzione delle testimonianze reali dell'offerta brasiliana.
 * Sostituire con testimonianze reali del mercato europeo prima di pubblicare
 * (nell'UE le recensioni devono essere verificabili — Direttiva 2019/2161).
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I miei figli le hanno adorate e ora ogni giorno vogliono una maschera nuova 🤣",
    author: "Aline Freire",
    role: "Mamma di 2",
  },
  {
    quote:
      "Le ho usate con la mia classe di 4ª e sono piaciute tantissimo. La cosa migliore è che i modelli sono piaciuti sia alle bambine che ai bambini.",
    author: "Clara Mendes",
    role: "Insegnante",
  },
  {
    quote:
      "Le ho comprate per i miei cosplay e le maschere sono venute perfette. L'assistenza mi ha aiutato molto con una maschera personalizzata che ho richiesto 👍",
    author: "Ricardo Gomes",
    role: "Cosplayer",
  },
];

/* ------------------------------------------------------------------ */
/* Bonus                                                               */
/* ------------------------------------------------------------------ */

export interface Bonus {
  image: string;
  title: string;
  subtitle: string;
  originalPrice: string;
}

export const bonuses: Bonus[] = [
  {
    image: "/images/bonus/bonus1.png",
    title: "BONUS 1: Modelli di Monumenti",
    subtitle:
      "+50 modelli di monumenti storici come la Torre Eiffel, la Grande Muraglia, ecc.",
    originalPrice: "19,90 €",
  },
  {
    image: "/images/bonus/bonus2.png",
    title: "BONUS 2: Modelli di Animali 3D",
    subtitle: "+250 modelli con animali selvatici e domestici da montare.",
    originalPrice: "14,90 €",
  },
  {
    image: "/images/bonus/bonus3.png",
    title: "BONUS 3: Anime e Manga 3D",
    subtitle: "+200 modelli di personaggi iconici di anime famosi",
    originalPrice: "16,90 €",
  },
];

/* ------------------------------------------------------------------ */
/* Prezzi / Kit                                                        */
/* ------------------------------------------------------------------ */

export const pricing = {
  basic: {
    name: "Kit Iniziale",
    tagline: "VOGLIO SOLO L'ESSENZIALE",
    price: "6,90 €",
    features: [
      "Accesso a 100 modelli di maschere",
      "Accesso a vita e download illimitati",
    ],
    cta: "Voglio solo l'essenziale",
  },
  master: {
    name: "Collezione Master",
    badge: "Più popolare",
    originalPrice: "Prima 49,90 €",
    price: "13,90 €",
    savings: "Risparmia 36,00 €",
    features: [
      "Accesso a +500 modelli",
      "Supporto prioritario",
      "Accesso a vita e download illimitati",
      "Consegna immediata via email e WhatsApp",
    ],
    bonuses: [
      "BONUS 1: Modelli di Monumenti",
      "BONUS 2: Modelli di Animali 3D",
      "BONUS 3: Anime e Manga 3D",
    ],
    cta: "SÌ! LI VOGLIO TUTTI",
    socialProof: "648 persone lo hanno già acquistato",
  },
  trustBadges: [
    "Acquisto 100% sicuro",
    "Download immediato",
    "Garanzia di soddisfazione",
  ],
  guarantee: {
    kicker: "RISCHIO ZERO",
    title: "Garanzia di 7 giorni",
    text: "Siamo così sicuri che adorerai i modelli che ti offriamo una garanzia incondizionata. Se non riesci a montarli, non ti piacciono i modelli o semplicemente cambi idea, ti restituiamo il 100% dei tuoi soldi. Senza domande, senza clausole nascoste. Basta una email.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Upsell (modale)                                                     */
/* ------------------------------------------------------------------ */

export const upsell = {
  header: "ASPETTA! NON ANDARE VIA ANCORA",
  titleLead: "Abbiamo sbloccato uno",
  titleHighlight: "Sconto Segreto",
  titleTail: "per te",
  description:
    "Ti interessava il Piano Base, ma che ne dici di prendere il Piano Completo con più di 500 modelli a un prezzo esclusivo?",
  offerLabel: "OFFERTA LAMPO",
  originalPrice: "13,90 €",
  price: "9,90 €",
  /** Durata del conto alla rovescia, in secondi (1:45). */
  countdownSeconds: 105,
  acceptCta: "Voglio approfittarne ora",
  declineCta: "Continua con il Piano Base",
} as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Come riceverò i modelli dopo l'acquisto?",
    answer:
      "Appena il pagamento viene approvato, ricevi subito l'accesso per scaricare i file. I modelli vengono inviati via WhatsApp e anche via email.",
  },
  {
    question: "Posso stamparli tutte le volte che voglio?",
    answer:
      "Sì! Dopo l'acquisto puoi stampare i modelli tutte le volte che vuoi.",
  },
  {
    question: "È difficile montare le maschere?",
    answer:
      "No. Basta ritagliare, piegare e incollare. Con il primo modello prendi subito la mano.",
  },
  {
    question: "Che carta devo usare? Posso usare carta normale?",
    answer:
      'Sì! La carta normale funziona molto bene e si monta senza problemi. Tuttavia, se vuoi un risultato più resistente e con una finitura più "premium", l\'ideale è usare carta più spessa, da 180g a 230g.',
  },
  {
    question: "Quale colla è migliore per montare?",
    answer:
      "La colla vinilica funziona perfettamente. Anche la colla stick aiuta con i pezzi più piccoli.",
  },
  {
    question: "I modelli sono già colorati o devo dipingerli?",
    answer:
      "La maggior parte arriva già colorata e pronta. Alcuni modelli si possono personalizzare se vuoi dipingerli.",
  },
  {
    question: "Serve una stampante in casa? Funziona con una stampante normale?",
    answer:
      "Non serve avere una stampante in casa. Puoi stampare in qualsiasi copisteria della tua città. E se hai una stampante, funziona perfettamente con qualsiasi stampante domestica A4.",
  },
  {
    question: "C'è un tutorial per montarle?",
    answer:
      "Sì. Il montaggio è semplice e alcuni modelli includono istruzioni passo passo.",
  },
  {
    question: "L'accesso scade?",
    answer: "No. L'accesso è a vita.",
  },
  {
    question: "Se perdo i file, posso scaricarli di nuovo?",
    answer: "Sì. Puoi accedere di nuovo e scaricarli quando vuoi.",
  },
  {
    question: "C'è una garanzia?",
    answer:
      "Sì. Hai 7 giorni di garanzia per chiedere il rimborso se non ti piace.",
  },
  {
    question: "Come funziona il rimborso?",
    answer:
      "Ti basta richiederlo entro 7 giorni e ricevi indietro i tuoi soldi.",
  },
  {
    question: "Il pagamento è sicuro?",
    answer:
      "Sì. Il pagamento avviene tramite una piattaforma sicura con carta e altri metodi.",
  },
];
