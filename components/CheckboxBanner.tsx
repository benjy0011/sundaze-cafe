'use client'

import { useWindowSize } from "@/hooks/useScreenSize"
import { cn } from "@/lib/utils";
import { useMemo } from "react";

const CheckboxBanner = () => {
  const { xs, sm, md, lg, xl } = useWindowSize();

  
  const gridTemplate = useMemo(() => {
    return xs 
      ? "grid-cols-16"
      : sm
      ? "grid-cols-16"
      : md
      ? "grid-cols-16"
      : lg
      ? "grid-cols-16"
      : xl
      ? "grid-cols-16"
      : "grid-cols-32"
  }, [xs, sm, md, lg, xl])

  return (
    <div className={cn("w-full max-sm:h-12 h-20 grid", gridTemplate)}>
      {Array.from({ length: 4 * 4 * 4  }).map((_, i) => (
        <div
          key={i}
          className={`h-full ${
            Math.floor(i / 32) % 2 === 0
              ? i % 2 === 0
                ? "bg-foreground"
                : "bg-custom-brown"
              : i % 2 === 0
              ? "bg-custom-brown"
              : "bg-foreground"
          }`}
        ></div>
      ))}
    </div>
  )
}
export default CheckboxBanner