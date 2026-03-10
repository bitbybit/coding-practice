function fibonacciSequence(startSequence, length) {
  if (length === 0) return []

  const sequence = startSequence.slice(0, length)

  for (let i = sequence.length; i < length; i++) {
    sequence.push((sequence[i - 1] ?? 0) + (sequence[i - 2] ?? 0))
  }

  return sequence
}
