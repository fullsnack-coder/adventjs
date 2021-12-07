// challenge url https://adventjs.dev/challenges/02 - listing gifts
// @ts-check

function listGifts(gifts) {
  const counted = {}
  const giftsCollection = !!gifts
    ? gifts
        .trim()
        .replace(/\s{2,}/g, " ")
        .split(" ")
        .filter((name = "") => !name.startsWith("_"))
    : []

  for (const giftname of giftsCollection) {
    counted[giftname] = (counted[giftname] ?? 0) + 1
  }
  return counted
}

module.exports = listGifts
