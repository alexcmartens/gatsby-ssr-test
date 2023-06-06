import React from "react"
import { marked } from "marked"
import formatTheme from "../formatTheme"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import formatIcons from "../formatIcons"
import { Accordion } from "terra-one"

const FormatAndRenderAccordion = ({
  data,
  paddingClass,
  overrideTheme,
  nested,
}) => {
  const themeValue =
    overrideTheme?.split(" ").join("-").toLowerCase() ||
    data?.colorScheme?.split(" ").join("-").toLowerCase() ||
    "transparent-light-text"

  const items =
    data?.items?.map(item => {
      return {
        icon: formatIcons(item?.textItemIcon?.icon),
        headline: item?.headline || item?.fields?.headline,
        body: item?.body && (item?.body?.childMarkdownRemark?.html || marked?.parse(item?.body)),
      }
    }) || []
  const theme = formatTheme({ theme: themeValue })

  if (
    data?.colorScheme === "Blue" ||
    data?.colorScheme === "Dark Navy" ||
    data?.colorScheme === "Dark Gray"
  ) {
    theme.darkTheme = true
  }
  const disableIcon = data?.disableIcon
  const contentWidth = data?.contentWidth || false
  return renderPaddingOrFullBleed(
    <Accordion
      items={items}
      theme={theme}
      disableIcon={disableIcon}
      paddingClass={paddingClass}
    />,
    !nested ? contentWidth : contentWidth === false ? contentWidth : true,
    data?.backgroundColorPadding,
    true,
    nested
  )
}

export default FormatAndRenderAccordion
