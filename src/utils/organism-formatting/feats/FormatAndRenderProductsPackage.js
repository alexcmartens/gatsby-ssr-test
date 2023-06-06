import React from "react"
import formatPageLinks from "../formatPageLinks"
import formatCards from "../formatCards"
import { ProductsPackage } from "terra-one"

const FormatAndRenderProductsPackage = props => {
  const { data = {}, i, locale, location, productPage, currentSpaceId, products, siteIdentifier } = props

  const eyebrow = data?.eyebrow
  const header = data?.header
  const text = data?.text
  const productEyebrow = data?.productEyebrow

  const linkType = data?.cta?.url?.contentType
    ? data?.cta?.url?.contentType
    : data?.cta?.url?.internal?.type
    ? data?.cta?.url?.internal?.type
    : null

  const cta = formatPageLinks(data?.cta, locale, linkType, null, currentSpaceId, products)
  // if there is an image from PIM, we need to use it instead of the user populated image.
  const image = {
    url: data?.pimImage
      ? data?.pimImage?.file?.url
      : data?.image?.image?.file?.url,
    alt: data?.pimImage ? data?.pimImage?.title : data?.image?.image?.title,
  }
  const cards = formatCards(
    data?.productCards,
    locale,
    location,
    null,
    null,
    null,
    null,
    currentSpaceId,
    products,
    siteIdentifier
  )
  const content = {
    eyebrow,
    header,
    text,
    productEyebrow,
    cta,
    cards,
    image,
  }

  return <ProductsPackage content={content} />
}
export default FormatAndRenderProductsPackage
