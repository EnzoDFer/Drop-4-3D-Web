import { Button, Container } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "../GameProvider";
import { BoardFace } from "../BoardFace";
import { Game } from "../Game";
import { IBoardCol, boardColNum, boardLength, cubeSideLength } from "../Global";
import { Cube } from "./Cube";

export const BoardColDisplay = () => {
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
        height:'fit-content',
        padding: '0',
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
        <Cube BoardItem="P1"
          sxProp={{
            marginTop:`${0*boardLength/boardColNum}px`,
          }}
        />
        <Cube BoardItem="P1"
          sxProp={{
            marginTop:`${1*boardLength/boardColNum}px`,
          }}
        />
        <Cube BoardItem="P1"
          sxProp={{
            marginTop:`${2*boardLength/boardColNum}px`,
          }}
        />
        <Cube BoardItem="P1"
          sxProp={{
            marginTop:`${3*boardLength/boardColNum}px`,
          }}
        />
    </Container>
    </Button>
  );
}