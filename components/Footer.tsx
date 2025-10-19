import { NAV_LINKS, SOCIAL_MEDIA } from "@/lib/constants"
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <>
      <footer className="footer flex gap-5 lg:gap-10">
        <div className="flex-[1] flex h-full items-center justify-center">
          <img
            src="Sundaze-logo.png"
            alt="Sundaze Logo"
            className="w-[20vw] h-[20vw] aspect-square"
          />
        </div>

        <div className="flex flex-2 w-full my-5 justify-around lg:justify-end mx-2 lg:mr-50 lg:gap-50">
          <div className="flex flex-col">
            <h6 className="text-lg lg:text-2xl mb-2 lg:mb-4">Quick Links</h6>
            {NAV_LINKS.map(({ name, href }, index) => (
              <Link
                href={href}
                key={`${index}-${name}`}
                className="text-white font-extrabold max-md:text-xs max-lg:text-sm text-md py-1 lg:py-2 rounded-xl font-playfair-display hover:underline"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <h6 className="text-lg lg:text-2xl mb-2 lg:mb-4">Social Media</h6>
            {SOCIAL_MEDIA.map(({ icon, label, link }, index) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={`${index}-${label}`}
                className="text-white max-md:text-xs max-lg:text-sm text-md py-1 lg:py-2 rounded-xl font-nunito-sans hover:underline flex gap-2 items-center"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
                <p>{label}</p>
              </a>
            ))}
          </div>
          
        </div>
      </footer>
      <div className="bg-background w-full text-center py-1 font-nunito-sans">
        © 2025 Sundaze Coffee. All rights reserved.
      </div>
    </>
  )
}
export default Footer