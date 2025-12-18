import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./animate-ui/components/radix/dialog"
import { DialogTitle } from "./animate-ui/primitives/radix/dialog"

interface MenuCardProps {
  name: string,
  src: string
}

const MenuCard = ({
  name,
  src
}: MenuCardProps) => {
  return (
    <Dialog>
      <DialogTrigger className="" asChild>
        <div className="rounded-sm h-auto w-[220px] overflow-hidden flex flex-col hover:cursor-pointer hover:drop-shadow-foreground hover:drop-shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-40 flex-1">
            <Image
              src={src}
              alt="menu item"
              width={290}
              height={300}
              className="aspect-square object-cover"
            />
          </div>

          <div className="bg-foreground text-background rounded-b-sm font-nunito-sans italic py-2 px-0.5 h-12 text-base text-center flex justify-center items-center">
            {name}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent showCloseButton={false}>
        <DialogTitle className="hidden">
          {name}
        </DialogTitle>

            <Image
              src="/signature-rice.jpg"
              alt="menu item"
              width={290}
              height={300}
              className="object-cover w-full"
            />

          <div className="bg-foreground text-background rounded-b-sm font-nunito-sans italic py-3 h-20 text-2xl flex justify-center items-center">
            {name}
          </div>

      </DialogContent>
    </Dialog>
  )
}
export default MenuCard