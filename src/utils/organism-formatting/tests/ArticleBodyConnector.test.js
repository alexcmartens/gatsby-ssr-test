import React from "react"
import renderer from "react-test-renderer"
import ArticleBodyConnector from "../../../components/Article/ArticleBody/ArticleBodyConnector"

describe("ArticleBodyConnector", () => {
  it("renders correctly", () => {
    const data = {
      __typename: "ContentfulArticlesEventsAndProse",
      date: "2021-08-26T00:00-05:00",
      endDate: null,
      eventLink: "/",
      header:
        "KTH Royal Institute of Technology in Sweden to Establish Trimble Technology Lab for Architecture, Engineering and Construction",
      industryOrCategory: {
        name: "Test Category",
      },
      node_locale: "en",
      slug: "test-prose",
      contentType: "prose",
      shortSummary: {
        shortSummary: "test prose short summary",
      },
      heroImage: {
        id: "6899a955-4468-5645-8522-4934055e3d30",
        image: {
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/66L1j8ZNJDxuPi0OhZ2pmK/22aae2e6ec32184d9e03abfbfcf3c798/one.png",
          },
        },
        altText: null,
      },
      heroImagePosition: "below-page-header",
      image: {
        id: "2437c1c7-1ef6-5d6b-a4db-1e352e511980",
        image: {
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/7zF5J9FlzLzm2SFrT6inNJ/2fe28905a10bd27e8d6b178d3a8239e6/save.png",
          },
        },
        altText: null,
      },
      imageMobile: null,
      supportingDocuments: [
        {
          description: "Test Doc",
          file: {
            url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/81eecd33ceae9d86b3b4b06277dc9b9f/original.doc",
            contentType: "application/CDFV2",
          },
        },
        {
          description: "Test PDF",
          file: {
            url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/2396e31452b98bbdecb9ab797a9fe2a5/SamplePDF.pdf",
            contentType: "application/pdf",
          },
        },
      ],
      additionalResources: [
        {
          description: "Test Doc",
          file: {
            url: "//assets.ctfassets.net/citn2sn5tdjr/6rs2wakXBpA3upPDU99eMX/81eecd33ceae9d86b3b4b06277dc9b9f/original.doc",
            contentType: "application/CDFV2",
          },
        },
        {
          description: "Test PDF",
          file: {
            url: "//assets.ctfassets.net/citn2sn5tdjr/6OM4L0ZwSIPIDSSzU6nYut/2396e31452b98bbdecb9ab797a9fe2a5/SamplePDF.pdf",
            contentType: "application/pdf",
          },
        },
      ],
      subHeader:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non",
      content: {
        __typename: "ContentfulRichTextContent",
        content: {
          raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" Integer eleifend risus ultricies dignissim suscipit. Donec vel lacus non felis volutpat mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique, tortor vitae varius vehicula, velit dui faucibus dui, a malesuada metus nulla et ligula. Vestibulum vitae dignissim justo, id volutpat diam. Nunc luctus felis arcu, ac accumsan justo tincidunt eu. Mauris sed augue blandit, lobortis libero et, blandit velit. Aliquam volutpat feugiat metus at facilisis. Sed id turpis neque. Nulla et ultricies justo. Proin sed volutpat leo. Pellentesque habitant morbi tristique sene ctus et netus et malesuada fames ac turpis egestas. ","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Test link","marks":[],"data":{}}],"data":{"uri":"/"}},{"nodeType":"text","value":".","marks":[],"data":{}}],"data":{}},{"nodeType":"embedded-entry-block","content":[],"data":{"target":{"sys":{"id":"4DeXYLgdD96lCn28dwMbDF","type":"Link","linkType":"Entry"}}}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquam ipsum eget ex pulvinar, non fermentum lectus euismod. Integer et nulla quis nisl varius tincidunt sit amet at ipsum. Vivamus fermentum libero ut faucibus tempus. Nunc interdum volutpat nulla et eleifend. Cras at tellus a felis aliquet euismod eget id ex. Integer mollis erat porttitor eros ultricies tempus. Donec ante purus, feugiat ut mi non, dapibus dapibus ex.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"In sodales lacus quam, quis ornare sem molestie eget. Aenean sagittis lacinia magna, eget ultricies mi cursus et. Proin dui leo, semper in magna ac, consectetur porttitor diam. Praesent nec nisl auctor, suscipit sem id, ullamcorper nibh. Morbi bibendum arcu ac hendrerit rhoncus. Integer aliquet, tellus mollis ullamcorper consequat, ante massa ullamcorper nisl, vel semper massa quam semper augue. Etiam convallis urna interdum sodales molestie. Phasellus et eros nulla. Aenean mollis nibh quis orci sollicitudin porttitor. Integer aliquam vulputate lectus quis convallis. Nunc nibh elit, lobortis eget ligula id, semper efficitur nibh. Praesent sed nunc non ex vulputate pellentesque. Nunc nec porttitor nulla, nec vehicula enim. Ut porta urna eget nibh luctus, sed tincidunt orci consequat.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Nunc enim lectus, dapibus vel urna ornare, euismod maximus leo. Suspendisse rhoncus, mauris et posuere eleifend, nunc ligula suscipit augue, quis fermentum erat diam at est. Nam blandit sapien id arcu ultrices sagittis. Maecenas varius gravida enim, ac tempus tellus faucibus et. Fusce pharetra purus at laoreet porttitor. Nunc in mollis lectus, vel fermentum turpis. Proin ac odio pellentesque, varius leo ac, tincidunt tellus. In ut orci sollicitudin, lobortis nibh in, congue lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","marks":[],"data":{}},{"nodeType":"embedded-entry-inline","content":[],"data":{"target":{"sys":{"id":"7tpSyf4GTjBlJgHBWVPFHr","type":"Link","linkType":"Entry"}}}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}',
          references: [
            {
              contentful_id: "4DeXYLgdD96lCn28dwMbDF",
              __typename: "ContentfulImage",
              altText: "Seagulls flying",
              image: {
                file: {
                  url: "//images.ctfassets.net/citn2sn5tdjr/3Q9gKsg03HYtEWKkBQ3NOX/722721f3dd88ffb3a986a101fe6f57c4/guls.jpg",
                },
              },
            },
            {
              contentful_id: "7tpSyf4GTjBlJgHBWVPFHr",
              __typename: "ContentfulImage",
              altText: null,
              image: {
                file: {
                  url: "//images.ctfassets.net/citn2sn5tdjr/1eQlF3ZOA4BgZFquZeOvRP/3ffdabd01170eceedd25f3a6b1685a01/Pasta-and-spaghetti.jpg",
                },
              },
            },
          ],
        },
      },
      sources: ["source 1", "source 2", "source 3"],
    }

    const location = {
      pathname: "/en/test-prose-as-content-page",
      search: "",
      hash: "",
      href: "http://localhost:8000/en/test-prose-as-content-page",
      origin: "http://localhost:8000",
      protocol: "http:",
      host: "localhost:8000",
      hostname: "localhost",
      port: "8000",
      state: null,
      key: "initial",
    }

    const appData = {
      siteTitle: "Trimble Gatsby",
      siteDescription:
        "This is the Gatsby Boilerplate site for Trimble's MXP project.",
      siteShareImage: {
        file: {
          url: "//images.ctfassets.net/citn2sn5tdjr/3gLnkpGLfEgjPnAdT9CREf/15266e2f077e9c0f67244b094220be77/trimble_logo_NEW.png",
          fileName: "trimble_logo_NEW.png",
        },
      },
      articlesListPage: {
        slug: "articles",
      },
      eventsListPage: {
        slug: "events",
      },
      proseListPage: {
        slug: "prose",
      },
      newsListPage: {
        slug: "press-releases",
      },
    }

    const tree = renderer
      .create(
        <ArticleBodyConnector
          data={data}
          location={location}
          appData={appData}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
