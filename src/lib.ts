export const calcNumOfWords = (txt: string): number => {
  const trimmedTxt = txt.trim();
  return !trimmedTxt ? 0 : trimmedTxt.split(" ").length;
};
