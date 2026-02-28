import type { Metadata } from "next";
import DestekContent from "./DestekContent";

export const metadata: Metadata = {
  title: "Destek Merkezi | ClientIQX",
  description:
    "Teknik destek, sık sorulan sorular ve yardım kaynakları.",
};

export default function DestekPage() {
  return <DestekContent />;
}
