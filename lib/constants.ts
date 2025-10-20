import { AboutUsCardProps } from "@/components/AboutUsCard"
import { LogoItem } from "@/components/LogoLoop"
import { ReviewCardSmallProps } from "@/components/ReviewCardSmall"
import { TwoColMasonryItemProps } from "@/components/TwoColMasonry"
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


export const SUNDAZE_MAP_COORDINATE: [number, number] = [2.9879198, 101.4547821];
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

export const SUNDAZE_BANNER_ITEMS: LogoItem[] = [
  {
    src: '/Sundaze-Coffee-text.png',
    alt: "sundaze coffee",
  },
  {
    src: '/star-0.png',
    alt: "star",
  }
]

export const MISSION_VISION: AboutUsCardProps[] = [
  {
    imgSrc: "/Eye-img.png",
    imgAlt: "Vision",
    title: "Our Vision",
    description: "To craft moments of warmth and connection through thoughtfully brewed coffee, comforting food, and heartfelt service — creating a space where everyone feels at home.",
  },
  {
    imgSrc: "/Bulleye-img.png",
    imgAlt: "Mission",
    title: "Our Mission",
    description: "To become Klang’s most loved lifestyle café — a sanctuary where people slow down, connect, and find inspiration in every sip and bite.",
  },
]

export const GALLERY_IMAGES: TwoColMasonryItemProps[] = [
  {
    src: "/gallery-many-breads.png",
    alt: "Breads",
    width: 633,
    height: 456,
  },
  {
    src: "/gallery-some-breads.png",
    alt: "Bread",
    width: 531,
    height: 280,
  },
  {
    src: "/gallery-coffee.png",
    alt: "Coffee",
    width: 529,
    height: 560,
  },
  {
    src: "/gallery-barista-woman.png",
    alt: "Barista",
    width: 633,
    height: 558,
  },
  {
    src: "/gallery-christmas-deco.png",
    alt: "Christmas Deco",
    width: 529,
    height: 780,
  },
  {
    src: "/gallery-some-breads.png",
    alt: "Bread",
    width: 653,
    height: 279,
  },
  {
    src: "/gallery-barista-woman.png",
    alt: "Barista",
    width: 634,
    height: 558,
  },
  // {
  //   src: "/gallery-some-breads.png",
  //   alt: "Bread",
  //   width: 532,
  //   height: 280,
  // },
]

export const MENU_COFFEE: LogoItem[] = [
  {
    src: '/menu-coffee-1.png',
    alt: "coffee",
  },
  {
    src: '/menu-coffee-2.png',
    alt: "coffee",
  },
  {
    src: '/menu-coffee-3.png',
    alt: "coffee",
  },
  {
    src: '/menu-coffee-4.png',
    alt: "coffee",
  },
  {
    src: '/menu-coffee-5.png',
    alt: "coffee",
  },
  {
    src: '/menu-coffee-6.png',
    alt: "coffee",
  },
  // {
  //   src: '/menu-coffee-7.png',
  //   alt: "coffee",
  // },
]

export const MENU_MAIN_IMG = [
  {
    src: "/menu-main-1.png",
    alt: "Big breakfast",
    width: 733,
    height: 757,
    text: "Brunch/ Dinner",
  },
  {
    src: "/menu-main-2.png",
    alt: "Croissants and coffee",
    width: 733,
    height: 757,
    text: "Desserts / Drinks",
  },
]

export const GET_IN_TOUCH = [
  {
    src: "/contact-us-phone.png",
    alt: "Phone number",
    width: 90,
    height: 90,
    description: "+60 123 456 789",
    link: "https://web.whatsapp.com/"
  },
  {
    src: "/contact-us-ig.png",
    alt: "Instagram",
    width: 92,
    height: 92,
    description: "@sundaze.coffee",
    link: "https://www.instagram.com/sundazecoffee_/reels/?hl=en"
  },
  {
    src: "/contact-us-location.png",
    alt: "Instagram",
    width: 72,
    height: 113,
    description: "18, Jalan Ramin 3/KS7, Bandar Botanik, 41200 Klang, Selangor",
    link: "https://maps.app.goo.gl/qQM35MWnPEPtVQkf7"
  },
]