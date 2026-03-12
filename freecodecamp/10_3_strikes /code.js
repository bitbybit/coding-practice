function squaresWithThree(n) {
  return new Array(n).fill(0).map((_, index) => (index + 1) * (index + 1)).filter((value) => value.toString().includes('3')).length
}
