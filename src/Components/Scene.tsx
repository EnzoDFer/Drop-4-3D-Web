import { Container } from "@mantine/core";
import { useContext  } from "react";
import { BoardFace } from "../GameClasses/BoardFace";
import { BoardFaceDisplay } from "./BoardFaceDisplay";
import { GameContext } from "./GameProvider";
import { boardLength, cubeSideLength } from "../GameClasses/Global";

export const Scene = () => {
  const {game} = useContext(GameContext);

  return(
    <Container
        //scene
        id='scene'
        sx={{
          transform:`translateZ(${boardLength}px)`,
          height:`${boardLength}px`,
          width:`${boardLength}px`,
          display: 'flex',
          padding: '0 !important',
          justifyContent:'center',
          alignItems:'center',
          background:'transparent',
          margin:'3rem auto 3rem auto',
          transformStyle: 'preserve-3d',
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
            transformStyle: 'preserve-3d',
          }}
        >
         {game.board.cube.map((face:BoardFace,index: number)=>{
              return (
                <BoardFaceDisplay
                  key={`face ${index}`}
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