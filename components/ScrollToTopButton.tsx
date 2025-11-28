'use client'

import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const ScrollToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null

    const handleScroll = () => {
      if (timeout) return;

      timeout = setTimeout(() => {
        setScrollY(window.scrollY);
        timeout = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <Button
      id="scroll-to-top-btn"
      size="icon-lg"
      className={cn(
        "fixed bottom-3 right-3 bg-custom-dark-brown mix-blend-luminosity p-4 rounded-full border-secondary border-2 transition-transform duration-500 animate-bounce hover:cursor-pointer hover:paused z-50",
        scrollY >= 100 ? "translate-y-0" : "translate-y-100"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp className="size-5" />
    </Button>
  )
}
export default ScrollToTopButton