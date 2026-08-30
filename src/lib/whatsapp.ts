import { siteConfig } from "@/content/site";

export function getWhatsAppUrl(customMessage?: string) {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, "");
  const text = encodeURIComponent(customMessage ?? siteConfig.whatsapp.message);
  return `https://wa.me/${digits}?text=${text}`;
}
