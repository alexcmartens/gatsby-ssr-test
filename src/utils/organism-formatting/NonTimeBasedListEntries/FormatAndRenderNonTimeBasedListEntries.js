import React from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import formatPageLinks from "../formatPageLinks"
import { NonTimeBasedListEntries } from "terra-one"

const FormatAndRenderNonTimeBasedListEntries = ({
  data,
  locale,
  paddingClass,
  currentSpaceId = "",
  products,
  siteIdentifier
}) => {
  const entries = []
  let sidebarImage = null

  if (data?.sidebarImage?.image?.file?.url) {
    sidebarImage = {
      focalPointImage: {
        url: data?.sidebarImage?.image?.file?.url,
        height: data?.sidebarImage?.image?.file?.details?.image?.height,
        width: data?.sidebarImage?.image?.file?.details?.image?.width,
        x: data?.sidebarImage?.focalPoint?.focalPoint?.x,
        y: data?.sidebarImage?.focalPoint?.focalPoint?.y,
        alt: data?.sidebarImage?.title,
      },
    }
  }

  if (data?.entries?.length) {
    for (let i = 0; i < data.entries.length; i++) {
      const current = data.entries[i]
      let currentImage = null

      if (current?.image?.image?.file?.url) {
        currentImage = {
          focalPointImage: {
            url: current?.image?.image?.file?.url
              ? current?.image?.image?.file?.url
              : null,
            height: current?.image?.image?.file?.details?.image?.height,
            width: current?.image?.image?.file?.details?.image?.width,
            x: current?.image?.focalPoint?.focalPoint?.x,
            y: current?.image?.focalPoint?.focalPoint?.y,
            alt: current?.image?.title,
          },
        }
      }

      const linkType = current?.link?.url?.contentType
        ? current?.link?.url?.contentType
        : current?.link?.url?.internal?.type
        ? current?.link?.url?.internal?.type
        : null

      const link = formatPageLinks(
        current?.link,
        locale,
        linkType,
        null,
        currentSpaceId,
        products,
        siteIdentifier
      )

      let entryHold = {
        eyebrow: current?.eyebrow,
        header: current?.header,
        subhead: current?.subhead,
        link,
        customAriaLabel: current?.link?.description,
        image: currentImage,
        summary:
          current?.referenceForSummary?.shortSummary?.childMarkdownRemark
            ?.html || current?.shortSummary?.childMarkdownRemark?.html,
        industryCategory: current?.industryOrCategory?.name,
        groupingCategory: current?.groupingCategory?.name,
        role: current?.role,
      }

      entries.push(entryHold)
    }
  }

  return entries?.length
    ? renderPaddingOrFullBleed(
        <NonTimeBasedListEntries
          variant={data?.variant}
          sidebarImage={sidebarImage}
          entries={entries}
          groupEntries={data?.groupEntries}
          paddingClass={paddingClass}
        />
      )
    : null
}

export default FormatAndRenderNonTimeBasedListEntries
