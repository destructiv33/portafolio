import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Vaya!</Heading>
      <Text>Nada por aqui!</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>Regresar al inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound