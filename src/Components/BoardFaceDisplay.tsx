import { Container, SimpleGrid, Sx } from "@mantine/core";
import { IBoardFace, IBoardCol, boardLength } from "../Global";
import { BoardColDisplay } from "./BoardColDisplay";

export const BoardFaceDisplay = ({sxProp,boardFace}:{sxProp?:Sx | (Sx | undefined)[] | undefined,boardFace:IBoardFace}) => {
  return (
    <Container
      sx={{
        position:'absolute',
        height:`${boardLength}px`,
        width:`${boardLength}px`,
        ...sxProp,
      }}
    >
      {boardFace.map((boardCol)=>{
        return (
          <BoardColDisplay boardCol={boardCol}/>
        );
      })}
    </Container>

  );
}