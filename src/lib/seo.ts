import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const defaultTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image,
  noIndex,
}: BuildMetadataInput = {}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? "/opengraph-image";
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : defaultTitle;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      locale: "es_VE",
      url,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caracas",
      addressCountry: "VE",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es",
    description: siteConfig.description,
  };
}
