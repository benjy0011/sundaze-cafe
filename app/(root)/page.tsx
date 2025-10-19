'use client'

import { Button } from "@/components/animate-ui/components/buttons/button";
import CheckboxBanner from "@/components/CheckboxBanner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all"
import LogoLoop from "@/components/LogoLoop";
import { SIGNATURES, SMALL_REVIEWS, VISUAL_ITEMS } from "@/lib/constants";
import { useWindowSize } from "@/hooks/useScreenSize";
import ReviewCardBig from "@/components/ReviewCardBig";
import ReviewCardSmall from "@/components/ReviewCardSmall";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  const { xs, sm, md } = useWindowSize();
  const isSmallScreen = xs || sm || md;

  const router = useRouter();

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
    });


    const tlIntro = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "top 45%",
      }
    });

    tlIntro.from( ["#intro-img-div", "#intro-title", "#intro-description", "#intro-food-img"], {
      opacity: 0,
      duration: 1.5,
      ease: 'power1.inOut',
      stagger: 0.3
    });


    const tlSignatureImages = gsap.timeline({
      scrollTrigger: {
        trigger: "#signature-imgs",
        start: "top 55%",
      }
    });

    tlSignatureImages.from( "#signature-imgs img" , {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.inOut',
      stagger: {
        each: 0.25,
        ease: "power1.out",
        from: "start"
      },
    });


    const tlReviews = gsap.timeline({
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 25%",
      }
    });

    tlReviews
      .from("#big-review-div > *", {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power1.in"
      })
      .from("#small-review-div > *", {
        y: "50%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.05,
        delay: 0.02,
      })

  }, [])

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
              onClick={() => router.push('about-us')}
            >
              <p className="-mt-1 text-foreground">About Us</p>
            </Button>
          </div>
        </div>
      </section>

      <CheckboxBanner />
      
      <section id="intro" className="intro-section">
        <div id="intro-img-div" className="h-full max-lg:flex-[0.5] flex-[1] max-lg:p-10">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/Info-img.jpg"
            alt="Info"
          />
        </div>

        <div className="h-full flex-[1] relative max-lg:py-2">
          <div className="h-full flex flex-col items-start justify-center max-lg:gap-10 gap-0">
            <h2 id="intro-title" className="max-lg:text-3xl text-[min(4vw,3.5rem)] font-playfair-display font-bold max-lg:px-12 px-18 lg:pt-[15vh] lg:pb-[10vh]">Sundaze Coffee</h2>

            <article id="intro-description" className="font-normal font-nunito-sans italic max-lg:text-xl text-[min(2vw,1.7rem)] max-lg:px-12 px-18">
              Nestled in the heart of Klang, Sundaze Coffee is a cozy hideaway where minimalist design meets comforting flavors. From artisanal coffee to hearty brunches, every visit is a warm, sunlit escape made for slowing down and savoring the moment.”
            </article>

            <div id="intro-food-img" className="flex-1 flex w-full h-full justify-between items-end overflow-hidden z-1 max-lg:px-12">
              <img
                src="/Info-plate.png"
                alt="Plate"
                className="h-[15vw] lg:h-[8vw] w-auto"
              />

              <img
                src="/Info-bread.png"
                alt="Bread"
                className="h-[10vw] lg:h-[6vw] w-auto rotate-10 translate-x-7 max-lg:translate-x-1 -translate-y-10 max-lg:-translate-y-5"
              />
            </div>
          </div>
        </div>
      </section>


      <section id="visual" className="visual-section">

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

        <div className="visual-section-h2-div relative">
          <h2 className="visual-section-h2">
            OUR SIGNATURES
          </h2>
        </div>

        <img
          src="/star-3.png"
          alt="decoration-star"
          className="absolute right-[15rem] max-lg:right-[2rem] max-lg:size-15 -rotate-16 -translate-y-8"
        />

        <div id="signature-imgs" className="flex max-lg:flex-col flex-row max-lg:items-center justify-between mt-[7rem] mx-[5rem] gap-10">
          {SIGNATURES.map(( { src, alt }, index ) => (
            <div key={`${alt}-${index}`} className="flex-1">
              <img
                loading="lazy"
                src={src}
                alt={alt}
                className="object-cover max-lg:w-[20rem] w-[100%] max-lg:h-[20rem] h-[100%] rounded-2xl"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex justify-start mt-15 mb-20 max-lg:h-10">
          <img
            src="/star-1.png"
            alt="decoration-star"
            className="px-20 rotate-160"
          />
        </div>
      </section>

      <CheckboxBanner />

      <section id="reviews" className="reviews-section">
        <div className="visual-section-h2-div pt-10 py-15 lg:pt-15 lg:py-20">
          <h2 className="visual-section-h2">
            REVIEWS
          </h2>
        </div>

        <div className="flex max-lg:flex-col-reverse max-lg:gap-5">
          <div id="small-review-div" className="flex-1 flex flex-col gap-4 justify-between">
            {SMALL_REVIEWS.slice(0, 3).map(( review, idx) => (
              <ReviewCardSmall key={`${review.name}-${idx}`} {...review} />
            ))}
          </div>

          <div id="big-review-div" className="flex-1 max-lg:mx-15">
            <ReviewCardBig />
          </div>
        </div>
      </section>
    </>
  );
}
