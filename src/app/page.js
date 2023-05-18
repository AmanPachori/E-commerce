import {
  ContactUs,
  Coursel,
  Gardening,
  GardeningEssential,
  Navbar,
  TypesOfGardern,
  Footer,
} from "@/components";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Coursel />
      <Gardening />
      <GardeningEssential />
      <TypesOfGardern />
      <ContactUs />
      <Footer />
    </div>
  );
}
