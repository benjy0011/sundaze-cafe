import { Rating, RatingButton } from "./ui/shadcn-io/rating"

const ReviewCardBig = ({

}) => {
  return (
    <div className="w-full max-lg:h-50 h-100 bg-custom-brown rounded-xl flex border-2 p-4 gap-2">
      <img
        src="/review-1.jpg"
        alt="review"
        className="object-cover rounded-lg max-lg:w-[40vw]"
      />

      <div className="flex flex-col h-full w-full justify-center p-2 max-lg:5 lg:gap-10">
        <div className="flex flex-col">

          <div className="flex lg:flex-col gap-1">
            <h6 className="review-card-h6">FROM:</h6>
            <h6 className="review-card-h6">ALEXY</h6>
          </div>
          

          <Rating className="my-1 lg:my-2" value={4} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-amber-500" key={index} />
            ))}
          </Rating>
        </div>
        
        <div className="flex flex-col lg:gap-3 max-sm:text-sm text-md lg:text-lg font-montserrat font-semibold italic">
          <p>
            Comfort food with a premium touch
          </p>
          <p>
            — every dish feels made with love.
          </p>
        </div>
      </div>
    </div>
  )
}
export default ReviewCardBig