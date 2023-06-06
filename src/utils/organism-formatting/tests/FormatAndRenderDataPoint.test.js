import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderDataPoint, {
  formatVariantToMachineName,
} from "../DataPoint/FormatAndRenderDataPoint"

describe("FormatAndRenderDataPoint", () => {
  it("renders correctly", () => {
    const points = [
      { item: "item1" },
      { item: "item2" },
      { item: "item3" },
      { item: "item4" },
    ]

    const colorScheme = "white"

    const data = { points, variant: "variant_1", colorScheme }

    const tree = renderer
      .create(<FormatAndRenderDataPoint data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("formatVariantToMachineName", () => {
  it("should return default variant if no argument is passed into method", () => {
    const result = formatVariantToMachineName()
    expect(result).toEqual("variant_1")
  })

  it("should return correct variant when string is passed in", () => {
    const result = formatVariantToMachineName("Horizontal")
    expect(result).toEqual("variant_1")

    const result1 = formatVariantToMachineName(
      "Vertical Long align left (3 points)"
    )
    expect(result1).toEqual("variant_2a")

    const result2 = formatVariantToMachineName(
      "Vertical Long centered (3 points)"
    )
    expect(result2).toEqual("variant_2b")

    const result3 = formatVariantToMachineName("Vertical Short (1 point only)")
    expect(result3).toEqual("variant_3")
  })

  it("should return variant_1 if incorrect string is passed into method", () => {
    const result = formatVariantToMachineName("Variant 1000")
    expect(result).toEqual("variant_1")
  })
})
