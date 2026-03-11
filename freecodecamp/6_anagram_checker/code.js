function areAnagrams(str1, str2) {
  const letters1 = str1.replaceAll(' ', '').toLowerCase().split('').sort()
  const letters2 = str2.replaceAll(' ', '').toLowerCase().split('').sort()

  if (letters1.length !== letters2.length) return false

  for (let i = 0; i < letters1.length; i++) {
    if (letters1[i] !== letters2[i]) return false
  }

  return true
}
