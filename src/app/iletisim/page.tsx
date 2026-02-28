import type { Metadata } from "next";
import IletisimContent from "./IletisimContent";

export const metadata: Metadata = {
  title: "İletişim | ClientIQX",
  description:
    "Projeleriniz için bizimle iletişime geçin. Ücretsiz danışmanlık ve teklif alın.",
};

export default function IletisimPage() {
  return <IletisimContent />;
}
