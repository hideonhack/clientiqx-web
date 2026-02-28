import type { Metadata } from "next";
import HakkimizdaContent from "./HakkimizdaContent";

export const metadata: Metadata = {
  title: "Hakkımızda | ClientIQX",
  description:
    "ClientIQX - Modern teknolojilerle işletmelerin dijital dönüşümünü destekleyen yazılım çözüm ortağı.",
};

export default function HakkimizdaPage() {
  return <HakkimizdaContent />;
}
