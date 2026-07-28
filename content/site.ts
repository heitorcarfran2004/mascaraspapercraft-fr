/**
 * Source unique de vérité du tunnel de vente (version FR).
 * Modifie les textes, prix, images et liens de checkout ICI — les composants
 * ne font que consommer ces données.
 */

/* ------------------------------------------------------------------ */
/* Liens de checkout et suivi                                          */
/* ------------------------------------------------------------------ */

/** Checkouts Hotmart (FR) — les prix ci-dessous doivent correspondre à chaque offre. */
export const checkout = {
  /** Offre complète « Collection Maîtresse » — 13,90 € (CTA principal). */
  master: "https://pay.hotmart.com/X106904054O?off=b0mbnqtj&checkoutMode=10",
  /** Upsell de la modale — 9,90 € (offre complète remisée). */
  upsell: "https://pay.hotmart.com/X106904054O?off=4dk2yyqg&checkoutMode=10",
  /** Offre de base — 6,90 €. */
  basic: "https://pay.hotmart.com/X106904054O?off=ndbm34p6&checkoutMode=10",
} as const;

/** Où le navigateur revient au clic sur « précédent » (back-redirect). */
export const backRedirectUrl = "/offre-speciale";

// TODO (marché FR): renseigner l'ID du pixel UTMify français (non câblé pour l'instant).
/** Pixel UTMify pour le suivi des conversions. */
export const utmifyPixelId = "";

/** Pixel Meta (Facebook) pour le suivi des conversions (FR). */
export const metaPixelId = "1683022126318008";

/* ------------------------------------------------------------------ */
/* Offre de sortie (page de back-redirect)                             */
/* ------------------------------------------------------------------ */

export const backOffer = {
  banner: "ATTENTION : NE FERMEZ PAS CETTE PAGE OU VOUS PERDREZ LA REMISE",
  badge: "OFFRE EXCLUSIVE",
  title: "Attendez ! Ne partez pas tout de suite",
  subtitle:
    "Avant de partir, nous avons débloqué une offre unique sur notre pack complet avec une remise exclusive. Mais c'est maintenant ou jamais !",
  originalPrice: "Au lieu de 13,90 €",
  price: "5,90 €",
  savings: "Économisez 8,00 €",
  /** Checkout dédié à l'offre de sortie — 5,90 €. */
  checkout: "https://pay.hotmart.com/X106904054O?off=n1ljpo1j&checkoutMode=10",
} as const;

/* ------------------------------------------------------------------ */
/* Démonstration vidéo ("Achetez sans crainte") — section désactivée   */
/* (la vidéo est en portugais ; à réactiver avec une VSL française)    */
/* ------------------------------------------------------------------ */

export const productDemo = {
  eyebrow: "À VOIR EN PRATIQUE",
  titleLead: "Achetez",
  titleHighlight: "Sans Crainte",
  subtitle:
    "Appuyez sur play et découvrez le produit de l'intérieur : comment vous le recevez, comment y accéder et la qualité des modèles.",
  video: {
    playerId: "vid-6a4d0c6f38fbf93867be47df",
    script:
      "https://scripts.converteai.net/59fb2471-bbf9-48ae-ad59-009b3aba8bd1/players/6a4d0c6f38fbf93867be47df/v4/player.js",
  },
} as const;

/* ------------------------------------------------------------------ */
/* En-tête / Hero                                                      */
/* ------------------------------------------------------------------ */

export const hero = {
  badgeCount: "+500",
  badgeLabel: "MODÈLES APPROUVÉS",
  titleLead: "Transformez le papier en",
  titleHighlight: "Masques 3D",
  titleTail: "incroyables",
  subtitle:
    "Obtenez plus de 500 modèles prêts à télécharger, imprimer et assembler pour créer des masques impressionnants à la maison",
  cta: "JE COMMENCE MAINTENANT",
  image: {
    src: "/images/hero.jpeg",
    alt: "Masques 3D en papier",
    width: 1024,
    height: 1024,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Avantages                                                           */
/* ------------------------------------------------------------------ */

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    image: "/images/beneficios/beneficio1.jpg",
    title: "Des déguisements incroyables pour pas cher",
    description:
      "Réalisez des déguisements à couper le souffle pour les soirées costumées ou les anniversaires à thème",
  },
  {
    image: "/images/beneficios/beneficio2.jpg",
    title: "Parfait pour les événements, photos et déco",
    description:
      "Créez des masques uniques qui attirent tous les regards lors des fêtes, anniversaires, séances photo et même dans la déco de la maison",
  },
  {
    image: "/images/beneficios/beneficio3.jpg",
    title: "Thérapie anti-stress",
    description:
      "Déconnectez-vous des écrans et concentrez-vous sur l'instant présent. Découper et assembler du papier est un moyen simple et efficace de détendre l'esprit.",
  },
  {
    image: "/images/beneficios/beneficio4.jpg",
    title: "L'activité parfaite en famille",
    description:
      "Une activité créative à faire avec ses enfants, neveux ou petits-enfants. Moins d'écran, plus de discussions, plus de souvenirs créés ensemble.",
  },
];

/* ------------------------------------------------------------------ */
/* Galerie                                                             */
/* ------------------------------------------------------------------ */

export interface GalleryCategory {
  title: string;
  subtitle: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Animaux",
    subtitle: "Du plus mignon au plus sauvage",
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
    title: "Dessins & Nostalgie",
    subtitle: "Des personnages qui ont marqué des générations",
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
    title: "Univers des Héros",
    subtitle: "Les défenseurs les plus aimés du grand écran",
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
    title: "Méchants & Horreur",
    subtitle: "Des méchants les plus redoutés aux plus grands monstres",
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
    title: "Univers du Gaming",
    subtitle: "De la salle d'arcade à Fortnite, pour les passionnés de jeux",
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
/* Matériel nécessaire                                                 */
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
    title: "1. Une imprimante classique",
    description:
      "Fonctionne avec n'importe quelle imprimante domestique A4 (jet d'encre ou laser).",
  },
  {
    icon: FileText,
    title: "2. Du papier abordable",
    description:
      "Utilisez du papier 80g pour vous entraîner ou du papier 180g (en vente dans toute papeterie) pour plus de solidité.",
  },
  {
    icon: Scissors,
    title: "3. De la colle et des ciseaux",
    description:
      "Colle blanche, ciseaux à bouts ronds et règle. Des fournitures simples que vous avez déjà chez vous.",
  },
];

/* ------------------------------------------------------------------ */
/* Témoignages                                                         */
/* ------------------------------------------------------------------ */

/**
 * PROVISOIRE : traduction des témoignages réels de l'offre brésilienne.
 * À remplacer par de vrais témoignages du marché français avant publication
 * (dans l'UE, les avis doivent être vérifiables — Directive 2019/2161).
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mes enfants les ont adorés et maintenant ils veulent un nouveau masque tous les jours 🤣",
    author: "Aline Freire",
    role: "Maman de 2 enfants",
  },
  {
    quote:
      "Je les ai utilisés avec ma classe de CM1 et ils ont adoré. Le mieux, c'est que les modèles ont plu autant aux filles qu'aux garçons.",
    author: "Clara Mendes",
    role: "Enseignante",
  },
  {
    quote:
      "Je les ai achetés pour mes cosplays et les masques sont parfaits. Le support m'a beaucoup aidé pour un masque personnalisé que j'avais demandé 👍",
    author: "Ricardo Gomes",
    role: "Cosplayeur",
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
    title: "BONUS 1 : Modèles de Monuments",
    subtitle:
      "+50 modèles de monuments historiques comme la Tour Eiffel, la Grande Muraille, etc.",
    originalPrice: "19,90 €",
  },
  {
    image: "/images/bonus/bonus2.png",
    title: "BONUS 2 : Modèles d'Animaux 3D",
    subtitle: "+250 modèles d'animaux sauvages et domestiques à assembler.",
    originalPrice: "14,90 €",
  },
  {
    image: "/images/bonus/bonus3.png",
    title: "BONUS 3 : Animés et Mangas 3D",
    subtitle: "+200 modèles de personnages emblématiques d'animés célèbres",
    originalPrice: "16,90 €",
  },
];

/* ------------------------------------------------------------------ */
/* Prix / Packs                                                        */
/* ------------------------------------------------------------------ */

export const pricing = {
  basic: {
    name: "Pack Débutant",
    tagline: "JE VEUX JUSTE L'ESSENTIEL",
    price: "6,90 €",
    features: [
      "Accès à 100 modèles de masques",
      "Accès à vie et téléchargements illimités",
    ],
    cta: "Je veux juste l'essentiel",
  },
  master: {
    name: "Collection Maîtresse",
    badge: "Le plus populaire",
    originalPrice: "Au lieu de 49,90 €",
    price: "13,90 €",
    savings: "Économisez 36,00 €",
    features: [
      "Accès à +500 modèles",
      "Support prioritaire",
      "Accès à vie et téléchargements illimités",
      "Livraison immédiate par email et WhatsApp",
    ],
    bonuses: [
      "BONUS 1 : Modèles de Monuments",
      "BONUS 2 : Modèles d'Animaux 3D",
      "BONUS 3 : Animés et Mangas 3D",
    ],
    cta: "OUI ! JE VEUX TOUT",
    socialProof: "648 personnes l'ont déjà acheté",
  },
  trustBadges: [
    "Achat 100 % sécurisé",
    "Téléchargement immédiat",
    "Satisfait ou remboursé",
  ],
  guarantee: {
    kicker: "ZÉRO RISQUE",
    title: "Garantie de 7 jours",
    text: "Nous sommes tellement sûrs que vous allez adorer les modèles que nous vous offrons une garantie inconditionnelle. Si vous n'arrivez pas à les assembler, que les modèles ne vous plaisent pas ou que vous changez simplement d'avis, nous vous remboursons 100 % de votre argent. Sans questions, sans petites lignes. Un simple email suffit.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Upsell (modale)                                                     */
/* ------------------------------------------------------------------ */

export const upsell = {
  header: "ATTENDEZ ! NE PARTEZ PAS ENCORE",
  titleLead: "Nous avons débloqué une",
  titleHighlight: "Remise Secrète",
  titleTail: "pour vous",
  description:
    "Le Pack de base vous a intéressé, mais pourquoi ne pas prendre le Pack Complet avec plus de 500 modèles à un prix exclusif ?",
  offerLabel: "OFFRE ÉCLAIR",
  originalPrice: "13,90 €",
  price: "9,90 €",
  /** Durée du compte à rebours, en secondes (1:45). */
  countdownSeconds: 105,
  acceptCta: "J'en profite maintenant",
  declineCta: "Continuer avec le Pack de base",
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
    question: "Comment vais-je recevoir les modèles après l'achat ?",
    answer:
      "Dès que le paiement est validé, vous recevez immédiatement l'accès pour télécharger les fichiers. Les modèles sont envoyés par WhatsApp et aussi par email.",
  },
  {
    question: "Puis-je les imprimer autant de fois que je veux ?",
    answer:
      "Oui ! Après l'achat, vous pouvez imprimer les modèles autant de fois que vous le souhaitez.",
  },
  {
    question: "Est-ce difficile d'assembler les masques ?",
    answer:
      "Non. Il suffit de découper, plier et coller. Dès le premier modèle, vous prenez le coup de main.",
  },
  {
    question: "Quel papier dois-je utiliser ? Le papier d'imprimante ordinaire convient-il ?",
    answer:
      "Oui ! Le papier d'imprimante ordinaire fonctionne très bien et s'assemble sans problème. Cependant, si vous voulez un résultat plus solide et une finition plus « premium », l'idéal est d'utiliser un papier plus épais, de 180g à 230g.",
  },
  {
    question: "Quelle colle est la meilleure pour l'assemblage ?",
    answer:
      "La colle blanche fonctionne parfaitement. Le bâton de colle aide aussi pour les petites pièces.",
  },
  {
    question: "Les modèles sont-ils en couleur ou dois-je les peindre ?",
    answer:
      "La plupart sont déjà en couleur et prêts à l'emploi. Certains modèles peuvent être personnalisés si vous voulez les peindre.",
  },
  {
    question: "Faut-il une imprimante à la maison ? Une imprimante classique suffit-elle ?",
    answer:
      "Pas besoin d'imprimante à la maison. Vous pouvez imprimer dans n'importe quelle imprimerie ou reprographie de votre ville. Et si vous avez une imprimante, elle fonctionne parfaitement avec n'importe quelle imprimante domestique A4.",
  },
  {
    question: "Y a-t-il un tutoriel pour l'assemblage ?",
    answer:
      "Oui. L'assemblage est simple et certains modèles incluent des instructions pas à pas.",
  },
  {
    question: "L'accès expire-t-il ?",
    answer: "Non. L'accès est à vie.",
  },
  {
    question: "Si je perds les fichiers, puis-je les retélécharger ?",
    answer:
      "Oui. Vous pouvez y accéder de nouveau et les retélécharger quand vous voulez.",
  },
  {
    question: "Y a-t-il une garantie ?",
    answer:
      "Oui. Vous avez 7 jours de garantie pour demander un remboursement si cela ne vous plaît pas.",
  },
  {
    question: "Comment fonctionne le remboursement ?",
    answer:
      "Il suffit d'en faire la demande dans un délai de 7 jours et vous êtes remboursé.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer:
      "Oui. Le paiement s'effectue via une plateforme sécurisée par carte et autres moyens.",
  },
];
