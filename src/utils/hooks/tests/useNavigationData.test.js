import { renderHook } from "@testing-library/react"
import useNavigationData from "../useNavigationData"

describe("useNavigationData", () => {
  const _rawNavigationData = {
    navigationItems: [
      {
        __typename: "ContentfulNavigationCategory",
        type: "category",
        featuredLinksSectionTitle: "Featured Content",
        featuredLinks: [
          {
            __typename: "ContentfulPageBase",
            id: "eafa889f-cdda-533c-8544-ec699e72bdf5",
            title: "Featured Content",
            pageName: "Featured Content",
            slug: "featured-content",
            icon: "",
            isPublicPage: false,
          },
          {
            __typename: "ContentfulExternalLink",
            id: "49cdbf1e-6184-53cd-9321-4b5bf2d04fe1",
            text: "Careers",
            url: "https://careers.com",
          },
        ],
        navigationItems: [
          {
            __typename: "ContentfulNavigationSubcategory",
            id: "733db9bb-9f42-5bc9-8c96-d108e02c7314",
            navigationItems: [
              {
                __typename: "ContentfulNavigationTertiaryCategory",
                id: "9bca2e05-eef9-5a09-a560-eb34e3510374",
                navigationItems: [
                  {},
                  {
                    __typename: "ContentfulExternalLink",
                    id: "adc5fa49-2aee-525a-a7cc-cdaec0fb9dc6",
                    text: "External Link1",
                    url: "https://external-links.com",
                  },
                  {},
                  {},
                  {},
                ],
                title: "TertiaryLink1",
              },
              {
                __typename: "ContentfulPageBase",
                id: "16ee7ffb-b359-52c6-a78b-73c1a8d3b0fe",
                title: "All Heroes",
                pageName: "All Heroes",
                slug: "all-heroes",
                icon: "",
                isPublicPage: true,
              },
              {
                __typename: "ContentfulPageBase",
                id: "5dc110ce-4f5c-5548-9e96-4a33762bd053",
                title: "Featured Content",
                pageName: "Featured Content",
                slug: "featured-content-page",
                icon: "",
                isPublicPage: true,
              },
            ],
            title: "Intents",
          },
          {
            __typename: "ContentfulPageBase",
            id: "632987d4-cac9-59ed-8c86-bed82bdcd959",
            title: "Sub Link 1",
            pageName: "Sub Link 1",
            slug: "sub-link-1",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulPageBase",
            id: "d016a324-a768-542f-a944-76a29d552bf2",
            title: "Sub Link 2",
            pageName: "Sub Link 2",
            slug: "sub-link-2",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulPageBase",
            id: "f5d6bee2-65d1-58a0-887b-47428fd5cc0c",
            title: "Sub Link 3",
            pageName: "Sub Link 3",
            slug: "sub-link-3",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulNavigationSubcategory",
            id: "1e3490e2-e629-5131-b7a7-c7b8c1838b36",
            navigationItems: [
              {
                __typename: "ContentfulPageBase",
                id: "632987d4-cac9-59ed-8c86-bed82bdcd959",
                title: "Sub Link 1",
                pageName: "Sub Link 1",
                slug: "sub-link-1",
                icon: "",
                isPublicPage: true,
              },
              {
                __typename: "ContentfulPageBase",
                id: "d016a324-a768-542f-a944-76a29d552bf2",
                title: "Sub Link 2",
                pageName: "Sub Link 2",
                slug: "sub-link-2",
                isPublicPage: true,
              },
              {
                __typename: "ContentfulExternalLink",
                id: "49cdbf1e-6184-53cd-9321-4b5bf2d04fe1",
                text: "Careers",
                url: "https://careers.com",
              },
            ],
            title: "Category Two",
          },
          {
            __typename: "ContentfulExternalLink",
            text: "Careers",
            url: "https://careers.com",
          },
        ],
        title: "Personalization",
      },
      {
        __typename: "ContentfulNavigationCategory",
        type: "category",
        featuredLinksSectionTitle: null,
        featuredLinks: null,
        icon: "",
        navigationItems: [
          {
            __typename: "ContentfulNavigationSubcategory",
            id: "b9411322-7031-5590-b0c8-407bafe5fe44",
            navigationItems: [
              {
                __typename: "ContentfulImage",
                link: {
                  url: "/",
                  description:
                    "PC Miller do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                },
                title: "PC Miler",
                image: {
                  file: {
                    url: "//images.ctfassets.net/citn2sn5tdjr/3FSuaVTORqYtzktnXyLGl0/f2d2b360a6f5590aa9d72f6db17bd1ea/logo-pc-miller.png",
                  },
                },
              },
              {
                __typename: "ContentfulImage",
                link: {
                  url: "/hero-one",
                  description:
                    "Mile On do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                },
                title: "Mile On",
                image: {
                  file: {
                    url: "//images.ctfassets.net/citn2sn5tdjr/77wIhhmm05V88FgmEIE1pt/ae4158077dc42d74b516ff3684976592/logo-mile-on.png",
                  },
                },
              },
              {
                __typename: "ContentfulImage",
                link: {
                  url: "/hero-two",
                  description:
                    "Appian do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                },
                title: "Appian Logo",
                image: {
                  file: {
                    url: "//images.ctfassets.net/citn2sn5tdjr/1mAeGCgu0CMRjIpSJJn5jh/8ed5c5ce8faef9b702665f024de570b0/logo-appian.png",
                  },
                },
              },
              {
                __typename: "ContentfulImage",
                link: {
                  url: "/hero-three",
                  description:
                    "Copilot do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                },
                title: "Copilot",
                image: {
                  file: {
                    url: "//images.ctfassets.net/citn2sn5tdjr/5CSYB07OCGtjNQ6IjPhecC/6219070cc037db16ab94b09ac096b724/logo-copilot.png",
                  },
                },
              },
            ],
            title: "Products",
          },
          {
            __typename: "ContentfulNavigationSubcategory",
            id: "904195c1-1513-5df4-8bee-b548ac99be89",
            navigationItems: [
              {
                __typename: "ContentfulExternalLink",
                id: "49cdbf1e-6184-53cd-9321-4b5bf2d04fe1",
                text: "Careers",
                url: "https://careers.com",
              },
              {
                __typename: "ContentfulExternalLink",
                id: "adc5fa49-2aee-525a-a7cc-cdaec0fb9dc6",
                text: "External Link1",
                url: "https://external-links.com",
              },
              {
                __typename: "ContentfulExternalLink",
                id: "070ad8cb-0dfa-5b16-8749-f6657d824386",
                text: "External Link2",
                url: "https://external-link2.com",
              },
              {
                __typename: "ContentfulPageBase",
                id: "5dc110ce-4f5c-5548-9e96-4a33762bd053",
                title: "Featured Content",
                pageName: "Featured Content",
                slug: "featured-content-page",
                icon: "",
                isPublicPage: true,
              },
            ],
            title: "Feats",
          },
          {
            __typename: "ContentfulExternalLink",
            text: "Careers",
            url: "https://careers.com",
          },
        ],
        title: "Organisms",
      },
      {
        __typename: "ContentfulNavigationCategory",
        type: "links",
        featuredLinksSectionTitle: null,
        featuredLinks: null,
        icon: "",
        navigationItems: [
          {
            __typename: "ContentfulPageBase",
            id: "2cc1b9b4-6ccf-58ef-86f5-dff15b58f2d8",
            title: "All Feats",
            pageName: "The All Feats Page",
            slug: "all-feats",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulPageBase",
            id: "16ee7ffb-b359-52c6-a78b-73c1a8d3b0fe",
            title: "All Heroes",
            pageName: "All Heroes",
            slug: "all-heroes",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulPageBase",
            id: "9447b44a-9035-5047-bbc9-8ff906a490f1",
            title: "Contact Us",
            pageName: "Contact Us",
            slug: "contact-us",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulPageBase",
            id: "cf074002-413b-5dac-9b7c-1e53007b1c5b",
            title: "Investor Intent Boost",
            pageName: "Investor Intent Boost",
            slug: "investors",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulPageBase",
            id: "b1df16b1-37c0-5215-89df-2cefcd5abef5",
            title: "News Releases",
            pageName: "News Releases",
            slug: "news-releases",
            icon: "",
            isPublicPage: true,
          },
          {
            __typename: "ContentfulExternalLink",
            text: "Careers",
            url: "https://careers.com",
          },
        ],
        title: "Trimble Links",
      },
      {
        __typename: "ContentfulNavigationCategory",
        type: "category",
        featuredLinksSectionTitle: null,
        icon: "",
        featuredLinks: [
          {
            __typename: "ContentfulExternalLink",
            id: "49cdbf1e-6184-53cd-9321-4b5bf2d04fe1",
            text: "Careers",
            url: "https://careers.com",
          },
          {
            __typename: "ContentfulPageBase",
            id: "5dc110ce-4f5c-5548-9e96-4a33762bd053",
            title: "Featured Content",
            pageName: "Featured Content",
            slug: "featured-content-page",
            icon: "",
            isPublicPage: true,
          },
        ],
        navigationItems: [
          {
            __typename: "ContentfulNavigationSubcategory",
            id: "904195c1-1513-5df4-8bee-b548ac99be89",
            navigationItems: [
              {
                __typename: "ContentfulExternalLink",
                id: "49cdbf1e-6184-53cd-9321-4b5bf2d04fe1",
                text: "Careers",
                url: "https://careers.com",
              },
              {
                __typename: "ContentfulExternalLink",
                id: "adc5fa49-2aee-525a-a7cc-cdaec0fb9dc6",
                text: "External Link1",
                url: "https://external-links.com",
              },
              {
                __typename: "ContentfulExternalLink",
                id: "070ad8cb-0dfa-5b16-8749-f6657d824386",
                text: "External Link2",
                url: "https://external-link2.com",
              },
              {
                __typename: "ContentfulPageBase",
                id: "5dc110ce-4f5c-5548-9e96-4a33762bd053",
                title: "Featured Content",
                pageName: "Featured Content",
                slug: "featured-content-page",
                icon: "",
                isPublicPage: true,
              },
            ],
            title: "Feats",
          },
        ],
        title: "Category with one link",
      },
      {
        __typename: "ContentfulPageBase",
        id: "632987d4-cac9-59ed-8c86-bed82bdcd959",
        title: "Sub Link 1",
        pageName: "Sub Link 1",
        slug: "sub-link-1",
        icon: "",
        isPublicPage: true,
      },
      {
        __typename: "ContentfulExternalLink",
        text: "External Link1",
        url: "https://external-links.com",
        description: undefined,
        imageUrl: undefined,
      },
    ],
    topNavigationLinks: [
      {
        __typename: "ContentfulPageBase",
        id: "9447b44a-9035-5047-bbc9-8ff906a490f1",
        title: "Contact Us",
        pageName: "Contact Us",
        slug: "contact-us",
        icon: "",
        isPublicPage: true,
      },
    ],
    featuredLink: {
      __typename: "ContentfulPageBase",
      id: "5dc110ce-4f5c-5548-9e96-4a33762bd053",
      title: "Featured Content",
      pageName: "Featured Content",
      slug: "featured-content-page",
      icon: "",
      isPublicPage: true,
    },
    mainNav_title: "Main Navigation",
    languageOptionsLabel: "Language Options",
    currentLanguageLabel: "Current Language",
    sectorName: "Connected Construction",
    disableSearch: false,
    disableLanguageRegion: false,
    disableSectorFlyOut: true,
    disableLogin: true,
    isExpanded: false,
    trimbleLogo: {
      altText: "Trimble Logo",
      image: {
        file: {
          url: "test-file-stub",
        },
      },
    },
    quickLinks: [
      {
        title: "Sketchup",
        description: "3D modeling software",
        linkText: "Try it now!",
        externalUrl: "https://www.sketchup.com/",
      },
      {
        title: "Sonic screwdriver",
        description: "Multifunctional device",
        linkText: "Learn more!",
        externalUrl: "https://en.wikipedia.org/wiki/Sonic_screwdriver",
      },
    ],
    quickLinksCta: {
      title: "Discover",
      reference: {
        __typename: "ContentfulPageBase",
        slug: "/solutions/overview",
      },
    },
  }

  const _applicationData = {
    cancelLabel: "Cancel",
    divisionName: "Gatsby",
    languageEnabled: true,
    learnMoreText: "Learn More",
    regionEnabled: true,
    saveLabel: "Save",
    siteTitle: "Trimble Gatsby",
    submitButtonText: "Submit",
    homeButtonText: "Home",
  }

  const _flyoutData = {
    links: [
      {
        __typename: "ContentfulPageBase",
        title: "Investor Intent Boost",
        slug: "investors",
        isPublicPage: true,
      },

      {
        __typename: "ContentfulPageBase",
        title: "News Releases",
        slug: "news-releases",
        isPublicPage: true,
      },
      {
        __typename: "ContentfulExternalLink",
        text: "Careers",
        url: "https://careers.com",
      },
    ],
    searchPlaceholder: "Search Trimble Sites",
    disableSearch: false,
    mobileLabel: "Explore Trimble",
    signInBtnMethod: null,
    signOutBtnMethod: null,
  }

  it("should have initial state", () => {
    const { result } = renderHook(() => useNavigationData())

    expect(result.current.navigationData).toEqual(null)
  })

  it("should format and return new state", () => {
    const { result } = renderHook(() =>
      useNavigationData(_rawNavigationData, _applicationData, "en", _flyoutData)
    )

    const expected = {
      navOptions: [
        {
          text: "Personalization",
          type: "category",
          featuredLinksTitle: "Featured Content",
          icon: undefined,
          featuredLinks: [
            {
              url: "/en/featured-content",
              type: "link",
              text: "Featured Content",
              isPublicPage: undefined,
            },
            {
              url: "https://careers.com",
              type: "link",
              text: "Careers",
              external: true,
            },
          ],
          links: [
            {
              text: "Intents",
              links: [
                {
                  text: "TertiaryLink1",
                  links: [
                    {
                      text: "External Link1",
                      url: "https://external-links.com",
                      type: "link",
                      description: undefined,
                      imageUrl: undefined,
                    },
                  ],
                },
                {
                  url: "/en/all-heroes",
                  text: "All Heroes",
                  type: "link",
                  isPublicPage: true,
                },
                {
                  url: "/en/featured-content-page",
                  text: "Featured Content",
                  type: "link",
                  isPublicPage: true,
                },
              ],
            },
            {
              url: "/en/sub-link-1",
              text: "Sub Link 1",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "/en/sub-link-2",
              text: "Sub Link 2",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "/en/sub-link-3",
              text: "Sub Link 3",
              type: "link",
              isPublicPage: true,
            },
            {
              text: "Category Two",
              links: [
                {
                  url: "/en/sub-link-1",
                  text: "Sub Link 1",
                  type: "link",
                  isPublicPage: true,
                },
                {
                  url: "/en/sub-link-2",
                  text: "Sub Link 2",
                  type: "link",
                  isPublicPage: true,
                },
                {
                  text: "Careers",
                  url: "https://careers.com",
                  external: true,
                  type: "link",
                },
              ],
            },
            {
              url: "https://careers.com",
              text: "Careers",
              external: true,
              type: "link",
            },
          ],
        },
        {
          text: "Organisms",
          type: "category",
          featuredLinksTitle: null,
          featuredLinks: [],
          icon: undefined,
          links: [
            {
              text: "Products",
              links: [
                {
                  text: "PC Miler",
                  url: "/en/",
                  type: "link",
                  description:
                    "PC Miller do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                  imageUrl:
                    "//images.ctfassets.net/citn2sn5tdjr/3FSuaVTORqYtzktnXyLGl0/f2d2b360a6f5590aa9d72f6db17bd1ea/logo-pc-miller.png",
                },
                {
                  text: "Mile On",
                  url: "/en/hero-one",
                  type: "link",
                  description:
                    "Mile On do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                  imageUrl:
                    "//images.ctfassets.net/citn2sn5tdjr/77wIhhmm05V88FgmEIE1pt/ae4158077dc42d74b516ff3684976592/logo-mile-on.png",
                },
                {
                  text: "Appian Logo",
                  url: "/en/hero-two",
                  type: "link",
                  description:
                    "Appian do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                  imageUrl:
                    "//images.ctfassets.net/citn2sn5tdjr/1mAeGCgu0CMRjIpSJJn5jh/8ed5c5ce8faef9b702665f024de570b0/logo-appian.png",
                },
                {
                  text: "Copilot",
                  url: "/en/hero-three",
                  type: "link",
                  description:
                    "Copilot do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
                  imageUrl:
                    "//images.ctfassets.net/citn2sn5tdjr/5CSYB07OCGtjNQ6IjPhecC/6219070cc037db16ab94b09ac096b724/logo-copilot.png",
                },
              ],
            },
            {
              text: "Feats",
              links: [
                {
                  text: "Careers",
                  url: "https://careers.com",
                  external: true,
                  type: "link",
                },
                {
                  text: "External Link1",
                  url: "https://external-links.com",
                  external: true,
                  type: "link",
                },
                {
                  text: "External Link2",
                  url: "https://external-link2.com",
                  external: true,
                  type: "link",
                },
                {
                  url: "/en/featured-content-page",
                  text: "Featured Content",
                  type: "link",
                  isPublicPage: true,
                },
              ],
            },
            {
              url: "https://careers.com",
              text: "Careers",
              external: true,
              type: "link",
            },
          ],
        },
        {
          text: "Trimble Links",
          type: "links",
          featuredLinksTitle: null,
          featuredLinks: [],
          icon: undefined,
          links: [
            {
              url: "/en/all-feats",
              text: "The All Feats Page",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "/en/all-heroes",
              text: "All Heroes",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "/en/contact-us",
              text: "Contact Us",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "/en/investors",
              text: "Investor Intent Boost",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "/en/news-releases",
              text: "News Releases",
              type: "link",
              isPublicPage: true,
            },
            {
              url: "https://careers.com",
              text: "Careers",
              external: true,
              type: "link",
            },
          ],
        },
        {
          text: "Category with one link",
          type: "category",
          featuredLinksTitle: null,
          icon: undefined,

          featuredLinks: [
            {
              url: "https://careers.com",
              text: "Careers",
              external: true,
              type: "link",
            },
            {
              url: "/en/featured-content-page",
              text: "Featured Content",
              type: "link",
              isPublicPage: undefined,
            },
          ],
          links: [
            {
              text: "Feats",
              links: [
                {
                  text: "Careers",
                  url: "https://careers.com",
                  external: true,
                  type: "link",
                },
                {
                  text: "External Link1",
                  url: "https://external-links.com",
                  external: true,
                  type: "link",
                },
                {
                  text: "External Link2",
                  url: "https://external-link2.com",
                  external: true,
                  type: "link",
                },
                {
                  url: "/en/featured-content-page",
                  text: "Featured Content",
                  type: "link",
                  isPublicPage: true,
                },
              ],
            },
          ],
        },
        {
          url: "/en/sub-link-1",
          text: "Sub Link 1",
          type: "link",
          icon: undefined,
          isPublicPage: undefined,
        },
        {
          icon: undefined,
          url: "https://external-links.com",
          text: "External Link1",
          external: true,
          type: "link",
        },
      ],
      navCTA: {
        className: "ter-button--primary--1",
        link: {
          text: undefined,
          url: undefined,
        },
      },
      divisionName: "",
      featuredLink: {
        text: "Featured Content",
        url: "/en/featured-content-page",
        type: "link",
        isPublicPage: true,
      },
      isExpanded: false,
      isSector: undefined,
      disableLanguageRegion: false,
      disableLogin: true,
      disableSearch: false,
      disableSectorFlyOut: true,
      displaySectorName: undefined,
      displayIcons: undefined,
      menuBarTheme: "whiteTheme",
      topNavTheme: "whiteTheme",
      subNavTheme: "whiteTheme",
      languageSelectorData: {
        labels: {
          buttons: {
            cancel: "Cancel",
            ok: "OK",
          },
          language: "LANGUAGE",
          region: "REGION",
        },
        languages: undefined,
        regions: undefined,
        settings: {
          disableSearch: false,
          links: [
            {
              __typename: "ContentfulPageBase",
              isPublicPage: true,
              slug: "investors",
              title: "Investor Intent Boost",
            },
            {
              __typename: "ContentfulPageBase",
              isPublicPage: true,
              slug: "news-releases",
              title: "News Releases",
            },
            {
              __typename: "ContentfulExternalLink",
              text: "Careers",
              url: "https://careers.com",
            },
          ],
          mobileLabel: "Explore Trimble",
          searchPlaceholder: "Search Trimble Sites",
          signInBtnMethod: null,
          signOutBtnMethod: null,
        },
      },
      rightLinks: [
        {
          __typename: "ContentfulPageBase",
          id: "9447b44a-9035-5047-bbc9-8ff906a490f1",
          title: "Contact Us",
          pageName: "Contact Us",
          slug: "contact-us",
          url: "/en/contact-us",
          text: "Contact Us",
          type: "link",
          icon: "",
          isPublicPage: true,
        },
      ],
      logo: {
        url: "test-file-stub",
        altText: "Trimble Logo",
        link: { url: "/en/" },
      },

      disableMenus: undefined,
      isAuthenticated: undefined,
      loginPage: undefined,
      logout: undefined,
      userProfile: undefined,
      authLabels: {
        login: undefined,
        logout: undefined,
        welcome: undefined,
        myAccount: undefined,
        myDashboardLabel: undefined,
      },
      waffleMenu: {
        cta: {
          title: undefined,
          url: null,
        },
        links: undefined,
      },
    }

    expect(result.current.navigationData).toStrictEqual(expected)
  })
})
