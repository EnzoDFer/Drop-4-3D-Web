import { Container, Sx } from "@mantine/core";
import { IBoardItem,cubeSideLength } from "../Global"

const PASTEL_BLUE = '#8BD3E6';
const PASTEL_RED = '#FF6D6A';

export const Cube = ({sxProp,boardItem}:{sxProp?:Sx | (Sx | undefined)[] | undefined,boardItem:IBoardItem}) => {
  return (
      <Container
        sx={{
          width:`${cubeSideLength}px`,
          height:`${cubeSideLength}px`,
          padding: '0',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0px)',
          position: 'absolute',
          ...sxProp,
        }}
      >
        <Container
          //front
          sx={{
            border:'1px solid black',
            background:boardItem===''?'':
              boardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
            position:'absolute',
            width:`100%`,
            height:`100%`,
            transform:`translateZ(${cubeSideLength/2}px)`,
          }}
        />
        <Container
          //right
          sx={{
            border:'1px solid black',
            background:boardItem===''?'':
              boardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
            position:'absolute',
            width:`100%`,
            height:`100%`,
            transform:`translateX(50%) rotateY(90deg)`
          }}
        />
        <Container
          //back
          sx={{
            border:'1px solid black',
           background:boardItem===''?'':
            boardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
            position:'absolute',
            width:`100%`,
            height:`100%`,
            transform:`translateZ(${-cubeSideLength/2}px) rotateY(180deg)`
          }}
        />
        <Container
          //left
          sx={{
            border:'1px solid black',
           background:boardItem===''?'':
            boardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
            position:'absolute',
            width:`100%`,
            height:`100%`,
            transform:`translateX(-50%) rotateY(-90deg)`
          }}
        />
        <Container
          //top
          sx={{
            border:'1px solid black',
          background:boardItem===''?'':
            boardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
            position:'absolute',
            width:`100%`,
            height:`100%`,
            transform:`translateY(-50%) rotateX(90deg)`
          }}
        />
        <Container
          //bottom
          sx={{
            border:'1px solid black',
            background:boardItem===''?'':
              boardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
            position:'absolute',
            width:`100%`,
            height:`100%`,
            transform:`translateY(50%) rotateX(-90deg)`
          }}
        />
      </Container>
  );
}