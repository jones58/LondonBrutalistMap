import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "London Brutalism",
  description:
    "A website for learning about Brutalist buildings in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>London Brutalism</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`px-[5vw] ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
