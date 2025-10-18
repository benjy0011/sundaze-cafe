import type { Metadata } from "next";
import { Bagel_Fat_One, Playfair_Display, Nunito_Sans, Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from inserting its own <style> tag:
config.autoAddCss = false

gsap.registerPlugin(ScrollTrigger, SplitText);

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  variable: "--font-bagel-fat-one",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
})

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Sundaze Cafe",
  description: "A freshly brewed coffee to start your day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bagelFatOne.variable} ${playfairDisplay.variable} ${nunitoSans.variable} ${bebasNeue.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
