import renderer from "react-test-renderer"
import checkForExternalLink from "../checkForExternalLink"

describe("checkForExternalLink", () => {
  it("should return false if nothing is passed into method", () => {
    const result = checkForExternalLink()
    expect(result).toEqual(false)
  })

  it("should return true if link starts with http", () => {
    const result = checkForExternalLink("https://www.trimble.com")
    expect(result).toEqual(true)
  })

  it("should return false if link does not start with http", () => {
    const result = checkForExternalLink("/laura-shamus")
    expect(result).toEqual(false)
  })
})
