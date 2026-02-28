import type { Metadata } from "next";
import MobilUygulamaContent from "./MobilUygulamaContent";

export const metadata: Metadata = {
  title: "Mobil Uygulama Geliştirme | ClientIQX",
  description:
    "iOS ve Android platformlarında yüksek performanslı, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
};

export default function MobilUygulamaPage() {
  return <MobilUygulamaContent />;
}
