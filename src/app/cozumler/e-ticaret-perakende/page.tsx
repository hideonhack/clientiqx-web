import type { Metadata } from "next";
import ETicaretPerakendeContent from "./ETicaretPerakendeContent";

export const metadata: Metadata = {
  title: "E-Ticaret & Perakende Çözümleri | ClientIQX",
  description: "Çok kanallı satış stratejisi, POS entegrasyonu ve müşteri sadakat programları ile perakende dönüşümü.",
};

export default function ETicaretPerakendePage() {
  return <ETicaretPerakendeContent />;
}
