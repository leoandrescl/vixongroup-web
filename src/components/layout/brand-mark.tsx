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
      alt="vixonstudio"
      width={1420}
      height={235}
      priority={priority}
      className={cn("h-7 w-auto md:h-8", className)}
    />
  );
}
