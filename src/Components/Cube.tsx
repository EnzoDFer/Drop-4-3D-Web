import { Container } from "@mantine/core";
import { IBoardItem } from "../Global"

const PASTEL_BLUE = '#8BD3E6';
const PASTEL_RED = '#FF6D6A';

export const Cube = ({BoardItem}:{BoardItem:IBoardItem}) => {
  const sides: string[] = ['top','right','bottom','left','front','back']
  const sideComponents: JSX.Element[] = [];
  for (let i = 0; i<sides.length;i++) {
    sideComponents.push(
      <Container 
        key={`side ${i}`}
        sx={{
          width:'100%',
          height:'100%',
          backgroundColor:BoardItem===''?'transparent':
            BoardItem==='P1'?PASTEL_BLUE:PASTEL_RED,
          border:'1px solid black'
        }}
      />
    );
  }
  return (
    <Container
      sx={{
        width:'50px',
        height:'50px',
        padding: '0',
      }}
    >
      {sideComponents}
    </Container>
  );
}

export {}