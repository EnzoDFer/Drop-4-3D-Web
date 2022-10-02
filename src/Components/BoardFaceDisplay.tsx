import { Container, SimpleGrid } from "@mantine/core";
import { IBoardFace, IBoardCol } from "../Global";
import { BoardColDisplay } from "./BoardColDisplay";

export const BoardFaceDisplay = () => {
  return (
    <Container>
      <BoardColDisplay />
      <BoardColDisplay />
      <BoardColDisplay />
      <BoardColDisplay />
    </Container>

  );
}