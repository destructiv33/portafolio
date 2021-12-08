import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hola, soy un apasionado desarrollador WEB Mexicano!!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Ramírez
          </Heading>
          <p>Desarrollador Jr. ( Ingeniero / Programador / Videojugador)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="images/avatar.jpg"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mi
        </Heading>
        <Paragraph>
          Daniel es un ingeniero en sistemas, apasionado desarrollador web
          autodidacta, su pasión por el desarrollo web radica en hacer código y
          que este se vea reflejado en interfaces amigables y elegantes, con el
          propósito de solucionar problematicas, cuidando siempre la calidad del
          desarrollo con las mejores practicas. Le apasiona aprender y le
          encanta la colaboración el intercambio de ideas, conocimiento a través
          de equipos y{" "}
          <Link href="https://discord.gg/YBNVcsKS">comunidades </Link>
          de desarrollo.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as="h2" variant="section-title">
          Biografia
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Nacido en Mexico, Mexico.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completo sus estudios en el {" "}
          <Link href="https://teshuixquilucan.edomex.gob.mx/">
            {" "}
            Tecnológico de Estudios Superiores de Huixquilucan{" "}
          </Link>
          como Ingeniero en Sistemas.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Trabaja en {" "}
          <Link href="https://telepro.com.mx/"> TELEPRO </Link>
          como desarrollador.
        </BioSection>
      </Section>
      <Section delay={ 0.9 }>
        <Heading as="h2" variant="section-title">
            I ♥
        </Heading>
        <Paragraph>
            <Link href="https://www.youtube.com/channel/UCbpdvSDOAmcL_z_oEGDzFvw">Videojuegos </Link>,
            Musica , Salir en bicileta , 
        </Paragraph>
      </Section>
    </Container>
  );
};
export default Page;
