const countSheeps = require("../src/01-counting-sheeps")

describe("count sheeps", () => {
  it("should count 0 sheeps after pass an empty array", () => {
    expect(countSheeps([])).toEqual([])
  })

  it("should count sheeps with color red", () => {
    const sheeps = countSheeps([
      { color: "red", name: "Reksio" },
      { color: "white", name: "Burek" },
      { color: "red", name: "komanche" },
    ])

    expect(sheeps).toEqual([{ color: "red", name: "komanche" }])
  })

  it("should return sheeps that contains n & a in their name and color red", () => {
    const sheeps = countSheeps([
      { color: "white", name: "n&a" },
      { color: "red", name: "n&a" },
      { color: "red", name: "grefg" },
      { color: "red", name: "NoWay" },
    ])

    expect(sheeps).toEqual([
      { color: "red", name: "n&a" },
      { color: "red", name: "NoWay" },
    ])
  })
})
