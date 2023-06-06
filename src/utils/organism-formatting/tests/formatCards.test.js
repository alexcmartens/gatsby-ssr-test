import formatCards from "../formatCards"
import { Link } from "gatsby"

describe("formatCards", () => {
  it("should return null if nothing is passed into method", () => {
    const result = formatCards()
    expect(result).toEqual(null)
  })

  it("should format data and return array of objects", () => {
    const data = [
      {
        cardLink: {
          text: null,
          url: {
            url: "page-base-test",
            text: "Test Page",
          },
        },
        header: "Card #1",
        eyebrow: "eyebrow 1",
        image: {
          file: { url: "src" },
          title: "alt",
        },
        textContent: "<p>Esse ea culpa excepteur ipsum reprehenderit</p>",
        modalType: "Video",
        modalVideoUrl: "https://www.youtube.com/watch?v=gY9svYtKRIg",
      },
      {
        cardLink: {
          text: "text",
          url: {
            url: "page-base-test",
            text: "Page Base Test",
          },
        },
        header: "Card #2",
        eyebrow: "eyebrow 2",
        image: {
          file: { url: "src" },
          title: "alt",
        },
        textContent: "<p>Ea magna pariatur excepteur nostrud culpa.</p>",
      },
      {
        cardLink: {
          text: "text here",
          url: {
            url: "http://www.trimble.com",
            text: "Trimble Section",
          },
        },
        header: "Card #3",
        eyebrow: "eyebrow 3",
        image: {
          file: { url: "src" },
          title: "alt",
        },
        textContent: "<p>Ea magna pariatur excepteur nostrud culpa.</p>",
        bgColor: "grey",
      },
    ]

    const result = formatCards(data, "en")
    const expected = [
      {
        Link,
        eyebrow: "eyebrow 1",
        header: "Card #1",
        text: null,
        bgColor: undefined,
        image: null,
        cardLink: {
          text: "Test Page",
          url: "/en/page-base-test",
          Link,
          override: null,
          setOverride: null,
          video: null,
        },
        modalType: "Video",
        modalContent: null,
      },
      {
        Link,
        eyebrow: "eyebrow 2",
        header: "Card #2",
        text: null,
        bgColor: undefined,
        image: null,
        cardLink: {
          text: "text",
          url: "/en/page-base-test",
          Link,
          override: null,
          setOverride: null,
          video: null,
        },
        modalType: null,
        modalContent: null,
      },
      {
        Link,
        eyebrow: "eyebrow 3",
        header: "Card #3",
        text: null,
        image: null,
        cardLink: {
          text: "text here",
          url: "http://www.trimble.com",
          Link,
          override: null,
          setOverride: null,
          video: null,
        },
        bgColor: "grey",
        modalType: null,
        modalContent: null,
      },
    ]
    expect(result).toEqual(expected)
  })

  it("should handle bad data without crashing", () => {
    const result = formatCards({ hey: "bad data..." })
    expect(result).toEqual(null)
  })
})
