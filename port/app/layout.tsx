import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const font = Fredoka({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}