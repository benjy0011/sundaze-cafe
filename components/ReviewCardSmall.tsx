'use client'

import Image from "next/image"
import { Rating, RatingButton } from "./ui/shadcn-io/rating"
import { cn } from "@/lib/utils"

export interface ReviewCardSmallProps {
  src: string
  alt: string
  name: string
  rating: number
  comment?: string
  isSelected?: boolean
}

export interface ReviewCardSmallPropsFunctional extends ReviewCardSmallProps {
  onClick?: () => void
}

const ReviewCardSmall = ({
  src,
  alt,
  name,
  rating,
  isSelected = false,
  onClick
}: ReviewCardSmallPropsFunctional) => {
  const realRating = Math.min(5, rating);

  return (
    <div className={cn("bg-custom-brown mx-15 lg:mx-25 rounded-2xl flex overflow-hidden h-30 transition-shadow cursor-pointer hover:shadow-md", isSelected && "ring-1")} onClick={onClick}>
      <div className="flex flex-col gap-1 justify-center flex-1 p-4">
        <h6 className="review-card-h6 mt-2">
          FROM: {name.toUpperCase()}
        </h6>

        <Rating className="my-2" value={realRating} readOnly>
          {Array.from({ length: 5 }).map((_, index) => (
            <RatingButton className="text-amber-500" key={index} />
          ))}
        </Rating>
      </div>

      <div className="h-full">
        <Image
          src={src}
          alt={alt}
          className="h-full w-auto"
          width={141}
          height={129}
        />
      </div>
    </div>
  )
}
export default ReviewCardSmall