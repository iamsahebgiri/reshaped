import { Container, Frame, Reshaped, Stack, Text } from "reshaped";
import PostCard from "../components/PostCard";
import SidebarLayout from "../layouts/SidebarLayout";

const Home = () => {
  return (
    <Reshaped theme="quizzer">
      <SidebarLayout>
        <Container>
          <Frame padding={[12, 8]}>
            <Text variant="title-2">Welcome back, Saheb!</Text>
            <Text variant="body-1" color="neutral-faded">
              All the best because #PaperPhodnaHai
            </Text>

            {/* <Container width="600px">
              <Stack>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
              </Stack>
            </Container> */}
          </Frame>
        </Container>
      </SidebarLayout>
    </Reshaped>
  );
};

export default Home;
