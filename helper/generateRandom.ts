import { characters } from './characters';

export const generateRandomNumber = (
  min: number,
  max: number
): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomRoute = (): string => {
  return characters[generateRandomNumber(0, characters.length - 1)]
    .route;
};
