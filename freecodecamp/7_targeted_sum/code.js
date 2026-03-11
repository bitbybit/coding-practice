function findTarget(arr, target) {
  const result = arr.reduce((indexes, current, currentIndex, array) => {
    if (indexes.length !== 0) return indexes

    for (let i = 0; i < array.length; i++) {
      if (i === currentIndex) continue

      if (current + array[i] === target) return [currentIndex, i]
    }

    return []
  }, [])

  if (result.length === 0) return 'Target not found'

  return result
}
