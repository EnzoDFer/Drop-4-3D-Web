import { Container } from "@mantine/core";
import { Controls } from "./Components/Controls";
import GameProvider from "./GameProvider";

function App() {  

  return (
    <Container
      sx={{
        height:'100%',
        width: '100%',
        display: 'grid',
        gridAutoRows:'2fr 8fr'
      }}
    >
      <Controls/>
      <GameProvider/>
    </Container>
  );
}

export default App;

