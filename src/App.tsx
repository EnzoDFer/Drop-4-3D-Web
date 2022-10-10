import { Container, Header } from "@mantine/core";
import { Controls } from "./Components/Controls";
import { GameDisplay } from "./Components/GameDisplay";
import GameProvider, { GameContext } from "./Components/GameProvider";
import { Scene } from "./Components/Scene";
import { useContext, useEffect } from "react";

function App() {  
  const {game} = useContext(GameContext);

  return (
    <GameProvider>
      <Container
        sx={{
          height:'100%',
          width: '100%',
          maxWidth:'unset',
          display: 'grid',
          gridAutoRows:'1fr 1fr 9fr',
          padding:'2rem',
          background: '#6961FF'
        }}
      >
        <GameDisplay/>
        <Controls/>
        <Scene/>
      </Container>
    </GameProvider>
  );
}

export default App;

