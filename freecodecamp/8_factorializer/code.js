function factorial(n) {
  return new Array(n).fill(0).map((_, index) => index + 1).reduce((prev, current) => prev * current, 1)
}
