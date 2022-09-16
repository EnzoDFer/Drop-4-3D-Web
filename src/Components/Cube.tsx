import { Container } from "@mantine/core";
import { IBoardItem } from "../Global"
import './Cube.css'

const PASTEL_BLUE = '#8BD3E6';
const PASTEL_RED = '#FF6D6A';

export const Cube = ({BoardItem}:{BoardItem:IBoardItem}) => {
  const sides: string[] = ['top','right','bottom','left','front','back']
  const sideComponents: JSX.Element[] = [];
  for (let i = 0; i<sides.length;i++) {
    sideComponents.push(
      <Container 
        key={`side ${i}`}
        className={sides[i]}
        sx={{
          position:'absolute',
          width:'50px',
          height:'50px',
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
        perspective: '150px',
        padding: '0',
        margin: '0'
      }}
    >
      <Container
        sx={{
          width:'100%',
          height:'100%',
          padding: '0',
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        {sideComponents}
      </Container>
    </Container>
  );
}