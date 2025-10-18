'use client'

import { Rating, RatingButton } from "./ui/shadcn-io/rating"

export interface ReviewCardSmallProps {
  src: string
  alt: string
  name: string
  rating: number
}

const ReviewCardSmall = ({
  src,
  alt,
  name,
  rating,
}: ReviewCardSmallProps) => {
  const realRating = Math.min(5, rating);

  return (
    <div className="bg-custom-brown mx-15 lg:mx-25 rounded-2xl flex overflow-hidden h-30">
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
        <img
          src={src}
          alt={alt}
          className="h-full w-auto"
        />
      </div>
    </div>
  )
}
export default ReviewCardSmall