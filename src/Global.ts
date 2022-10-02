//0 first row, 1 second, etc
export type IBoardFace = [IBoardCol,IBoardCol,IBoardCol,IBoardCol];
export type IBoardCol = [IBoardItem,IBoardItem,IBoardItem,IBoardItem];
export type IBoardItem = ''|'P1'|'P2';

export let boardColNum: number = 4;
export let cubeSideLength: number = 100;
export const boardLength:number = boardColNum*cubeSideLength;

export function tupleToArray<T>(tuple: T[]): T[]{
  return tuple.reduce((newArray:T[],val:T)=>{
    newArray.push(val);
    return newArray;
  },[])
}