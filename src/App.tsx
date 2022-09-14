import { BoardFace } from "./BoardFace";
import { Game } from "./Game";
import { Button, SimpleGrid } from '@mantine/core'
import {IBoardCol, IBoardItem} from './Global';


const BoardFaceDisplay = ({face}:{face:BoardFace}) => {

  return (
    <SimpleGrid cols={4}>

    </SimpleGrid>
  );
}

const BoardColDisplay = ({column}:{column:IBoardCol}) => {
  function tupleToArray<T>(tuple: T[]): T[]{
    return tuple.reduce((newArray:T[],val:T)=>{
      newArray.unshift(val);
      return newArray;
    },[])
  }

  return (
    <SimpleGrid 
      cols={1}
      sx={{
        gap:'1px'
      }}
    >
      {tupleToArray(column).map((boardItem:IBoardItem)=>{
        return <Button>{boardItem}</Button>
      })}
    </SimpleGrid>
  );
}


function App() {  
  const game = new Game();
  return (
    <div>
      <BoardColDisplay column={['slot 0','slot 1','slot 2','slot 3']}/>
      {game.board.cube.map((face:BoardFace,index: number)=>{
          return <div key={`face #${index+1}`}>
            {`face #${index+1}`}
            <div>
              {`[`}
              <span>{face.boardFace[0][3]}</span>|
              <span>{face.boardFace[1][3]}</span>|
              <span>{face.boardFace[2][3]}</span>|
              <span>{face.boardFace[3][3]}</span>
              {`]  `}
            </div>
            <div>
              {`  [`}
              <span>{face.boardFace[0][2]}</span>|
              <span>{face.boardFace[1][2]}</span>|
              <span>{face.boardFace[2][2]}</span>|
              <span>{face.boardFace[3][2]}</span>
              {`]  `}
            </div>
            <div>
              {`  [`}
              <span>{face.boardFace[0][1]}</span>|
              <span>{face.boardFace[1][1]}</span>|
              <span>{face.boardFace[2][1]}</span>|
              <span>{face.boardFace[3][1]}</span>
              {`]  `}
            </div>
            <div>
              {`  [`}
              <span>{face.boardFace[0][0]}</span>|
              <span>{face.boardFace[1][0]}</span>|
              <span>{face.boardFace[2][0]}</span>|
              <span>{face.boardFace[3][0]}</span>
              {`]`}
            </div>          
          </div>
      })}
    </div>
  );
}

export default App;

