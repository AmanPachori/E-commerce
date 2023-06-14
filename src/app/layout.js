import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Garden360 - Gardening Services: Book A Mali, Design & Setup Your Garden",
  description:
    "Garden360 provides all gardening solutions, from renting a Mali to garden designing, setup & maintenance. We cover all types of gardens, such as indoor gardens/ outdoor gardens/ office gardens/ terrace gardens/ balcony gardens/ vertical gardens/ kitchen gardening/ landscaping, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <NextSeo title="" description="" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
