import { BoardFace } from "./BoardFace";

export class Board {
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