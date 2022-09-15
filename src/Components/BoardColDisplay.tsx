import { Button, SimpleGrid, Container } from "@mantine/core";
import { useContext } from "react";
import { GameContext } from "../App";
import { Game } from "../Game";
import { IBoardCol, tupleToArray, IBoardItem } from "../Global";

export const BoardColDisplay = ({column,cubeIndex,faceIndex}:{column:IBoardCol,cubeIndex:number,faceIndex:number}) => {
  const {game,setGame} = useContext(GameContext);
  
  function handleClick() {
    if (column[3]==='') {
      game.updateCol(column,cubeIndex,faceIndex,game.player);
      setGame(new Game(game));
    }
  }
  
  return (
    <Button
      sx={{
        height:'fit-content',
        padding: '1rem'

      }}
      onClick={()=>handleClick()}
    >
      <SimpleGrid
        cols={1}
        sx={{
          gap:'1px',
        }}
      >
        {tupleToArray(column).reverse().map((boardItem:IBoardItem,index)=>{
          return (
            <Container
              key={`face #${index}`}
              sx={{
                height:'2rem',   
              }}
            >
              {boardItem}
            </Container>
          );
        })}
      </SimpleGrid>
    </Button>
  );
}