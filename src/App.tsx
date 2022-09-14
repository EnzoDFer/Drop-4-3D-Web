import { BoardFace } from "./BoardFace";
import { Game } from "./Game";
import { Button, Container, SimpleGrid } from '@mantine/core'
import {IBoardCol, IBoardFace, IBoardItem, tupleToArray} from './Global';
import { useState } from "react";


const BoardFaceDisplay = ({face}:{face:IBoardFace}) => {
  return (
    <SimpleGrid 
      cols={4}
      sx={{
        gap:'1px',
        width:'fit-content'
      }}
    >
      {face.map((boardCol:IBoardCol,index)=>{
        return <BoardColDisplay 
          column={boardCol} 
          key={`face #${index}`}
        />
      })}
    </SimpleGrid>
  );
}

const BoardColDisplay = ({column}:{column:IBoardCol}) => {
  const [col,setCol] = useState<IBoardCol>(column);

  return (
    <Button
      sx={{
        height:'fit-content',
        padding: '1rem'

      }}
      onClick={()=>setCol(BoardFace.dropIntoRow(col,'P1'))}
    >
      <SimpleGrid
        cols={1}
        sx={{
          gap:'1px',
        }}
      >
        {tupleToArray(col).reverse().map((boardItem:IBoardItem,index)=>{
          return (
            <Container
              key={`face #${index}`}
              sx={{
                height:'2rem',   
              }}
            >
              {boardItem}
            </Container>
          );
        })}
      </SimpleGrid>
    </Button>
  );
}


function App() {  
  const game = new Game();
  return (
    <div>
      {game.board.cube.map((face:BoardFace,index: number)=>{
          return <div key={`face #${index+1}`}>
            {`face #${index+1}`}
            <BoardFaceDisplay face={face.boardFace}/>      
          </div>
      })}
    </div>
  );
}

export default App;

