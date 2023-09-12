export interface AllCoordinatesType {
  [key: number]: { x: number; y: number };
}

export enum PLAYERS {
  MAIN = 'MAIN',
  ENEMY = 'ENEMY',
}

export enum Arrows {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
}
