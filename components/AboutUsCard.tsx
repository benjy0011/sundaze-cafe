import Image from "next/image"

export interface AboutUsCardProps {
  imgSrc: string
  imgAlt: string
  title: string
  description: string
}

const AboutUsCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
}: AboutUsCardProps) => {
  return (
    <div className="h-105 lg:h-115 w-90 lg:w-100 px-6 py-8 bg-background text-foreground rounded-md flex flex-col items-center gap-10">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={500}
        height={500}
        className="object-cover w-auto h-20 lg:h-30"
      />

      <h4 className="w-full text-left font-playfair-display font-bold text-3xl lg:text-4xl">
        {title}
      </h4>

      <p className="text-left font-nunito-sans italic lg:text-lg">
        {description}
      </p>
    </div>
  )
}
export default AboutUsCard