import type { Metadata } from "next";
import WebGelistirmeContent from "./WebGelistirmeContent";

export const metadata: Metadata = {
  title: "Web Geliştirme Hizmetleri | ClientIQX",
  description:
    "Modern web uygulamalarıyla dijital varlığınızı güçlendirin. Kurumsal web siteleri, SaaS platformları, e-ticaret çözümleri ve daha fazlası.",
};

export default function WebGelistirmePage() {
  return <WebGelistirmeContent />;
}
