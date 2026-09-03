import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/vixonstudio-logo.png"
      alt="vixonstudio"
      width={480}
      height={180}
      priority={priority}
      className={cn("h-7 w-auto md:h-8", className)}
    />
  );
}
