import { Container } from "@mantine/core";
import { BoardColDisplay } from "./Components/BoardColDisplay";
import { Cube } from "./Components/Cube";
import GameProvider from "./GameProvider";
import { boardLength, cubeSideLength,boardColNum } from "./Global";

function App() {  

  return (
    //<GameProvider/>
    <div>
      <BoardColDisplay/>
      <BoardColDisplay/>
    </div>
  );
}

export default App;

