import React, { useState } from "react"
import { Link } from "gatsby"
import formatTheme from "../../utils/organism-formatting/formatTheme"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import formatVideo from "../../utils/organism-formatting/formatVideo"
import { LinkList } from "terra-one"

import formatUrl from "./utils/formatUrl"

const LinkListConnector = ({
  data,
  paddingClass,
  index,
  location,
  overrideTheme,
  nested,
  locale,
  currentSpaceId,
}) => {
  const [override, setOverride] = useState(false)

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

export default LinkListConnector

export const formatLinks = (
  links,
  icon,
  locale = "en",
  override,
  setOverride,
  data,
) => {
  if (!links) {
    return []
  }

  return links.map(link => {
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

    return {
      linkText: link?.fields?.text,
      destination: formatUrl(link?.fields.url),
      icon: icon ? icon : null,
      external: link?.sys?.contentType?.sys?.id === "externalLink",
      Link: link?.sys?.contentType?.sys?.id === "externalLink" ? null : Link,
      video: videoContent,
      override,
      setOverride,
    }
  })
}
