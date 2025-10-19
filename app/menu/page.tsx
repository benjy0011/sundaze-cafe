'use client'

import LogoLoop from "@/components/LogoLoop"
import Navbar from "@/components/Navbar"
import { useWindowSize } from "@/hooks/useScreenSize";
import { MENU_COFFEE, MENU_MAIN_IMG } from "@/lib/constants";
import Image from "next/image";

const Page = () => {
  const { xs, sm, md } = useWindowSize();
  const isSmallScreen = xs || sm ;

  return (
    <>
      <Navbar absolute={false} mode="dark" />

      <section id="menu-main" className="menu-main">
        <h1 className="text-4xl md:text-5xl lg:text-6xl py-5 lg:py-10">Menu</h1>

        <LogoLoop
          logos={MENU_COFFEE}
          logoHeight={isSmallScreen ? 90 : md ? 120 : 150}
          gap={0}
          speed={120}
        />

        <div className="w-full flex">
          {MENU_MAIN_IMG.map(( { text, ...mainImg}, idx ) => (
            <div key={`${mainImg.alt}-${idx}`} className="flex-1 h-[40vw] relative">
              <Image
                {...mainImg}
                className="h-full w-full object-cover"
              />

              <div className="absolute h-full w-full inset-0 flex justify-center items-center hover:bg-black/40 bg-blend-color transition-colors">
                <h6 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-background font-bold text-shadow font-playfair-display">
                  {text}
                </h6>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Page