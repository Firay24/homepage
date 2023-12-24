// library components
import { Stack } from "@chakra-ui/react";

// components
import HeroSection from "./sections/hero";
import PointSections from "./sections/points";
import ModulSection from "./sections/modul";

export default function Home() {
  return (
    <Stack>
      <HeroSection />
      <PointSections />
      <ModulSection />
    </Stack>
  );
}
