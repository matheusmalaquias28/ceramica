import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    images: [{ url: "/img/logo-desafio-cookie-lucrativos.png", width: 828, height: 828 }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/img/logo-desafio-cookie-lucrativos.png?v=3",
    shortcut: "/img/logo-desafio-cookie-lucrativos.png?v=3",
    apple: "/img/logo-desafio-cookie-lucrativos.png?v=3",
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
        {/* Pixel Utmify */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pixelId = "6a5c54a45d579e7b97aaf4ce";
    var a = document.createElement("script");
    a.setAttribute("async", "");
    a.setAttribute("defer", "");
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
