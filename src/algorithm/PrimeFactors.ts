const primeFactors = (n: number): number[] => {
  const factors: number[] = [];
  let divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(n);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
};

console.log(primeFactors(69));
