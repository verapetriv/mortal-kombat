import { AllCoordinatesType, Arrows } from './types';

export const getAllCoordinates = (
  countHeroesInRow: number,
  countHeroesInColumn: () => number,
  countHeroes: number,
): AllCoordinatesType => {
  const heroBeforeList: number = countHeroes - 1;
  const heroAfterList: number = countHeroes - 2;

  const allCoordinates: AllCoordinatesType = {
    [heroBeforeList]: { x: -1, y: 0 },
    [heroAfterList]: { x: countHeroesInRow, y: 0 },
  };
  let x = 0;
  let y = 0;
  if (countHeroesInRow) {
    for (let i = 0; i < countHeroes; i++) {
      if (i < countHeroesInRow) {
        allCoordinates[i] = { x, y };
        x += 1;
      }

      if (i >= countHeroesInRow) {
        for (let j = 1; j <= countHeroesInColumn(); j++) {
          if (i >= j * countHeroesInRow && i < (j + 1) * countHeroesInRow) {
            y = j;
            allCoordinates[i] = { x: x - j * countHeroesInRow, y };
            x++;
          }
        }
      }
    }
  }
  return allCoordinates;
};

export const getNextCoordinates = (
  allCoordinates: AllCoordinatesType,
  activeCardIndex: number,
  countHeroesInRow: number,
  key: keyof Arrows,
) => {
  let x = allCoordinates[activeCardIndex].x;
  let y = allCoordinates[activeCardIndex].y;

  const allCoordinatesValues = Object.values(allCoordinates);
  const isCorrectNextArrow = (nextX: number, nextY: number): boolean =>
    !!allCoordinatesValues.find((item) => item.x === nextX && item.y === nextY);

  switch (key) {
    case Arrows.ArrowUp:
      if (isCorrectNextArrow(x, y - 1)) {
        y = y - 1;
      }

      break;
    case Arrows.ArrowDown:
      if (isCorrectNextArrow(x, y + 1)) {
        y = y + 1;
        break;
      }
      if (isCorrectNextArrow(x - 1, y + 1)) {
        y = y + 1;
        x = x - 1;
      }

      break;
    case Arrows.ArrowLeft:
      x = isCorrectNextArrow(x - 1, y) ? x - 1 : x;

      break;
    case Arrows.ArrowRight:
      x = isCorrectNextArrow(x + 1, y) ? x + 1 : x;

      break;
    default:
      break;
  }

  return [x, y];
};

export const getKeyByValue = <T extends object>(object: T, value: unknown) => {
  return Object.keys(object).find(
    (key) => JSON.stringify(object[key as keyof T]) === JSON.stringify(value),
  );
};
