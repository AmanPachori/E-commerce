import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description:
    "Garden360 provides all gardening solutions, from renting a Mali to garden designing, setup & maintenance. We cover all types of gardens, such as indoor gardens/ outdoor gardens/ office gardens/ terrace gardens/ balcony gardens/ vertical gardens/ kitchen gardening/ landscaping, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <title>
          Garden360 - Gardening Services: Book A Mali, Design & Setup Your
          Garden
        </title>
        <meta
          name="og:description"
          content="Garden360 provides all gardening solutions, from renting a Mali to garden designing, setup & maintenance. We cover all types of gardens, such as indoor gardens/ outdoor gardens/ office gardens/ terrace gardens/ balcony gardens/ vertical gardens/ kitchen gardening/ landscaping, etc."
        />
        <meta
          name="og:title"
          content="Garden360 - Gardening Services: Book A Mali, Design & Setup Your Garden"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
