const freteMagalu = function (peso) {
  if (peso <= 0.5) {
    return 6.98 // 27.9 / 16,74
  } else if (peso <= 1) {
    return 8.23 // 32.9 / 19.74
  } else if (peso <= 2) {
    return 8.98 // 21.54 / 35.9
  } else if (peso <= 5) {
    return 11.23 // 26.94 / 44.9
  } else if (peso <= 9) {
    return 11.98 // 28.74 / 47.9
  } else if (peso <= 13) {
    return 13.23 // 31.74 / 52.9
  } else if (peso <= 17) {
    return 14.48 // 34.74 / 57.9
  } else if (peso <= 23) {
    return 15.73 // 37.74 / 62.9
  } else if (peso <= 29) {
    return 16.98 // 40.74 / 67.9
  } else if (peso > 29) {
    return 17.48 // 41.94 / 69.9
  }
}

console.log(freteMagalu(1))
