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
          )`
        }}
      >
        <Controls/>
        <Scene/>
        <GameDisplay/>
      </Container>
    </GameProvider>
  );
}

export default App;

