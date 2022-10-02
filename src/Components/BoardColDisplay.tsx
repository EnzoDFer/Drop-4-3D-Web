import { Button, Container } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "../GameProvider";
import { BoardFace } from "../BoardFace";
import { Game } from "../Game";
import { IBoardCol, boardColNum, boardLength, cubeSideLength, IBoardItem } from "../Global";
import { Cube } from "./Cube";

export const BoardColDisplay = ({boardCol}:{boardCol:IBoardCol}) => {
  /*const {game,setGame} = useContext(GameContext);
  
  function handleClick() {
    if (!BoardFace.checkForFullArray(column)&&!game.gameOver) {
      game.updateCol(column,cubeIndex,faceIndex,game.player);
      setGame(new Game(game));
    }
  }*/
  
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
      //onClick={game.gameOver?()=>{}:()=>handleClick()}
    >
      <Container
        //container
        sx={{
          height:`${boardLength}px`,
          width:`${cubeSideLength}px`
        }}
      >
        {boardCol.map((player,index)=>{
          return (
            <Cube 
              boardItem={player}
              sxProp={{
                marginTop:`${index*boardLength/boardColNum}px`,
              }}
            />
          );
        })}
      </Container>
    </Button>
  );
}