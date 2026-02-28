import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | ClientIQX",
  description:
    "Teknoloji, yazılım geliştirme ve dijital dönüşüm üzerine güncel içerikler ve rehberler.",
};

export default function BlogPage() {
  return <BlogContent />;
}
