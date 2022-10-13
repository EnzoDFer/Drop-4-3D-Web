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

