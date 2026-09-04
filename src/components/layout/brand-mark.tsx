import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="ViXON STUDIO"
      width={1360}
      height={862}
      priority={priority}
      className={cn("h-10 w-auto md:h-11", className)}
    />
  );
}
