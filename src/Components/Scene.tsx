import { Container } from "@mantine/core";
import { useContext  } from "react";
import { BoardFace } from "../BoardFace";
import { BoardFaceDisplay } from "./BoardFaceDisplay";
import { GameContext } from "./GameProvider";
import { boardLength, cubeSideLength } from "../Global";

export const Scene = () => {
  const {game} = useContext(GameContext);

  return(
    <Container
        //scene
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          padding:'3rem',
          justifyContent:'center',
          alignItems:'center',
          background:'white',
        }}
      >
        <Container
          //cube Container
          sx={{
            transition:'transform 2s linear',
            position:'relative',
            height:`${boardLength}px`,
            width:`${boardLength}px`,
          }}
        >
         {game.board.cube.map((face:BoardFace,index: number)=>{
              return (
                <BoardFaceDisplay
                  boardFace={face.boardFace}
                  faceIndex={index}
                  sxProp={{
                    transform:`translateZ(${index*cubeSideLength}px)`,
                  }}
                />
              );
          })}
        </Container>
      </Container>
  );
}