import Logo from "../../images/trimble-logo.png"

const navCTA = {
  link: {
    url: "/test-page",
    text: "Contact Sales",
  },
  className: "ter-button--primary--1",
}

const megaMenu = {
  type: "mega menu",
  bottomLink: {
    url: "/test-page",
    text: "All Products",
  },
  text: "Organisms",
  links: [
    {
      text: "Feats",
      links: [
        {
          url: "/all-feats",
          text: "All Feats",
        },
        {
          url: "/fun-page",
          text: "Estimating",
        },
        {
          url: "/fun-page",
          text: "Takeoff",
        },
        {
          url: "/fun-page",
          text: "Pricing Services",
        },
        {
          url: "/fun-page",
          text: "Design/Detailing",
        },
        {
          url: "/fun-page",
          text: "Project Management",
        },
        {
          url: "/fun-page",
          text: "BIM Collaboration",
        },
        {
          url: "/fun-page",
          text: "MEP Content",
        },
      ],
    },
    {
      text: "Heroes",
      links: [
        {
          url: "/all-heroes",
          text: "All Heroes",
        },
        {
          url: "/fun-page",
          text: "Estimating",
        },
        {
          url: "/fun-page",
          text: "Takeoff",
        },
        {
          url: "/fun-page",
          text: "Pricing Services",
        },
        {
          url: "/fun-page",
          text: "Design/Detailing",
        },
        {
          url: "/fun-page",
          text: "Project Management",
        },
        {
          url: "/fun-page",
          text: "BIM Collaboration",
        },
        {
          url: "/fun-page",
          text: "MEP Content",
        },
      ],
    },
    {
      text: "Plumbing",
      link: {
        url: "/fun-page",
      },
    },
    {
      text: "List Feats",
      links: [
        {
          url: "/fun-page",
          text: "Estimating",
        },
        {
          url: "/fun-page",
          text: "Takeoff",
        },
        {
          url: "/fun-page",
          text: "Pricing Services",
        },
        {
          url: "/fun-page",
          text: "Design/Detailing",
        },
        {
          url: "/fun-page",
          text: "Project Management",
        },
        {
          url: "/fun-page",
          text: "BIM Collaboration",
        },
        {
          url: "/fun-page",
          text: "MEP Content",
        },
      ],
    },
    {
      text: "HVAC",
      links: [
        {
          url: "/lauras-test-page",
          text: "HVAC Overview",
        },
        {
          url: "/fun-page",
          text: "Estimating",
        },
        {
          url: "/fun-page",
          text: "Takeoff",
        },
        {
          url: "/fun-page",
          text: "Pricing Services",
        },
        {
          url: "/fun-page",
          text: "Design/Detailing",
        },
        {
          url: "/fun-page",
          text: "Project Management",
        },
        {
          url: "/fun-page",
          text: "BIM Collaboration",
        },
        {
          url: "/fun-page",
          text: "MEP Content",
        },
      ],
    },
  ],
}

const miniMenus = [
  {
    type: "mini menu",
    text: "Services",
    links: [
      {
        url: "/test-page",
        text: "Link One",
      },
      {
        url: "/test-page",
        text: "Link Two",
      },
      {
        url: "/test-page",
        text: "Link Three",
      },
      {
        url: "/test-page",
        text: "Link Four",
      },
      {
        url: "/test-page",
        text: "Link Five",
      },
      {
        url: "/test-page",
        text: "Link One",
      },
    ],
  },
  {
    type: "mini menu",
    text: "Resources",
    links: [
      {
        url: "/test-page",
        text: "Link One",
      },
      {
        url: "/test-page",
        text: "Link Two",
      },
      {
        url: "/test-page",
        text: "Link Three",
      },
      {
        url: "/test-page",
        text: "Link Four",
      },
      {
        url: "/test-page",
        text: "Link Five",
      },
      {
        url: "/test-page",
        text: "Link One",
      },
    ],
  },
]

const menuLink = {
  type: "link",
  url: "/test-page",
  text: "Process",
}

const utilityNav = {
  pageTitle: "Trimble Accubid",
  pageTitleModifier: "Enterprise",
  links: [
    {
      text: "Product Anchor",
      url: "/test-page",
    },
    {
      text: "Product Anchor",
      url: "/test-page",
    },
    {
      text: "Product Anchor",
      url: "/test-page",
    },
    {
      text: "Product Anchor",
      url: "/test-page",
    },
    {
      text: "Product Anchor",
      url: "/test-page",
    },
    {
      text: "Product Anchor",
      url: "/test-page",
    },
  ],
}

const location = "/"

const rightLinks = [
  {
    url: "/",
    text: "Link",
  },
]

const divisionName = "Trimlbe Gatsby"

const navOptions = [megaMenu, ...miniMenus, menuLink]

const logo = {
  url: Logo,
  altText: "Trimble Logo",
  link: {
    url: "/test-page",
  },
}

export const regionData = {
  region: "NA",
  regions: [
    { name: "North America", isoCode: "NA" },
    { name: "United Kingdom", isoCode: "UK" },
  ],
  setRegion: response => console.log(response),
}

export const languages = [
  { id: "en", name: "English" },
  { id: "es", name: "Spanish" },
]

export const applicationData = {
  languageEnabled: true,
  regionEnabled: true,
  currentLanguageLabel: "Current Language",
  languageOptionsLabel: "Language Options",
  siteTitle: "Trimble Gatsby",
}

const NavBarData = {
  navOptions,
  navCTA,
  utilityNav,
  location,
  rightLinks,
  logo,
  divisionName,
}

export default NavBarData
