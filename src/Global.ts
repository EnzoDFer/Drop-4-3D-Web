//0 first row, 1 second, etc
export type IBoardFace = [IBoardCol,IBoardCol,IBoardCol,IBoardCol];
export type IBoardCol = [IBoardItem,IBoardItem,IBoardItem,IBoardItem];
export type IBoardItem = string|undefined;
