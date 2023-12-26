"use client";
// library style
import { Stack } from "@chakra-ui/react";

// components
import HeroSection from "./sections/hero";
import TabSection from "./sections/tabs";

// data
import { dataItems } from "./data";
import { useParams } from "next/navigation";

const ModuleDetailPage = () => {
  const location = useParams();
  const data = dataItems.find((item: any) => item.id === location.category);
  return (
    <Stack>
      <HeroSection {...data} />
      <TabSection />
    </Stack>
  );
};

export default ModuleDetailPage;
