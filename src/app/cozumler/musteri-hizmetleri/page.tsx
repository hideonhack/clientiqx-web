import type { Metadata } from "next";
import MusteriHizmetleriContent from "./MusteriHizmetleriContent";

export const metadata: Metadata = {
  title: "Müşteri Hizmetleri Çözümleri | ClientIQX",
  description:
    "AI destekli chatbotlar, çağrı merkezi otomasyonu ve çok kanallı destek ile müşteri deneyimini dönüştürün.",
};

export default function MusteriHizmetleriPage() {
  return <MusteriHizmetleriContent />;
}
