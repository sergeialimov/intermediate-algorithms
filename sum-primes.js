function sumPrimes(num) {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) { 
        return false;
      }; 
    }
    return num !== 1 && num !== 0;
  }
  
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

