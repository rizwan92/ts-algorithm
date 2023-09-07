const isPrime = (n: number): boolean => {
  let divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else {
      if (divisor >= 3) {
        divisor = divisor + 2;
      } else {
        divisor = divisor + 1;
      }
    }
  }
  return true;
};

const isPrimeAdvance = (n: number): boolean => {
  let divisor = 3;
  // 2 and 3 is prime number
  if (n === 2 || n === 3) {
    return true;
  }

  // if number is divisible by 2 then number is not a prime number
  if (n % 2 === 0) {
    return false;
  }

  // now we are left with all the odd numbers
  // we need to find optimized way to fin of odd is odd numner or not

  const limit = Math.sqrt(n);

  while (divisor <= limit) {
    console.log(divisor);
    if (n % divisor === 0) {
      return false;
    } else {
      divisor += 2;
    }
  }

  return true;
};

console.log(isPrimeAdvance(97));
