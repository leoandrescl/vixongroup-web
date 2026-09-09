import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/servicios",
    "/servicios/desarrollo-web-ecommerce",
    "/servicios/software-plataformas-a-medida",
    "/servicios/integraciones-automatizacion",
    "/servicios/cloud-infraestructura-performance",
    "/servicios/ux-ui-diseno",
    "/servicios/marketing-digital-360",
    "/servicios/analitica-datos",
    "/servicios/contenido-growth",
    "/nosotros",
    "/portafolio",
    "/blog",
    "/contacto",
    "/privacidad",
    "/terminos",
  ];

  const lastModified = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/portafolio/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
