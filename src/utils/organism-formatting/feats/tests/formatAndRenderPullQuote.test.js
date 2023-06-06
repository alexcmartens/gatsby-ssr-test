import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderPullQuote from "../FormatAndRenderPullQuote"

jest.mock("../../formatAnchor")
jest.mock("../../formatTheme")
jest.mock("../../CTASectionFormat")
jest.mock("../../formatBaseMolecules")
jest.mock("../../ctaFormat")

describe("FormatAndRenderPullQuote", () => {
  it("renders correctly", () => {
    const content = {
      __typename: "ContentfulPullQuote",
      title: "Pull Quote Test",
      quote:
        "Pull Quote can be aliquip aliqua aliqua id qui aute anim reprehenderit tempor velit est sint laborum. Cillum et laboris aliquip consequat",
      author: "Gariatur Nostrud Pariatur",
      authorCredentials: "TITLE OR CREDENTIALS FOR THE QUOTEE",
      imageWidth: "1/2",
      imagePosition: "Right",
      appearance: "Dark",
      cta: { text: "Call To Action", url: "https://example.com" },
      topImage: null,
      sideImage: {
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
    }

    const tree = renderer
      .create(<FormatAndRenderPullQuote data={content} i={0} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
