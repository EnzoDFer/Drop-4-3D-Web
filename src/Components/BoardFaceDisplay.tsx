import { Container, Sx } from "@mantine/core";
import { IBoardFace, boardLength } from "../GameClasses/Global";
import { BoardColDisplay } from "./BoardColDisplay";

export const BoardFaceDisplay = ({sxProp,boardFace,faceIndex}:{sxProp?:Sx | (Sx | undefined)[] | undefined,boardFace:IBoardFace,faceIndex:number}) => {
  return (
    <Container
      sx={{
        position:'absolute',
        padding: '0 !important',
        height:`${boardLength}px`,
        width:`${boardLength}px`,
        transformStyle: 'preserve-3d',
        ...sxProp,
      }}
    >
      {boardFace.map((boardCol,index)=>{
        return (
          <BoardColDisplay
            key={`col ${index}`}
            boardCol={boardCol}
            faceIndex={faceIndex}
            colIndex={index}
          />
        );
      })}
    </Container>

  );
}