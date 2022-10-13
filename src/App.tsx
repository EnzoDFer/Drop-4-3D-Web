import { Center, Container, Text } from "@mantine/core";
import { Controls } from "./Components/Controls";
import { DimensionButton } from "./Components/DimensionButton";
import { GameDisplay } from "./Components/GameDisplay";
import GameProvider from "./Components/GameProvider";
import { Scene } from "./Components/Scene";

function App() {  

  return (
    <GameProvider>
      <Container
        sx={{
          height:'100%',
          width: '100%',
          margin: '0',
          maxWidth:'unset',
          padding:'2rem',
          backgroundImage: `linear-gradient(
            45deg,
            hsl(193deg 65% 72%) 0%,
            hsl(200deg 79% 73%) 11%,
            hsl(208deg 91% 75%) 22%,
            hsl(220deg 95% 79%) 33%,
            hsl(245deg 85% 82%) 44%,
            hsl(278deg 66% 77%) 56%,
            hsl(312deg 65% 73%) 67%,
            hsl(332deg 91% 73%) 78%,
            hsl(346deg 100% 72%) 89%,
            hsl(1deg 100% 71%) 100%
          )`,
          display:'grid',
          gridTemplateRows:'1fr 1fr 1fr 6fr 1fr',
        }}
      >
        <Center>
          <Text
            sx={{
              fontFamily: 'sans-serif',
              fontSize:'2rem',
              color:'black',
              //WebkitTextStroke:'black',
              //WebkitTextStrokeWidth:'0.8px'
            }}
          >
            Connect 4x4
          </Text>
        </Center>
        <Controls/>
        <DimensionButton/>
        <Scene/>
        <GameDisplay/>
      </Container>
    </GameProvider>
  );
}

export default App;

