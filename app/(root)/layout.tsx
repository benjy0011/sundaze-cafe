import { ReactNode } from "react"

const Layout = ({
  children
}: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="font-bagel-fat-one">
      {children}
    </main>
  )
}
export default Layout