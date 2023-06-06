import React from "react"
import formatTheme from "../formatTheme"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import ColorSchemeConnector from "../../../components/ColorSchemeConnector/ColorSchemeConnector"
import formatIcons from "../formatIcons"
import { DataPoint } from "terra-one"

const RenderDataPointComponent = ({ points, theme, variant }) => {
  return <DataPoint points={points} theme={theme} variant={variant} />
}

const FormatAndRenderDataPoint = ({
  data,
  disablePadding,
  overrideTheme,
  overrideVariant,
}) => {
  data["theme"] =
    overrideTheme || ColorSchemeConnector(data?.colorScheme)?.theme

  const theme = formatTheme(data)
  const points = data?.points.map(point => {
    return {
      header: point?.header,
      description: point?.description,

      icon: { type: formatIcons(point?.dataPointIcon?.icon) },
    }
  })

  const variant = overrideVariant || formatVariantToMachineName(data?.variant)

  return disablePadding === true ? (
    <RenderDataPointComponent points={points} theme={theme} variant={variant} />
  ) : (
    renderPaddingOrFullBleed(
      <RenderDataPointComponent
        points={points}
        theme={theme}
        variant={variant}
      />,
      true,
      false,
      false,
      false
    )
  )
}

export default FormatAndRenderDataPoint

export const formatIconToMachineName = icon => {
  if (!icon || typeof icon !== "string") {
    return null
  }
  return `${icon.toLowerCase().replace(/ /g, "-")}-dark-48px`
}

export const formatVariantToMachineName = variant => {
  if (!variant || typeof variant !== "string") {
    return "variant_1"
  }

  if (variant.toLowerCase() === "horizontal") {
    return "variant_1"
  } else if (variant?.toLowerCase() === "vertical long align left (3 points)") {
    return "variant_2a"
  } else if (variant?.toLowerCase() === "vertical long centered (3 points)") {
    return "variant_2b"
  } else if (variant?.toLowerCase() === "vertical short (1 point only)") {
    return "variant_3"
  } else {
    return "variant_1"
  }
}
