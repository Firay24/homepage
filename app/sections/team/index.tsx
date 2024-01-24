// library style
import { Flex, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";

// component
import CardTeam from "./cardTeam";

interface CardTeamProps {
  name: string;
  email: string;
  desc: string;
}

const TeamSections = () => {
  const members = [
    {
      name: "Prof. Dr. Augustina Asih Rumanti, S.T., M.T.",
      email: "augusstinaar@gmail.com",
      desc: "Lecturer and reasearcher in industrial engineering",
    },
    {
      name: "Artamevia Salsabila Rizaldi, S.T., M.T.",
      email: "artameviasalsabila@gmail.com",
      desc: "Lecturer and reasearcher in industrial engineering",
    },
    {
      name: "Mia Amelia, S.T., M.T.",
      email: "mia.amelia08@gmail.com",
      desc: "Lecturer and reasearcher in industrial engineering",
    },
    {
      name: "Frisca Alifia Alia Kamilia",
      email: "friscaalifia5@gmail.com",
      desc: "student in information system",
    },
  ];
  return (
    <Stack marginTop={20} alignItems={"center"} id="team">
      <Heading>Meet our team members</Heading>
      <Stack
        width={{ base: "80%", md: "40%" }}
        textAlign={"center"}
        color={"primary.300"}
      >
        <Text>
          Temui anggota tim kami yang beragam dan berdedikasi, bekerja bersama
          untuk mencapai kesuksesan
        </Text>
      </Stack>
      <Stack marginX={10}>
        <Flex wrap="wrap" justifyContent="center" gap={8}>
          {members.map((item: CardTeamProps, index: number) => (
            <Stack key={index}>
              <CardTeam {...item} />
            </Stack>
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default TeamSections;
