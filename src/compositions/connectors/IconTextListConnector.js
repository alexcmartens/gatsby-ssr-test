import * as React from "react"
import { IconTextList } from "terra-one"
import formatIcons from "../../utils/organism-formatting/formatIcons"
import formatTheme from "../../utils/organism-formatting/formatTheme"

const IconTextListConnector = ({data}) => {
    const themeValue = data?.fields?.colorScheme?.split(" ").join("-").toLowerCase() ||
        "transparent-light-text"
    const theme = formatTheme({ theme: themeValue })

    const items = data?.fields?.items?.map((d) => {
      return {
        icon: d?.fields?.icon ? formatIcons(d?.fields?.icon): '',
        headline: d?.fields?.headline,
        body: d?.fields?.body
      }
    })
    return <IconTextList items={items} theme={theme} />
  }

  export default IconTextListConnector