import type { Metadata } from "next";
import DanismanlikContent from "./DanismanlikContent";

export const metadata: Metadata = {
  title: "Dijital Danışmanlık Hizmetleri | ClientIQX",
  description:
    "Dijital dönüşüm stratejisi, teknoloji danışmanlığı ve proje yönetimi ile işletmenizi geleceğe hazırlayın.",
};

export default function DanismanlikPage() {
  return <DanismanlikContent />;
}
