import React from "react"
import { FullBackgroundHero, CtaWithHeader, TwoByTwo } from "terra-one"
import formatIcons from "../../utils/organism-formatting/formatIcons"
import formatFocusedImage from "./utils/formatFocusedImage"
import formatUrl from "./utils/formatUrl"
//import { formatBackgroundImage, formatImage } from "../formatBaseMolecules"

import ColorSchemeConnector from "../../components/ColorSchemeConnector/ColorSchemeConnector"
import { fullBackgroundHeroVariants } from "../../utils/variants/fullBackgroundHeroVariants"
import formatTheme from "../../utils/organism-formatting/formatTheme"

function formatTwoByTwoContent(data) {
  let content = null
  switch (data.sys.contentType.sys.id) {
    case "dataPoint":
      content = {
        type: "Data Point",
        points: [
          {
            header: data?.fields?.points?.[0]?.fields?.header,
            description: data?.fields?.points?.[0]?.fields?.description,
            icon: {
              type: formatIcons(data?.fields?.points?.[0]?.fields?.icon),
            },
          },
        ],
      }
      break
    case "imageWithFocalPoint":
      content = {
        type: "Image",
        alt: "FPO PlaceHolder Image",
        focalPointImage: {
          height: data?.fields?.image?.fields?.file?.details?.image?.height,
          width: data?.fields?.image?.fields?.file?.details?.image?.width,
          title: data?.fields?.image?.fields?.title,
          url: data?.fields?.image?.fields?.file?.url,
          x: null,
          y: null,
        },
      }
      break
    default:
      break
  }
  return content
}

function formatTwoByTwo(data) {
  if (data?.sys?.contentType?.sys?.id === "twoByTwo") {
    return {
      topLeftContent: [
        formatTwoByTwoContent(data?.fields?.topLeftContent?.[0]),
      ],
      topLeftBackgroundColor: "dark-navy",
      topRightContent: [
        formatTwoByTwoContent(data?.fields?.topRightContent?.[0]),
      ],
      topRightBackgroundColor: "dark-navy",
      topRightIsImage: true,
      bottomLeftContent: [
        formatTwoByTwoContent(data?.fields?.bottomLeftContent?.[0]),
      ],
      bottomLeftBackgroundColor: "dark-navy",
      bottomLeftIsImage: true,
      bottomRightContent: [
        formatTwoByTwoContent(data?.fields?.bottomRightContent?.[0]),
      ],
      bottomRightBackgroundColor: "dark-navy",
      shortDataPointContent: false,
    }
  }
}

function RenderCtaWithHeader({ data }) {
  if (data?.sys?.contentType?.sys?.id === "ctaWithHeader") {
    const buttons = data?.fields?.ctaButtons?.map(d => {
      return {
        text: d.fields.text,
        url: formatUrl(d.fields.url),
      }
    })

    return (
      <CtaWithHeader
        alignment={data?.fields?.alignment}
        eyebrow={data?.fields?.eyebrow}
        headline={data?.fields?.headline}
        subhead={data?.fields?.subhead}
        content={data?.fields?.content}
        buttons={buttons}
        variant={
          data?.variant?.split(" ").join("-").toLowerCase() ||
          "transparent-light-text"
        }
      />
    )
  }
  return null
}

const formatImage = data => {
  let image
  switch (data?.sys?.contentType?.sys?.id) {
    case "imageWithFocalPoint":
      image = {
        type: "focalPointImage",
        ...formatFocusedImage(data),
      }
      break
    /*
    case "ContentfulAsset":
      image = {
        type: "image",
        image: {
          src: data?.file?.url,
          alt: data?.title,
        },
      }
      break
    */
    default:
      break
  }
  return image
}

const formatBackgroundImage = data => {
  let backgroundImage = null
  switch (data?.sys?.contentType?.sys?.id) {
    case "imageScreenSize":
      backgroundImage = {
        type: "image",
        image: {
          desktop: {
            src: data?.fields?.desktop?.fields?.file?.url,
            alt: data?.fields?.desktop?.fields?.altText,
          },
          tablet: {
            src: data?.fields?.tablet?.fields?.file?.url,
            alt: data?.fields?.tablet?.fields?.altText,
          },
          mobile: {
            src: data?.fields?.mobile?.fields?.file?.url,
            alt: data?.fields?.mobile?.fields?.altText,
          },
        },
      }
      break
    case "imageWithFocalPoint":
      backgroundImage = {
        type: "focalPointImage",
        ...formatFocusedImage(data),
      }
      break
    default:
      break
  }

  return backgroundImage
}

function renderComponent(data) {
  let component = null
  switch (data?.sys?.contentType?.sys?.id) {
    case "twoByTwo":
      component = <TwoByTwo content={formatTwoByTwo(data)} isNested />
      break
    case "ctaWithHeader":
      component = <RenderCtaWithHeader data={data} />
      break
    default:
      break
  }
  return component
}

function FullBackgroundHeroConnector(props) {
  const { contentfulEntry } = props

  const themeValue = ColorSchemeConnector(contentfulEntry?.fields?.colorScheme)
  const theme = formatTheme(themeValue)
  const variant = fullBackgroundHeroVariants.find(option => {
    return option.option === contentfulEntry?.fields?.variant
  })
  const borderColorValue = ColorSchemeConnector(
    contentfulEntry?.fields?.shapeBorderColor
  )
  const shapeBorderColor = formatTheme(borderColorValue)

  const content = {
    variant: variant?.variant,
    backgroundImage: formatBackgroundImage(
      contentfulEntry?.fields?.backgroundImage
    ),
    bottomBackgroundImage: formatBackgroundImage(
      contentfulEntry?.fields?.bottomBackgroundImage
    ),
    leftContent: renderComponent(contentfulEntry?.fields?.leftContent),
    rightContent: renderComponent(contentfulEntry?.fields?.rightContent),
    rightContentType: `Contentful${contentfulEntry?.fields?.rightContent?.sys?.contentType?.sys?.id}`,
    rightImage: formatImage(contentfulEntry?.fields?.rightImage),
    shapeType: contentfulEntry?.fields?.shapeType?.toLowerCase(),
    shapeBorderColor: shapeBorderColor?.backgroundColor,
  }

  return <FullBackgroundHero content={content} theme={theme} />
}

export default FullBackgroundHeroConnector
