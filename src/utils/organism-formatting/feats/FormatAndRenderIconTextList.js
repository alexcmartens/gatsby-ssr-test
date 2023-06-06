import React from "react"
import formatTheme from "../formatTheme"
import renderPaddingOrFullBleed from "../../organism-formatting/renderPaddingOrFullBleed"
import formatIcons from "../formatIcons"
import { IconTextList } from "terra-one"

const FormatAndRenderIconTextList = ({
  data,
  paddingClass,
  overrideTheme,
  nested,
}) => {
  const themeValue = overrideTheme
    ? overrideTheme?.split(" ").join("-").toLowerCase() ||
      "transparent-light-text"
    : data?.colorScheme?.split(" ").join("-").toLowerCase() ||
      "transparent-light-text"

  const contentWidth = data?.contentWidth || false

  const overridePaddingClass = nested ? "ter-icon-text-list--extra-padding" : ""

  const items =
    data?.items?.map(item => {
      return {
        icon: item?.textItemIcon?.icon
          ? formatIcons(item?.textItemIcon?.icon)
          : null,
        headline: item?.headline,
        body: item?.body?.childMarkdownRemark?.html,
      }
    }) || []
  const theme = formatTheme({ theme: themeValue })
  const disableIcon = data?.disableIcon

  return renderPaddingOrFullBleed(
    <IconTextList
      items={items}
      theme={theme}
      disableIcon={disableIcon}
      paddingClass={paddingClass || overridePaddingClass}
    />,
    contentWidth,
    true,
    true,
    nested
  )
}

export default FormatAndRenderIconTextList
