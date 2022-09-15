import { BoardFace } from "./BoardFace";
import { Game } from "./Game";
import { createContext, useEffect, useState } from "react";
import { BoardFaceDisplay } from "./Components/BoardFaceDisplay";


export const GameContext = createContext<{ game: Game, setGame: (newGame:Game)=>void }>({
  game: new Game(),
  setGame: ()=>{},
});

function App() {  
  const [game,setGame] = useState<Game>(new Game());

  useEffect(()=>{
    if (!game.gameOver) {
    game.processTurn();
    }
  },[game])

  return (
    <GameContext.Provider value={{game,setGame}}>
      <div>
        {game.board.cube.map((face:BoardFace,index: number)=>{
            return ( 
              <div key={`face #${index+1}`}>
                {`face #${index+1}`}
                <BoardFaceDisplay
                  face={face.boardFace}
                  cubeIndex={index}
                />
              </div>
            );
        })}
      </div>
    </GameContext.Provider>
  );
}

export default App;

