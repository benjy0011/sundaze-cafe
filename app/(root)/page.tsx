'use client'

import { Button } from "@/components/animate-ui/components/buttons/button";
import CheckboxBanner from "@/components/CheckboxBanner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import LogoLoop from "@/components/LogoLoop";
import { VISUAL_ITEMS } from "@/lib/constants";
import { useWindowSize } from "@/hooks/useScreenSize";

export default function Home() {
  const { xs, sm, md } = useWindowSize();
  const isSmallScreen = xs || sm || md;


  useGSAP(() => {
    const homePageh1 = new SplitText("#home-page-h1", { type: "chars" });

    const tlHomePage = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-page",
        start: "top 45%"
      }
    });

    tlHomePage.from(homePageh1.chars, {
      scale: 0,
      duration: 0.8,
      ease: 'bounce.out',
      stagger: 0.05
    })
  })

  return (
    <>
      <section id="home-page" className="home-page">
        <div className="size-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-14">
            <h1 id="home-page-h1" className="text-white max-sm:text-5xl max-md:text-6xl text-7xl text-center max-sm:leading-20 max-md:leading-22 leading-25">Savor the Moment <br /> In Every Ray of Light</h1>

            <Button
              className="font-playfair-display hover:cursor-pointer"
              variant="secondary"
              size="xl"
            >
              <p className="-mt-1 text-foreground">About Us</p>
            </Button>
          </div>
        </div>
      </section>

      <CheckboxBanner />
      
      <section id="intro-section" className="intro-section">
        <div className="h-full max-lg:flex-[0.5] flex-[1] max-lg:p-10">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/Info-img.jpg"
            alt="Info"
          />
        </div>

        <div className="h-full flex-[1] relative max-lg:py-2">
          <div className="h-full flex flex-col items-start justify-center max-lg:gap-10 gap-0">
            <h2 className="max-lg:text-3xl text-[min(4vw,3.5rem)] font-playfair-display font-bold max-lg:px-12 px-18 lg:pt-[15vh] lg:pb-[10vh]">Sundaze Coffee</h2>

            <article className="font-normal font-nunito-sans italic max-lg:text-xl text-[min(2vw,1.7rem)] max-lg:px-12 px-18">
              Nestled in the heart of Klang, Sundaze Coffee is a cozy hideaway where minimalist design meets comforting flavors. From artisanal coffee to hearty brunches, every visit is a warm, sunlit escape made for slowing down and savoring the moment.”
            </article>

            <div className="flex-1 flex w-full h-full justify-between items-end overflow-hidden z-1 max-lg:px-12">
              <img
                src="/Info-plate.png"
                alt="Plate"
                className="h-[15vw] lg:h-[50%] w-auto"
              />

              <img
                src="/Info-bread.png"
                alt="Bread"
                className="h-[10vw] lg:h-[40%] w-auto rotate-10 translate-x-7 max-lg:translate-x-1 -translate-y-10 max-lg:-translate-y-5"
              />
            </div>
          </div>
        </div>
      </section>


      <section id="visual-section" className="visual-section">

        <div className="visual-section-h2-div">
          <h2 className="visual-section-h2 mt-10 lg:mt-15">
            ENHANCING YOUR EXPERIENCE
          </h2>
        </div>
        
        <LogoLoop
          logos={VISUAL_ITEMS}
          logoHeight={isSmallScreen ? 45 : 70}
          gap={isSmallScreen ? 80 : 120}
          speed={60}
          className="my-30 lg:my-45"
        />

        <div className="visual-section-h2-div">
          <h2 className="visual-section-h2">
            OUR SIGNATURES
          </h2>
        </div>
      </section>
    </>
  );
}
