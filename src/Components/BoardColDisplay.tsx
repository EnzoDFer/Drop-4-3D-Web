import { Button, Container } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "./GameProvider";
import { BoardFace } from "../GameClasses/BoardFace";
import { Game } from "../GameClasses/Game";
import { IBoardCol, boardColNum, boardLength, cubeSideLength, IBoardItem } from "../GameClasses/Global";
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
        padding: '0 !important',
        cursor:'pointer',
        height:'fit-content',
        '&:hover':{
          background:'rgb(211, 230, 139,.2)',
        },
        '&>div>span':{
          transformStyle: 'preserve-3d',
        },
        transformStyle: 'preserve-3d',
      }}
      onClick={game.gameOver?()=>{}:()=>handleClick()}
    >
      <Container
        //container
        sx={{
          padding: '0 !important',
          height:`${boardLength}px`,
          width:`${cubeSideLength}px`,
          transformStyle: 'preserve-3d',
        }}
      >
        {boardCol.map((player:IBoardItem,index: number)=>{
          return (
            <Cube 
              key={`cube ${index}`}
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