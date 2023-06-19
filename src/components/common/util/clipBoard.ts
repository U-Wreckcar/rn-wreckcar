export const clipBoardHandle = (copyData: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(copyData);
    console.log('복사');
  }
};
