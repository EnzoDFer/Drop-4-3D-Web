import { Container } from "@mantine/core";
import { BoardColDisplay } from "./Components/BoardColDisplay";
import { BoardFaceDisplay } from "./Components/BoardFaceDisplay";
import { Cube } from "./Components/Cube";
import GameProvider from "./GameProvider";
import { boardLength, cubeSideLength,boardColNum } from "./Global";

function App() {  

  return (
    //<GameProvider/>
    <Container
      //cube Container
      sx={{
        position:'relative',
        height:`${boardLength}px`,
        width:`${boardLength}px`,
      }}
    >
      <BoardFaceDisplay
        sxProp={{
          transform:`translateZ(${0*cubeSideLength}px)`,
        }}
      />
      <BoardFaceDisplay
        sxProp={{
          transform:`translateZ(${1*cubeSideLength}px)`,
        }}
      />
      <BoardFaceDisplay
        sxProp={{
          transform:`translateZ(${2*cubeSideLength}px)`,
        }}
      />
      <BoardFaceDisplay
        sxProp={{
          transform:`translateZ(${3*cubeSideLength}px)`,
        }}
      />
    </Container>
  );
}

export default App;

