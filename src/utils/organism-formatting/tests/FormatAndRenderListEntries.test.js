import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderListEntries from "../ListEntries/FormatAndRenderListEntries"

describe("FormatAndRenderListEntries", () => {
  it("renders correctly", () => {
    const data = {
      variant: "card-with-image",
      entryType: "article",
    }

    const testEventsAndArticlesSet = [
      {
        node: {
          date: "2021-10-29T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Article",
          industryOrCategory: {
            name: "Test Category",
          },
          node_locale: "en",
          slug: "test-article",
          contentType: "article",
          shortSummary: {
            shortSummary: "This is a short summary",
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
          imageMobile: null,
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/2396e31452b98bbdecb9ab797a9fe2a5/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/81eecd33ceae9d86b3b4b06277dc9b9f/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
      {
        node: {
          date: "2021-10-29T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Event",
          industryOrCategory: {
            name: "Test Industry",
          },
          node_locale: "en",
          slug: "test-event",
          contentType: "event",
          shortSummary: {
            shortSummary: "This is a short summary",
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
          imageMobile: {
            id: "c1f1b757-080e-57e0-bd70-07be9da0df23",
            brandfolderAsset: [
              {
                url: "https://assets2.brandfolder.io/bf-boulder-prod/448sw8rw9rfgvj7mwn593nxm/v/61455813/original/icon-face-smile-one-color-gray-48px.svg",
              },
            ],
            altText: null,
          },
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/2396e31452b98bbdecb9ab797a9fe2a5/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/81eecd33ceae9d86b3b4b06277dc9b9f/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
      {
        node: {
          date: "2021-12-09T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Event 2",
          industryOrCategory: {
            name: "Test Industry",
          },
          node_locale: "en",
          slug: "test-event-2",
          contentType: "event",
          shortSummary: {
            shortSummary: "This is a short summary",
          },
          image: {
            id: "433d8c51-fa79-5051-88b1-9fadd3099f83",
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/1eQlF3ZOA4BgZFquZeOvRP/3ffdabd01170eceedd25f3a6b1685a01/Pasta-and-spaghetti.jpg",
              },
            },
            altText: "alt txt example",
          },
          imageMobile: null,
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/2396e31452b98bbdecb9ab797a9fe2a5/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/81eecd33ceae9d86b3b4b06277dc9b9f/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
      {
        node: {
          date: "2021-11-10T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Article 2",
          industryOrCategory: {
            name: "Test Category",
          },
          node_locale: "en",
          slug: "test-article-2",
          contentType: "article",
          shortSummary: {
            shortSummary: "This is a short summary",
          },
          image: {
            id: "2437c1c7-1ef6-5d6b-a4db-1e352e511980",
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7zF5J9FlzLzm2SFrT6inNJ/2fe28905a10bd27e8d6b178d3a8239e6/save.png",
              },
            },
            altText: null,
          },
          imageMobile: {
            id: "6899a955-4468-5645-8522-4934055e3d30",
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/66L1j8ZNJDxuPi0OhZ2pmK/22aae2e6ec32184d9e03abfbfcf3c798/one.png",
              },
            },
            altText: null,
          },
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/2396e31452b98bbdecb9ab797a9fe2a5/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/81eecd33ceae9d86b3b4b06277dc9b9f/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
      {
        node: {
          date: "2021-10-29T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Article",
          industryOrCategory: {
            name: "Test Category",
          },
          node_locale: "fr",
          slug: "test-article",
          contentType: "article",
          shortSummary: {
            shortSummary: "This is a short summary",
          },
          image: {
            id: "9902673f-9da1-5493-a2e8-d88eb7992289",
            brandfolderAsset: [
              {
                url: "https://assets2.brandfolder.io/bf-boulder-prod/23srvqxgjnh5mkfswxn64893/v/61471532/original/Bkg-Contemporary-Loft-Office-with-Trimble-Globe.jpg",
              },
            ],
            altText: null,
          },
          imageMobile: null,
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/8a3b37c4fbde7123d3070f8ca48699fe/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/8a2e90270c72b7bf79926746ec654f02/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
      {
        node: {
          date: "2021-10-29T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Event",
          industryOrCategory: {
            name: "Test Industry",
          },
          node_locale: "fr",
          slug: "test-event",
          contentType: "event",
          shortSummary: {
            shortSummary: "This is a short summary",
          },
          image: {
            id: "9902673f-9da1-5493-a2e8-d88eb7992289",
            brandfolderAsset: [
              {
                url: "https://assets2.brandfolder.io/bf-boulder-prod/23srvqxgjnh5mkfswxn64893/v/61471532/original/Bkg-Contemporary-Loft-Office-with-Trimble-Globe.jpg",
              },
            ],
            altText: null,
          },
          imageMobile: {
            id: "bbce5d27-9a61-5168-9663-b90432b74ed6",
            brandfolderAsset: [
              {
                url: "https://assets2.brandfolder.io/bf-boulder-prod/448sw8rw9rfgvj7mwn593nxm/v/61455813/original/icon-face-smile-one-color-gray-48px.svg",
              },
            ],
            altText: null,
          },
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/8a3b37c4fbde7123d3070f8ca48699fe/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/8a2e90270c72b7bf79926746ec654f02/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
      {
        node: {
          date: "2021-12-09T00:00-05:00",
          eventLink: "https://www.google.com",
          header: "Test Event 2",
          industryOrCategory: {
            name: "Test Industry",
          },
          node_locale: "fr",
          slug: "test-event-2",
          contentType: "event",
          shortSummary: {
            shortSummary: "This is a short summary",
          },
          image: {
            id: "737c5071-be1f-5133-8267-843370eede8b",
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/1eQlF3ZOA4BgZFquZeOvRP/3ffdabd01170eceedd25f3a6b1685a01/Pasta-and-spaghetti.jpg",
              },
            },
            altText: "alt txt example",
          },
          imageMobile: null,
          supportingDocuments: [
            {
              description: "Test PDF",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/8a3b37c4fbde7123d3070f8ca48699fe/SamplePDF.pdf",
                contentType: "application/pdf",
              },
            },
            {
              description: "Test Doc",
              file: {
                url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/8a2e90270c72b7bf79926746ec654f02/original.doc",
                contentType: "application/CDFV2",
              },
            },
          ],
        },
      },
    ]

    const tree = renderer
      .create(
        <FormatAndRenderListEntries
          data={data}
          locale="en"
          overrideSet={testEventsAndArticlesSet}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
