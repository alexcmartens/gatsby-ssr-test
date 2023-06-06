import { formatLink } from "../functions/index"

const ctaFormat = (data, location, className, homepageSlug) => {
  if (!data) {
    return null
  }
  const locale = location?.pathname ? location.pathname.split("/")?.[1] : "en"

  return {
    text: data?.text,
    url: formatLink(data?.url, locale, null, homepageSlug),
    // if you don't specify a className, it will default to theme-1. Adding className: "primary-1" will cause ctas that should be secondary to also display as primary.
    // TODO - pass in className when themes are in place
    // className: "primary--1",
  }
}

export default ctaFormat
