import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { backRedirectUrl, metaPixelId } from "@/content/site";
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
  description: "Transformez de simples feuilles de papier en art",
  openGraph: {
    type: "website",
    title: "Espaço Criativo",
    description: "Transformez de simples feuilles de papier en art",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "Espaço Criativo",
    description: "Transformez de simples feuilles de papier en art",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Aquece a conexão com o CDN do UTMify (scripts de UTM e pixel) */}
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        {/* Aquece a conexão com o CDN do Meta Pixel */}
        <link
          rel="preconnect"
          href="https://connect.facebook.net"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
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

        {/* Meta Pixel (Facebook) — rastreamento de conversão (FR) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

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
