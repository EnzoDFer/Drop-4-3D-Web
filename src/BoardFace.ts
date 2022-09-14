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