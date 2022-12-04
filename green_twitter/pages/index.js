import LoginForm from "./comps/LoginForm"
import { Wrapper, Container, Center } from './styles';
import ImageExampleImage from './comps/images';

export default function LogInPage() {
  return (
    <Container>
      <Center>
        <ImageExampleImage></ImageExampleImage>
      </Center>
      <Wrapper>
        <LoginForm/>
      </Wrapper>
      <p>New user? <a href="./signup"> Sign up here!</a></p>
    </Container>   
  )
}