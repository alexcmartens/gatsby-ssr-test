import Logo from "../../images/trimble-logo.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/twitter.png"
import YouTube from "../../images/youtube.png"
import LinkedIn from "../../images/linkedin.png"

const logo = {
  url: Logo,
  altText: "fpo",
}

const trimbleText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const trimbleLink = {
  url: "/fun-page",
  text: "More About Trimble",
}

const siteText = "Text for secondary link information"

const siteLink = {
  url: "/fun-page",
  text: "link.trimble.com",
}

const linksOne = [
  { url: "/fun-page", text: "Request Demo" },
  { url: "/fun-page", text: "Contact Us" },
  { url: "/fun-page", text: "Support" },
]

const linksTwo = [
  { url: "/fun-page", text: "About Us" },
  { url: "/fun-page", text: "Manage Preferences" },
  { url: "/fun-page", text: "Constructible" },
]

const socialLinks = [
  {
    icon: {
      url: Facebook,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: Twitter,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: YouTube,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: LinkedIn,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: Facebook,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: Twitter,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: YouTube,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
  {
    icon: {
      url: LinkedIn,
      altText: "fpo",
    },
    link: {
      url: "/fun-page",
    },
  },
]

const privacyStatement = {
  url: "/fun-page",
  text: "Privacy Statement",
}

const termsOfUse = {
  url: "/fun-page",
  text: "Terms of Use",
}

const copyright = {
  url: "/fun-page",
  text: "Copyright",
}

const legalStuff = [
  {
    url: "/fun-page",
    text: "Terms of Use",
  },
  {
    url: "/fun-page",
    text: "Privacy Statement",
  },
  { text: "© 2019, Trimble Inc." },
]

export default {
  legalStuff,
  copyright,
  termsOfUse,
  privacyStatement,
  socialLinks,
  linksTwo,
  linksOne,
  logo,
  trimbleText,
  trimbleLink,
  siteText,
  siteLink,
}
