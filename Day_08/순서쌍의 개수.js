const solution = (n) => {
  let result = 0;
  for (let i = 1; i < n + 1; i++) n % i == 0 ? result++ : (result += 0);
  return result;
};
