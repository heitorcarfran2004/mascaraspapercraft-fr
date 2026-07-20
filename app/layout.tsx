import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { backRedirectUrl, utmifyPixelId } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
});

const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/nDSSbIo2HPeiG0Jxxss23a9Mly33/social-images/social-1770642621161-Design_sem_nome_(3).png";

export const metadata: Metadata = {
  title: "Espaço Criativo",
  description: "Trasformiamo semplici fogli di carta in arte",
  openGraph: {
    type: "website",
    title: "Espaço Criativo",
    description: "Trasformiamo semplici fogli di carta in arte",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "Espaço Criativo",
    description: "Trasformiamo semplici fogli di carta in arte",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        {/* Aquece a conexão com o CDN do UTMify (scripts de UTM e pixel) */}
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
      </head>
      <body>
        {children}

        {/* UTMify — rastreamento de UTMs */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
        />

        {/* UTMify — pixel de conversão (IT) */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "${utmifyPixelId}";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* Back-redirect: ao apertar "voltar", leva para a oferta */}
        <Script id="back-redirect" strategy="afterInteractive">
          {`
            (function () {
              var url = "${backRedirectUrl}";
              // Non armare il redirect sulla pagina di offerta stessa (evita loop).
              if (location.pathname.indexOf(url) === 0) return;
              var target = url.trim() + (url.indexOf('?') > 0 ? '&' : '?') + document.location.search.replace('?', '');
              history.pushState({}, '', location.href);
              history.pushState({}, '', location.href);
              history.pushState({}, '', location.href);
              window.addEventListener('popstate', function () {
                setTimeout(function () { location.href = target; }, 1);
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
