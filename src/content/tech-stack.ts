export const techStackCategories = [
  {
    id: "web",
    title: "Desarrollo Web & CMS",
    icon: "monitor",
    tools: [
      { id: "wordpress", label: "WordPress" },
      { id: "woocommerce", label: "WooCommerce" },
      { id: "shopify", label: "Shopify" },
      { id: "react", label: "React" },
      { id: "nextjs", label: "Next.js" },
      { id: "laravel", label: "Laravel" },
    ],
  },
  {
    id: "languages",
    title: "Lenguajes & Frameworks",
    icon: "code",
    tools: [
      { id: "php", label: "PHP" },
      { id: "javascript", label: "JavaScript" },
      { id: "python", label: "Python" },
      { id: "nodejs", label: "Node.js" },
      { id: "typescript", label: "TypeScript" },
      { id: "laravel", label: "Laravel" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infraestructura",
    icon: "cloud",
    tools: [
      { id: "aws", label: "AWS" },
      { id: "gcp", label: "Google Cloud" },
      { id: "digitalocean", label: "DigitalOcean" },
      { id: "cloudflare", label: "Cloudflare" },
      { id: "vps", label: "VPS / Servidores" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    icon: "megaphone",
    tools: [
      { id: "metaads", label: "Meta Ads" },
      { id: "googleads", label: "Google Ads" },
      { id: "tiktok", label: "TikTok Ads" },
      { id: "linkedin", label: "LinkedIn Ads" },
      { id: "youtube", label: "YouTube Ads" },
      { id: "mailchimp", label: "Mailchimp" },
    ],
  },
  {
    id: "analytics",
    title: "Datos & Analítica",
    icon: "database",
    tools: [
      { id: "ga", label: "Google Analytics" },
      { id: "gtm", label: "Google Tag Manager" },
      { id: "metapixel", label: "Meta Pixel / CAPI" },
      { id: "looker", label: "Looker Studio" },
      { id: "hotjar", label: "Hotjar" },
      { id: "tableau", label: "Tableau" },
    ],
  },
  {
    id: "integrations",
    title: "Integraciones & Automatización",
    icon: "plug",
    tools: [
      { id: "zapier", label: "Zapier" },
      { id: "make", label: "Make" },
      { id: "brevo", label: "Brevo" },
      { id: "whatsapp", label: "WhatsApp" },
      { id: "mercadopago", label: "Mercado Pago" },
      { id: "webpay", label: "Webpay Plus" },
    ],
  },
  {
    id: "design",
    title: "Diseño & UX/UI",
    icon: "palette",
    tools: [
      { id: "figma", label: "Figma" },
      { id: "adobexd", label: "Adobe XD" },
      { id: "photoshop", label: "Photoshop" },
      { id: "illustrator", label: "Illustrator" },
      { id: "midjourney", label: "Midjourney" },
      { id: "chatgpt", label: "ChatGPT" },
    ],
  },
  {
    id: "ai",
    title: "IA & Automatización",
    icon: "sparkles",
    tools: [
      { id: "openai", label: "OpenAI" },
      { id: "claude", label: "Claude" },
      { id: "gemini", label: "Gemini" },
      { id: "n8n", label: "n8n" },
      { id: "dalle", label: "DALL-E" },
      { id: "stability", label: "Stability AI" },
    ],
  },
  {
    id: "security",
    title: "Seguridad & Otros",
    icon: "shield",
    tools: [
      { id: "letsencrypt", label: "Let's Encrypt" },
      { id: "cpanel", label: "cPanel" },
      { id: "github", label: "GitHub" },
      { id: "docker", label: "Docker" },
      { id: "gitlab", label: "GitLab" },
      { id: "sentry", label: "Sentry" },
    ],
  },
] as const;

export const techStackHighlights = [
  { id: "secure", label: "Seguras y confiables", icon: "shield" },
  { id: "scale", label: "Escalables para crecer", icon: "chart" },
  { id: "flex", label: "Flexibles y personalizables", icon: "cog" },
  { id: "fresh", label: "Siempre actualizadas", icon: "users" },
] as const;

export type TechToolId =
  (typeof techStackCategories)[number]["tools"][number]["id"];
