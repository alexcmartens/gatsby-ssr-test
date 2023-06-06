import React from "react"
import { SuperHero } from "terra-one"
import { superHeroVariants } from "../../utils/variants/featsAndHeroesVariants"
import ColorSchemeConnector from "../../components/ColorSchemeConnector/ColorSchemeConnector"
import formatTheme from "../../utils/organism-formatting/formatTheme"
import formatIcons from "../../utils/organism-formatting/formatIcons"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import formatUrl from "./utils/formatUrl"

const mapOptionToVariants = displayOption => {
  return (
    superHeroVariants.find(variant => {
      return variant.option === displayOption
    }) || superHeroVariants[0]
  )
}

function SuperHeroConnector(props) {console.log('SuperHeroConnector --->', props)
  const data = props?.contentfulEntry ? props?.contentfulEntry : props?.data

  const { heroContent, media } = data?.fields || {}

  const displayValue = mapOptionToVariants(data?.fields?.displayOption)
  const colorScheme = ColorSchemeConnector(data?.fields?.colorScheme)
  const theme = formatTheme(colorScheme)

  const hasVideo = media?.fields?.videoUrl || media?.fields?.url || media?.fields?.uuid
  const mediaContent = hasVideo
    ? {
        transcript: media?.fields?.transcript,
        closeTranscript: media?.fields?.closeTranscript,
        transcriptText: media?.fields?.transcriptText,
        video: {
          url: media?.fields?.url || media?.fields?.videoUrl,
          allowFullScreen: true,
          uuid: media?.fields?.uuid,
          vidyard: typeof media?.fields?.uuid !== "undefined",
        },
        thumbnail: {
          focalPointImage: {
            x: media?.fields?.videoThumbnail?.fields?.focalPoint?.focalPoint?.x,
            y: media?.fields?.videoThumbnail?.fields?.focalPoint?.focalPoint?.y,
            title: media?.fields?.videoThumbnail?.fields?.title,
            height:
              media?.fields?.videoThumbnail?.fields?.image?.fields?.file?.details
                ?.image?.height,
            width:
              media?.fields?.videoThumbnail?.fields?.image?.fields?.file?.details
                ?.image?.width,
            url: media?.fields?.videoThumbnail?.fields?.image?.fields?.file?.url,
          },
        },
      }
    : {
        focusedImage: {
          focalPointImage: {
            x: media?.fields?.focalPoint?.focalPoint?.x,
            y: media?.fields?.focalPoint?.focalPoint?.y,
            title: media?.fields?.image?.fields?.title,
            height: media?.fields?.image?.fields?.file?.details?.image?.height,
            width: media?.fields?.image?.fields?.file?.details?.image?.width,
            url: media?.fields?.image?.fields?.file?.url,
          },
        },
      }

  const ctas = {}
  const ctaLabels = ["ctaOne", "ctaTwo"]
  heroContent?.fields?.ctaButtons?.forEach((d, i) => {
    ctas[ctaLabels[i]] = {
      text: d.fields.text,
      url: formatUrl(d?.fields?.url),
      size: "lg",
    }
  })

  const content = {
    eyebrow: heroContent?.fields?.eyebrow,
    header: heroContent?.fields?.headline,
    subHeader: heroContent?.fields?.longSubhead || heroContent?.fields?.subhead,
    text: heroContent?.fields?.body,
    ctas,
    theme,
    ...mediaContent,
    ...displayValue,
  }

  if (data?.fields?.dataPoints) {
    content.dataPoints =
      data?.fields?.dataPoints?.[0]?.fields?.points?.map(point => {
        return {
          header: point?.fields?.header,
          description: point?.fields?.description,
          icon: {
            type: formatIcons(point?.fields?.dataPointIcon?.fields?.icon),
          },
        }
      })
  }

  return (
    <div
      className={
        data?.fields?.disableTopBottomMargin
          ? "super-hero-no-margin"
          : "super-hero__wrapper"
      }
    >
      {renderPaddingOrFullBleed(
        <SuperHero
          content={content}
          attributes={theme}
        />,
        displayValue?.padding,
        displayValue?.fullBleedColor,
        true,
        false,
        true,
        displayValue?.verticalSpacingChild
      )}
    </div>
  )
}

export default SuperHeroConnector
