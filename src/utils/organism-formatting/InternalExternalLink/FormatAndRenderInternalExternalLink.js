import { Link } from "gatsby"
import React from "react"
import { useContext } from "react"
import { LayoutContext } from "../../../components/Layout/Layout"
import { formatLink } from "../../functions/routing"

const FormatAndRenderInternalExternalLink = ({ data, location }) => {
  const { homepageSlug } = useContext(LayoutContext)
  const locale = location?.pathname ? location.pathname.split("/")?.[1] : "en"

  const { text, url, title, slug, __typename } = data

  let isExternal = false

  if (__typename === "ContentfulExternalLink") {
    isExternal = true
    return (
      <a
        target={"_blank"}
        rel="noopener noreferrer"
        href={url || formatLink(`/${slug}`, locale, null, homepageSlug)}
      >
        {text || title}
      </a>
    )
  }

  return (
    <Link to={url || formatLink(`/${slug}`, locale, null, homepageSlug)}>
      {text || title}
    </Link>
  )
}

export default FormatAndRenderInternalExternalLink
