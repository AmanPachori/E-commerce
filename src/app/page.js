import { Navbar, Footer } from "@/components";
import Homepage from "./Home";
import Head from "next/head";
export default function Main() {
  return (
    <div>
      <Head>
        <title>
          Garden360 - Gardening Services: Book A Mali, Design & Setup Your
          Garden
        </title>
        <meta
          name="description"
          content="Garden360 provides all gardening solutions, from renting a Mali to garden designing, setup & maintenance. We cover all types of gardens, such as indoor gardens/ outdoor gardens/ office gardens/ terrace gardens/ balcony gardens/ vertical gardens/ kitchen gardening/ landscaping, etc."
        />
        <meta
          name="og:title"
          content="Garden360 - Gardening Services: Book A Mali, Design & Setup Your Garden"
        />
      </Head>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}
