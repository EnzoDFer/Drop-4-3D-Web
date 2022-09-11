class Board {
  
}

//0 first row, 1 second, etc
type IBoardFace = [IBoardRow,IBoardRow,IBoardRow,IBoardRow];
type IBoardRow = [IBoardItem,IBoardItem,IBoardItem,IBoardItem];
type IBoardItem = string|undefined;

class BoardFace {
  private _boardFace: IBoardFace;
  public get boardFace(){
    return this._boardFace;
  }
  private set boardFace(newBoardFace: IBoardFace) {
    this._boardFace = newBoardFace;
  }
  public updateRow(rowNum:number,player:string){
    
  }

  constructor() {
    this._boardFace = [
      Array(4) as IBoardRow,
      Array(4) as IBoardRow,
      Array(4) as IBoardRow,
      Array(4) as IBoardRow,
    ];
  }

  private dropIntoRow(myArray:IBoardRow,player: string) {
    const newArray = myArray.reduce((array,slot:IBoardItem)=>{
      if (slot!==undefined) array.push(slot);
      return array;
    },[])
  }
}


function App() {  
  const testBoardFace:BoardFace = new BoardFace();
  return (
    <div>
      {testBoardFace.boardFace[4]}
    </div>
  );
}

export default App;
