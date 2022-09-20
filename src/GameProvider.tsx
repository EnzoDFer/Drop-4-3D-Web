import { BoardFace } from "./BoardFace";
import { Game } from "./Game";
import { createContext, useEffect, useState } from "react";
import { BoardFaceDisplay } from "./Components/BoardFaceDisplay";
import { Container } from "@mantine/core";


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
        //onClick={(e)=>e.currentTarget.style.transform='rotateY(90deg)'}
        sx={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/*game.board.cube.map((face:BoardFace,index: number)=>{
            return ( 
              <div key={`face #${index+1}`}>
                {`face #${index+1}`}
                <BoardFaceDisplay
                  face={face.boardFace}
                  cubeIndex={index}
                />
              </div>
            );
        })*/}
        <BoardFaceDisplay
                  face={game.board.cube[0].boardFace}
                  cubeIndex={0}
                />
      </Container>
    </GameContext.Provider>
  );
}

export default GameProvider;

