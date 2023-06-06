import { createProductTrialPageLink } from "../../components/CTAButtons/CTAButtonsConnector"

export const formatLink = (
  link,
  currentLocale = "en",
  type = null,
  homepageSlug,
  products,
  locale,
  productLink
) => {
  if (productLink && typeof productLink === "string") {
    return createProductTrialPageLink(products, productLink, locale, null)?.url
  }

  let formattedLink

  if (link && typeof link === "string" && link?.endsWith("-page-base")) {
    formattedLink = link.replace("-page-base", "")
  }

  // if there are product page links, pass in the type of link so we can append /products/ to url
  if (type && type === "ContentfulProductPage" && currentLocale) {
    return `/${currentLocale}/products${link.toLowerCase()}`
  } else if (type && type === "ContentfulProductPage" && !currentLocale) {
    return `/en/products${link.toLowerCase()}`
  }

  if (formattedLink) {
    return formattedLink &&
      typeof formattedLink === "string" &&
      formattedLink?.startsWith("/") &&
      !formattedLink?.startsWith(`/${currentLocale}`)
      ? `/${currentLocale}${formattedLink}`
      : formattedLink
  }
  // If a link beings with '/' it is an internal link and we need to add the locale onto the path
  return link &&
    typeof link === "string" &&
    link?.startsWith("/") &&
    !link?.startsWith(`/${currentLocale}`)
    ? link === homepageSlug
      ? `/${currentLocale}/`
      : `/${currentLocale}${link}`
    : link
}

export const parseHtmlLinks = (html, location) => {
  const locale = location?.pathname ? location.pathname.split("/")?.[1] : "en"

  let htmlLinksWithLocale
  if (typeof html === "string") {
    htmlLinksWithLocale = html?.split('<a href="/').join(`<a href="/${locale}/`)
  }

  return htmlLinksWithLocale ? htmlLinksWithLocale : html
}

export const getRedirectLanguage = node_locale => {
  if (!node_locale) {
    return "en"
  }

  const locale = node_locale.toLowerCase()
  if (!locale) return "en"

  return locale ? (locale?.toLowerCase() === "en-us" ? "en" : locale) : locale
}
