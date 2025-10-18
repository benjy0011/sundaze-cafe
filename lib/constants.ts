import { LogoItem } from "@/components/LogoLoop"
import { ReviewCardSmallProps } from "@/components/ReviewCardSmall"
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const NAV_LINKS = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: " ABOUT US",
    href: "/about-us",
  },
  {
    name: "MENU",
    href: "/menu",
  },
  {
    name: "GALLERY",
    href: "/gallery",
  },
  {
    name: "VISIT US",
    href: "/visit-us",
  }
]

export const VISUAL_ITEMS: LogoItem[] = [
  {
    src: "/hot-dog.png",
    alt: "hot dog",
  },
  {
    src: "/corissant-bread.png",
    alt: "corissant bread",
  },
  {
    src: "/tea-cup.png",
    alt: "tea cup",
  },
  {
    src: "/coffee-bean.png",
    alt: "coffee bean",
  },
  {
    src: "/cake-slice.png",
    alt: "cake slice",
  },
  {
    src: "/tea-bag.png",
    alt: "tea bag",
  }
]

export const SIGNATURES = [
  {
    src: '/signature-coffee.png',
    alt: "signature coffee",
  },
  {
    src: '/signature-rice.jpg',
    alt: "signature rice",
  },
  {
    src: '/signature-toast.jpg',
    alt: "signature toast",
  }
]

export const SMALL_REVIEWS: ReviewCardSmallProps[] = [
  {
    src: "/review-1.jpg",
    alt: "review",
    name: "ALEXY",
    rating: 5,
  },
  {
    src: "/review-1.jpg",
    alt: "review",
    name: "ALEXY",
    rating: 4,
  },
  {
    src: "/review-1.jpg",
    alt: "review",
    name: "ALEXY",
    rating: 4,
  },
]

export const SOCIAL_MEDIA = [
  {
    icon: faFacebook,
    label: "Sundaze Coffee",
    link: "https://www.facebook.com/sundazecoffeee/",
  },
  {
    icon: faWhatsapp,
    label: "+60 123 456 789",
    link: "https://web.whatsapp.com/",
  },
  {
    icon: faInstagram,
    label: "@sundaze.coffee",
    link: "https://www.instagram.com/sundazecoffee_/reels/?hl=en"
  }
]