import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

const Layout = ({
  children
}: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="font-bagel-fat-one overflow-hidden">
      <Navbar absolute={false} mode="dark" />
      {children}
      <Footer />
    </main>
  )
}
export default Layout