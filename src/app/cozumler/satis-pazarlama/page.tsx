import type { Metadata } from "next";
import SatisPazarlamaContent from "./SatisPazarlamaContent";

export const metadata: Metadata = {
  title: "Satış & Pazarlama Çözümleri | ClientIQX",
  description:
    "Satış süreçlerinizi otomatikleştirin, potansiyel müşterilerinizi yönetin ve gelirlerinizi artırın.",
};

export default function SatisPazarlamaPage() {
  return <SatisPazarlamaContent />;
}
