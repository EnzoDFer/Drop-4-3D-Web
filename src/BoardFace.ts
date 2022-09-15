import { IBoardFace, IBoardCol } from "./Global";

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
      ['','','',''],
      ['','','',''],
      ['','','',''],
      ['','','',''],
    ];
  }

  public static dropIntoRow(myArray:IBoardCol,player: 'P1'|'P2'):IBoardCol {
    const newArray: IBoardCol = [...myArray];
    const emptyIndex: number = newArray.indexOf('');
    if (emptyIndex!==-1){
      newArray[emptyIndex] = player;
      return newArray;
    }
    return newArray;
  }

  public static checkForFullArray(col:IBoardCol) {
    if (col[3]==='') {
      return false;
    }
    return true;
  }
}