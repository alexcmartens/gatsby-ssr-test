import React from "react"
import { Header } from "terra-one"
import formatTheme from "../../utils/organism-formatting/formatTheme"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"

const HeaderConnector = ({ data, overrideTheme, disablePadding=true, marginTopAndBottom=false }) => {
    const { eyebrow, headline, subhead, nested=true, alignment, colorScheme, contentWidth } = data?.fields
    const isCenter = alignment === "Center"
    const themeValue =
        overrideTheme ||
        colorScheme?.split(" ").join("-").toLowerCase() ||
        "transparent-light-text"
    const theme = formatTheme({ theme: themeValue })
    if (contentWidth === false) {
        disablePadding = true
    }
    const headerComponent = <Header
            theme={ theme }
            eyebrow={ eyebrow }
            headline={ headline }
            subhead={ subhead }
            centered={ isCenter }
        />

    return disablePadding ? headerComponent :
        renderPaddingOrFullBleed(
            headerComponent,
            true,
            true,
            true,
            nested,
            marginTopAndBottom,
            null,
            null
        )
}

export default HeaderConnector