import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderInPageJumpNav from "../InPageJumpNav/FormatAndRenderInPageJumpNav"

describe("FormatAndRenderInPageJumpNav", () => {
  it("renders correctly", () => {
    const pageSections = [
      { title: "Overview", link: "overview" },
      { title: "Uses by Industry", link: "uses" },
      { title: "Features & Benefits", link: "features" },
      { title: "Complete Solutions and Lorem Ipsum", link: "solutions" },
      { title: "Articles", link: "articles" },
    ]

    const tree = renderer
      .create(
        <FormatAndRenderInPageJumpNav
          pageSectionsData={pageSections}
          navTitle={"This Page"}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
