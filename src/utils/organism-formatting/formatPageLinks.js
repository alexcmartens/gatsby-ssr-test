import { Link } from "gatsby"
import checkForExternalLink from "./checkForExternalLink"
import { createProductTrialPageLink} from  "../../components/CTAButtons/CTAButtonsConnector"
export const formatPageLinks = (
  link,
  locale = "en",
  type,
  homepageSlug,
  currentSpaceId,
  products,
  siteIdentifier
) => {
  if (!link && !type) {
    return null
  }


  if (link?.url?.__typename === "ContentfulProductTrialPage") {
    return createProductTrialPageLink(products, link?.url?.product?.sys?.urn, locale, link, siteIdentifier)
  }

  let prefix = ``
  let text
  if (type && type === "article") {
    prefix = `articles/`
  } else if (type && type === "event") {
    prefix = `events/`
  } else if (type && type === "prose") {
    prefix = `prose/`
  } else if (type && type === "ContentfulNews") {
    prefix = `news/`
  } else if (type && type === "ContentfulProductPage") {
    prefix = `products/`
  } else if (type && type === "blog post") {
    prefix = `blog/`
  } else if (type && type === "customer story") {
    prefix = `customer-stories/`
  }
  
  if (link?.text) {
    text = link.text
  }

  if (!link?.text) {
    text = link?.url?.text
  }

  if (link?.url?.url) {
    link.external = checkForExternalLink(link?.url?.url)
  }

  if (link?.url && !link?.url?.url) {
    link.external = checkForExternalLink(link?.url, link?.url?.type)
  }

  const url =
    link?.url?.type && link?.url?.type === "ContentfulDownloadLink"
      ? updateDownloadLink(link?.url?.realLink?.url, currentSpaceId)
      : link?.url
      ? link?.url?.url?.startsWith("http")
        ? link?.url?.url
        : locale && typeof locale === "string"
        ? link?.url?.url === homepageSlug
          ? `/${locale?.toLowerCase()}/${prefix}`
          : `/${locale?.toLowerCase()}/${prefix}${link?.url?.url?.toLowerCase()}`
        : `/en/${prefix}${link?.url?.url?.toLowerCase()}`
      : null

  if (link?.url?.type && link?.url?.type === "ContentfulDownloadLink") {
    return {
      text,
      onClick: () => window.open(url, "_blank"),
      Link,
      override:
        link?.override || link?.override === false ? link.override : null,
      setOverride: link?.setOverride ? link.setOverride : null,
      video: link?.video ? link.video : null,
    }
  }
  return {
    text,
    url,
    Link,
    override: link?.override || link?.override === false ? link.override : null,
    setOverride: link?.setOverride ? link.setOverride : null,
    video: link?.video ? link.video : null,
    iconImage: link?.iconImage,
  }
}

export const updateDownloadLink = (link, currentSpaceId = "") => {
  if (link && link?.includes("https://assets.ctfassets.net/")) {
    return link.replace(
      `https://assets.ctfassets.net/${currentSpaceId}/`,
      "/downloads/"
    )
  } else if (link && link?.includes("https://downloads.ctfassets.net")) {
    return link.replace(
      `https://downloads.ctfassets.net/${currentSpaceId}/`,
      "/downloads/"
    )
  } else if (link && link?.includes("https://images.ctfassets.net/")) {
    return link.replace(
      `https://images.ctfassets.net/${currentSpaceId}/`,
      "/downloads/"
    )
  }
}

export default formatPageLinks
