export class Game {
  private _player: 'P1' | 'P2';
  private _board: Board;
  public get player() {
    return this._player;
  }
  public set player(player:'P1' | 'P2') {
    this._player = player;
  }
  public get board() {
    return this._board;
  }
  public changeTurns(): void {
    this.player==='P1'?this.player='P2':this.player='P1';
  }
  constructor() {
    this._player = 'P1';
    this._board = new Board();
  }
}


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
      ['slot 0','slot 1','slot 2','slot 3'],
      ['slot 4','slot 5','slot 6','slot 7'],
      ['slot 8','slot 9','slot 10','slot 11'],
      ['slot 12','slot 13','slot 14','slot 15'],
    ];
  }

  public dropIntoRow(myArray:IBoardCol,player: 'P1'|'P2'):IBoardCol {
    const emptyIndex: number = myArray.indexOf('');
    if (emptyIndex!==-1){
      myArray[emptyIndex] = player;
      return myArray;
    }
    return myArray;
  }
}


function App() {  
  const game = new Game();
  return (
    <div>
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

