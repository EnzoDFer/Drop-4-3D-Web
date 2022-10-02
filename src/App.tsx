import { Container } from "@mantine/core";
import { Cube } from "./Components/Cube";
import GameProvider from "./GameProvider";
import { boardLength, cubeSideLength,boardColNum } from "./Global";

function App() {  

  return (
    //<GameProvider/>
    <Container
      //container
      sx={{
        height:`  ${boardLength}px`,
        width:`${boardLength}px`
      }}
    >
      <Cube BoardItem="P1"
        sxProp={{
          marginTop:`${0*boardLength/boardColNum}px`,
        }}
      />
      <Cube BoardItem="P1"
        sxProp={{
          marginTop:`${1*boardLength/boardColNum}px`,
        }}
      />
      <Cube BoardItem="P1"
        sxProp={{
          marginTop:`${2*boardLength/boardColNum}px`,
        }}
      />
      <Cube BoardItem="P1"
        sxProp={{
          marginTop:`${3*boardLength/boardColNum}px`,
        }}
      />
      <Cube BoardItem="P1"
        sxProp={{
          marginTop:`${4*boardLength/boardColNum}px`,
        }}
      />
    </Container>
  );
}

export default App;

