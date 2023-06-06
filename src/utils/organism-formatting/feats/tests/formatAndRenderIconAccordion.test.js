import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderAccordion from "../FormatAndRenderAccordion"

jest.mock("../../formatTheme")

describe("FormatAndRenderAccordion", () => {
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
      .create(<FormatAndRenderAccordion data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
