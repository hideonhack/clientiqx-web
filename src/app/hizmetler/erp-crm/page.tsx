import type { Metadata } from "next";
import ErpCrmContent from "./ErpCrmContent";

export const metadata: Metadata = {
  title: "ERP & CRM Çözümleri | ClientIQX",
  description:
    "Kurumsal kaynak planlama ve müşteri ilişkileri yönetimi ile iş süreçlerinizi tek platformda birleştirin.",
};

export default function ErpCrmPage() {
  return <ErpCrmContent />;
}
