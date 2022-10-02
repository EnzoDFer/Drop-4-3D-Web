import { Container, SimpleGrid, Sx } from "@mantine/core";
import { IBoardFace, IBoardCol, boardLength } from "../Global";
import { BoardColDisplay } from "./BoardColDisplay";

export const BoardFaceDisplay = ({sxProp}:{sxProp?:Sx | (Sx | undefined)[] | undefined}) => {
  return (
    <Container
      sx={{
        position:'absolute',
        padding: '0',
        height:`${boardLength}px`,
        width:`${boardLength}px`,
        ...sxProp,
      }}
    >
      <BoardColDisplay />
      <BoardColDisplay />
      <BoardColDisplay />
      <BoardColDisplay />
    </Container>

  );
}