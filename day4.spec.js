import test from 'ava'

// turn 12413949 into 12444444
const increaseDigit = (digit, index) => {
  const digitStringArray = digit.toString().split('')
  const increasedDigit =  digitStringArray.map((v, i) => {
    if (i >= index + 1 ) return digitStringArray[index]
    else return v
  }).join('')
  return parseInt(increasedDigit, 10)
}

const calculateIsNeverDecrease = digit => {
  for (let index = 0; index < 5; index++) {
    if (digit.toString()[index] > digit.toString()[index + 1]) {
      return [false, increaseDigit(digit, index)]
    }
  }
  return [true]
}

const isAdjacentTheSame = digit => {
  for (let index = 0; index < 5; index++) {
    if (digit.toString()[index] === digit.toString()[index + 1]) {
      return true
    }
  }
  return false
}

test('day4-1', t => {
  let counter = 0
  for (let digit = 152085; digit <= 670283;) {
    // Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)
    const [isNeverDecrease, newDigit] = calculateIsNeverDecrease(digit)

    if (!isNeverDecrease) {
      digit = newDigit
      continue
    }

    // Two adjacent digits are the same (like 22 in 122345)
    if (isAdjacentTheSame(digit)) counter++
    digit++
  }

  t.is(counter, 1764)
})
