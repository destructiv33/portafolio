import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Flutter App <Badge>2021</Badge>
      </Title>
      <P>
        Este proyecto de flutter copia la forma de facebook app, con el
        propósito de conocer la forma en la que trabaja flutter y todas las
        cosas que se pueden crear con esta herramienta.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/destructiv33/facebook-flutter">
            destructiv33/facebook-flutter <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter / Dart / SDK Google / Virtual Device </span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/flutter_app/flutter_app.gif"
        alt="Flutter App"
      />
    </Container>
  </Layout>
);

export default Work;
