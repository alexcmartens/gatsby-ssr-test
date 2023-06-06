import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderCtaWithHeader from "../CTA/FormatAndRenderCtaWithHeader"

describe("FormatAndRenderCtaWithHeader", () => {
  it("renders correctly", () => {
    const data = {
      variant: "dark",
      alignment: "left",
      eyebrow: "Eyebrow option",
      headline: "Header title",
      subhead: "Subhead can go here.",
      body: {
        childMarkdownRemark: {
          html: "<p>Anim aliquip aliqua aliqua id qui aute anim reprehenderit tempor velit est sint laborum. Cillum et laboris aliquip consequat. Consectetur commodo nisi laborum voluptate. Commodo est ullamco pariatur ut nostrud pariatur. Anim aliquip aliqua aliqua id qui aute anim reprehenderit tempor velit est sint laborum. Cillum et laboris aliquip consequat.</p>\n<ul>\n<li>Cillum et laboris aliquip consequat. El nu consectetur commodo nisi laborum voluptate.</li>\n<li>Cillum et laboris aliquip consequat. El nu consectetur commodo nisi laborum voluptate.</li>\n</ul>",
        },
      },
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
      .create(<FormatAndRenderCtaWithHeader data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
