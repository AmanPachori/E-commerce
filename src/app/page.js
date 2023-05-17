import {
  Coursel,
  Gardening,
  GardeningEssential,
  Navbar,
  TypesOfGardern,
} from "@/components";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Coursel />
      <Gardening />
      <GardeningEssential />
      <TypesOfGardern />
    </div>
  );
}
