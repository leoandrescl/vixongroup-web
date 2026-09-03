import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/icons/social";
import { BrandMark } from "@/components/layout/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { footerNav, siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const social = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: siteConfig.social.youtube, label: "YouTube", icon: YouTubeIcon },
];

export function Footer() {
  return (
    <footer className="site-footer border-t border-white/8 bg-footer text-foreground">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center" aria-label="vixonstudio">
            <BrandMark />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Agencia tecnológica integral. Productos digitales que rinden y
            marketing que los hace crecer — con métricas, no con promesas.
          </p>
          <div className="mt-6 flex gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors duration-300 ease-out-expo hover:border-brand hover:text-brand"
                aria-label={item.label}
              >
                <item.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Servicios
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.servicios.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Empresa
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.empresa.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phoneDisplay}</li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.hours}</li>
          </ul>
          <Button
            asChild
            className="mt-5 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Escríbenos por WhatsApp
            </a>
          </Button>
        </div>
      </Container>

      <div className="border-t border-white/8">
        <Container className="flex flex-col gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
