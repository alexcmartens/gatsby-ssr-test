import * as React from "react"
import { Link } from "gatsby"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import formatUrl from "./utils/formatUrl"
import formatFocusedImage from "./utils/formatFocusedImage"
import { PullQuote } from "terra-one"

const PullQuoteConnector = props => {
  const data = props?.contentfulEntry ? props?.contentfulEntry : props?.data

  const text = data?.fields?.quote
  const source = data?.fields?.author
  const sourceTitle = data?.fields?.authorCredentials
  const quote = { text, source, sourceTitle }
  const imagePosition = data?.fields?.imagePosition?.toString() || "Left"
  const appearance = data?.fields?.appearance || "Light"
  const imageWidth = data?.fields?.imageWidth || "1/2"

  const topImage = formatFocusedImage(data?.fields?.topImage)
  const sideImage = formatFocusedImage(data?.fields?.sideImage)
  const backgroundImage = formatFocusedImage(data?.fields?.backgroundImage)

  const cta = {
    text: data?.fields?.cta?.text,
    url: formatUrl(data?.fields?.cta?.url),
    Link: Link
  }

  const theme = (appearance === "Dark") ? 
    {
        backgroundColor: "#252a2e",
        color: "#fff",
        ctaClass: "secondary--1",
    }
    : {
        backgroundColor: "#fff",
        color: "#252a2e",
        ctaClass: "primary--2",
    }
    const isTopImage = topImage?.focalPointImage?.url
    const variant = () => {
      if (isTopImage) {
        return "variant3"
      } else if (imageWidth === "1/2") {
        return "variant2"
      } else if (imageWidth === "1/4") {
        if (appearance === "Light") {
          return "variant1"
        }
        if (appearance === "Dark") {
          return "variant2"
        }
      } else {
        return ""
      }
    }    

  const content = {
    quote,
    cta,
    theme,
    Link,
    topImage,
    sideImage,
    imageWidth,
    imagePosition,
    appearance,
    backgroundImage,
  }

  const padding = true,
    fullBleedColor = false,
    inheritBackground = false

  return renderPaddingOrFullBleed(
    <PullQuote content={content} variant={variant()} />,
    padding,
    fullBleedColor,
    inheritBackground
  )
}

export default PullQuoteConnector
