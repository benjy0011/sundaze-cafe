'use client'

import AboutUsCard from "@/components/AboutUsCard"
import CheckboxBanner from "@/components/CheckboxBanner"
import InspirationCard from "@/components/InspirationCard"
import LogoLoop from "@/components/LogoLoop"
import Navbar from "@/components/Navbar"
import { useWindowSize } from "@/hooks/useScreenSize"
import { MISSION_VISION, SUNDAZE_BANNER_ITEMS } from "@/lib/constants"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const { xs, sm, md } = useWindowSize();
  const isSmallScreen = xs || sm || md;

  useGSAP(() => {
    const visionMissionTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#vision-mission",
        start: "top 50%",
      }
    });

    visionMissionTl.from("#vision-mission-div *", {
      opacity: 0,
      y: "20%",
      duration: 1,
      stagger: 0.2,
    });

    const middleTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#middle-text",
        start: "top 50%",
      }
    });

    middleTextTl.from('#middle-text *', {
      opacity: 0,
      y: "50%",
      duration: 1,
      stagger: 0.2,
    });
  })

  return (
    <>
      <section id="about-us-intro" className="about-us-intro relative">
        <Navbar mode="dark" absolute={false} />
        <div className="max-lg:min-h-[80dvh] flex flex-col lg:justify-center items-center w-full h-full py-10 px-5 lg:px-30 lg:py-25 flex-1 lg:max-w-350">
          <article className="font-nunito-sans font-semibold lg:text-xl leading-8 lg:leading-10">
            <Image
              width={1200}
              height={800}
              alt="Sundaze Store"
              src="/Sundaze-shoplot.jpg"
              className="object-cover w-120 h-60 lg:w-160 lg:h-90 rounded-2xl lg:float-right lg:ml-4 lg:mb-2 mb-6 appear-onload justify-self-center"
            />
            <h1 className="text-2xl lg:text-4xl text-left w-full mb-4 font-bagel-fat-one font-normal appear-onload">About Us</h1>

            <p className="appear-onload"><i>Sundaze Coffee</i>, founded in Bandar Botanik, Klang, was created as a cozy space for people to slow down, connect, and enjoy life’s little moments.</p>
            
            <p className="mt-2 lg:mt-3 appear-onload relative">Inspired by calm Sunday mornings, it blends minimalist design, natural light, and artisanal flavors for a gentle escape from the city.</p>

            <Image
              src="/Info-corissant.png"
              alt="corissant outlined"
              height={100}
              width={180}
              className="w-22 lg:w-27 h-auto rotate-10 float-right -translate-x-10 mt-2 appear-onload right-100"
            />
          </article>

        </div>

        <LogoLoop
          logos={SUNDAZE_BANNER_ITEMS}
          logoHeight={isSmallScreen ? 20 : 25}
          speed={60}
          className="absolute bottom-0 border-t-3 border-foreground py-2"
        />
      </section>

      <section id="vision-mission" className="vision-mission">
        <div id="vision-mission-div" className="w-full flex max-lg:flex-col justify-center items-center gap-20 py-10">
          {MISSION_VISION.map(( {...ms}, idx ) => (
            <AboutUsCard
              key={`${ms.imgAlt}-${idx}`}
              {...ms}
            />
          ))}
        </div>

        <div id="middle-text" className="w-full flex justify-center items-center">
          <h5 className="font-playfair-display font-semibold text-center text-xl lg:text-4xl relative lg:leading-14 px-1 py-15">
            From Slow Mornings to Lasting Connections:<br/>The Heart of Sundaze Coffee
          </h5>

          <Image
            width={163}
            height={109}
            src="/random-doodle-1.png"
            alt="random doodle"
            className="w-15 lg:w-25 absolute right-[10vw] lg:right-70 -translate-y-13 lg:-translate-y-20"
          />
        </div>
        
        <div className="flex w-full justify-center my-20">
          <InspirationCard />
        </div>
        
      </section>
      <CheckboxBanner />
    </>
  )
}
export default Page