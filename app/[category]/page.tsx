// library style
import { Stack } from "@chakra-ui/react";

// components
import HeroSection from "./sections/hero";
import TabSection from "./sections/tabs";

const ModuleDetailPage = () => {
  return (
    <Stack>
      <HeroSection />
      <TabSection />
    </Stack>
  );
};

export default ModuleDetailPage;
