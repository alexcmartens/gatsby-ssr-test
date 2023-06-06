import React from "react"
import renderer from "react-test-renderer"
import TwoByTwoConnector from "../../../components/2x2/2x2Connector"

describe("TwoByTwoConnector", () => {
  it("renders one background correctly", () => {
    const data = {
      __typename: "Contentful2X2",
      title: "2x2 - One Background",
      backgroundImages: [
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "720x720",
          altText: "Books 720x720",
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/2aIM2EvXTK5yrpIHrvP5k5/6f7a3669abb2bf2ec39b635a91da90f6/720x720.jpg",
              details: {
                image: {
                  height: 720,
                  width: 720,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 358,
              y: 224,
            },
          },
        },
      ],
      topLeftContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      topLeftBackgroundColor: "Trimble Blue",
      topRightContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      topRightBackgroundColor: "Dark Navy",
      bottomLeftContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      bottomLeftBackgroundColor: "Dark Navy",
      bottomRightContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      bottomRightBackgroundColor: "Trimble Blue",
      overlappingContent: null,
    }

    const tree = renderer.create(<TwoByTwoConnector data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders four backgrounds correctly", () => {
    const data = {
      __typename: "Contentful2X2",
      title: "2x2 - Four Backgrounds",
      backgroundImages: [
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "bridge",
          altText: null,
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/5D1pWT2efLAhK4Jnvsa8SW/14ba92accea63bb461f0437621a56a7d/800x400.jpg",
              details: {
                image: {
                  height: 400,
                  width: 800,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 674,
              y: 214,
            },
          },
        },
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "720x720",
          altText: "Books 720x720",
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/2aIM2EvXTK5yrpIHrvP5k5/6f7a3669abb2bf2ec39b635a91da90f6/720x720.jpg",
              details: {
                image: {
                  height: 720,
                  width: 720,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 358,
              y: 224,
            },
          },
        },
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "dog",
          altText: null,
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              details: {
                image: {
                  height: 4000,
                  width: 6000,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 3549,
              y: 1589,
            },
          },
        },
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "Hero 5 Focal Image",
          altText: null,
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/4NzwDSDlGECGIiokKomsyI/f78a74130fc60ae9b4fb2e0da2f405db/city.jpg",
              details: {
                image: {
                  height: 4000,
                  width: 6000,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 4646,
              y: 3783,
            },
          },
        },
      ],
      topLeftContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      topLeftBackgroundColor: "Trimble Blue",
      topRightContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      topRightBackgroundColor: "Trimble Dark Gray",
      bottomLeftContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      bottomLeftBackgroundColor: "Concrete Gray",
      bottomRightContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline:
            "This Is A Really Long Header, It Has Too Many Characters To Render In The 2x2",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is too long for the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies dignissim suscipit. Donec vel lacus non felis volutpat mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique, tortor vitae      varius vehicula, velit dui faucibus dui, a malesuada metus nulla et ligula. Vestibulum vitae dignissim justo, id volutpat diam. Nunc luctus felis arcu, ac accumsan justo tincidunt eu. Mauris sed augue blandit, lobortis libero et, blandit velit. Aliquam volutpat feugiat metus at facilisis. Sed id turpis neque. Nulla et ultricies justo. Proin sed volutpat leo. Pellentesque habitant morbi tristique sene ctus et netus et malesuada fames ac turpis egestas.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      bottomRightBackgroundColor: "Dark Navy",
      overlappingContent: false,
    }

    const tree = renderer.create(<TwoByTwoConnector data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders no backgrounds correctly", () => {
    const data = {
      __typename: "Contentful2X2",
      title: "2x2 - No Background, Non-overlapping",
      backgroundImages: null,
      topLeftContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      topLeftBackgroundColor: "Dark Navy",
      topRightContent: [
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "Travel Frog",
          altText: null,
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/4IFA2Wf4AFiEdf0RrZn23e/a751b571d31ea6f89e7097a5fbb7a68d/frog-897420_1920.jpg",
              details: {
                image: {
                  height: 1343,
                  width: 1920,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 653,
              y: 386,
            },
          },
        },
      ],
      topRightBackgroundColor: null,
      bottomLeftContent: [
        {
          __typename: "ContentfulImageWithFocalPoint",
          title: "JJung Test Pull Quote Side Image",
          altText: null,
          image: {
            file: {
              url: "//images.ctfassets.net/citn2sn5tdjr/5FRNqx8tTG9ewzghjTD0ft/123ce44a06c3fdcf3e1b1f235a3f8793/frog-897418_1920.jpg",
              details: {
                image: {
                  height: 1276,
                  width: 1920,
                },
              },
            },
          },
          focalPoint: {
            focalPoint: {
              x: 1366,
              y: 397,
            },
          },
        },
      ],
      bottomLeftBackgroundColor: null,
      bottomRightContent: [
        {
          __typename: "ContentfulHeader",
          eyebrow: null,
          headline: "2x2 Headline",
          subhead: null,
        },
        {
          __typename: "ContentfulRichTextContent",
          content: {
            raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"This content is fits the container","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" consectetur adipiscing elit. Integer eleifend risus ultricies  dignissim suscipit. Donec vel lacus.","marks":[],"data":{}}],"data":{}}]}',
            references: [],
          },
        },
      ],
      bottomRightBackgroundColor: "Trimble Blue",
      overlappingContent: false,
    }

    const tree = renderer.create(<TwoByTwoConnector data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
