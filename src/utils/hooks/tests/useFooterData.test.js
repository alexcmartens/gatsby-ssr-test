import { renderHook } from "@testing-library/react"
import useFooterData from "../useFooterData"

describe("useFooterData", () => {
  const _rawData = {
    sectorCalloutLinks: [
      {
        link: {
          url: {
            url: "test-page",
            contentType: "article",
          },
          text: "Test Page",
        },
        title: "Chat with Us",
        subTitle: "Available Mon-Fri, 9-5",
      },
      {
        link: {
          url: {
            url: "test-page",
            internal: {
              type: "ContentfulNews",
            },
          },
          text: "Test Page",
        },
        title: "Contact Us",
        subTitle: "We'll respond as soon as we can",
      },
      {
        link: {
          url: {
            url: "test-page",
            contentType: "event",
          },
          text: "Test Page",
        },
        title: "Tech Support",
        subTitle: "Visit our Support Center",
      },
    ],

    sectorFooterMenus: [
      {
        title: "About Trimble",
        menuLinks: [
          {
            text: "I am the text",
            url: {
              url: "test-page",
              text: "Test Page",
            },
          },
          {
            text: "Click me!",
            url: {
              url: "https://www.trimble.com/",
              text: "Test Page",
            },
          },
          {
            text: null,
            url: {
              url: "page-base-test",
              text: "Test Page",
            },
          },
        ],
      },
      {
        title: "About Trimble",
        menuLinks: [
          {
            text: "I am the text",
            url: {
              url: "test-page",
              text: "Test Page",
            },
          },
          {
            text: "Click me!",
            url: {
              url: "https://www.trimble.com/",
              text: "Test Page",
            },
          },
          {
            text: null,
            url: {
              url: "page-base-test",
              text: "Test Page",
            },
          },
        ],
      },
    ],

    socialLinksTitle: "Connect with us",

    socialLinks: [
      {
        icon: {
          altText: "undefined logo",
          url: "/",
        },
        link: {
          url: "/#",
        },
      },
      {
        icon: {
          altText: "undefined logo",
          url: "/",
        },
        link: {
          url: "/#",
        },
      },
      {
        icon: {
          altText: "undefined logo",
          url: "/",
        },
        link: {
          url: "/#",
        },
      },
      {
        icon: {
          altText: "undefined logo",
          url: "/",
        },
        link: {
          url: "/#",
        },
      },
      {
        icon: {
          altText: "undefined logo",
          url: "/",
        },
        link: {
          url: "/#",
        },
      },
      {
        icon: {
          altText: "undefined logo",
          url: "/",
        },
        link: {
          url: "/#",
        },
      },
    ],

    logo: {
      url: "/",
      alt: "fpo",
    },

    text: {
      text: "Trimble is transforming the way the world works.",
    },

    legalStuff: [
      {
        text: "I am the text",
        url: {
          url: "test-page",
          text: "Test Page",
        },
      },
      {
        text: "Click me!",
        url: {
          url: "https://www.trimble.com/",
          text: "Test Page",
        },
      },
      {
        text: null,
        url: {
          url: "page-base-test",
          text: "Test Page",
        },
      },
    ],
  }

  it("has initial state", () => {
    const { result } = renderHook(() => useFooterData())

    expect(result.current.footerData).toEqual(null)
  })

  it("formats and returns new state", () => {
    const { result } = renderHook(() => useFooterData(_rawData, "en"))

    const expected = {
      calloutLinks: [
        {
          url: "/en/articles/test-page",
          title: "Chat with Us",
          subTitle: "Available Mon-Fri, 9-5",
        },
        {
          url: "/en/news/test-page",
          title: "Contact Us",
          subTitle: "We'll respond as soon as we can",
        },
        {
          url: "/en/events/test-page",
          title: "Tech Support",
          subTitle: "Visit our Support Center",
        },
      ],
      sectorFooterLinks: [
        {
          title: "About Trimble",
          menuLinks: [
            {
              text: "I am the text",
              url: "/en/test-page",
              override: null,
              setOverride: null,
              video: null,
            },
            {
              text: "Click me!",
              url: "https://www.trimble.com/",
              override: null,
              setOverride: null,
              video: null,
            },
            {
              text: "Test Page",
              url: "/en/page-base-test",
              override: null,
              setOverride: null,
              video: null,
            },
          ],
        },
        {
          title: "About Trimble",
          menuLinks: [
            {
              text: "I am the text",
              url: "/en/test-page",
              override: null,
              setOverride: null,
              video: null,
            },
            {
              text: "Click me!",
              url: "https://www.trimble.com/",
              override: null,
              setOverride: null,
              video: null,
            },
            {
              text: "Test Page",
              url: "/en/page-base-test",
              override: null,
              setOverride: null,
              video: null,
            },
          ],
        },
      ],
      socialTitle: "Connect with us",
      socialLinks: [
        { icon: { altText: "undefined logo" }, link: {} },
        { icon: { altText: "undefined logo" }, link: {} },
        { icon: { altText: "undefined logo" }, link: {} },
        { icon: { altText: "undefined logo" }, link: {} },
        { icon: { altText: "undefined logo" }, link: {} },
        { icon: { altText: "undefined logo" }, link: {} },
      ],
      logo: { url: null },
      globalFooterText: "Trimble is transforming the way the world works.",
      legalStuff: [
        {
          text: "I am the text",
          url: "/en/test-page",
          override: null,
          setOverride: null,
          video: null,
        },
        {
          text: "Click me!",
          url: "https://www.trimble.com/",
          override: null,
          setOverride: null,
          video: null,
        },
        {
          text: "Test Page",
          url: "/en/page-base-test",
          override: null,
          setOverride: null,
          video: null,
        },
      ],
    }

    expect(JSON.stringify(result.current.footerData)).toStrictEqual(
      JSON.stringify(expected)
    )
  })

  it("handle junk data without crashing", () => {
    const _junkData = {
      hello: "wut",
      legalStuff: [],
      social: "hmm",
    }
    const { result } = renderHook(() => useFooterData(_junkData))
    const expected = { socialLinks: [], logo: { url: null }, legalStuff: [] }

    expect(JSON.stringify(result.current.footerData)).toStrictEqual(
      JSON.stringify(expected)
    )
  })
})
