import * as React from "react"
import { FocusedImage } from "terra-one"
import FormatAndRenderAccordion from "../../utils/organism-formatting/feats/FormatAndRenderAccordion"
import RichTextConnector from "./RichTextConnector"
import LinkListConnector from "./LinkListConnector"
import ImageConnector from "./ImageConnector"
import VideoConnector from "./VideoConnector"
import HeaderConnector from "./HeaderConnector"
import CtaWithHeaderConnector from "./CtaWithHeaderConnector"
import IconTextListConnector from "./IconTextListConnector"
import flattenObject from "./utils/flattenObject"

const LayoutWrapper = props => {
  if (typeof props?.contentfulEntry?.fields === 'undefined') {
    return null;
  }

  const content = props?.contentfulEntry?.fields
  const {
    separateContainers,
    disableTopBottomMargin,
    fontColor,
    secondaryFontColor,
    backgroundColor,
    secondaryBackgroundColor,
    contentRatio,
    contentWidth,
    groupedComponent,
    contentOrientation,
    bottomRightContent,
    topLeftContent,
  } = props?.contentfulEntry?.fields

  const overrideThemeForMktoForm = content => {
    return content?.find(item => {
      return item?.sys?.contentType?.sys?.id === "marketoForm"
    })?.sys?.contentType?.sys?.id
  }

  // Set background focalPoint images
  const topLeftBackgroundImage =
    overrideThemeForMktoForm(topLeftContent) === "marketoForm" ||
    overrideThemeForMktoForm(bottomRightContent) === "marketoForm"
      ? null
      : content?.topLeftBackgroundImage?.fields?.image?.fields?.file?.url
      ? {
          url: content?.topLeftBackgroundImage?.fields?.image?.fields?.file?.url,
          height:
            content?.topLeftBackgroundImage?.fields?.image?.fields?.file?.details?.image
              ?.height,
          width:
            content?.topLeftBackgroundImage?.fields?.image?.fields?.file?.details?.image?.width,
          x: content?.topLeftBackgroundImage?.fields?.focalPoint?.focalPoint?.x,
          y: content?.topLeftBackgroundImage?.fields?.focalPoint?.focalPoint?.y,
          alt: content?.topLeftBackgroundImage?.fields?.title,
        }
      : content?.topLeftBackgroundImage?.fields?.__typename ===
        "ContentfulLottieAnimation"
      ? {
          urlContent: content?.topLeftBackgroundImage?.fields?.srcLink || null,
          jsonContent: content?.topLeftBackgroundImage?.fields?.json || null,
        }
      : null

  const bottomRightBackgroundImage =
    overrideThemeForMktoForm(topLeftContent) === "marketoForm" ||
    overrideThemeForMktoForm(bottomRightContent) === "marketoForm"
      ? null
      : content?.bottomRightBackgroundImage?.fields?.image?.fields?.file?.url
      ? {
          url: content?.bottomRightBackgroundImage?.fields?.image?.fields?.file?.url,
          height:
            content?.bottomRightBackgroundImage?.fields?.image?.fields?.file?.details?.image
              ?.height,
          width:
            content?.bottomRightBackgroundImage?.fields?.image?.fields?.file?.details?.image
              ?.width,
          x: content?.bottomRightBackgroundImage?.fields?.focalPoint?.focalPoint?.x,
          y: content?.bottomRightBackgroundImage?.fields?.focalPoint?.focalPoint?.y,
          alt: content?.bottomRightBackgroundImage?.fields?.title,
        }
      : content?.bottomRightBackgroundImage?.fields?.__typename ===
        "ContentfulLottieAnimation"
      ? {
          urlContent: content?.bottomRightBackgroundImage?.fields?.srcLink || null,
          jsonContent: content?.bottomRightBackgroundImage?.fields?.json || null,
        }
      : null  
  
  const layoutWrapperImageSizes = {
    desktop: {
      height: 461,
      ratio: {
        height: 461,
      },
    },
  }

  // Specify the override themes for nested components
  let overrideTheme =
    fontColor === "light" ? "transparent-light-text" : "transparent-dark-text"
  let altOverrideTheme =
    secondaryFontColor === "light"
      ? "transparent-light-text"
      : "transparent-dark-text"

  const parseContent = (data, overrideTheme) => {
    let component = null
    switch (data?.sys?.contentType?.sys?.id) {
      case "ctaWithHeader":
        component = <CtaWithHeaderConnector data={data} overrideTheme={overrideTheme} />
        break
      case "iconTextList":
        component = <IconTextListConnector data={data} />
        break
      case "accordion":
        component = 
          <FormatAndRenderAccordion 
            //data={data?.fields} 
            data={flattenObject(data)}
            overrideTheme={overrideTheme}
          />
        break
      case "richTextContent":
        component = <RichTextConnector data={ data } overrideTheme={overrideTheme} />
        break
      case "linkList":
        component = <LinkListConnector data={ data?.fields } overrideTheme={overrideTheme} />
        break
      case "imageWithFocalPoint":
        component = <ImageConnector data={ data } ignoreFocalPoint={true} />
        break
      case "video":
        component = <VideoConnector data={ data } />
        break
      case "header":
        component = <HeaderConnector data={ data } overrideTheme={overrideTheme} />
        break
      default:
        component = <div style={ { color: "white", backgroundColor: "black" } }>{ data?.sys?.contentType?.sys?.id }</div>
        break
    }
    return component
  }

  //Region: build styles
  let parsedBackgroundColorStyle =
    backgroundColor?.split(" ").join("-").toLowerCase() || ""
  let parsedAltBackgroundColorStyle =
    secondaryBackgroundColor?.split(" ").join("-").toLowerCase() || ""

  //Build parent wrapper style
  const singleComponent = contentOrientation === "Single Component"  

  const parseParentStyle = () => {
    let parsedParentStyle = "contentful-layout__wrapper"

    //Add background color for full width
    parsedParentStyle += contentWidth
      ? ` ${parsedBackgroundColorStyle} ${
          !(singleComponent && !bottomRightContent)
            ? `${parsedAltBackgroundColorStyle}--alt`
            : ""
        } full-width`
      : ` ${parsedBackgroundColorStyle} ${
          !(singleComponent && !bottomRightContent)
            ? `${parsedAltBackgroundColorStyle}--alt`
            : ""
        }`

    return parsedParentStyle
  }  

  const getChildWidth = (ratio, order) => {
    //Handle horizontal item style, we are not checking for
    //orientation because we will overwrite these styles if we see vertical styles below

    //If content width isn't full width, we need to add vertical padding
    //This is for background fill colors to work on both versions of the layout
    let style = ""

    style +=
      order === 1
        ? ` ${
            separateContainers && !contentWidth
              ? "contentful-layout__item--far-left-separate"
              : "contentful-layout__item--far-left"
          } ${parsedBackgroundColorStyle}`
        : ` ${
            separateContainers && !contentWidth
              ? "contentful-layout__item--far-right-separate"
              : "contentful-layout__item--far-right"
          } ${parsedAltBackgroundColorStyle}`

    style += contentWidth
      ? ` contentful-layout__item--far-left--full-width`
      : ""

    switch (ratio) {
      case "Left larger":
        style +=
          order === 1
            ? ` contentful-layout__item--far-left${
                separateContainers && !contentWidth ? "-separate" : ""
              }--large`
            : ` contentful-layout__item--far-right${
                separateContainers && !contentWidth ? "-separate" : ""
              }--small`
        break
      case "Right larger":
        style +=
          order === 1
            ? ` contentful-layout__item--far-left${
                separateContainers && !contentWidth ? "-separate" : ""
              }--small`
            : ` contentful-layout__item--far-right${
                separateContainers && !contentWidth ? "-separate" : ""
              }--large`
        break
      case "Equal width":
      default:
        style +=
          order === 1
            ? ` contentful-layout__item--far-left${
                separateContainers && !contentWidth ? "-separate" : ""
              }--medium`
            : ` contentful-layout__item--far-right${
                separateContainers && !contentWidth ? "-separate" : ""
              }--medium`
        break
    }

    return style
  }

  const verticalLayout =
    contentOrientation === "Vertical" ||
    contentOrientation === "Single Component"

  const parseChildStyle = order => {
    let parseChildStyle = "contentful-layout__item"

    parseChildStyle += getChildWidth(contentRatio, order)

    //If we have a vertical or single component layout, reset the class stack
    if (
      verticalLayout &&
      order === 1 &&
      contentOrientation !== "Single Component"
    ) {
      parseChildStyle =
        "contentful-layout__item contentful-layout__item--vertical"
    } else if (verticalLayout) {
      parseChildStyle =
        "contentful-layout__item contentful-layout__item--vertical contentful-layout__item--vertical--last"
    }

    return parseChildStyle
  }

  const renderLayoutImage = (image, imageSizes, lottieRatio) => {
      return (
        <FocusedImage
          imageSizes={imageSizes}
          fullHeightWrapper={true}
          focalPointImage={image}
          alt={image?.alt ? image?.alt : image?.title}
        />
      )
  }

  // TODO - refactor this!
  const determineLottieRatio = (position, contentWidth, contentRatio) => {
    if (position === "left") {
      if (contentWidth === false && contentRatio === "Left larger") {
        return {
          width: 5,
          height: 4,
        }
      } else if (contentWidth === false && contentRatio === "Right larger") {
        return {
          width: 3,
          height: 4,
        }
      } else if (contentWidth === true && contentRatio === "Left larger") {
        return {
          width: 27,
          height: 19,
        }
      } else if (contentWidth === true && contentRatio === "Right larger") {
        return {
          width: 81,
          height: 95,
        }
      }
    } else if (position === "right") {
      if (contentWidth === false && contentRatio === "Left larger") {
        return {
          width: 3,
          height: 4,
        }
      } else if (contentWidth === false && contentRatio === "Right larger") {
        return {
          width: 5,
          height: 4,
        }
      } else if (contentWidth === true && contentRatio === "Left larger") {
        return {
          width: 81,
          height: 95,
        }
      } else if (contentWidth === true && contentRatio === "Right larger") {
        return {
          width: 27,
          height: 19,
        }
      }
    }
    return {
      width: 1,
      height: 1,
    }
  }

  return (
    <section
      className={`default-layout 
        ${disableTopBottomMargin === true ? "no-vertical-margin" : ""} 
        ${contentWidth ? parsedBackgroundColorStyle : ""} 
        ${groupedComponent ? "grouped-component" : ""}
        ${!parsedBackgroundColorStyle ? "default-layout--no-top-margin" : ""}
      `}
    >
      <div
        className={`${parseParentStyle()} ${
          topLeftBackgroundImage ? "has-bg-image" : ""
        }`}
      >
        <div className="grid-container">
        {(topLeftContent?.length > 0 || topLeftBackgroundImage) && (
            <div
              className={`${parseChildStyle(1)} ${
                topLeftBackgroundImage
                  ? `has-bg-image ${
                      !topLeftContent && !bottomRightContent
                        ? "bg-image-only"
                        : ""
                    }`
                  : ""
              }`}
            >
              <div className="content-section-left">
                {topLeftBackgroundImage && (
                  <div
                    className={`background-image ${
                      contentWidth && !verticalLayout
                        ? "image-full-width-left"
                        : ""
                    }`}
                  >
                    {renderLayoutImage(
                      topLeftBackgroundImage,
                      layoutWrapperImageSizes,
                      determineLottieRatio("left", contentWidth, contentRatio)
                    )}
                  </div>
                )}
                {topLeftContent?.length > 0 &&
                  topLeftContent.map((d) => parseContent(d, overrideTheme))}
              </div>
            </div>
          )}
          {contentOrientation !== "Single Component" &&
            (bottomRightContent?.length > 0 || bottomRightBackgroundImage) && (
              <div
                className={`${parseChildStyle(2)} ${
                  bottomRightBackgroundImage
                    ? `has-bg-image ${
                        !topLeftContent && !bottomRightContent
                          ? "bg-image-only"
                          : ""
                      }`
                    : ""
                }`}
              >
                <div className="content-section-right">
                  {bottomRightBackgroundImage && (
                    <div
                      className={`background-image ${
                        contentWidth && !verticalLayout
                          ? "image-full-width-right"
                          : ""
                      }`}
                    >
                      {renderLayoutImage(
                        bottomRightBackgroundImage,
                        layoutWrapperImageSizes,
                        determineLottieRatio(
                          "right",
                          contentWidth,
                          contentRatio
                        )
                      )}
                    </div>
                  )}
                  {bottomRightContent?.length &&
                    parseContent(
                      bottomRightContent[0],
                      altOverrideTheme,
                    )}
                </div>
              </div>
            )}          
        </div>
      </div>
    </section>
  )
}

export default LayoutWrapper
