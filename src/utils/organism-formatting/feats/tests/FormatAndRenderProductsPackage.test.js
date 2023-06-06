import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderProductsPackage from "../FormatAndRenderProductsPackage"

jest.mock("../../formatTheme")

describe("FormatAndRenderProductsPackage", () => {
  it("renders correctly", () => {
    const data = {
      __typename: "ContentfulProductsPackage",
      id: "9c8696bd-7390-5338-b6a0-6c62fe72cd88",
      text: "Anim aliquip aliqua aliqua id qui aute anim reprehen derit tempor velit est sint. Anim aliquip aliqua aliqua id qui aute anim reprehen.",
      header: "Many Products",
      eyebrow: "Many Products",
      cta: {
        text: "External Link ",
        url: {
          text: "External link",
          url: "https://trimble.com",
          internal: { type: "ContentfulExternalLink" },
        },
        external: true,
      },
      image: {
        image: {
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/36pRZr0RXiZV9uB9A2fDsM/afdd0af113de5cc0e56168ce428b829f/product.svg",
            fileName: "product.svg",
          },
          title: "product test image",
          description: "",
        },
      },
      productCards: [
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Eyebrow Option",
          header: "Product Name",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulRichTextContent",
            colorScheme: null,
            content: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.","marks":[],"data":{}}],"data":{}}]}',
              references: [],
            },
          },
          cardLink: {
            text: "About",
            url: {
              text: "Overview",
              url: "our-company/about/overview",
              internal: { type: "ContentfulPageBase" },
            },
            external: false,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Product Eyebrow",
          header: "Header here",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulHtmlBlob",
            blob: {
              blob: "Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.",
            },
          },
          cardLink: {
            text: "External Link ",
            url: {
              text: "External link",
              url: "https://trimble.com",
              internal: { type: "ContentfulExternalLink" },
            },
            external: true,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Product Eyebrow",
          header: "Header here",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulHtmlBlob",
            blob: {
              blob: "Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.",
            },
          },
          cardLink: {
            text: "External Link ",
            url: {
              text: "External link",
              url: "https://trimble.com",
              internal: { type: "ContentfulExternalLink" },
            },
            external: true,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Product Eyebrow",
          header: "Header here",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulHtmlBlob",
            blob: {
              blob: "Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.",
            },
          },
          cardLink: {
            text: "External Link ",
            url: {
              text: "External link",
              url: "https://trimble.com",
              internal: { type: "ContentfulExternalLink" },
            },
            external: true,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Eyebrow Option",
          header: "Product Name",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulRichTextContent",
            colorScheme: null,
            content: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.","marks":[],"data":{}}],"data":{}}]}',
              references: [],
            },
          },
          cardLink: {
            text: "About",
            url: {
              text: "Overview",
              url: "our-company/about/overview",
              internal: { type: "ContentfulPageBase" },
            },
            external: false,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Eyebrow Option",
          header: "Product Name",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulRichTextContent",
            colorScheme: null,
            content: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.","marks":[],"data":{}}],"data":{}}]}',
              references: [],
            },
          },
          cardLink: {
            text: "About",
            url: {
              text: "Overview",
              url: "our-company/about/overview",
              internal: { type: "ContentfulPageBase" },
            },
            external: false,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Product Eyebrow",
          header: "Header here",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulHtmlBlob",
            blob: {
              blob: "Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.",
            },
          },
          cardLink: {
            text: "External Link ",
            url: {
              text: "External link",
              url: "https://trimble.com",
              internal: { type: "ContentfulExternalLink" },
            },
            external: true,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Eyebrow Option",
          header: "Product Name",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulRichTextContent",
            colorScheme: null,
            content: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.","marks":[],"data":{}}],"data":{}}]}',
              references: [],
            },
          },
          cardLink: {
            text: "About",
            url: {
              text: "Overview",
              url: "our-company/about/overview",
              internal: { type: "ContentfulPageBase" },
            },
            external: false,
          },
        },
        {
          __typename: "ContentfulBoundedCard",
          eyebrow: "Eyebrow Option",
          header: "Product Name",
          cardImage: {
            id: "068ed0a3-df08-5b02-9e3e-251d0f197f3e",
            focalPoint: { focalPoint: null },
            image: {
              title: "industries-natural-resources-quarry-workers-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/3pReviqGaCe5T9cNC86TBF/219b6bf9914f09c66343bbb692f54f8e/industries-natural-resources-quarry-workers-272x180.jpg",
                details: { image: { height: 180, width: 272 } },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Aggregates image",
            altText: null,
          },
          textContent: {
            __typename: "ContentfulRichTextContent",
            colorScheme: null,
            content: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lacus nibh mauris sit sodales pharetra viverra vitae cras aliquet. Turpis sed magna tristique.","marks":[],"data":{}}],"data":{}}]}',
              references: [],
            },
          },
          cardLink: {
            text: "About",
            url: {
              text: "Overview",
              url: "our-company/about/overview",
              internal: { type: "ContentfulPageBase" },
            },
            external: false,
          },
        },
      ],
      productEyebrow: "Works with..... ",
    }

    const tree = renderer
      .create(<FormatAndRenderProductsPackage data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
