import type { Metadata } from "next";
import YapayZekaContent from "./YapayZekaContent";

export const metadata: Metadata = {
  title: "Yapay Zeka & ML Çözümleri | ClientIQX",
  description:
    "Yapay zeka ve makine öğrenmesi ile iş süreçlerinizi otomatikleştirin, veriden değer üretin.",
};

export default function YapayZekaPage() {
  return <YapayZekaContent />;
}
