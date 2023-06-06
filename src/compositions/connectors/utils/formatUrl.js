const formatUrl = (data, locale = "en") => {
  return data?.sys?.contentType?.sys?.id === "externalLink"
    ? data?.fields?.url
    : data?.sys?.contentType?.sys?.id === "pageBase"
    ? `/${locale}/${data?.fields?.slug}`
    : null
}

export default formatUrl
