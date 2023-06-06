import React from "react"
import renderer from "react-test-renderer"
import FormatAndRenderTabs from "../Tabs/FormatAndRenderTabs"

describe("FormatAndRenderTabs", () => {
  it("renders correctly", () => {
    const data = {
      __typename: "ContentfulTabs",
      tabOrientation: "top",
      variant: "text-background-light",
      displayThumbnails: true,
      tabs: [
        {
          header: "Tab Header Title More Text More Lorem ipsum",
          description: "Anim aliquip aliqua a liqua id qui aute anim",
          image: {
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              },
            },
            altText: "Picture of black, brown, and white dog",
          },
          content: {
            __typename: "ContentfulRichTextContent",
            content: {
              raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Test Rich Text Content:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"inline video: ","nodeType":"text"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-inline"},{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"video entry:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-block"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
              references: [
                {
                  contentful_id: "4Q1qYVp7UkjmQB1dG930lI",
                  __typename: "ContentfulFeat5",
                  anchor: "Feat Five #3",
                  animation: true,
                  header: "Feat Five #3",
                  subHeader: "Feat Five rendering a Vidyard Video",
                  text: {
                    __typename: "ContentfulWysiwygText",
                    wysiwygText: {
                      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Consequat voluptate ullamco nulla adipisicing id eiusmod nulla ullamco sunt. Et laboris commodo labore aliqua. Cupidatat ut Lorem cupidatat laboris. Aute esse dolore proident aliquip sint laboris.","marks":[],"data":{}}],"data":{}}]}',
                    },
                  },
                  video: {
                    thumbnail: {
                      file: {
                        url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
                      },
                    },
                    uuid: "oujmBkR77vwzBMV2gFoFtR",
                  },
                },
              ],
            },
          },
        },
        {
          header: "Tab Header Title More Text More Lorem ipsum",
          description: "Anim aliquip aliqua a liqua id qui aute anim",
          image: {
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              },
            },
            altText: "Picture of black, brown, and white dog",
          },
          content: {
            __typename: "ContentfulRichTextContent",
            content: {
              raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Test Rich Text Content:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"inline video: ","nodeType":"text"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-inline"},{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"video entry:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-block"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
              references: [
                {
                  contentful_id: "4Q1qYVp7UkjmQB1dG930lI",
                  __typename: "ContentfulFeat5",
                  anchor: "Feat Five #3",
                  animation: true,
                  header: "Feat Five #3",
                  subHeader: "Feat Five rendering a Vidyard Video",
                  text: {
                    __typename: "ContentfulWysiwygText",
                    wysiwygText: {
                      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Consequat voluptate ullamco nulla adipisicing id eiusmod nulla ullamco sunt. Et laboris commodo labore aliqua. Cupidatat ut Lorem cupidatat laboris. Aute esse dolore proident aliquip sint laboris.","marks":[],"data":{}}],"data":{}}]}',
                    },
                  },
                  video: {
                    thumbnail: {
                      file: {
                        url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
                      },
                    },
                    uuid: "oujmBkR77vwzBMV2gFoFtR",
                  },
                },
              ],
            },
          },
        },
        {
          header: "Tab Header Title More Text More Lorem ipsum",
          description: "Anim aliquip aliqua a liqua id qui aute anim",
          image: {
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              },
            },
            altText: "Picture of black, brown, and white dog",
          },
          content: {
            __typename: "ContentfulRichTextContent",
            content: {
              raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Test Rich Text Content:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"inline video: ","nodeType":"text"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-inline"},{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"video entry:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-block"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
              references: [
                {
                  contentful_id: "4Q1qYVp7UkjmQB1dG930lI",
                  __typename: "ContentfulFeat5",
                  anchor: "Feat Five #3",
                  animation: true,
                  header: "Feat Five #3",
                  subHeader: "Feat Five rendering a Vidyard Video",
                  text: {
                    __typename: "ContentfulWysiwygText",
                    wysiwygText: {
                      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Consequat voluptate ullamco nulla adipisicing id eiusmod nulla ullamco sunt. Et laboris commodo labore aliqua. Cupidatat ut Lorem cupidatat laboris. Aute esse dolore proident aliquip sint laboris.","marks":[],"data":{}}],"data":{}}]}',
                    },
                  },
                  video: {
                    thumbnail: {
                      file: {
                        url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
                      },
                    },
                    uuid: "oujmBkR77vwzBMV2gFoFtR",
                  },
                },
              ],
            },
          },
        },
        {
          header: "Tab Header Title More Text More Lorem ipsum",
          description: "Anim aliquip aliqua a liqua id qui aute anim",
          image: {
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              },
            },
            altText: "Picture of black, brown, and white dog",
          },
          content: {
            __typename: "ContentfulRichTextContent",
            content: {
              raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Test Rich Text Content:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"inline video: ","nodeType":"text"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-inline"},{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"video entry:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-block"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
              references: [
                {
                  contentful_id: "4Q1qYVp7UkjmQB1dG930lI",
                  __typename: "ContentfulFeat5",
                  anchor: "Feat Five #3",
                  animation: true,
                  header: "Feat Five #3",
                  subHeader: "Feat Five rendering a Vidyard Video",
                  text: {
                    __typename: "ContentfulWysiwygText",
                    wysiwygText: {
                      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Consequat voluptate ullamco nulla adipisicing id eiusmod nulla ullamco sunt. Et laboris commodo labore aliqua. Cupidatat ut Lorem cupidatat laboris. Aute esse dolore proident aliquip sint laboris.","marks":[],"data":{}}],"data":{}}]}',
                    },
                  },
                  video: {
                    thumbnail: {
                      file: {
                        url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
                      },
                    },
                    uuid: "oujmBkR77vwzBMV2gFoFtR",
                  },
                },
              ],
            },
          },
        },
        {
          header: "Tab Header Title More Text More Lorem ipsum",
          description: "Anim aliquip aliqua a liqua id qui aute anim",
          image: {
            image: {
              file: {
                url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
              },
            },
            altText: "Picture of black, brown, and white dog",
          },
          content: {
            __typename: "ContentfulRichTextContent",
            content: {
              raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Test Rich Text Content:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"inline video: ","nodeType":"text"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-inline"},{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"video entry:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{"target":{"sys":{"id":"4Q1qYVp7UkjmQB1dG930lI","type":"Link","linkType":"Entry"}}},"content":[],"nodeType":"embedded-entry-block"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
              references: [
                {
                  contentful_id: "4Q1qYVp7UkjmQB1dG930lI",
                  __typename: "ContentfulFeat5",
                  anchor: "Feat Five #3",
                  animation: true,
                  header: "Feat Five #3",
                  subHeader: "Feat Five rendering a Vidyard Video",
                  text: {
                    __typename: "ContentfulWysiwygText",
                    wysiwygText: {
                      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Consequat voluptate ullamco nulla adipisicing id eiusmod nulla ullamco sunt. Et laboris commodo labore aliqua. Cupidatat ut Lorem cupidatat laboris. Aute esse dolore proident aliquip sint laboris.","marks":[],"data":{}}],"data":{}}]}',
                    },
                  },
                  video: {
                    thumbnail: {
                      file: {
                        url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
                      },
                    },
                    uuid: "oujmBkR77vwzBMV2gFoFtR",
                  },
                },
              ],
            },
          },
        },
      ],
    }

    const location = {
      pathname: "/en/test-tabs-page/",
      search: "",
      hash: "",
      href: "http://localhost:8000/en/test-tabs-page/",
      origin: "http://localhost:8000",
      protocol: "http:",
      host: "localhost:8000",
      hostname: "localhost",
      port: "8000",
      state: null,
      key: "initial",
    }

    const tree = renderer
      .create(
        <FormatAndRenderTabs
          data={data}
          location={location}
          paddingClass="page-section-wrapper"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
