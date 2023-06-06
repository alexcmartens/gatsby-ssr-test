import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderHTMLEmbed from "../HTMLEmbed/FormatAndRenderHTMLEmbed"

describe("FormatAndRenderHTMLEmbed", () => {
  it("renders correctly", () => {
    const html = "<div><p>I AM HTML!</p></div>"

    const data = { html }

    const tree = renderer
      .create(<FormatAndRenderHTMLEmbed data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
