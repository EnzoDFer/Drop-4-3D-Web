import { BoardFace } from "./BoardFace";
import { Game } from "./Game";
import { Button, SimpleGrid } from '@mantine/core'
import {IBoardCol, IBoardFace, IBoardItem, tupleToArray} from './Global';


const BoardFaceDisplay = ({face}:{face:IBoardFace}) => {
  return (
    <SimpleGrid 
      cols={4}
      sx={{
        gap:'1px'
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

  return (
    <Button
      sx={{
        height:'fit-content'
      }}
    >
      <SimpleGrid
        cols={1}
        sx={{
          gap:'1px'
        }}
      >
        {tupleToArray(column).reverse().map((boardItem:IBoardItem,index)=>{
          return <div
          key={`face #${index}`}
          >{boardItem}</div>
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

