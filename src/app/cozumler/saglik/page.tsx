import type { Metadata } from "next";
import SaglikContent from "./SaglikContent";

export const metadata: Metadata = {
  title: "Sağlık Çözümleri | ClientIQX",
  description: "Sağlık hizmetlerinde dijital dönüşüm — randevu yönetimi, hasta takip ve tele-tıp platformları.",
};

export default function SaglikPage() {
  return <SaglikContent />;
}
