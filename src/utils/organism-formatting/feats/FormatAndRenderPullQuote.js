import React, { useState } from "react"
import { formatFocusedImage } from "../formatBaseMolecules"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import formatPageLinks from "../formatPageLinks"
import formatVideo from "../formatVideo"
import { PullQuote } from "terra-one"
import { Link } from "gatsby"
import formatLottieAnimation from "../formatLottieAnimation"

const FormatAndRenderPullQuote = props => {
  const [override, setOverride] = useState(false)
  const { data = {}, i, locale, products, siteIdentifier } = props

  const text = data?.quote
  const source = data?.author
  const sourceTitle = data?.authorCredentials
  const quote = { text, source, sourceTitle }
  const imagePosition = data?.imagePosition?.toString() || "Left"
  const appearance = data?.appearance || "Light"
  const imageOptions = data?.imageOptions || "1/2"
  const pullQuoteLottieStyles = {}
  const topImage = formatPullQuoteImage(data?.topImage, pullQuoteLottieStyles)
  const sideImage = formatPullQuoteImage(data?.sideImage, pullQuoteLottieStyles)
  const backgroundImage = formatPullQuoteImage(
    data?.backgroundImage,
    pullQuoteLottieStyles
  )

  const linkType = data?.cta?.url?.contentType
    ? data?.cta?.url?.contentType
    : data?.cta?.url?.internal?.type
    ? data?.cta?.url?.internal?.type
    : null

  const cta = formatPageLinks(
    data?.cta,
    locale,
    linkType,
    null,
    props?.currentSpaceId,
    products,
    siteIdentifier
  )

  if (cta?.video) {
    cta.video = formatVideo(cta.video)
    cta["override"] = override
    cta["setOverride"] = setOverride
  }
  const theme =
    appearance === "Dark"
      ? {
          backgroundColor: "#252a2e",
          color: "#fff",
          ctaClass: "secondary--1",
        }
      : {
          backgroundColor: "#fff",
          color: "#252a2e",
          ctaClass: "primary--2",
        }

  if (cta) {
    cta.className = theme?.ctaClass
  }

  const content = {
    quote,
    cta,
    theme,
    Link,
    topImage,
    sideImage,
    imageOptions,
    imagePosition,
    appearance,
    backgroundImage,
  }

  const isTopImage = topImage?.focalPointImage?.url

  const variant = () => {
    if (isTopImage) {
      return "variant3"
    } else if (imageOptions === "1/2") {
      return "variant2"
    } else if (imageOptions === "1/4") {
      if (appearance === "Light") {
        return "variant1"
      }
      if (appearance === "Dark") {
        return "variant2"
      }
    } else if (imageOptions === "No Image") {
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

  const padding = true,
    fullBleedColor = false,
    inheritBackground = false

  return renderPaddingOrFullBleed(
    <PullQuote content={content} variant={variant()} key={i} />,
    padding,
    fullBleedColor,
    inheritBackground
  )
}

export default FormatAndRenderPullQuote

const formatPullQuoteImage = (image, styles) => {
  return image?.__typename === "ContentfulLottieAnimation"
    ? formatLottieAnimation(image?.json || image?.srcLink, styles)
    : formatFocusedImage(image)
}
