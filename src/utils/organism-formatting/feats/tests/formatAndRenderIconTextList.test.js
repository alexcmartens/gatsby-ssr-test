import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderIconTextList from "../FormatAndRenderIconTextList"

jest.mock("../../formatTheme")

describe("FormatAndRenderIconTextList", () => {
  it("renders correctly", () => {
    const data = {
      theme: "White",
      items: [
        {
          icon: "ico-annotate-48px",
          headline: "Headline Lorem ipsum dolor sit amet",
          body: {
            childMarkdownRemark: {
              html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vitae   molestie aliquam iaculis eu et ultricies nec.</p>",
            },
          },
        },
      ],
      disableIcon: false,
    }

    const tree = renderer
      .create(<FormatAndRenderIconTextList data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
