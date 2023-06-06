import React, { useContext } from "react"
import ColorSchemeConnector from "../../../components/ColorSchemeConnector/ColorSchemeConnector"
import { fullBackgroundHeroVariants } from "../../variants/fullBackgroundHeroVariants"
import { formatBackgroundImage, formatImage } from "../formatBaseMolecules"
import formatTheme from "../formatTheme"
import formatVideo from "../formatVideo"
import { FullBackgroundHero } from "terra-one"
import PageSections from "../../../components/PageSections/PageSections"
import { LayoutContext } from "../../../components/Layout/Layout"

const GetContentSections = (
  sections,
  location,
  locale,
  variant,
  homepageSlug,
  currentSpaceId,
  products,
  siteIdentifier
) => {
  if (!sections) {
    return null
  }
  const updatedSections = JSON.parse(JSON.stringify(sections))
  updatedSections.contentWidth = false
  const checkForVideosInCTA = checkForVideosInSections(updatedSections)
  const checkForProductPageLinks = checkForProductPagesInCTA(
    checkForVideosInCTA,
    homepageSlug
  )
  return (
    <PageSections
      pageSections={[checkForProductPageLinks]}
      location={location}
      locale={locale}
      isNested={true}
      marginTopAndBottom={
        variant?.variant && variant?.variant === "variant-2" ? false : true
      }
      currentSpaceId={currentSpaceId}
      products={products}
      siteIdentifier={siteIdentifier}
    />
  )
}

const checkForProductPagesInCTA = (sections, homepageSlug) => {
  if (sections?.__typename === "ContentfulCtaWithTextAndHeader") {
    sections?.ctaButtons?.map(cta => {
      if (cta?.url?.internal?.type === "ContentfulProductPage") {
        cta.url.url = `products/${cta?.url?.url}`
        return cta
      } else if (cta?.url?.url && cta?.url?.url === homepageSlug) {
        cta.url.url = ` `
        return cta
      } else {
        return cta
      }
    })
  }
  return sections
}

export const checkForVideosInSections = sections => {
  if (sections?.__typename === "ContentfulCtaWithTextAndHeader") {
    const findVideosInCTA = sections?.ctaButtons?.filter(cta => {
      return cta?.video
    })
    if (findVideosInCTA && findVideosInCTA?.length) {
      const updatedVideo = findVideosInCTA?.map(video => {
        return formatVideo(video?.video)
      })
      sections.video = updatedVideo[0]
      return sections
    } else {
      return sections
    }
  } else {
    return sections
  }
}

const FormatAndRenderFullBackgroundHero = ({
  data,
  location,
  locale,
  paddingClass,
  productPage,
  index,
  currentSpaceId,
  products,
  siteIdentifier,
}) => {
  let productPageTheme
  const { homepageSlug } = useContext(LayoutContext)

  if (productPage) {
    productPageTheme = {
      accordionIconColor: "#89C6ED",
      backgroundColor: "#0063A3",
      color: "#FFFFFF",
      ctaOne: "secondary--1",
      ctaTwo: "secondary--2",
      darkTheme: true,
      iconColor: "#FFFFFF",
      theme: "blue",
    }
  }

  const themeValue = productPageTheme
    ? productPageTheme
    : ColorSchemeConnector(data?.colorScheme)
  const theme = formatTheme(themeValue)
  const variant = fullBackgroundHeroVariants.find(option => {
    return option.option === data?.variant
  })
  const borderColorValue = ColorSchemeConnector(data?.shapeBorderColor)
  const shapeBorderColor = formatTheme(borderColorValue)

  // if FBH is first/second element on page, then don't lazyLoad it
  const lazyLoad = index < 2 ? false : true

  //assign content name for 2x2 variant css class
  const heroRightContentType = data?.rightContent?.__typename
    ? data?.rightContent?.__typename
    : null

  const fullBgBackgroundImage = data?.backgroundImage
    ? {
        ...formatBackgroundImage(data?.backgroundImage),
        lazyLoad,
      }
    : null

  const fullBgBottomImage = data?.bottomBackgroundImage
    ? {
        ...formatBackgroundImage(data?.bottomBackgroundImage),
        lazyLoad,
      }
    : null

  const content = {
    variant: productPage ? "variant-3" : variant?.variant,
    backgroundImage: fullBgBackgroundImage,
    bottomBackgroundImage: fullBgBottomImage,
    leftContent: GetContentSections(
      data?.leftContent,
      location,
      locale,
      variant,
      homepageSlug,
      currentSpaceId,
      products,
      siteIdentifier
    ),
    rightContent: GetContentSections(
      data?.rightContent,
      location,
      locale,
      variant,
      homepageSlug,
      currentSpaceId,
      products,
      siteIdentifier
    ),
    rightContentType: heroRightContentType ? heroRightContentType : null,
    rightImage: formatImage(data?.rightImage),
    shapeType: data?.shapeType?.toLowerCase(),
    shapeBorderColor: shapeBorderColor?.backgroundColor,
  }

  return (
    <FullBackgroundHero
      content={content}
      theme={theme}
      motion={data?.animation}
      paddingClass={paddingClass}
    />
  )
}

export default FormatAndRenderFullBackgroundHero
