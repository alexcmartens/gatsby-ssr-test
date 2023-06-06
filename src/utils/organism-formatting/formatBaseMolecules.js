import React from "react"
import ReactDOMServer from "react-dom/server"
import ctaFormat from "./ctaFormat"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"
import { parseHtmlLinks } from "../functions/index"
import { formatLink } from "../functions/index"
import RichTextConnector from "../../components/RichText/RichTextConnector"
import formatLottieAnimation from "./formatLottieAnimation"

export const formatBaseMolecules = (data, location, homepageSlug) => {
  const locale = location?.pathname ? location.pathname.split("/")?.[1] : "en"
  const eyebrow = data?.eyebrow
  const header = data?.header
  const subHeader = data?.subHeader || data?.subheader
  const text = parseHtmlLinks(getTextOption(data?.text), location)
  const image = { src: data?.image?.file?.url }
  const images = {
    desktop: { src: data?.desktopImage?.file?.url },
  }

  const ctaOne =
    data?.ctaFormatting === false
      ? { ...data?.ctaOne, className: "secondary--1" }
      : data?.ctaOne
  if (ctaOne?.url)
    ctaOne.url = formatLink(ctaOne.url, locale, null, homepageSlug)
  const ctaTwo = data?.ctaTwo
  if (ctaTwo?.url)
    ctaTwo.url = formatLink(ctaTwo.url, locale, null, homepageSlug)
  const subCTA = data?.subCTA
  if (subCTA?.url)
    subCTA.url = formatLink(subCTA.url, locale, null, homepageSlug)
  const dumplings = data?.dumplings
  const cta = ctaFormat(data?.cta, location, null, homepageSlug)
  const motion = data?.animation
  const anchor = data?.anchor
  const contentSide =
    data?.contentAlignment === true
      ? "right"
      : data?.contentAlignment === false
      ? "left"
      : "right"
  const introAlignment = data?.introAlignment === false ? "left" : "center"
  const headerAlignment =
    data?.headerAlignment === true
      ? "left"
      : data?.headerAlignment === false
      ? "center"
      : "left"
  const subHeaderAlignment =
    data?.subHeaderAlignment === true
      ? "left"
      : data?.subHeaderAlignment === false
      ? "center"
      : "left"
  const dataPoints = data?.dataPoints
  return {
    eyebrow,
    header,
    subHeader,
    text,
    image,
    ctaOne,
    ctaTwo,
    dumplings,
    subCTA,
    images,
    cta,
    contentSide,
    Link,
    motion,
    anchor,
    introAlignment,
    headerAlignment,
    subHeaderAlignment,
    dataPoints,
  }
}

export const getTextOption = (data, location) => {
  if (data?.blob?.blob) {
    return data.blob?.blob
  } else if (data?.wysiwygText?.raw) {
    // renders as HTML instead of React Symbol - this allows this HTML block to be picked up by our checkForDangerouslySet() method in Luna/Terra. Without this, our HTML falls into our text block and we get the warning - "Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>". This ends up looking like this in the HTML:
    // <p>
    //   <p>text goes here</p>
    // </p>
    // instead of <div><p>text goes here</p></div> (how it should be when dangerouslySet)
    return ReactDOMServer.renderToStaticMarkup(
      documentToReactComponents(JSON.parse(data?.wysiwygText?.raw))
    )
  } else if (data?.content?.raw) {
    return <RichTextConnector data={data} location={location && location} />
  } else {
    return null
  }
}

export const getCardTextOption = (data, location) => {
  if (data?.blob?.blob) {
    return data.blob?.blob
  } else if (data?.wysiwygText?.raw) {
    // renders as HTML instead of React Symbol - this allows this HTML block to be picked up by our checkForDangerouslySet() method in Luna/Terra. Without this, our HTML falls into our text block and we get the warning - "Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>". This ends up looking like this in the HTML:
    // <p>
    //   <p>text goes here</p>
    // </p>
    // instead of <div><p>text goes here</p></div> (how it should be when dangerouslySet)
    return ReactDOMServer.renderToStaticMarkup(
      documentToReactComponents(JSON.parse(data?.wysiwygText?.raw))
    )
  } else if (data?.__typename === "ContentfulRichTextContent") {
    return {
      typename: "ContentfulRichTextContent",
      data: <RichTextConnector data={data} location={location && location} />,
    }
  } else {
    return null
  }
}

export const formatFocusedImage = (focalPointImage, altOverride = false) => {
  const focusedImage = {
    wrapperHeight: focalPointImage?.wrapperHeight?.toString(),
    focalPointImage: {
      url: focalPointImage?.image?.file?.url,
      height: focalPointImage?.image?.file?.details?.image?.height,
      width: focalPointImage?.image?.file?.details?.image?.width,
      x: focalPointImage?.focalPoint?.focalPoint?.x,
      y: focalPointImage?.focalPoint?.focalPoint?.y,
      title: focalPointImage?.image?.title,
      disableImageCompression: focalPointImage?.disableImageCompression,
    },
    alt: altOverride
      ? altOverride
      : focalPointImage?.altText
      ? focalPointImage?.altText
      : focalPointImage?.title,
  }
  return focusedImage
}

export const formatBackgroundImage = data => {
  let backgroundImage
  switch (data?.__typename) {
    case "ContentfulImageScreenSize":
      backgroundImage = {
        type: "image",
        image: {
          desktop: {
            src: data?.desktop?.file?.url,
            alt: data?.desktop?.altText,
          },
          tablet: {
            src: data?.tablet?.file?.url,
            alt: data?.tablet?.altText,
          },
          mobile: {
            src: data?.mobile?.file?.url,
            alt: data?.mobile?.altText,
          },
        },
      }
      break
    case "ContentfulImageWithFocalPoint":
      backgroundImage = {
        type: "focalPointImage",
        ...formatFocusedImage(data),
      }
      break
    case "ContentfulLottieAnimation":
      backgroundImage = formatLottieAnimation(
        data?.srcLink || data?.json || null,
        { ...data?.style, height: "100%", display: "block" }
      )
    default:
      break
  }
  return backgroundImage
}

export const formatImage = data => {
  let image
  switch (data?.__typename) {
    case "ContentfulImageWithFocalPoint":
      image = {
        type: "focalPointImage",
        ...formatFocusedImage(data),
      }
      break
    case "ContentfulAsset":
      image = {
        type: "image",
        image: {
          src: data?.file?.url,
          alt: data?.title,
        },
      }
      break
    default:
      break
  }
  return image
}
