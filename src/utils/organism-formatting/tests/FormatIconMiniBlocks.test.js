import { Link } from "gatsby"
import formatIconMiniBlocks from "../formatIconMiniBlocks"

describe("formatIconMiniBlocks", () => {
  it("should return null if nothing is passed into method", () => {
    const result = formatIconMiniBlocks()
    expect(result).toEqual(null)
  })

  it("should format data and return array of objects", () => {
    const data = [
      {
        link: {
          text: "Page Base Test",
          url: {
            url: "page-base-test",
          },
        },
        miniBlockIcon: { icon: "enclosed-arrow-right-dark-32px" },
        header: "Card #1",
        text: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
      },
      {
        link: {
          text: "text",
          url: {
            url: "page-base-test",
          },
        },
        miniBlockIcon: { icon: "enclosed-arrow-right-dark-32px" },
        header: "Card #2",
        text: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
      },
      {
        link: {
          text: "text here",
          url: {
            url: "http://www.trimble.com",
          },
        },
        miniBlockIcon: { icon: "enclosed-arrow-right-dark-32px" },
        header: "Card #3",
        text: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
      },
    ]
    const result = formatIconMiniBlocks(data, "en")
    const expected = [
      {
        link: {
          Link: Link,
          url: "/en/page-base-test",
          text: "Page Base Test",
          video: null,
          override: null,
          setOverride: null,
        },
        header: "Card #1",
        icon: "ter-icon--enclosed-arrow-right-dark-32px-dark-48px",
        text: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
      },
      {
        link: {
          Link: Link,
          text: "text",
          url: "/en/page-base-test",
          video: null,
          override: null,
          setOverride: null,
        },
        header: "Card #2",
        icon: "ter-icon--enclosed-arrow-right-dark-32px-dark-48px",
        text: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
      },
      {
        link: {
          Link: Link,
          url: "http://www.trimble.com",
          text: "text here",
          video: null,
          override: null,
          setOverride: null,
        },
        header: "Card #3",
        icon: "ter-icon--enclosed-arrow-right-dark-32px-dark-48px",
        text: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
      },
    ]
    expect(result).toEqual(expected)
  })

  it("should handle bad data without crashing", () => {
    const result = formatIconMiniBlocks({ hey: "bad data..." })
    expect(result).toEqual(null)
  })
})
