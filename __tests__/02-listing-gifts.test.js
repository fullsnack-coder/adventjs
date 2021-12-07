// @ts-check

const listGifts = require("../src/02-listing-gifts")

describe("list of gifts", () => {
  it("should return a list of gifts in an empty object", () => {
    const gifts = listGifts("")
    expect(gifts).toEqual({})
  })

  it("should return a list with the repeated times of gifts", () => {
    const gifts = listGifts("doll book book")
    expect(gifts).toEqual({
      doll: 1,
      book: 2,
    })
  })

  it("should return a list of gifts without the gifts that name start with _", () => {
    const gifts = listGifts("doll_book book _doll")
    expect(gifts).toEqual({
      book: 1,
      doll_book: 1,
    })
  })

  it("should count gifts separated by spaces and double spaces", () => {
    const gifts = listGifts("   doll book  book    ")
    expect(gifts).toEqual({
      doll: 1,
      book: 2,
    })
  })
})
