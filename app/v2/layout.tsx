import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${nunito.variable} [--font-heading:var(--font-nunito)]`}>{children}</div>;
}
