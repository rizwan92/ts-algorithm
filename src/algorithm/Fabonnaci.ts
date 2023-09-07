const fabonacciNumber = (n: number): number => {
  const fabo: number[] = [1, 2];
  for (let index = 2; index <= n; index++) {
    fabo[index] = fabo[index - 1] + fabo[index - 2];
  }
  return fabo[n];
};

console.log(fabonacciNumber(4));

// recurssiveWay

const faboRecursive;
