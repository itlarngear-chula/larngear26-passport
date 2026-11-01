import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
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
      <body className={`${prompt.variable} flex min-h-full flex-col font-sans`}>
        {children}
      </body>
    </html>
  );
}
