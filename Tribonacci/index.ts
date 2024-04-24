function tribonacci(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  let T0 = 0;
  let T1 = 1;
  let T2 = 1;
  let Tn = 0;

  for (let i = 3; i <= n; i++) {
    Tn = T0 + T1 + T2;
    T0 = T1;
    T1 = T2;
    T2 = Tn;
  }

  return Tn;
}
