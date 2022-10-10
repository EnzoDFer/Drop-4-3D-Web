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
          height:`${boardLength}px`,
          width:`${boardLength}px`,
          display: 'flex',
          padding: '0 !important',
          justifyContent:'center',
          alignItems:'center',
          background:'transparent',
          margin:'2rem auto 2rem auto',
        }}
      >
        <Container
          //cube Container
          sx={{
            transition:'transform 2s linear',
            position:'relative',
            padding: '0 !important',
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