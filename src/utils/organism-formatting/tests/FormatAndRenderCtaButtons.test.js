import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderCtaButtons from "../CTAButtons/FormatAndRenderCtaButtons"

describe("FormatAndRenderCtaButtons", () => {
  it("renders correctly", () => {
    const data = {
      variant: "dark",
      alignment: "left",
      ctaButtons: [
        {
          text: "123",
          url: "/",
        },
        {
          text: "123",
          url: "/",
        },
      ],
    }

    const tree = renderer
      .create(<FormatAndRenderCtaButtons data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
