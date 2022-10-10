import { Game } from "../Game";
import { createContext, ReactNode, useEffect, useState } from "react";


export const GameContext = createContext<{ game: Game, setGame: (newGame:Game)=>void }>({
  game: new Game(),
  setGame: ()=>{},
});

export function GameProvider({children}:{children:ReactNode}) {  
  const [game,setGame] = useState<Game>(new Game());
  
  useEffect(()=>{
    console.log(game.player);
    
    if (!game.gameOver) {
      game.processTurn();
    }
  },[game])


  return (
    <GameContext.Provider value={{game,setGame}}>
        {children}
    </GameContext.Provider>
  );
}

export default GameProvider;

