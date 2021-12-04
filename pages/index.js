import { Container , Box , Heading } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="4" background="red" p={ 4 } textAlign="center">
                Hola, soy un apasionado desarrollador WEB Mexicano
            </Box>
            <Box display={ { md: 'flex'} }>
                <Heading as="h2" variant="page-title">
                    Daniel Ramírez
                </Heading>
            </Box>
            <p>Desarrollador Jr. ( Ingeniero / Programador / Videojugador)</p>
        </Container>
    )
}
export default Page;