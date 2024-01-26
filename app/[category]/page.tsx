// library style
import { Stack, Text } from "@chakra-ui/react";

// components
import HeroSection from "./sections/hero";
import TabSection from "./sections/tabs";

// data
import { dataItems } from "./data";

export async function generateStaticParams() {
  const categories = dataItems.map((item: any) => ({
    category: item.id,
  }));
  return categories;
}

const ModuleDetailPage = ({ params }: any) => {
  const data = dataItems.find((item: any) => item.id === params.category);
  return (
    <Stack>
      <HeroSection {...data} />
      <TabSection {...data} />
    </Stack>
  );
};

export default ModuleDetailPage;
