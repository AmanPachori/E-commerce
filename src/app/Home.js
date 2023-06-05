import {
  ContactUs,
  Coursel,
  Gardening,
  GardeningEssential,
  Kitchen,
  TypesOfGardern,
} from "@/components";
export default function Homepage() {
  return (
    <div>
      <Coursel />
      <Gardening />
      <GardeningEssential />
      <Kitchen />
      <TypesOfGardern />
      <ContactUs />
    </div>
  );
}
