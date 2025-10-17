import { Button } from "@/components/animate-ui/components/buttons/button";
import CheckboxBanner from "@/components/CheckboxBanner";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="home-page">
        <div className="size-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-14">
            <p className="text-white text-7xl text-center leading-25">Savor the Moment <br /> In Every Ray of Light</p>

            <Button
              className="font-playfair-display"
              variant="secondary"
              size="xl"
            >
              <p className="-mt-1 text-foreground">About Us</p>
            </Button>
          </div>
        </div>
      </div>

      <CheckboxBanner />
      <div className="intro-section">
        <div className="h-full flex-[0.8]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/Info-img.jpg"
            alt="Info"
          />
        </div>

        <div className="h-full flex-[1] relative">
          <div className="absolute top-40 bottom-0 flex flex-col items-start justify-center gap-20">
            <h2 className="text-5xl font-playfair-display font-bold px-18">Sundaze Coffee</h2>

            <article className="font-normal font-nunito-sans italic text-3xl px-18">
              Nestled in the heart of Klang, Sundaze Coffee is a cozy hideaway where minimalist design meets comforting flavors. From artisanal coffee to hearty brunches, every visit is a warm, sunlit escape made for slowing down and savoring the moment.”
            </article>

            <div className="flex-1 flex w-full h-full justify-between items-end overflow-hidden">
              <Image
                src="/Info-plate.png"
                width={200}
                height={10}
                alt="Plate"
                className="w-3xs h-30"
              />

              <Image
                src="/Info-bread.png"
                width={200}
                height={10}
                alt="Bread"
                className="w-xs h-25 rotate-10 translate-x-7 -translate-y-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
