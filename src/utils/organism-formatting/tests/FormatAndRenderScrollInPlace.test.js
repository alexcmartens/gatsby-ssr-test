import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderScrollInPlace from "../ScrollInPlace/FormatAndRenderScrollInPlace"

describe.skip("FormatAndRenderScrollInPlace", () => {
  it("renders correctly", () => {
    const data = {
      __typename: "ContentfulScrollInPlace",
      titleSlideBackground: {
        id: "84c6e229-53b0-50a0-a328-e29ead42839d",
        focalPoint: {
          focalPoint: {
            x: 537,
            y: 177,
          },
        },
        image: {
          title: "Front Frog",
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/5FRNqx8tTG9ewzghjTD0ft/a59add5717655ebcb357dbae7b31104b/frog-897418_1920.jpg",
            details: {
              image: {
                height: 1276,
                width: 1920,
              },
            },
          },
        },
        __typename: "ContentfulImageWithFocalPoint",
        title: "JJung Test Pull Quote Side Image",
        altText: "placeholder",
      },
      backgroundVideo: {
        file: {
          url: "//videos.ctfassets.net/citn2sn5tdjr/7hO7fIlKpIZrXYSABmdzU9/62056977997e3ce3327fe9ff7499ed18/video_preview_h264.mp4",
        },
      },
      titleSlideText: {
        __typename: "ContentfulHeader",
        colorScheme: null,
        eyebrow: "eyebrow",
        headline: "headline",
        subhead: "subhead",
        jumpNavTitle: "jump nav title",
        anchor: "/",
      },
      slides: [
        {
          __typename: "ContentfulSlide",
          backgroundImage: {
            id: "b97b8fd6-d341-5fcf-a381-ff2e16149d73",
            focalPoint: {
              focalPoint: {
                x: 3463,
                y: 2017,
              },
            },
            image: {
              title: "dog",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/8da854bf7a41a2f2b703cbe5d1d2ae2b/dog.jpg",
                details: {
                  image: {
                    height: 4000,
                    width: 6000,
                  },
                },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "New Test dog image",
            altText: "alt text",
          },
          leftContent: {
            __typename: "ContentfulCtaWithTextAndHeader",
            variant: "dark",
            alignment: "left",
            eyebrow: "test",
            headline: "test",
            subhead: "test",
            jumpNavTitle: "test",
            anchor: "test",
            body: {
              body: "test",
              childMarkdownRemark: {
                html: "<p>test</p>",
              },
            },
            displayButtonsAsLinks: true,
            ctaButtons: [
              {
                __typename: "ContentfulExternalLink",
                id: "4d0c2fc5-b317-5d63-b5b3-523e40041904",
                url: "https://www.google.com/",
                text: "DO NOT DELETE - placeholder external link",
              },
              {
                __typename: "ContentfulExternalLink",
                id: "4d0c2fc5-b317-5d63-b5b3-523e40041904",
                url: "https://www.google.com/",
                text: "DO NOT DELETE - placeholder external link",
              },
            ],
          },
          centerImage: {
            id: "0a32ef0a-b428-5329-bf28-78e80606a57a",
            focalPoint: {
              focalPoint: null,
            },
            image: {
              title:
                "industries-overview-classifying-caribbean-coral-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/2V4FylU8tbTOXy7TopNjMS/f6b0a4227827dc08d94a04266c1712da/industries-overview-classifying-caribbean-coral-272x180.jpg",
                details: {
                  image: {
                    height: 180,
                    width: 272,
                  },
                },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Classifying the Caribbean's coral image",
            altText: null,
          },
          rightContent: {
            __typename: "ContentfulCtaWithTextAndHeader",
            variant: "dark",
            alignment: "left",
            eyebrow: null,
            headline: "Climate action",
            subhead: null,
            jumpNavTitle: null,
            anchor: null,
            body: {
              body: 'Trimble is acting with urgency to combat the negative impacts of climate change by reducing our carbon footprint and by providing innovative solutions to enable our customers to do the same. We are also setting [science-based targets in line with the commitment](https://www.google.com/ "test link") to keep global warming to no more than 1.5 degrees celsius.',
              childMarkdownRemark: {
                html: '<p>Trimble is acting with urgency to combat the negative impacts of climate change by reducing our carbon footprint and by providing innovative solutions to enable our customers to do the same. We are also setting <a href="https://www.google.com/" title="test link">science-based targets in line with the commitment</a> to keep global warming to no more than 1.5 degrees celsius.</p>',
              },
            },
            displayButtonsAsLinks: true,
            ctaButtons: null,
          },
          centerImageVariant: "square",
        },
        {
          __typename: "ContentfulSlide",
          backgroundImage: {
            id: "b97b8fd6-d341-5fcf-a381-ff2e16149d73",
            focalPoint: {
              focalPoint: {
                x: 3463,
                y: 2017,
              },
            },
            image: {
              title: "dog",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/8da854bf7a41a2f2b703cbe5d1d2ae2b/dog.jpg",
                details: {
                  image: {
                    height: 4000,
                    width: 6000,
                  },
                },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "New Test dog image",
            altText: "alt text",
          },
          leftContent: {
            __typename: "ContentfulCtaWithTextAndHeader",
            variant: "dark",
            alignment: "left",
            eyebrow: "test",
            headline: "test",
            subhead: "test",
            jumpNavTitle: "test",
            anchor: "test",
            body: {
              body: "test",
              childMarkdownRemark: {
                html: "<p>test</p>",
              },
            },
            displayButtonsAsLinks: true,
            ctaButtons: [
              {
                __typename: "ContentfulExternalLink",
                id: "4d0c2fc5-b317-5d63-b5b3-523e40041904",
                url: "https://www.google.com/",
                text: "DO NOT DELETE - placeholder external link",
              },
              {
                __typename: "ContentfulExternalLink",
                id: "4d0c2fc5-b317-5d63-b5b3-523e40041904",
                url: "https://www.google.com/",
                text: "DO NOT DELETE - placeholder external link",
              },
            ],
          },
          centerImage: {
            id: "0a32ef0a-b428-5329-bf28-78e80606a57a",
            focalPoint: {
              focalPoint: null,
            },
            image: {
              title:
                "industries-overview-classifying-caribbean-coral-272x180.jpg",
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/2V4FylU8tbTOXy7TopNjMS/f6b0a4227827dc08d94a04266c1712da/industries-overview-classifying-caribbean-coral-272x180.jpg",
                details: {
                  image: {
                    height: 180,
                    width: 272,
                  },
                },
              },
            },
            __typename: "ContentfulImageWithFocalPoint",
            title: "Classifying the Caribbean's coral image",
            altText: null,
          },
          rightContent: {
            __typename: "ContentfulDataPoint",
            colorScheme: "Trimble Blue",
            variant: "Horizontal",
            title: "DO NOT DELETE - placeholder data point",
            jumpNavTitle: "jump nav title",
            anchor: "/",
            points: [
              {
                description: "test",
                header: "DO NOT DELETE - placeholder point",
                icon: "Enclosed Arrow Up",
              },
              {
                description: "test",
                header: "DO NOT DELETE - placeholder point",
                icon: "Enclosed Arrow Up",
              },
              {
                description: "test",
                header: "DO NOT DELETE - placeholder point",
                icon: "Enclosed Arrow Up",
              },
            ],
            theme: "transparent-light-text",
          },
          centerImageVariant: "circle",
        },
      ],
    }

    const tree = renderer
      .create(<FormatAndRenderScrollInPlace data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
