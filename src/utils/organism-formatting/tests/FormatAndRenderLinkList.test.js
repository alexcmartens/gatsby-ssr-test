import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderLinkList, {
  formatLinks,
} from "../LinkList/FormatAndRenderLinkList"
import { Link } from "gatsby"

describe("FormatAndRenderLinkList", () => {
  it("renders correctly", () => {
    const links = [
      { item: "item1" },
      { item: "item2" },
      { item: "item3" },
      { item: "item4" },
    ]

    const colorScheme = "light"

    const data = { links, colorScheme }

    const tree = renderer
      .create(<FormatAndRenderLinkList data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("formatLinks", () => {
  it("should not break if no links are passed in", () => {
    const result = formatLinks()
    expect(result).toEqual([])
  })

  it("should format links as expected", () => {
    const links = [
      {
        text: "text here",
        url: {
          url: "http://www.trimble.com",
          text: "Trimble Section",
        },
      },
      {
        text: null,
        url: {
          url: "http://www.trimble.com",
          text: "Trimble Section",
        },
      },
      {
        text: "text",
        url: {
          url: "page-base-test",
          text: "Page Base Test",
        },
      },
      {
        text: null,
        url: {
          url: "pasta-page",
          text: "Pasta Puppy",
        },
      },
    ]

    const result = formatLinks(links, true, "en")

    const expected = [
      {
        linkText: "text here",
        destination: "http://www.trimble.com",
        icon: true,
        external: true,
        Link: null,
        onClick: null,
        override: undefined,
        setOverride: undefined,
        video: undefined,
      },
      {
        linkText: "Trimble Section",
        destination: "http://www.trimble.com",
        icon: true,
        external: true,
        Link: null,
        onClick: null,
        override: undefined,
        setOverride: undefined,
        video: undefined,
      },
      {
        linkText: "text",
        destination: "/en/page-base-test",
        icon: true,
        external: false,
        Link: Link,
        onClick: null,
        override: undefined,
        setOverride: undefined,
        video: undefined,
      },
      {
        linkText: "Pasta Puppy",
        destination: "/en/pasta-page",
        icon: true,
        Link: Link,
        external: false,
        onClick: null,
        override: undefined,
        setOverride: undefined,
        video: undefined,
      },
    ]
    expect(result).toEqual(expected)
  })
})
