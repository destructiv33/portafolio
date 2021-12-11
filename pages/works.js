import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem, WorkGridItem } from "../components/grid-item";

import thumbOdontograma from "../public/images/works/card_odontograma.jpg";
import thumbFlutter from "../public/images/works/card_flutter.jpg";
import thumbDashboard from "../public/images/works/card_dashboard.jpg";
import thumbIdea from "../public/images/works/card_idea.jpg";
import thumbProgramming from "../public/images/works/card_programming.jpg";


const Works = () => (
<Layout title="Works">
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Obras
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem id="odontograma" title="Odontograma" thumbnail={thumbOdontograma}>
          Odontograma es una herramienta que permite gestionar y administrar
          expedientes odontologicos.
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="flutterapp" title="Facebook App" thumbnail={thumbFlutter}>
          Clon de la palicacion de facebook con flutter y dependecia cupertino
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <Section delay={0.4}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Obras antiguas
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.5}>
        <WorkGridItem id="dashboard" thumbnail={thumbDashboard} title="Dashboard">
          Aplicacion layout carrito de compras y generacion de PDF 
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <Section delay={0.2}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Colaboraciones
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
    <Section delay={0.3}>
        <GridItem
          href="https://www.instagram.com/destructive.dev/"
          thumbnail={thumbIdea}
          title="Tienes alguna idea?"
        >
          Me encantaria colaborar CONTIGO!
        </GridItem>
      </Section>
      <Section delay={0.3}>
        <GridItem
          href="https://github.com/destructiv33"
          thumbnail={thumbProgramming}
          title="Mas programacion?"
        >
          Otras actividades y proyectos en mi Git Hub!
        </GridItem>
      </Section>
    </SimpleGrid>
    
  </Container>
</Layout>
);

export default Works;
