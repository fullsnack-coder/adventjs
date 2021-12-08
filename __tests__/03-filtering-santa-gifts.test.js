const checkIsValid = require("../src/03-filtering-santa-gifts.js")

describe("filtering santa gifts checking if is valid", () => {
  it("return isValid true if we pass a list of gifts", () => {
    const isValid = checkIsValid(" car doll ")
    expect(isValid).toBe(true)
  })

  it("should return isValid true if appear parentesis around the gift", () => {
    const isValid = checkIsValid("(car) hello world new (gift)")
    expect(isValid).toBe(true)
  })

  it("should return isValid false if appear unclosed parentesis around the gift", () => {
    const isValid = checkIsValid("(munieca consola bici")
    expect(isValid).toBe(false)
  })

  it("should return false if the giftname wrapped by parenthesis includes special characters", () => {
    const letter = "doll cart (food[)"
    const isValid = checkIsValid(letter)
    expect(isValid).toBe(false)
  })
})
