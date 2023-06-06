import React, { useContext } from "react"
import { formatBaseMolecules } from "../formatBaseMolecules"
import formatCards from "../formatCards"
import formatAnchor from "../formatAnchor"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { Link } from "gatsby"
import { Carousel } from "terra-one"
import { Element } from "react-scroll"
import { LayoutContext } from "../../../components/Layout/Layout"

const FormatAndRenderCarousel = props => {
  const { data = {}, index, locale, location, appData } = props
  const { homepageSlug } = useContext(LayoutContext)
  const { anchor, motion } = formatBaseMolecules(data, locale, homepageSlug)

  // TODO - REMOVE THIS LINE ONCE BOUNDEDCARDS ARE ONLY FORM OF CARD USED IN FORMATCARDS METHOD
  data?.boundedCards ? (data.cards = data.boundedCards) : (data.cards = null)

  const cards = formatCards(data?.boundedCards, locale, location, appData)

  const content = {
    cards,
    Link,
    displayButton: data?.linkType,
    cardAlignment: data?.cardAlignment,
  }

  if (typeof anchor === "string") {
    return (
      <Element key={`scroll-${index}`} name={formatAnchor(anchor)}>
        {renderPaddingOrFullBleed(
          <Carousel content={content} key={index} motion={motion} />
        )}
      </Element>
    )
  } else {
    return (
      <>
        {renderPaddingOrFullBleed(
          <Carousel content={content} key={index} motion={motion} />
        )}
      </>
    )
  }
}

export default FormatAndRenderCarousel
