import Image from "next/image"
import { Rating, RatingButton } from "./ui/shadcn-io/rating"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export interface ReviewCardBigProps {
  rating: number,
  author: string,
  comment: string
}

const ReviewCardBig = ({
  rating,
  author,
  comment
} : ReviewCardBigProps) => {

  useGSAP(() => {
    const element = document.querySelectorAll(".review-card-big-elements");
    if (!element) return

    // Kill any existing animations on this element
    gsap.killTweensOf(element)
    
    // Set to full opacity first
    gsap.set(element, { opacity: 1 })
    
    // Then animate from 0
    gsap.from(element, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
  }, [rating, author, comment])

  return (
    <div className="w-full max-lg:h-50 h-100 bg-custom-brown rounded-xl flex p-4 gap-2">
      <Image
        src="/review-1.jpg"
        alt="review"
        className="object-cover rounded-lg max-lg:w-[40vw] review-card-big-elements"
        height={470}
        width={391}
      />

      <div className="flex flex-col h-full w-full justify-center p-2 max-lg:5 lg:gap-10">
        <div className="flex flex-col">

          <div className="flex lg:flex-col gap-1 review-card-big-elements">
            <h6 className="review-card-h6">FROM:</h6>
            <h6 className="review-card-h6">{author.toUpperCase()}</h6>
          </div>
          

          <Rating className="my-1 lg:my-2 review-card-big-elements" value={rating > 5 ? 5 : rating} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-amber-500" key={index} />
            ))}
          </Rating>
        </div>
        
        <div className="flex flex-col lg:gap-3 max-sm:text-sm text-md lg:text-lg font-montserrat font-semibold italic review-card-big-elements">
          <p>
            {comment}
          </p>
        </div>
      </div>
    </div>
  )
}
export default ReviewCardBig