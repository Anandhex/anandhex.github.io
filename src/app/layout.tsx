import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hi Next App",
  description: "Hey by create next app",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#2c3333" },
    { media: "(prefers-color-scheme: light)", color: "#2c3333" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
