import Footer from "@/components/Footer"
import { ReactNode } from "react"

const Layout = ({
  children
}: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="font-bagel-fat-one">
      {children}
      <Footer />
    </main>
  )
}
export default Layout