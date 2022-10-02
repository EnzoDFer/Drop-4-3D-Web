import { SimpleGrid } from "@mantine/core";
import { IBoardFace, IBoardCol } from "../Global";
import { BoardColDisplay } from "./BoardColDisplay";

export const BoardFaceDisplay = ({face,cubeIndex}:{face:IBoardFace,cubeIndex:number}) => {
  return (
    <SimpleGrid 
      cols={4}
      sx={{
        gap:'1px',
        width:'fit-content'
      }}
    >
      {face.map((boardCol:IBoardCol,index)=>{
        return (
          <BoardColDisplay /*
            column={boardCol} 
            faceIndex={index}
            cubeIndex={cubeIndex}
            key={`face #${index}`}
          *//>
        );
      })}
    </SimpleGrid>
  );
}