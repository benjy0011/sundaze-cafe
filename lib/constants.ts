import { AboutUsCardProps } from "@/components/AboutUsCard"
import { LogoItem } from "@/components/LogoLoop"
import { MenuCatalogueType } from "@/components/MenuCatalogue"
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
    src: "/reviews/review-1.jpg",
    alt: "review",
    name: "ALEXY",
    rating: 5,
    comment: "Comfort food with a premium touch — every dish feels made with love.",
  },
  {
    src: "/reviews/review-2.jpeg",
    alt: "review",
    name: "AMY",
    rating: 4,
    comment: "Everything tastes thoughtfully prepared, from the coffee to the pastries.",
  },
  {
    src: "/reviews/review-3.jpeg",
    alt: "review",
    name: "DANIEL",
    rating: 5,
    comment: "A perfect balance of good food, quality coffee, and relaxing vibes.",
  },
];


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
    src: "/gallery/gallery-many-breads.png",
    alt: "Breads",
    width: 633,
    height: 456,
  },
  {
    src: "/gallery/gallery-some-breads.png",
    alt: "Bread",
    width: 531,
    height: 280,
  },
  {
    src: "/gallery/gallery-coffee.png",
    alt: "Coffee",
    width: 529,
    height: 560,
  },
  {
    src: "/gallery/gallery-barista-woman.png",
    alt: "Barista",
    width: 633,
    height: 558,
  },
  {
    src: "/gallery/gallery-counter.png",
    alt: "Counter",
    width: 529,
    height: 780,
  },
  {
    src: "/gallery/gallery-ads-board.png",
    alt: "Ads Board",
    width: 633,
    height: 930,
  },
  {
    src: "/gallery/gallery-dog.png",
    alt: "Dog",
    width: 529,
    height: 780,
  },
  {
    src: "/gallery/gallery-merchandise.png",
    alt: "Gallery Merchandise",
    width: 646,
    height: 953,
  },
  {
    src: "/gallery/gallery-store-outside.png",
    alt: "Store",
    width: 534,
    height: 780,
  },
  {
    src: "/gallery/gallery-cakes.png",
    alt: "Cakes",
    width: 633,
    height: 933,
  }
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
    id: 1,
    src: "/menu-main-1.png",
    alt: "Big breakfast",
    width: 733,
    height: 757,
    text: "Brunch/ Dinner",
  },
  {
    id: 2,
    src: "/menu-main-2.png",
    alt: "Croissants and coffee",
    width: 733,
    height: 757,
    text: "Desserts / Drinks",
  },
]


// Menu Items
export const BREAKFAST_MENU = [
  {
    id: 1,
    src: "/breakfast/sundaze-big-breakfast.png",
    name: "Sundaze Big Breakfast"
  },
  {
    id: 2,
    src: "/breakfast/streaky-bacon-french-toast.png",
    name: "Streaky Bacon French Toast"
  },
]

export const RICE_MENU = [
  {
    id: 1,
    src: "/rice/bara-unagi-bowl.png",
    name: "Bara Unagi Bowl"
  },
  {
    id: 2,
    src: "/rice/omurice.png",
    name: "Omurice"
  },
  {
    id: 3,
    src: "/rice/agedashi-rice-bowl.png",
    name: "Agedashi Rice Bowl"
  },
  {
    id: 4,
    src: "/rice/eggplant-katsu-rice.png",
    name: "Egg Plant Katsu Rice",

  },
  {
    id: 5,
    src: "/rice/karaage-2.png",
    name: "Karaage 2.0",
  },
  {
    id: 6,
    src: "/rice/signature-fried-chicken-nasi-lemak.png",
    name: "Signature Fried Chicken Nasi Lemak",
  },
  {
    id: 7,
    src: "/rice/salmon-2.png",
    name: "Salmon 2.0",
  },
  {
    id: 8,
    src: "/rice/salmon-avocado-bowl.png",
    name: "Salmon Avocado Bowl",
  },
  {
    id: 9,
    src: "/rice/tamago-mentaiko-bowl.png",
    name: "Tamago Mentaiko Bowl",
  },
  {
    id: 10,
    src: "/rice/otak-otak-nasi-lemak.png",
    name: "Otak Otak Nasi Lemak",
  },
]

export const PASTA_MENU = [
  {
    id: 1,
    src: "/pastas/truffle-mushroom-bacon.png",
    name: "Truffle Mushroom Bacon"
  },
  {
    id: 2,
    src: "/pastas/pork-arrabiata.png",
    name: "Pork Arrabiata"
  },
  {
    id: 3,
    src: "/pastas/pumpkin-pesto-shrooms.png",
    name: "Pumpkin Pesto Shrooms"
  },
]

export const COFFEE_MENU = [
  {
    id: 1,
    src: "/coffee/americano.png",
    name: "Americano"
  },
  {
    id: 2,
    src: "/coffee/long-black.png",
    name: "Long Black"
  },
]

// MENU TABS(Category)
export const brunchDinnerTabs: MenuCatalogueType[] = [
  {
    value: "breakfast-toast",
    label: "Breakfast/Toast",
    items: BREAKFAST_MENU,
  },
  {
    value: "pastas",
    label: "Pastas",
    items: PASTA_MENU,
  },
  {
    value: "rice",
    label: "Rice",
    items: RICE_MENU,
  },
]

export const dessertDrinksTabs: MenuCatalogueType[] = [
  {
    value: "coffee",
    label: "Coffee",
    items: COFFEE_MENU,
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

