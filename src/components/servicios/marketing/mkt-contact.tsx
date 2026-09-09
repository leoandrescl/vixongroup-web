import { ContactForm } from "@/components/contacto/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function MktContact() {
  return (
    <Section className="scroll-mt-24 bg-background">
      <Container>
        <Reveal>
          <div className="mx-auto w-full max-w-lg">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
