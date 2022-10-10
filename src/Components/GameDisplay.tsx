import { Container } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "./GameProvider";

export const GameDisplay = () => { 
  const {game} = useContext(GameContext);

  return (
    <Container>
      {`Current Turn: ${game.player}`} 
    </Container>
  );
}