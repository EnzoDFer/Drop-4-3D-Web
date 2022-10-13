import { Avatar, Badge, Button, Group, Indicator } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Game } from "../GameClasses/Game";
import { GameContext } from "./GameProvider";

export const GameDisplay = () => { 
  const {game,setGame} = useContext(GameContext);
  const [winnerPresent,setWinnerPresent] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      if (game.gameOver) {
        setWinnerPresent(true);
      } else {
        setWinnerPresent(false);
      }
    },100)
    
    
  },[game])

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
          sx={{
            border:'2px solid black'
          }}
        >
          P1
        </Avatar>
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
          sx={{
            border:'2px solid black'
          }}
        >
          P2
        </Avatar>
      </Indicator>
      <Button
        onClick={()=>setGame(new Game())}
        sx={{
          background: 'white',
          border: '2px solid black',
          color:'black',
          transformStyle:'flat',
          '&:hover':{
            background:'white',
          },
        }}
      >
        Restart Game
      </Button>
      <Badge
        size="xl"
        sx={{
          display:winnerPresent?'block':'none',
          background: 'white',
          border: '2px solid black',
          color:'black',
          '&:hover':{
            background:'white',
          },
        }}
      >
        {`The winner is: ${game.winner}`}
      </Badge>
    </Group>
  );
}