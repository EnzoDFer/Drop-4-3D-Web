import { Avatar, Group, Indicator } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "./GameProvider";

export const GameDisplay = () => { 
  const {game} = useContext(GameContext);

  return (
    <Group 
      position="center" 
      spacing="xl"
    >
      <Indicator  
          color="cyan.3" 
          size={20} 
          dot={true} 
          withBorder 
          processing
          disabled={
            (game.player==='P1'?true:false)
          }
      >
        <Avatar
          size='xl'
          radius='md'
          color="cyan.3"
          alt='Player 1 Icon'
        />
      </Indicator>
      <Indicator  
          color="red.6" 
          size={20} 
          dot={true} 
          withBorder 
          processing
          disabled={
            (game.player==='P2'?true:false)
          }
      >
        <Avatar
          size='xl'
          radius='md'
          color="red.6"
          alt='Player 2 Icon'
        />
      </Indicator>
    </Group>
  );
}