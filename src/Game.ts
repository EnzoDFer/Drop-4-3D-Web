import { Board } from "./Board";
import { BoardFace } from "./BoardFace";
import { IBoardCol } from "./Global";

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
  constructor(prevGame?:Game) {
    this._player = prevGame?prevGame.player:'P1';
    this._board = prevGame?prevGame.board:new Board();
  }
  private changeTurns(): void {
    this.player==='P1'?this.player='P2':this.player='P1';
  }
  public updateCol(col:IBoardCol,cubeIndex:number,faceIndex:number,player:'P1'|'P2'){
    let copy: Game = this;
    copy.board.cube[cubeIndex].boardFace[faceIndex] = BoardFace.dropIntoRow(col,player);
    return copy;
  }
  public processTurn() {
    this.checkWinner();
    this.changeTurns();
  }
  private checkWinner() {
    //check for vertical col winners
    this.board.cube.forEach((face:BoardFace)=>{
      face.boardFace.forEach((col:IBoardCol)=>{
        if (BoardFace.checkForFullArray(col)) {
          this.winGame();
        }
      })
    })
  }
  private winGame() {
    console.log('Game Over! '+ this.player+' wins!');
  }
}