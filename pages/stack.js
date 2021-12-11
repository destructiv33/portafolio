import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import {
  SiReact,
  SiAngular,
  SiPython,
  SiGithub,
  SiLinux,
  SiAmazonaws,
  SiMysql,
  SiMicrosoftsqlserver,
  SiDotnet,
  SiMicrosoftazure,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiFlask,
  SiLaravel,
  SiVisualstudio,
  SiVisualstudiocode,
  SiPowershell,
  SiNpm,
  SiComposer,
} from "react-icons/si";

import Layout from "../components/layouts/article";
import SkillItem from "../components/skill-to-item";

const Stack = () => {
  return (
    <Layout>
      <Container mt={6}>
        <Box mb={4}>
          <Heading as="h1" variant="section-title" fontSize={24} mb={2}>
            Eh trabajado con ...
          </Heading>
        </Box>
        <SimpleGrid columns={[2, 3, 5, 5]} gap={3}>
          <SkillItem icon={SiAngular} label={'Angular'}/>
          <SkillItem icon={SiReact} label={'React'} />
          <SkillItem icon={SiDotnet} label={'.NET'}/>
          <SkillItem icon={SiMysql} label={'My SQL'} />
          <SkillItem icon={SiMicrosoftsqlserver} label={'SQL Server'} />
          <SkillItem icon={SiPhp} label={'PHP'}/>
          <SkillItem icon={SiMicrosoftazure} label={'Azure'}/>
          <SkillItem icon={SiBootstrap} label={'Bootstrap'}/>
          <SkillItem icon={SiGithub} label={'Git Hub'}/>
          <SkillItem icon={SiLaravel} label={'Laravek'}/>
        </SimpleGrid>

        <Box>
          <Heading as="h1" variant="section-title" fontSize={24} mb={2}>
            Quiero aprender ...
          </Heading>
        </Box>
        <SimpleGrid columns={[2, 3, 5, 5]} gap={3}>
          <SkillItem icon={SiPython} label={'Python'}/>
          <SkillItem icon={SiAmazonaws} label={'Amazon AWS'}/>
          <SkillItem icon={SiTailwindcss} label={'Tailwind CSS'}/>
          <SkillItem icon={SiFlask} label={'Flask'}/>
          <SkillItem icon={SiLinux} label={'Linux'}/>
        </SimpleGrid>
        <Heading as="h1" variant="section-title" fontSize={24} mb={2}>
          Herramientas ...
        </Heading>
        <SimpleGrid columns={[2, 3, 5, 5]} gap={3}>
          <SkillItem icon={SiVisualstudio} label={'Visual Studio'}/>
          <SkillItem icon={SiVisualstudiocode} label={'Visual Studio Code'}/>
          <SkillItem icon={SiNpm} label={'NPM'}/>
          <SkillItem icon={SiComposer} label={'Compser'}/>
          <SkillItem icon={SiPowershell} label={'Power Shell'}/>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Stack;
