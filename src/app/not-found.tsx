import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-28">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        El enlace no existe o el caso de estudio fue retirado.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </Container>
  );
}
