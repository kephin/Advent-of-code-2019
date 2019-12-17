import test from 'ava'

test('day4-1', t => {
  let counter = 0
  let isAdjacentTheSame, isNeverDecrease
  for (let digit = 152085; digit <= 670283;) {
    // Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)
    isNeverDecrease = true
    for (let index = 0; index < 5; index++) {
      if (digit.toString()[index] > digit.toString()[index + 1]) {
        isNeverDecrease = !isNeverDecrease
        // turn 12413949 into 12444444
        const digitStringArray = digit.toString().split('')
        const updatedDigitString = digitStringArray.map((v, i) => {
          if (i >= index + 1 ) return digitStringArray[index]
          else return v
        }).join('')
        digit = parseInt(updatedDigitString, 10)
        break
      }
    }
    if (!isNeverDecrease) continue
    // Two adjacent digits are the same (like 22 in 122345)
    isAdjacentTheSame = false
    for (let index = 0; index < 5; index++) {
      if (digit.toString()[index] === digit.toString()[index + 1]) {
        isAdjacentTheSame = !isAdjacentTheSame
        break
      }
    }
    if (isAdjacentTheSame) counter++
    digit++
  }

  t.is(counter, 1764)
})
