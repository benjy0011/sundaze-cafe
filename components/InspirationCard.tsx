'use client'

import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const InspirationCard = () => {
  useGSAP(() => {
    const inspirationCardTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#inspiration-card",
        start: "top 55%",
      }
    });

    inspirationCardTl
      .from(".inspiration-content", {
        opacity: 0,
        y: "50%",
        ease: "power2.inOut",
        duration: 0.8
      })
      .fromTo("#sweet-text", {
        opacity: 0,
        y: "25%",
        x: "25%",
        ease: "power2.out",
        duration: 0.8
      }, {
        opacity: 1,
        y: "-15%",
        x: "-15%",
        scale: 1.2,
        ease: "power2.out",
        duration: 0.2
      })
      .to("#sweet-text", {
        y: 0,
        x: 0,
        scale: 1,
        ease: "power2.out",
        duration: 0.6
      })
  });


  return (
    <div id="inspiration-card" className="relative rounded-2xl py-10 px-10 lg:px-12 text-background w-[80vw] lg:w-[50rem] lg:h-[20rem]">
      <svg
        className="inspiration-content absolute inset-0 w-full h-full [stroke-dashoffset:25]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeDasharray="20 30"
          // strokeLinecap="round"
          // strokeLinejoin="round"
        />
      </svg>

      <Image
        src="/star-0-white.png"
        alt="decoration"
        width={68}
        height={82}
        className="inspiration-content absolute right-3 bottom-3 max-lg:h-12 h-20 w-auto"
        id="star-img"
      />

      <Image
        src="/sweet-text.png"
        alt="decoration"
        width={212}
        height={158}
        className="absolute -left-15 -top-25 lg:-left-30 lg:-top-35 max-lg:h-30 h-50 w-auto"
        id="sweet-text"
      />

      <div className="inspiration-content flex max-lg:flex-col w-full h-full gap-8 justify-center items-center">
        <Image
          src='/dessert-platter.png'
          alt='dessert platter'
          width={381}
          height={361}
          className="h-50 lg:h-full w-auto aspect-square"
        />

        <p className="flex-1 font-nunito-sans text-xl lg:text-2xl text-center lg:text-left max-lg:py-5">
          Sundaze Coffee is inspired by slow mornings and meaningful connections, offering good coffee, comforting food, and a warm space to savor each moment.
        </p>
      </div>

    </div>
  )
}
export default InspirationCard