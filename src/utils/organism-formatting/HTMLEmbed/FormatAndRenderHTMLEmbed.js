import React from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { HTMLEmbed } from "terra-one"

const FormatAndRenderHTMLEmbed = ({ data, paddingClass, index, location }) => {
  const header = data?.header
  const subheader = data?.subHeader
  const HTML = data?.html?.blob?.childMarkdownRemark?.html
  const ratio = data?.componentAspectRatio
  const content = {
    header,
    subheader,
    HTML,
    ratio,
  }
  return (
    <>{renderPaddingOrFullBleed(<HTMLEmbed content={content} key={index} />)}</>
  )
}

export default FormatAndRenderHTMLEmbed
