function isValidNumber(n, base) {
  return Number.parseInt(n, base).toString(base) === String(n).toLowerCase()
}
