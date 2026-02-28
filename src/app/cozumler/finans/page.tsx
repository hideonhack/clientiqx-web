import type { Metadata } from "next";
import FinansContent from "./FinansContent";

export const metadata: Metadata = {
  title: "Finans Çözümleri | ClientIQX",
  description: "Güvenli ve uyumlu finansal teknoloji altyapıları — ödeme sistemleri, risk yönetimi ve regülasyon uyumluluğu.",
};

export default function FinansPage() {
  return <FinansContent />;
}
