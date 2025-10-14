import type { Metadata } from "next";
import { Bagel_Fat_One, Playfair_Display } from "next/font/google";
import "./globals.css";

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  variable: "--font-bagel-fat-one",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
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
        className={`${bagelFatOne.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
