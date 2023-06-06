import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderSuperHero, {
  checkVaraintsAndContentSideMatch,
} from "../heroes/FormatAndRenderSuperHero"

describe("FormatAndRenderSuperHero", () => {
  it("renders correctly", () => {
    const data = {
      header: "header",
      eyebrow: "eyebrow",
      variant: "variant_1",
      contentSide: "left",
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
      .create(<FormatAndRenderSuperHero data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
