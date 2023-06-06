import React, { useState, useContext } from "react"
import formatTheme from "../formatTheme"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { Link } from "gatsby"
import formatVideo from "../formatVideo"
import { LinkList } from "terra-one"
import { LayoutContext } from "../../../components/Layout/Layout"
import formatPageLinks, { updateDownloadLink } from "../formatPageLinks"

const FormatAndRenderLinkList = ({
  data,
  paddingClass,
  index,
  location,
  overrideTheme,
  nested,
  locale,
  currentSpaceId,
  products,
  siteIdentifier,
}) => {

  const [override, setOverride] = useState(false)
  const { homepageSlug } = useContext(LayoutContext)
  // if link list is nested in a component, we need to make sure there is no additional padding to fix alignment issue. We set contentWidth to false in Superhero/FullbackgroundHero/etc to represent that we should NOT have additional padding. If link list if by itself, there should be padding.
  const contentWidth = data?.contentWidth === false ? false : true

  if (!overrideTheme) {
    if (data?.colorScheme?.toLowerCase() === "light") {
      data.theme = "white"
    } else if (data?.colorScheme?.toLowerCase() === "transparent-dark-text") {
      data.theme = "transparent-dark-text"
    } else if (data?.colorScheme?.toLowerCase() === "transparent-light-text") {
      data.theme = "transparent-light-text"
    } else {
      data.theme = "dark-navy"
    }
  } else {
    data.theme = overrideTheme?.toLowerCase()
  }

  const links = formatLinks(
    data?.links,
    data?.icon,
    locale,
    override,
    setOverride,
    data,
    homepageSlug,
    currentSpaceId,
    products,
    siteIdentifier
  )
  const theme = formatTheme(data)
  return (
    <>
      {renderPaddingOrFullBleed(
        <LinkList links={links} key={index} theme={theme} />,
        contentWidth,
        true,
        true,
        nested
      )}
    </>
  )
}

export default FormatAndRenderLinkList

export const formatLinks = (
  links,
  icon,
  locale = "en",
  override,
  setOverride,
  data,
  homepageSlug,
  currentSpaceId,
  products,
  siteIdentifier
) => {
  if (!links) {
    return []
  }

  return links.map(link => {
    let productTrial
    if (link && link?.url?.__typename === "ContentfulProductTrialPage") {
      productTrial = formatPageLinks(
        link,
        locale,
        null,
        null,
        null,
        products,
        siteIdentifier
      )
    }

    const linkType = link?.url?.contentType
      ? link?.url?.contentType
      : link?.url?.internal?.type
      ? link?.url?.internal?.type
      : null

    let videoContent
    if (link?.video) {
      const videoData = formatVideo(link?.video)

      const video = videoData?.video

      const thumbnail = videoData?.thumbnail?.focalPointImage?.url
        ? videoData?.thumbnail
        : null

      videoContent = {
        transcript: videoData?.transcript,
        transcriptText: videoData?.transcriptText,
        closeTranscript: videoData?.closeTranscript,
        video,
        thumbnail,
        variant: "variant_7",
        videoProgress: data?.videoProgress,
        setVideoProgress: data?.setVideoProgress,
      }
    }

    let linkText
    let prefix = ``

    if (linkType && linkType === "article") {
      prefix = `articles/`
    } else if (linkType && linkType === "event") {
      prefix = `events/`
    } else if (linkType && linkType === "prose") {
      prefix = `prose/`
    } else if (linkType && linkType === "ContentfulNews") {
      prefix = `news/`
    }

    if (link?.text) {
      linkText = link.text
    }

    if (!link?.text && !productTrial) {
      linkText = link?.url?.text
    }

    if (productTrial) {
      linkText = productTrial?.text
    }
    const url = link?.internalLink ? link?.internalLink : link?.url?.url

    const destination =
      productTrial && productTrial?.url
        ? productTrial?.url
        : link?.url?.realLink?.url
        ? null
        : link?.url?.url?.startsWith("http")
        ? url
        : url === homepageSlug
        ? `/${locale?.toLowerCase()}/${prefix}`
        : `/${locale?.toLowerCase()}/${prefix}${url}`

    return {
      linkText,
      destination: destination?.includes("undefined") ? null : destination,
      icon: icon ? icon : null,
      external: destination?.startsWith("http") ? true : false,
      Link: destination?.startsWith("http") ? null : Link,
      video: videoContent,
      override,
      setOverride,
      onClick:
        link?.url?.type === "ContentfulDownloadLink"
          ? () =>
              window.open(
                updateDownloadLink(link?.url?.realLink?.url, currentSpaceId),
                "_blank"
              )
          : null,
    }
  })
}
