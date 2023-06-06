import React, { useEffect, useState } from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import "./ScrollInPlace.scss"
import FormatAndRenderCtaWithHeader from "../CTA/FormatAndRenderCtaWithHeader"
import FormatAndRenderDataPoint from "../DataPoint/FormatAndRenderDataPoint"
import topLeftBorder from "../../../images/border-top-left.svg"
import topRightBorder from "../../../images/border-top-right.svg"
import bottomLeftBorder from "../../../images/border-bottom-left.svg"
import bottomRightBorder from "../../../images/border-bottom-right.svg"
import scrollIcon from "../../../images/scroll-icon.svg"
import useMouse from "../../hooks/useMouse"
import { ScrollInPlace } from "terra-one"
import HeaderConnector from "../../../components/Header/HeaderConnector"
import { LottieAnimation } from "terra-one"
import formatLottieAnimation from "../formatLottieAnimation"

const SlideContent = ({ LeftContent, CenterContent, RightContent }) => {
  return (
    <>
      <div className="content-sections desktop">
        <div className="left-section">
          <LeftContent />
        </div>

        <div className="center-section">
          <CenterContent />
        </div>

        <div className="right-section">
          <RightContent />
        </div>
      </div>

      <div className="content-sections tablet">
        <div className="sections-wrapper">
          <div className="left-section">
            <div className="top">
              <CenterContent />
            </div>
            <div className="bottom">
              <LeftContent />
            </div>
          </div>

          <div className="right-section">
            <RightContent />
          </div>
        </div>
      </div>

      <div className="content-sections mobile">
        <div className="sections-wrapper">
          <div className="background-section">
            <CenterContent />
          </div>

          <div className="scrollable-section">
            <div className="section background bg-dark-gray padded">
              <LeftContent />
            </div>

            <div className="section">
              <RightContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const LeftContentComponent = ({ data }) => {
  if (data?.__typename === "ContentfulCtaWithTextAndHeader") {
    return (
      <FormatAndRenderCtaWithHeader
        data={data}
        nested={true}
        disablePadding={true}
      />
    )
  }
  return null
}

const CenterContentComponent = ({ data, imageVariant }) => {
  if (data?.__typename === "ContentfulImageWithFocalPoint") {
    return (
      <div
        className={`content-image-container ${
          imageVariant === "circle" ? "circle" : ""
        }`}
      >
        <img src={data?.image?.file?.url} alt={data?.altText} />
      </div>
    )
  } else if (data?.__typename === "ContentfulLottieAnimation") {
    const centerImageStyles = {}
    const centerComponent = formatLottieAnimation(
      data?.srcLink || data?.json?.data,
      centerImageStyles
    )
    return (
      <div
        className={`content-image-container ${
          imageVariant === "circle" ? "circle" : ""
        }`}
      >
        <LottieAnimation
          src={centerComponent?.src}
          style={centerComponent?.style}
          ratio={{ width: 1, height: 1 }}
        />
      </div>
    )
  }
  return null
}

const RightContentComponent = ({ data }) => {
  if (data?.__typename === "ContentfulCtaWithTextAndHeader") {
    return (
      <div className="background padded">
        <FormatAndRenderCtaWithHeader
          data={data}
          nested={true}
          disablePadding={true}
        />
      </div>
    )
  } else if (data?.__typename === "ContentfulDataPoint") {
    return (
      <div className="background bg-dark-gray">
        <FormatAndRenderDataPoint
          data={data}
          disablePadding={true}
          overrideTheme="transparent-light-text"
          overrideVariant="variant_2b"
        />
      </div>
    )
  }
  return null
}

const TitleContent = ({ data }) => {
  if (data?.__typename === "ContentfulHeader") {
    return (
      <div className="title-slide-content">
        <div className="title-content">
          <div className="border">
            <img src={topLeftBorder} alt="" />
            <img src={topRightBorder} alt="" />
          </div>
          <div className="title-inner">
            <HeaderConnector data={data} disablePadding={true} />
          </div>
          <div className="border">
            <img src={bottomLeftBorder} alt="" />
            <img src={bottomRightBorder} alt="" />
          </div>
        </div>
        <div className="scroll-icon">
          <img src={scrollIcon} alt="" />
        </div>
      </div>
    )
  }

  return null
}

const FormatAndRenderScrollInPlace = ({ data }) => {
  const [a11yModeEnabled, setA11yModeEnabled] = useState(false)
  const { mouse } = useMouse()

  useEffect(() => {
    mouse ? setA11yModeEnabled(false) : setA11yModeEnabled(true)
  }, [a11yModeEnabled, mouse])

  const titleBackgroundStyles = {}
  let titleBackground
  //Build the title slide
  if (data?.titleSlideBackground?.__typename === "ContentfulLottieAnimation") {
    titleBackground = {
      image: formatLottieAnimation(
        data?.titleSlideBackground?.srcLink ||
          data?.titleSlideBackground?.json?.data,
        titleBackgroundStyles
      ),
    }
  } else {
    titleBackground = {
      image: data?.titleSlideBackground?.image?.file?.url
        ? {
            src: data?.titleSlideBackground?.image?.file?.url,
            alt: data?.titleSlideBackground?.altText,
          }
        : null,
      video: data?.backgroundVideo?.file?.url,
    }
  }

  // Build the content slides
  const slides = []

  for (let i = 0; i < data?.slides?.length; i++) {
    const current = data?.slides?.[i]

    const slideHold = {
      backgroundImage: {
        src:
          current?.backgroundImage?.image?.file?.url ||
          "https://picsum.photos/id/152/1280/752",
        alt: current?.backgroundImage?.altText,
      },
      content: () => (
        <SlideContent
          LeftContent={() => (
            <LeftContentComponent data={current?.leftContent} />
          )}
          CenterContent={() => (
            <CenterContentComponent
              data={current?.centerImage}
              imageVariant={current?.centerImageVariant}
            />
          )}
          RightContent={() => (
            <RightContentComponent data={current?.rightContent} />
          )}
        />
      ),
    }

    slides.push(slideHold)
  }

  return renderPaddingOrFullBleed(
    <div className="scroll-in-place">
      <ScrollInPlace
        TitleContent={() => <TitleContent data={data?.titleSlideText} />}
        titleBackground={titleBackground}
        slides={slides}
        a11yMode={a11yModeEnabled}
      />
    </div>,
    a11yModeEnabled ? true : false,
    true,
    true,
    false
  )
}

export default FormatAndRenderScrollInPlace
