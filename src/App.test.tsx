import { BoardFace } from "./BoardFace";
import { Game } from "./Game";

test('Can update row once', ()=> {
  const testBoardFace = new BoardFace();
  expect(testBoardFace.boardFace[0]).toStrictEqual(['','','','']);
  BoardFace.dropIntoRow(testBoardFace.boardFace[0],'P1');
});

test('Can fill row and not exceed', ()=> {
  const testBoardFace = new BoardFace();
  BoardFace.dropIntoRow(testBoardFace.boardFace[0],'P1');
  BoardFace.dropIntoRow(testBoardFace.boardFace[0],'P1');
  BoardFace.dropIntoRow(testBoardFace.boardFace[0],'P1');
  BoardFace.dropIntoRow(testBoardFace.boardFace[0],'P1');
  BoardFace.dropIntoRow(testBoardFace.boardFace[0],'P1');
  expect(testBoardFace.boardFace[0]).toStrictEqual(['P1','P1','P1','P1']);
});

test('Player properly changes on call',()=>{
  const newGame = new Game();
  expect(newGame.player).toBe('P1');
  newGame.changeTurns(); // pass turn to p2
  expect(newGame.player).toBe('P2');
  newGame.changeTurns(); // and back to P1
  expect(newGame.player).toBe('P1');
});