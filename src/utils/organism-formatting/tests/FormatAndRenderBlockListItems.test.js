import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderBlockListItems from "../BlockListItems/FormatAndRenderBlockListItems"

jest.mock("../formatBaseMolecules")
jest.mock("../formatCards")

describe("FormatAndRenderBlockListItems", () => {
  it("renders correctly", () => {
    const data = {
      header: "Header",
    }

    const tree = renderer
      .create(<FormatAndRenderBlockListItems data={data} i={0} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
