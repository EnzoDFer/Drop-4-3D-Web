import { useState } from "react";


class Board {
  
}

//0 first row, 1 second, etc
type IBoardFace = [IBoardRow,IBoardRow,IBoardRow,IBoardRow];
type IBoardRow = [IBoardItem,IBoardItem,IBoardItem,IBoardItem];
type IBoardItem = string|undefined;

export class BoardFace {
  private _boardFace: IBoardFace;
  public get boardFace(){
    return this._boardFace;
  }
  private set boardFace(newBoardFace: IBoardFace) {
    this._boardFace = newBoardFace;
  }

  constructor() {
    this._boardFace = [
      Array('','','','') as IBoardRow,
      Array('','','','') as IBoardRow,
      Array('','','','') as IBoardRow,
      Array('','','','') as IBoardRow,
    ];
  }

  public dropIntoRow(myArray:IBoardRow,player: string):IBoardRow {
    const emptyIndex: number = myArray.indexOf('');
    if (emptyIndex!==-1){
      myArray[emptyIndex] = player;
      return myArray;
    }
    console.log(`empty index is ${emptyIndex}`);
    return myArray;
  }
}


function App() {  
  const testBoardFace:BoardFace = new BoardFace();
  const [counter,setCounter] = useState(0)
  return (
    <div>

      <div>{testBoardFace.boardFace[3]+ ' : '+ counter}</div>
      <button
        onClick={()=>{
          setCounter(counter+1)
          testBoardFace.dropIntoRow(testBoardFace.boardFace[3],'p1')
          console.log(testBoardFace.boardFace[3]);
        }}
      >
        add p1
      </button>

    </div>
  );
}

export default App;
