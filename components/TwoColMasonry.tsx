'use client'

import Image from "next/image"
import { memo, useEffect, useState } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

export interface TwoColMasonryProps {
  items: TwoColMasonryItemProps[]
}

export interface TwoColMasonryItemProps {
  width: number
  height: number
  src: string
  alt: string
}

const TwoColMasonry = ({
  items
}: TwoColMasonryProps) => {
  const [rightCol, setRightCol] = useState<TwoColMasonryItemProps[]>([]);
  const [leftCol, setLeftCol] = useState<TwoColMasonryItemProps[]>([]);

  useEffect(() => {
    let rightHeight = 0;
    let leftHeight = 0;

    let rightItems:TwoColMasonryItemProps[] = [];
    let leftItems:TwoColMasonryItemProps[] = [];

    items.forEach(item => {
      if (leftHeight <= rightHeight) {
        leftItems.push(item);
        leftHeight += item.height;
      } else {
        rightItems.push(item);
        rightHeight += item.height;
      }
    })

    setLeftCol(leftItems);
    setRightCol(rightItems);
  }, [items])

  useGSAP(() => {
    const masonryTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#two-col-masonry",
        start: "top 50%",
      }
    });

    // Get all <img> in each column
    const leftImgs = gsap.utils.toArray<HTMLImageElement>(".two-col-masonry-left img");
    const rightImgs = gsap.utils.toArray<HTMLImageElement>(".two-col-masonry-right img");

    const maxLength = Math.max(leftImgs.length, rightImgs.length);

    for (let i = 0; i < maxLength; i++) {
      const pair: HTMLElement[] = [];

      if (leftImgs[i]) pair.push(leftImgs[i]);
      if (rightImgs[i]) pair.push(rightImgs[i]);

      masonryTl.from(pair, {
        opacity: 0,
        y: "80%",
        ease: "power2.out",
        duration: 1.2,
      }, i * 0.3); // stagger by row
    }
  }, [rightCol, leftCol])

  return (
    <div id="two-col-masonry" className="flex py-4 md:py-8 lg:py-12 gap-12 md:gap-24 lg:gap-32">
      {/* Left Cols */}
      <div className="two-col-masonry-left flex flex-col gap-4 md:gap-6 lg:gap-8">
        {leftCol.map((right, idx) => (
          <Image 
            key={`${right.alt}-${idx}`}
            className="w-[40vw] lg:w-[30vw] h-auto"
            {...right}
          />
        ))}
      </div>

      {/* Right Cols */}
      <div className="two-col-masonry-right flex flex-col gap-4 md:gap-6 lg:gap-8">
        {rightCol.map((right, idx) => (
          <Image 
            key={`${right.alt}-${idx}`}
            className="w-[40vw] lg:w-[30vw] h-auto"
            {...right}
          />
        ))}
      </div>
    </div>
  )
}
export default memo(TwoColMasonry);