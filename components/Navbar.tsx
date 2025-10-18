'use client'

import { useWindowSize } from "@/hooks/useScreenSize"
import { NAV_LINKS } from "@/lib/constants"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Drawer } from "vaul"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const { xs } = useWindowSize();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';

    return pathname.startsWith(path);
  }

  return (
    xs
    ? (
      <nav className="absolute z-1 flex w-full border-b-2 justify-between" >
        <Image 
          src="/Sundaze-logo.png"
          alt="logo"
          width={70}
          height={70}
        />

        <Drawer.Root direction="right">
          <Drawer.Trigger asChild>
            <Button
              className="text-white hover:text-white self-center mr-3"
              size="icon-lg"
              variant="ghost"
            >
              <Menu className="size-8" />
            </Button>
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />

            <Drawer.Content
              className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[300px] flex"
              style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
            >
              <Drawer.Title>
                Menu
              </Drawer.Title>

              <div className="bg-foreground h-full w-full grow p-5 flex flex-col rounded-[16px] gap-3 overflow-auto">
                {NAV_LINKS.map(({ name, href }, index) => (
                  <Link
                    href={href}
                    key={`${index}-${name}`}
                    className={cn(
                      "text-white font-extrabold max-md:text-md max-lg:text-lg text-xl py-2 px-3 rounded-xl hover:bg-accent",
                      isActive(href) && "bg-accent"
                    )}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

      </nav>
    ) : (
      <nav className="font-playfair-display absolute z-50 max-w-7xl border-b-2 w-full justify-self-center flex justify-center items-center max-md:gap-8 max-lg:gap-12 gap-18">
        <Image 
          src="/Sundaze-logo.png"
          alt="logo"
          width={80}
          height={80}
        />

        {NAV_LINKS.map(({ name, href }, index) => (
          <Link
            href={href}
            key={`${index}-${name}`}
            className={cn(
              "text-white font-extrabold max-md:text-md max-lg:text-lg text-xl hover-underline",
              isActive(href) && "hover-underline-active"
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
    )
  )
}
export default Navbar