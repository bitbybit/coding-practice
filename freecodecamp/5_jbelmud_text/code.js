function jbelmu(text) {
  return text.split(' ').map((word) => {
    const letters = word.split('').slice(1, word.length - 1).sort().join('')
    return `${word.at(0)}${letters}${word.length > 1 ? word.at(-1) : ''}`
  }).join(' ')
}
