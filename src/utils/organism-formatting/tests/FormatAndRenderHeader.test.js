import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderHeader from "../Header/FormatAndRenderHeader"

describe("FormatAndRenderHeader", () => {
  it("renders correctly", () => {
    const data = {
      eyebrow: "Eyebrow option",
      headline: "Header title",
      subhead: "Subhead can go here.",
    }

    const tree = renderer.create(<FormatAndRenderHeader data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
