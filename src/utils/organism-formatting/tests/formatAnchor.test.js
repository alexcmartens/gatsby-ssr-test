import formatAnchor from "../formatAnchor"

describe("formatAnchor", () => {
  it("should return null", () => {
    const response = formatAnchor(undefined)

    expect(response).toEqual(null)
  })

  it("should return a formatted anchor string", () => {
    const response = formatAnchor("Hello #friend")

    expect(response).toEqual("hello-friend")
  })

  it("should handle junk without breaking", () => {
    const response = formatAnchor({ test: "what" })

    expect(response).toEqual(null)
  })
})
