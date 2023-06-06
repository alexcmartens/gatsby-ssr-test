import React, { useState, useContext } from "react"
import { formatBaseMolecules } from "../formatBaseMolecules"
import formatCards from "../formatCards"
import formatEcommerceCards from "../formatEcommerceCards"
import formatAnchor from "../formatAnchor"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import formatIconMiniBlocks from "../formatIconMiniBlocks"
import formatBioBlocks from "../formatBioBlocks"
import formatIconListItemBlocks from "../formatIconListItemBlocks"
import { Link } from "gatsby"
import ColorSchemeConnector from "../../../components/ColorSchemeConnector/ColorSchemeConnector"
import formatTheme from "../formatTheme"
import { BlockListItems } from "terra-one"
import { Element } from "react-scroll"
import { LayoutContext } from "../../../components/Layout/Layout"

const FormatAndRenderBlockListItems = props => {
  const [override, setOverride] = useState(false)
  const {
    data = {},
    index,
    location,
    locale = "en",
    appData,
    region,
    videoProgress,
    setVideoProgress,
    tab,
    currentSpaceId,
    products,
    siteIdentifier,
  } = props
  const { homepageSlug } = useContext(LayoutContext)

  const { anchor, motion } = formatBaseMolecules(data, location, homepageSlug)
  let contentType = null
  let content = null

  const theme = ColorSchemeConnector(data?.colorScheme)
  const dataWithTheme = { ...data, ...theme }

  const formattedTheme = formatTheme(dataWithTheme)
  const centerBlocks = data?.blockAlignment === "Centered" ? true : false
  const whiteGreyOnlyTheme =
    formattedTheme?.theme === "white" ||
    formattedTheme?.theme === "concrete-gray"
      ? formattedTheme
      : null

  if (data?.variant && data?.listBlocks && data?.listBlocks?.length > 0) {
    switch (data.variant) {
      case "Icon Mini Blocks":
        contentType = "icon_mini_blocks"
        content = {
          blocks: data?.listBlocks
            ? formatIconMiniBlocks(
                data?.listBlocks,
                locale,
                currentSpaceId,
                products,
                siteIdentifier
              )
            : null,
          alignment: data?.blockAlignment === "Centered" ? "center" : "left",
          largeBlock: data?.blockSize === "Large" ? true : false,
          Link,
        }
        break

      case "Icon List Items Blocks":
        contentType = "icon_list_item_blocks"
        content = {
          blocks: data?.listBlocks
            ? formatIconListItemBlocks(
                data?.listBlocks,
                locale,
                homepageSlug,
                currentSpaceId,
                products,
                siteIdentifier
              )
            : null,
          Link,
          theme: whiteGreyOnlyTheme,
          // use white as the only color theme when tab is true
          tab: tab,
        }
        break

      case "App Cards":
        contentType = "app_cards"
        content = {
          title: data?.header,
          cards: data?.listBlocks
            ? formatCards(
                data?.listBlocks,
                locale,
                location,
                appData,
                null,
                null,
                homepageSlug,
                currentSpaceId,
                products,
                siteIdentifier
              )
            : null,
          cardAlignment: data?.cardAlignment ? data?.cardAlignment : null,
          Link,
          theme: formattedTheme,
          // use white as the only color theme when tab is true
          tab: tab,
        }
        break

      case "Bounded Cards":
        contentType = "bounded_cards"

        const cards = data?.listBlocks
          ? formatCards(
              data?.listBlocks,
              locale,
              location,
              appData,
              region,
              null,
              homepageSlug,
              currentSpaceId,
              products,
              siteIdentifier
            )
          : []
        const filteredCards = cards?.filter(card => {
          return card !== undefined
        })
        content = {
          cards: filteredCards?.length ? filteredCards : null,
          cardAlignment: props?.productPage
            ? false
            : data?.cardAlignment
            ? data?.cardAlignment
            : null,
          displayButton: data?.linkType ? data?.linkType : null,
          Link,
          theme: formattedTheme,
          // use white as the only color theme when tab is true
          tab: tab,
          centered: centerBlocks,
        }
        break

      case "Unbounded Cards":
        contentType = "unbounded_cards"
        const unboundedRatio = { width: 3, height: 2 }
        const unboundedCards = data?.listBlocks
          ? formatCards(
              data?.listBlocks,
              locale,
              location,
              appData,
              region,
              unboundedRatio,
              homepageSlug,
              currentSpaceId,
              products,
              siteIdentifier
            )
          : []
        const filteredUnboundedCards = unboundedCards?.filter(card => {
          return card !== undefined
        })
        content = {
          cards: filteredUnboundedCards?.length ? filteredUnboundedCards : null,
          cardAlignment: props?.productPage
            ? false
            : data?.cardAlignment
            ? data?.cardAlignment
            : null,
          displayButton: data?.linkType ? data?.linkType : null,
          Link,
          theme: whiteGreyOnlyTheme,
          // use white as the only color theme when tab is true
          tab: tab,
          centered: centerBlocks,
        }
        break

      case "Ecommerce Cards":
        contentType = "ecommerce_cards"

        const ecomCards = data?.listBlocks
          ? formatEcommerceCards(data?.listBlocks, locale, region)
          : []
        const filteredEcomCards = ecomCards?.filter(card => {
          return card !== undefined
        })
        content = {
          cards: filteredEcomCards?.length ? filteredEcomCards : null,
          Link,
          theme: formattedTheme,
          // use white as the only color theme when tab is true
          tab: tab,
          centered: centerBlocks,
        }
        break

      case "Bio Blocks":
        contentType = "bio_blocks"
        content = {
          Link,
          blocks: data?.listBlocks
            ? formatBioBlocks(
                data?.listBlocks,
                locale,
                currentSpaceId,
                products,
                siteIdentifier
              )
            : null,
          theme: whiteGreyOnlyTheme,
          // use white as the only color theme when tab is true
          tab: tab,
        }
        break

      default:
        break
    }

    // adjust prop for icon-mini-blocks only
    let componentMargin = true
    if (contentType === "icon_mini_blocks") {
      componentMargin = false
    }

    if (typeof anchor === "string") {
      return (
        <Element key={`scroll-${index}`} name={formatAnchor(anchor)}>
          {renderPaddingOrFullBleed(
            <BlockListItems
              type={contentType}
              content={content}
              key={index}
              motion={motion}
            />,
            tab ? false : true,
            true,
            true,
            false,
            componentMargin
          )}
        </Element>
      )
    } else {
      return (
        <>
          {renderPaddingOrFullBleed(
            <BlockListItems
              type={contentType}
              content={content}
              key={index}
              motion={motion}
            />,
            tab ? false : true,
            true,
            true,
            false,
            componentMargin
          )}
        </>
      )
    }
  }
  return null
}

export default FormatAndRenderBlockListItems
