export const calcNumOfWords = (txt: string): number =>
  !txt ? 0 : txt.trim().split(" ").length;
