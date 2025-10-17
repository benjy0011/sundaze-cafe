import { NAV_LINKS } from "@/lib/constants"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="font-playfair-display absolute max-w-7xl border-b-2 w-full justify-self-center flex justify-center items-center gap-18">
      <Image 
        src="/Sundaze-logo.png"
        alt="logo"
        width={80}
        height={80}
      />

      {NAV_LINKS.map(({ name }, index) => (
        <p key={`${index}-${name}`} className="text-white font-extrabold text-xl">{name}</p>
      ))}
    </nav>
  )
}
export default Navbar