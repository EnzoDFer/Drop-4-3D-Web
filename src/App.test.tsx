import { BoardFace, Game} from './App';

test('Can update row once', ()=> {
  const testBoardFace = new BoardFace();
  expect(testBoardFace.boardFace[0]).toStrictEqual(['','','','']);
  testBoardFace.dropIntoRow(testBoardFace.boardFace[0],'p1');
});

test('Can fill row and not exceed', ()=> {
  const testBoardFace = new BoardFace();
  testBoardFace.dropIntoRow(testBoardFace.boardFace[0],'p1');
  testBoardFace.dropIntoRow(testBoardFace.boardFace[0],'p1');
  testBoardFace.dropIntoRow(testBoardFace.boardFace[0],'p1');
  testBoardFace.dropIntoRow(testBoardFace.boardFace[0],'p1');
  testBoardFace.dropIntoRow(testBoardFace.boardFace[0],'p1');
  expect(testBoardFace.boardFace[0]).toStrictEqual(['p1','p1','p1','p1']);
});

test('Player properly changes on call',()=>{
  const newGame = new Game();
  expect(newGame.player).toBe('P1');
  newGame.changeTurns(); // pass turn to p2
  expect(newGame.player).toBe('P2');
  newGame.changeTurns(); // and back to p1
  expect(newGame.player).toBe('P1');
});