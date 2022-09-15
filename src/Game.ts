import { Board } from "./Board";
import { BoardFace } from "./BoardFace";
import { IBoardCol } from "./Global";

export class Game {
  private _player: 'P1' | 'P2';
  private _board: Board;
  private _gameOver: boolean;
  public get player() {
    return this._player;
  }
  public set player(player:'P1' | 'P2') {
    this._player = player;
  }
  public get board() {
    return this._board;
  }
  public get gameOver(){
    return this._gameOver
  }
  private set gameOver(won:boolean){
    this._gameOver=won;
  }
  constructor(prevGame?:Game) {
    this._player = prevGame?prevGame.player:'P1';
    this._board = prevGame?prevGame.board:new Board();
    this._gameOver = prevGame?prevGame.gameOver:false;
  }
  private changeTurns(): void {
    this.player==='P1'?this.player='P2':this.player='P1';
  }
  public updateCol(col:IBoardCol,cubeIndex:number,faceIndex:number,player:'P1'|'P2'){
    this.board.cube[cubeIndex].boardFace[faceIndex] = BoardFace.dropIntoRow(col,player);
  }
  public processTurn() {
    this.checkWinner();
    this.changeTurns();
  }
  private checkWinner() {
    //Win Checks which involve one face
    this.board.cube.forEach((face:BoardFace)=>{
      //check for vertical col winners
      face.boardFace.forEach((col:IBoardCol)=>{
        if (BoardFace.checkForFullArray(col)) {
          this.winGame();
        }
      })
      //check for horizontal face win
      for (let i=0;i<=3;i++) {
        const playerArray = [face.boardFace[0][i],face.boardFace[1][i],face.boardFace[2][i],face.boardFace[3][i]];
        if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
          this.winGame();
        }
      }
      //Next two check for diagonal wins although this pattern also triggers vert win check
      let playerArray = [face.boardFace[0][0],face.boardFace[1][1],face.boardFace[2][2],face.boardFace[3][3]];
      if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
        this.winGame();
      }
      playerArray = [face.boardFace[0][3],face.boardFace[1][2],face.boardFace[2][1],face.boardFace[3][0]];
      if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
        this.winGame();
      }
    })
    //multi-face win checks
    //horizontal multi face
    for (let j = 0; j < this.board.cube[0].boardFace[0].length;j++) {
      for (let i=0;i<=3;i++) {
        //check for one side multi face win
        let playerArray = [
          this.board.cube[0].boardFace[j][i],
          this.board.cube[1].boardFace[j][i],
          this.board.cube[2].boardFace[j][i],
          this.board.cube[3].boardFace[j][i],
        ]
        if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
          this.winGame();
        }
      }
    }
    //diagonal win check across mult faces
    let playerArray = [
      this.board.cube[0].boardFace[0][0],
      this.board.cube[1].boardFace[0][1],
      this.board.cube[2].boardFace[0][2],
      this.board.cube[3].boardFace[0][3],
    ]
    if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
      this.winGame();
    }
    playerArray = [
      this.board.cube[0].boardFace[0][3],
      this.board.cube[1].boardFace[0][2],
      this.board.cube[2].boardFace[0][1],
      this.board.cube[3].boardFace[0][0],
    ]
    if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
      this.winGame();
    }
    playerArray = [
      this.board.cube[0].boardFace[3][0],
      this.board.cube[1].boardFace[3][1],
      this.board.cube[2].boardFace[3][2],
      this.board.cube[3].boardFace[3][3],
    ]
    if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
      this.winGame();
    }
    playerArray = [
      this.board.cube[0].boardFace[3][3],
      this.board.cube[1].boardFace[3][2],
      this.board.cube[2].boardFace[3][1],
      this.board.cube[3].boardFace[3][0],
    ]
    if (playerArray.every((player)=>player===playerArray[0]&&player!=='')) {
      this.winGame();
    }
    //end diag win check across mult faces
  }
  private winGame() {
    console.log('Game Over! '+ this.player+' wins!');
    this.gameOver=true;
  }
}