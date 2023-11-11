import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon,CheckIcon } from '@chakra-ui/icons'
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
        Este proyecto de tiene la finalidad de administrar y gestionar los expedientes para pacientes
        a traves de un control de citas a si como el segumiento y resguardo de toda la historia 
        clinica de estos. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/destructiv33/odontograma" target="_blank">
           destructiv33/odontograma <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ASP.NET / SQL Server / Bootstrap </span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href="https://www.youtube.com/watch?v=LFmfZASO9IE&t=1909s" target="_blank">
            Video...<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Caracteristicas Importantes</Meta><br/>
            <span><CheckIcon/> Autenticador a traves de Google</span><br/>
            <span><CheckIcon/> Uso de Identity Framework </span><br/>
            <span><CheckIcon/> Comunicacion con Powe BI</span><br/>
            <span><CheckIcon/> Razor</span><br/>
        </ListItem>
      </List>

      <WorkImage src="/images/works/odontograma/home_odontograma.png" alt="Home" />
      <WorkImage src="/images/works/odontograma/login_odontograma.png" alt="Login" />
    </Container>
  </Layout>
)

export default Work