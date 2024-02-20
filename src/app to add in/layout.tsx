import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "London Brutalist Map",
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
      <Head>
        <title>London Brutalist Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`px-[5vw] ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
