export function sortByAlphabeticalOrder(res: any) {
  res = res.sort((a: any, b: any) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return res;
}
