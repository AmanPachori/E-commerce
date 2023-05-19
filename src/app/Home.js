import {
  ContactUs,
  Coursel,
  Gardening,
  GardeningEssential,
  TypesOfGardern,
} from "@/components";
export default function Homepage() {
  return (
    <div>
      <Coursel />
      <Gardening />
      <GardeningEssential />
      <TypesOfGardern />
      <ContactUs />
    </div>
  );
}
