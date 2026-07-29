import type { Metadata } from "next";
import * as content from "@/lib/content-v2";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Clube da Cerâmica | V2",
  description:
    "Biblioteca com 35 projetos de cerâmica fria com passo a passo visual para você criar peças lindas sem improvisar, mesmo sem experiência.",
  robots: { index: false, follow: false },
};

export default function V2Page() {
  return <LandingPage content={content} trackingPrefix="v2_" />;
}
