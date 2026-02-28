import type { Metadata } from "next";
import ETicaretContent from "./ETicaretContent";

export const metadata: Metadata = {
  title: "E-Ticaret Çözümleri | ClientIQX",
  description:
    "Güvenli ödeme, stok yönetimi ve yüksek dönüşüm oranı için optimize edilmiş e-ticaret platformları.",
};

export default function ETicaretPage() {
  return <ETicaretContent />;
}
