import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Odontograma <Badge>2020</Badge>
      </Title>
      <P>
        Este proyecto de tiene la finalidad de administrar y gestionar los expedientes de pacientes
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/destructiv33/odontograma">
           destructiv33/odontograma <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ASP.NET / Identity Framework / Bootstrap </span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href="https://www.youtube.com/watch?v=LFmfZASO9IE&t=1909s">
            Video...<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/odontograma/home_odontograma.png" alt="Home" />
      <WorkImage src="/images/works/odontograma/login_odontograma.png" alt="Login" />
    </Container>
  </Layout>
)

export default Work