import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderFullBackgroundHero from "../FormatAndRenderFullBackgroundHero"

jest.mock("../../formatTheme")

describe("FormatAndRenderFullBackgroundHero", () => {
  it("renders correctly", () => {
    const data = {
      colorScheme: "White",
      variant: "Top Half",
      backgroundImage: {
        title: "720x720",
        image: {
          title: "720x720",
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/2aIM2EvXTK5yrpIHrvP5k5/6f7a3669abb2bf2ec39b635a91da90f6/720x720.jpg",
            details: { image: { height: 720, width: 720 } },
          },
        },
        focalPoint: { focalPoint: { y: 224, x: 358 } },
      },
      bottomBackgroundImage: {
        title: "720x720",
        image: {
          title: "720x720",
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/2aIM2EvXTK5yrpIHrvP5k5/6f7a3669abb2bf2ec39b635a91da90f6/720x720.jpg",
            details: { image: { height: 720, width: 720 } },
          },
        },
        focalPoint: { focalPoint: { y: 224, x: 358 } },
      },
      leftContent: {
        __typename: "ContentfulCtaWithTextAndHeader",
        variant: "transparent light text",
        alignment: "left",
        eyebrow: "Eyebrow Lorem ipsum",
        headline: "Headline title",
        subhead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        body: {
          childMarkdownRemark: {
            html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vitae molestie aliquam iaculis eu et ultricies nec. Facilisis velit orci, amet mattis arcu pretium a. Tincidunt lacinia tempus dignissim elementum.</p>",
          },
        },
        ctaButtons: [
          {
            text: "About",
            url: "/about",
          },
          {
            text: "All Feats",
            url: "/all-feats",
          },
        ],
      },
      rightContent: null,
      rightContentType: null,
      rightImage: {
        __typename: "ContentfulImageWithFocalPoint",
        title: "720x720",
        image: {
          title: "720x720",
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/2aIM2EvXTK5yrpIHrvP5k5/6f7a3669abb2bf2ec39b635a91da90f6/720x720.jpg",
            details: { image: { height: 720, width: 720 } },
          },
        },
        focalPoint: { focalPoint: { y: 224, x: 358 } },
      },
      shapeType: "circle",
      shapeBorderColor: "Trimble blue",
      animation: false,
    }

    const tree = renderer
      .create(<FormatAndRenderFullBackgroundHero data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
