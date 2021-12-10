import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  SiCss3,
  SiReact,
  SiAngular,
  SiPython,
  SiGithub,
  SiLinux,
  SiAmazonaws,
  SiMysql,
  SiMicrosoftsqlserver,
  SiCsharp,
  SiMicrosoftazure,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiFlask,
  SiLaravel
} from "react-icons/si";

import Layout from "../components/layouts/article";
import SkillToLearn from "../components/skill-to-learn";

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
          <SkillToLearn icon={SiAngular} />
          <SkillToLearn icon={SiReact} />
          <SkillToLearn icon={SiCsharp} />
          <SkillToLearn icon={SiMysql} />
          <SkillToLearn icon={SiMicrosoftsqlserver} /> 
          <SkillToLearn icon={SiPhp} />
          <SkillToLearn icon={SiMicrosoftazure} />
          <SkillToLearn icon={SiBootstrap} />
          <SkillToLearn icon={SiGithub} />
          <SkillToLearn icon={SiLaravel} />      

        </SimpleGrid>

        <Heading as="h1" variant="section-title" fontSize={24} mb={2}>
          Quiero aprender ...
        </Heading>
        <SimpleGrid columns={[2, 3, 5, 5]} gap={3}>
          <SkillToLearn icon={SiPython} />
          <SkillToLearn icon={SiAmazonaws} />
          <SkillToLearn icon={SiTailwindcss} />
          <SkillToLearn icon={SiFlask} />
          <SkillToLearn icon={SiLinux} />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Stack;
