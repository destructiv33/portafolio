import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  Alert,
  AlertIcon,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  useClipboard,
} from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoSteam,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoInstagram,
  IoMail,
} from "react-icons/io5";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

const Home = () => {
  const { hasCopied, onCopy } = useClipboard("jdrh980909@gmail.com");
  return (
    <Layout>
      <Container>
        <Alert
          status="info"
          variant="left-accent"
          borderRadius="md"
          colorScheme={useColorModeValue("purple", "orange")}
          //color="whiteAlpha.900"
          p={3}
          mt={4}
          mb={6}
        >
          <AlertIcon />
          Hola, soy un apasionado desarrollador WEB Mexicano!
        </Alert>
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
            autodidacta, su pasión por el desarrollo web radica en hacer código
            y que este se vea reflejado en interfaces amigables con
            el propósito de solucionar problemáticas, cuidando siempre la
            calidad del desarrollo con las mejores prácticas. Le apasiona
            aprender y le encanta la colaboración el intercambio de ideas y
            conocimiento entre todos.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Mi portafolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
          Biografía
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Nacido en México, México.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completo sus estudios en el{" "}
            <Link
              href="https://teshuixquilucan.edomex.gob.mx/"
              rel="noopener"
              target="_blank"
            >
              {" "}
              Tecnológico de Estudios Superiores de Huixquilucan{""}
            </Link>
            como Ingeniero en Sistemas.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Trabaja en <Link href="https://telepro.com.mx/"> TELEPRO </Link>
            como desarrollador .NET
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Titulado como Ingeniero En Sistemas Computacionales.
          </BioSection>
        </Section>
        <Section delay={0.6}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link href="https://www.youtube.com/channel/UCbpdvSDOAmcL_z_oEGDzFvw">
              Videojuegos{" "}
            </Link>
            , Música , Modelismo, Rubik Cubes
          </Paragraph>
        </Section>
        <Section delay={0.9}>
          <Heading as="h2" variant="section-title">
            Contacto
          </Heading>
          <List>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                leftIcon={<Icon as={IoMail} />}
                onClick={onCopy}
              >
                {hasCopied ? "Copiado" : "Mi correo electronico"}
              </Button>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            Social media
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jdrhmx/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://github.com/destructiv33"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Git Hub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/destructive.dev/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/destructiv33"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UCbpdvSDOAmcL_z_oEGDzFvw"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  Youtube
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://steamcommunity.com/profiles/76561198884759896/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("gruvAqua", "gruvPurple")}
                  leftIcon={<Icon as={IoLogoSteam} />}
                >
                  Steam
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
export default Home;
