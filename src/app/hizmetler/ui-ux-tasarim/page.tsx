import type { Metadata } from "next";
import UiUxTasarimContent from "./UiUxTasarimContent";

export const metadata: Metadata = {
  title: "UI/UX Tasarım Hizmetleri | ClientIQX",
  description:
    "Kullanıcı merkezli araştırma, modern arayüz tasarımı ve test süreçleri ile dijital ürünlerinizi farklılaştırın.",
};

export default function UiUxTasarimPage() {
  return <UiUxTasarimContent />;
}
