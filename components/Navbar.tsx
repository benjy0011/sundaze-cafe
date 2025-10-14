import { NAV_LINKS } from "@/lib/constants"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="font-playfair-display fixed max-w-7xl border-b-3 w-full justify-self-center flex justify-center items-center gap-18">
      <Image 
        src="/Sundaze-logo.png"
        alt="logo"
        width={100}
        height={100}
      />

      {NAV_LINKS.map(({ name }, index) => (
        <p className="text-white font-extrabold text-2xl">{name}</p>
      ))}
    </nav>
  )
}
export default Navbar