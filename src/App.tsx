
class Board {
  private _cube: [BoardFace,BoardFace,BoardFace,BoardFace];
  public get cube() {
    return this._cube;
  }

  constructor() {
    this._cube = [
      new BoardFace(),
      new BoardFace(),
      new BoardFace(),
      new BoardFace()
    ]
  }
}

//0 first row, 1 second, etc
type IBoardFace = [IBoardCol,IBoardCol,IBoardCol,IBoardCol];
type IBoardCol = [IBoardItem,IBoardItem,IBoardItem,IBoardItem];
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
      Array('','','','') as IBoardCol,
      Array('','','','') as IBoardCol,
      Array('','','','') as IBoardCol,
      Array('','','','') as IBoardCol,
    ];
  }

  public dropIntoRow(myArray:IBoardCol,player: string):IBoardCol {
    const emptyIndex: number = myArray.indexOf('');
    if (emptyIndex!==-1){
      myArray[emptyIndex] = player;
      return myArray;
    }
    return myArray;
  }
}


function App() {  

  return (
    <div>
    </div>
  );
}

export default App;
