import React from "react"
import { Link } from "gatsby"
import { marked } from "marked"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { BlockListItems } from "terra-one"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import formatLottieAnimation from "../../utils/organism-formatting/formatLottieAnimation"
import formatFocusedImage from "./utils/formatFocusedImage"
import formatUrl from "./utils/formatUrl"
import formatIcons from "../../utils/organism-formatting/formatIcons"
import formatTheme from "../../utils/organism-formatting/formatTheme"
import ColorSchemeConnector from "../../components/ColorSchemeConnector/ColorSchemeConnector"

const isExternal = data => data?.sys?.contentType?.sys?.id === "externalLink"

const cardTypes = {
  "Unbounded Cards": "unbounded_cards",
  "Bounded Cards": "bounded_cards",
  "Icon Mini Blocks": "icon_mini_blocks",
}

const formatCards = data => {
  const theme = ColorSchemeConnector(data?.fields?.colorScheme)
  const formattedTheme = formatTheme({ ...data?.fields, ...theme })

  return {
    centered: data?.fields?.blockAlignment === "Centered",
    cardAlignment: data?.fields?.cardAlignment,
    displayButton: data?.fields?.linkType,
    buttonSecondary: false,
    theme: formattedTheme,
    cards: data?.fields?.listBlocks.map(d => {
      const image =
        d?.fields?.cardImage?.sys?.contentType?.sys?.id === "lottieAnimation"
          ? formatLottieAnimation(
              d?.fields?.cardImage?.fields?.srcLink ||
                d?.fields?.cardImage?.fields?.json ||
                null,
              { height: "100%", display: "block" },
              null
            )
          : formatFocusedImage(d?.fields?.cardImage, d?.fields?.header)
      return {
        image: image,
        eyebrow: d?.fields?.eyebrow,
        header: d?.fields?.header,
        text: d?.fields?.textContent?.fields?.content
          ? documentToHtmlString(d?.fields?.textContent?.fields?.content)
          : d?.fields?.textContent?.fields?.blob
          ? marked.parse(d?.fields?.textContent?.fields?.blob)
          : "",
        cardLink: d?.fields?.cardLink
          ? {
              url: formatUrl(d?.fields?.cardLink?.fields?.url),
              text:
                d?.fields?.cardLink?.fields?.text ||
                d?.fields?.cardLink?.fields?.url?.fields?.text,
              external: isExternal(d?.fields?.cardLink?.fields?.url),
            }
          : null,
        modalType: "Image",
      }
    }),
  }
}

const formatIconMiniBlocks = data => {
  return {
    alignment: data?.fields?.blockAlignment === "Centered" ? "center" : "left",
    largeBlock: data?.fields?.blockSize === "Large",
    blocks: data?.fields?.listBlocks?.map(block => {
      return {
        icon: formatIcons(block?.fields?.miniBlockIcon?.fields?.icon),
        header: block?.fields?.header,
        text: block?.fields?.text,
        link: null,
        Link: null,
      }
    }),
    Link: Link,
  }
}

function BlockListItemsConnector(props) {
  const data = props?.contentfulEntry ? props?.contentfulEntry : props?.data

  let content
  let componentMargin = true

  switch (data?.fields?.variant) {
    case "Icon Mini Blocks":
      componentMargin = false
      content = formatIconMiniBlocks(data)
      break
    default:
      content = formatCards(data)
      break
  }

  return (
    <>
      {renderPaddingOrFullBleed(
        <BlockListItems
          type={cardTypes[data?.fields?.variant]}
          content={content}
        />,
        true,
        true,
        true,
        false,
        componentMargin
      )}
    </>
  )
}

export default BlockListItemsConnector
