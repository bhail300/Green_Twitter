import SignUpForm from "./comps/SignUpForm"
import { Wrapper, Container, Center } from './styles';
import ImageExampleImage from './comps/images';

export default function SignUpPage() {
  return (
        <Container>
            <Center>
              <ImageExampleImage></ImageExampleImage>
            </Center>
        <Wrapper>
            <SignUpForm/>
        </Wrapper>
        <p>Already have an account? <a href="/"> Login here!</a></p>
    </Container> 
  )
}
