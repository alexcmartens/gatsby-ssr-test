import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import formatTheme from "../../utils/organism-formatting/formatTheme";

const RichTextConnector = ({data, overrideTheme }) => {
  const parentColorScheme = data?.fields?.parentColorScheme || overrideTheme
  const bulletTheme =
      parentColorScheme?.split(" ").join("-").toLowerCase() ||
      "transparent-dark-text"
  const themeValue =
      parentColorScheme?.split(" ").join("-").toLowerCase() ||
      data?.fields?.colorScheme?.split(" ").join("-").toLowerCase() ||
      "transparent-dark-text"
  const theme = formatTheme({ theme: themeValue })    
  return (
    <div
      className={`richtext-container ${themeValue} richtext-container__bullet-theme--${bulletTheme}`}
      style={{ color: theme?.color, background: theme?.backgroundColor }}
    >
      { documentToReactComponents(data?.fields?.content) }
    </div>      
  )
}

export default RichTextConnector