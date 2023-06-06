import React, { useContext } from "react"
import formatAnchor from "../formatAnchor"
import { formatBaseMolecules } from "../formatBaseMolecules"
import formatTheme from "../formatTheme"
import CTASectionFormat from "../CTASectionFormat"
import formatVideo from "../formatVideo"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { formatPageLinks } from "../formatPageLinks"
import { VideoComponent, SuperHero } from "terra-one"
import { formatFocusedImage } from "../formatBaseMolecules"
import { Element } from "react-scroll"
import PageSections from "../../../components/PageSections/PageSections"
import formatLottieAnimation from "../formatLottieAnimation"
import { LayoutContext } from "../../../components/Layout/Layout"
import { createProductTrialPageLink } from "../../../components/CTAButtons/CTAButtonsConnector"

const GetContentSections = ({
  sections,
  location,
  locale,
  currentSpaceId,
  products,
  siteIdentifier,
}) => {
  const updatedSections = JSON.parse(JSON.stringify(sections))

  updatedSections[0].contentWidth = false
  return (
    <PageSections
      pageSections={updatedSections}
      location={location}
      locale={locale}
      currentSpaceId={currentSpaceId}
      products={products}
      siteIdentifier={siteIdentifier}
    />
  )
}

const FormatAndRenderSuperHero = props => {
  const {
    data = {},
    contentSections,
    index,
    location,
    locale,
    errorPage,
    videoProgress,
    setVideoProgress,
    currentSpaceId,
    products,
    siteIdentifier,
  } = props

  const { homepageSlug } = useContext(LayoutContext)

  const { eyebrow, header, subHeader, Link, motion, anchor } =
    formatBaseMolecules(data, location, homepageSlug)

  const disableTopBottomMargin = data?.disableTopBottomMargin
  // regularSuperHero = the "original super hero" design where the "content" is the classic eyebrow, header, subheader, description, and CTA buttons
  const regularSuperHero = contentSections?.sections?.find(section => {
    return section.__typename === "ContentfulCtaWithTextAndHeader"
  })

  // we clone our "contentSections" so we can manipulate if necessary (we need to update this to equal null if we content is "regularSuperHero")
  let updatedContentSections = contentSections
    ? JSON.parse(JSON.stringify(contentSections))
    : null

  if (errorPage) {
    if (updatedContentSections?.sections?.[0]?.ctaButtons?.[0]?.url?.url) {
      // link to the homepage needs to be an empty string for it to reroute properly
      updatedContentSections.sections[0].ctaButtons[0].url.url = ""
    }
  }

  const videoData = formatVideo(data?.media, data?.variantData?.imageResize)
  const { isSingleItem } = data

  let ctaOne, ctaTwo

  if (regularSuperHero && regularSuperHero?.ctaButtons) {
    // TODO: REFACTOR THIS!
    let ctaOneType = regularSuperHero?.ctaButtons?.[0]?.url?.contentType
      ? regularSuperHero?.ctaButtons?.[0]?.url?.contentType
      : regularSuperHero?.ctaButtons?.[0]?.url?.internal?.type
      ? regularSuperHero?.ctaButtons?.[0]?.url?.internal?.type
      : ""

    let ctaTwoType = regularSuperHero?.ctaButtons?.[1]?.url?.contentType
      ? regularSuperHero?.ctaButtons?.[1]?.url?.contentType
      : regularSuperHero?.ctaButtons?.[1]?.url?.internal?.type
      ? regularSuperHero?.ctaButtons?.[1]?.url?.internal?.type
      : ""
    ctaOne = regularSuperHero?.ctaButtons?.[0]?.url?.product?.sys?.urn
      ? createProductTrialPageLink(
          products,
          regularSuperHero?.ctaButtons?.[0]?.url?.product?.sys?.urn,
          locale,
          regularSuperHero?.ctaButtons[0],
          siteIdentifier
        )
      : regularSuperHero?.ctaButtons?.[0]
      ? formatPageLinks(
          regularSuperHero?.ctaButtons?.[0],
          locale,
          ctaOneType,
          homepageSlug,
          currentSpaceId,
          products
        )
      : null

    if (ctaOne && ctaOne?.video) {
      ctaOne["VideoComponent"] = VideoComponent
    }
    ctaTwo = regularSuperHero?.ctaButtons?.[1]?.url?.product?.sys?.urn
      ? createProductTrialPageLink(
          products,
          regularSuperHero?.ctaButtons?.[1]?.url?.product?.sys?.urn,
          locale,
          regularSuperHero?.ctaButtons[1],
          siteIdentifier
        )
      : regularSuperHero?.ctaButtons?.[1]
      ? formatPageLinks(
          regularSuperHero?.ctaButtons?.[1],
          locale,
          ctaTwoType,
          homepageSlug,
          currentSpaceId,
          products,
          siteIdentifier
        )
      : null

    if (ctaTwo && ctaTwo?.video) {
      ctaTwo["VideoComponent"] = VideoComponent
    }
  }

  let focusedImage

  if (data?.media?.focalPoint) {
    focusedImage = formatFocusedImage(data?.media)
  }

  const theme = formatTheme(data)
  const ctas = CTASectionFormat(
    ctaOne,
    ctaTwo,
    null,
    Link,
    theme,
    VideoComponent,
    formatVideo
  )

  const subHeaderText = data?.heroContent?.longSubhead
    ? data?.heroContent?.longSubhead?.childMarkdownRemark?.rawMarkdownBody
    : regularSuperHero
    ? regularSuperHero?.subhead
    : subHeader
    ? subHeader
    : null

  const hasVideo =
    data?.media?.__typename === "ContentfulVidyardVideo" ||
    data?.media?.__typename === "ContentfulVimeoOrYouTubeVideo"

  const content = {
    header: regularSuperHero
      ? regularSuperHero?.headline
      : header
      ? header
      : null,
    eyebrow: regularSuperHero
      ? regularSuperHero?.eyebrow
      : eyebrow
      ? eyebrow
      : null,
    subHeader: subHeaderText,
    text: regularSuperHero
      ? regularSuperHero?.body?.childMarkdownRemark?.html
      : data?.description?.description
      ? data?.description?.description
      : null,
    theme,
    video: videoData?.video,
    thumbnail: videoData?.thumbnail?.focalPointImage?.url
      ? videoData?.thumbnail
      : null,
    contentSide: data?.variantData?.contentSide,
    ctas,
    focusedImage: isSingleItem && hasVideo ? null : focusedImage || null,
    superHeroAnimation: formatLottieAnimation(
      data?.media?.json || data?.media?.srcLink || null,
      { height: "100%", display: "block" }
    ),
    variant: data?.variantData?.variant || "variant_1",
    transcript: videoData?.transcript,
    transcriptText: videoData?.transcriptText,
    closeTranscript: videoData?.closeTranscript,
    dataPoints: data?.dataPoints,
    videoProgress,
    setVideoProgress,
    lazyLoad: index < 2,
  }

  const contentComponent = regularSuperHero
    ? null
    : contentSections
    ? () => (
        <GetContentSections
          sections={contentSections?.sections}
          location={contentSections?.location}
          locale={contentSections?.locale}
          currentSpaceId={currentSpaceId}
          products={products}
          siteIdentifier={siteIdentifier}
        />
      )
    : null

  if (typeof anchor === "string") {
    return (
      <div
        className={
          disableTopBottomMargin === true ? "super-hero-no-margin" : ""
        }
      >
        <Element key={`scroll-${index}`} name={formatAnchor(anchor)}>
          {renderPaddingOrFullBleed(
            <SuperHero
              ContentComponent={contentComponent}
              content={content}
              attributes={theme}
              key={index}
              motion={motion}
            />,
            data?.variantData?.padding,
            data?.variantData?.fullBleedColor,
            true,
            false,
            true,
            data?.variantData?.verticalSpacingChild
          )}
        </Element>
      </div>
    )
  } else {
    return (
      <div
        className={
          disableTopBottomMargin === true
            ? "super-hero-no-margin"
            : "super-hero__wrapper"
        }
      >
        {renderPaddingOrFullBleed(
          <SuperHero
            ContentComponent={contentComponent}
            content={content}
            attributes={theme}
            key={index}
            motion={motion}
          />,
          data?.variantData?.padding,
          props?.productPage ? true : data?.variantData?.fullBleedColor,
          true,
          false,
          true,
          data?.variantData?.verticalSpacingChild
        )}
      </div>
    )
  }
}

export default FormatAndRenderSuperHero
