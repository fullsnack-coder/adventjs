// challenge url: https://adventjs.dev/challenges/03

const isValidLetter = (letter = "") => {
  const characters = letter.split("")
  const openParensCounted = characters.filter((char) => char === "(").length
  const closedParensCounted = characters.filter((char) => char === ")").length
  if (
    openParensCounted === closedParensCounted &&
    !letter.match(/[\[\]{}]/g) &&
    !letter.match(/[(]\W+[)]|[(][)]/g)
  ) {
    return true
  }
  return false
}

module.exports = isValidLetter
