import { Board } from "./Board";

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