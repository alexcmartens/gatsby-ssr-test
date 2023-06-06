import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderNonTimeBasedListEntries from "../NonTimeBasedListEntries/FormatAndRenderNonTimeBasedListEntries"

describe("FormatAndRenderNonTimeBasedListEntries", () => {
  it("renders correctly", () => {
    const data = {
      __typename: "ContentfulNonTimeBasedListEntries",
      variant: "long-description",
      groupEntries: null,
      sidebarImage: {
        focalPointImage: {
          height: 4000,
          title: "dog",
          url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          width: 6000,
          x: 0,
          y: 0,
        },
        alt: "Dog",
      },
      entries: [
        {
          eyebrow: "Test Eyebrow",
          header: "Test Generic List Entry 1",
          subhead: "Test Subhead",
          link: {
            url: "/",
            text: "123",
            description: "Test Link Description",
          },
          image: {
            focalPointImage: {
              height: 4000,
              title: "dog",
              url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              width: 6000,
              x: 0,
              y: 0,
            },
            alt: "Dog",
          },
          referenceForSummary: {
            shortSummary: {
              childMarkdownRemark: {
                html: "<p>This is a short summary</p>",
              },
            },
          },
          shortSummary: {
            childMarkdownRemark: {
              html: "<p>Test Short summary</p>",
            },
          },
          industryOrCategory: {
            name: "Test Category",
          },
          groupingCategory: {
            name: "Test Industry",
          },
          role: "Job Title",
        },
        {
          eyebrow: "Test Eyebrow",
          header: "Test Generic List Entry 2",
          subhead: "Test Subhead",
          link: {
            url: "/",
            text: "123",
            description: "Test Link Description",
          },
          image: {
            id: "ebe8d2b6-23d1-5206-8f1a-d9dfac9bb8c0",
            brandfolderAsset: [
              {
                url: "https://assets2.brandfolder.io/bf-boulder-prod/23srvqxgjnh5mkfswxn64893/v/61471532/original/Bkg-Contemporary-Loft-Office-with-Trimble-Globe.jpg",
              },
            ],
            altText: null,
          },
          referenceForSummary: null,
          shortSummary: {
            childMarkdownRemark: {
              html: "<p>Test Short summary</p>",
            },
          },
          industryOrCategory: {
            name: "Test Industry",
          },
          groupingCategory: {
            name: "Test Category",
          },
          role: "Job Title",
        },
      ],
    }

    const tree = renderer
      .create(
        <FormatAndRenderNonTimeBasedListEntries
          data={data}
          paddingClass={"test-padding-class"}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
