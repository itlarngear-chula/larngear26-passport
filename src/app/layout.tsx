import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Alex_Brush,
  Bodoni_Moda,
  Charmonman,
  Noto_Sans_Thai,
} from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

// Families from the Figma typography variables; see globals.css for styles.
const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

const charmonman = Charmonman({
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
  variable: "--font-charmonman",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LG26 Passport",
  description: "Passport application for Larngear 26.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${notoSansThai.variable} ${charmonman.variable} ${bodoniModa.variable} ${alexBrush.variable} flex min-h-full flex-col font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
