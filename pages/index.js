import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
    </Container>
  );
};
export default Page;
