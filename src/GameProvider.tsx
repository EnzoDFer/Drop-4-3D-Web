import { BoardFace } from "./BoardFace";
import { Game } from "./Game";
import { createContext, useEffect, useState } from "react";
import { BoardFaceDisplay } from "./Components/BoardFaceDisplay";
import { Container } from "@mantine/core";
import { boardLength, cubeSideLength } from "./Global";


export const GameContext = createContext<{ game: Game, setGame: (newGame:Game)=>void }>({
  game: new Game(),
  setGame: ()=>{},
});

export function GameProvider() {  
  const [game,setGame] = useState<Game>(new Game());

  useEffect(()=>{
    if (!game.gameOver) {
    game.processTurn();
    }
  },[game])

  return (
    <GameContext.Provider value={{game,setGame}}>
      <Container
        //cube Container
        sx={{
          position:'relative',
          height:`${boardLength}px`,
          width:`${boardLength}px`,
        }}
      >
       {game.board.cube.map((face:BoardFace,index: number)=>{
            return ( 
              <BoardFaceDisplay
                boardFace={face.boardFace}
                sxProp={{
                  transform:`translateZ(${index*cubeSideLength}px)`,
                }}
              />
            );
        })}
      </Container>
    </GameContext.Provider>
  );
}

export default GameProvider;

