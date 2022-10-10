import { Button, Container } from "@mantine/core";
import { useContext, useEffect } from "react";
import { GameContext } from "./GameProvider";
import { BoardFace } from "../BoardFace";
import { Game } from "../Game";
import { IBoardCol, boardColNum, boardLength, cubeSideLength, IBoardItem } from "../Global";
import { Cube } from "./Cube";

export const BoardColDisplay = ({boardCol,colIndex,faceIndex}:{boardCol:IBoardCol,colIndex:number,faceIndex:number}) => {
  const {game,setGame} = useContext(GameContext);
  
  function handleClick() {
    if (!BoardFace.checkForFullArray(boardCol)&&!game.gameOver) {
      game.updateCol(boardCol,faceIndex,colIndex,game.player);
      setGame(new Game(game));
    }
  }

  return (
    <Button
      sx={{
        all:'unset',
        cursor:'pointer',
        height:'fit-content',
        '&:hover':{
          background:'white',
        }

      }}
      onClick={game.gameOver?()=>{}:()=>handleClick()}
    >
      <Container
        //container
        sx={{
          height:`${boardLength}px`,
          width:`${cubeSideLength}px`
        }}
      >
        {boardCol.map((player:IBoardItem,index: number)=>{
          return (
            <Cube 
              boardItem={player}
              sxProp={{
                marginTop:`${(3-index)*boardLength/boardColNum}px`,
              }}
            />
          );
        })}
      </Container>
    </Button>
  );
}