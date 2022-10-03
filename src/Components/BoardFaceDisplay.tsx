import { Container, Sx } from "@mantine/core";
import { IBoardFace, boardLength } from "../Global";
import { BoardColDisplay } from "./BoardColDisplay";

export const BoardFaceDisplay = ({sxProp,boardFace,faceIndex}:{sxProp?:Sx | (Sx | undefined)[] | undefined,boardFace:IBoardFace,faceIndex:number}) => {
  return (
    <Container
      sx={{
        position:'absolute',
        height:`${boardLength}px`,
        width:`${boardLength}px`,
        ...sxProp,
      }}
    >
      {boardFace.map((boardCol,index)=>{
        return (
          <BoardColDisplay 
            boardCol={boardCol}
            faceIndex={faceIndex}
            colIndex={index}
          />
        );
      })}
    </Container>

  );
}