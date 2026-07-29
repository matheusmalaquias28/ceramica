import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Gtm } from "@/components/Gtm";
import { META_PIXEL_ID } from "@/components/MetaPixel";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clube da Cerâmica | Aprenda Cerâmica Fria do Zero",
  description:
    "Biblioteca com 35 projetos de cerâmica fria com passo a passo visual para você criar peças lindas sem improvisar, mesmo sem experiência.",
  openGraph: {
    title: "Clube da Cerâmica | Aprenda Cerâmica Fria do Zero",
    description:
      "35 projetos prontos, materiais acessíveis, dicas de acabamento e desafio de 7 dias para criar sua primeira peça ainda hoje.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/img/logo-peca-pronta.png", width: 1024, height: 1024, alt: "Método Peça Pronta" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/logo-peca-pronta.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/img/logo-peca-pronta.png",
    shortcut: "/img/logo-peca-pronta.png",
    apple: "/img/logo-peca-pronta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${manrope.variable} antialiased`}>
      <body>
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* Pixel Utmify */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pixelId = "6a5c54a45d579e7b97aaf4ce";
    var a = document.createElement("script");
    a.setAttribute("async", "");
    a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(a);`,
          }}
        />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xo7jsjm0j0");`,
          }}
        />
        {children}
        <Gtm />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
