// challenge url: https://adventjs.dev/challenges/01 - Counting Sheep
const hasColorRed = ({ color }) => color === "red"
const nameIncludesAAndN = ({ name }) =>
  name.toLowerCase().includes("a") && name.toLowerCase().includes("n")

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(hasColorRed).filter(nameIncludesAAndN)
}

module.exports = countSheeps
