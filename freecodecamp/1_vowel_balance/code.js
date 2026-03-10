function isBalanced(s) {
  const vowels = /a|e|i|o|u/gi
  const isEven = s.length % 2 === 0
  const half = Math.floor(s.length / 2)
  const part1 = s.slice(0, half)
  const part2 = s.slice(isEven ? half : half + 1)
  return (part1?.match(vowels)?.length ?? 0) === (part2?.match(vowels)?.length ?? 0)
}

