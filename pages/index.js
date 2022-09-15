import { AspectRatio, Card, Container, Frame, Image, Reshaped } from "reshaped";

const Home = () => {
  return (
    <Reshaped theme="reshaped">
      <Container width="652px">
        <Frame width="50%">
          <Card padding={0}>
            <AspectRatio ratio={16 / 9}>
              <Image src="https://reshaped.so/img/examples/image-retina.webp" />
            </AspectRatio>
            <Frame padding={4}>
              Located in a quiet street in hip and happening Amsterdam East near
              the Beukenplein and Oosterpark.
            </Frame>
          </Card>
        </Frame>
      </Container>
    </Reshaped>
  );
};

export default Home;
