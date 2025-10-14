import type { Metadata } from "next";
import { Geist, Geist_Mono, Bagel_Fat_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  variable: "--font-bagel-fat-one",
  subsets: ["latin"],
});

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
        className={`${bagelFatOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
