import { Button, SimpleGrid, Container } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "../GameProvider";
import { BoardFace } from "../BoardFace";
import { Game } from "../Game";
import { IBoardCol, tupleToArray, IBoardItem } from "../Global";
import { Cube } from "./Cube";

export const BoardColDisplay = ({column,cubeIndex,faceIndex}:{column:IBoardCol,cubeIndex:number,faceIndex:number}) => {
  const {game,setGame} = useContext(GameContext);
  
  function handleClick() {
    if (!BoardFace.checkForFullArray(column)&&!game.gameOver) {
      game.updateCol(column,cubeIndex,faceIndex,game.player);
      setGame(new Game(game));
    }
  }
  
  return (
    <Button
      sx={{
        height:'fit-content',
        background:'white',
        border:'1px solid black',
        padding: '0',
        '&:hover':{
          background:'white',
        }

      }}
      onClick={game.gameOver?()=>{}:()=>handleClick()}
    >
      <SimpleGrid
        cols={1}
        sx={{
          gap:'1px',
        }}
      >
        {tupleToArray(column).reverse().map((boardItem:IBoardItem,index)=>{
          return (
            <Cube BoardItem={boardItem} key={`face #${index}`}/>
          );
        })}
      </SimpleGrid>
    </Button>
  );
}