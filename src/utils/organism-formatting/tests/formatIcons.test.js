import renderer from "react-test-renderer"
import formatIcons from "../formatIcons"

describe("formatIcons", () => {
  it("should format icons appropriately", () => {
    const icon = "Circle Star"
    const result = formatIcons(icon)
    const expected = "mxp-icon-circle-star"
    expect(result).toEqual(expected)
  })

  it("should not break if nothing is passed into method", () => {
    const result = formatIcons()
    expect(result).toEqual(undefined)
  })

  it("should not break if wrong data type is passed in", () => {
    const result = formatIcons({ hey: "hi" })
    const result1 = formatIcons(["apples", "oranges", "bananas"])
    const result2 = formatIcons(1627)

    expect(result).toEqual(undefined)
    expect(result1).toEqual(undefined)
    expect(result2).toEqual(undefined)
  })
})
