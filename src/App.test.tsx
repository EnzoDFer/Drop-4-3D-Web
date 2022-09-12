import { BoardFace } from './App';

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
