'use client'

import CheckboxBanner from "@/components/CheckboxBanner"
import Navbar from "@/components/Navbar"
import TwoColMasonry from "@/components/TwoColMasonry"
import { GALLERY_IMAGES } from "@/lib/constants"
import Image from "next/image"

const Page = () => {
  return (
    <>
      <section id="gallery-main" className="gallery-main">
        <Navbar absolute={false} />
        <div className="flex-1 w-full h-full flex items-center justify-center bg-[url(/Gallery-bg.png)] bg-cover overflow-hidden bg-black/50 lg:bg-black/20 bg-blend-overlay lg:mt-10">

          <div className="lg:bg-foreground h-full w-[50vw] lg:w-[30vw] flex justify-center items-center px-[5vw] pb-10">
            <Image
              src="/Gallery-main.png"
              alt="Gallery"
              width={337}
              height={451}
              className="appear-onload"
            />  
          </div>  

        </div>
      </section>
      
      <CheckboxBanner />

      <section id="gallery-view" className="flex justify-center">
        <TwoColMasonry items={GALLERY_IMAGES} />
      </section>
    </>
  )
}
export default Page