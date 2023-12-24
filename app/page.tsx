// library components
import { Stack } from "@chakra-ui/react";

// components
import HeroSection from "./sections/hero";
import PointSections from "./sections/points";

export default function Home() {
  return (
    <Stack>
      <HeroSection />
      <PointSections />
    </Stack>
  );
}
