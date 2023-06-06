import React, { useState } from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { formatCTAButtons } from "../../../components/CTAButtons/CTAButtonsConnector"
import { Link } from "gatsby"
import formatVideo from "../formatVideo"
import { CtaWithHeader } from "terra-one"
import { useContext } from "react"
import { LayoutContext } from "../../../components/Layout/Layout"

import { formatPageLinks } from "../formatPageLinks"
import ColorSchemeConnector from "../../../components/ColorSchemeConnector/ColorSchemeConnector"
import formatTheme from "../formatTheme"
const RenderCTA = ({
  data,
  paddingClass,
  overrideTheme,
  locale,
  buttons,
  variant,
  override,
  setOverride,
  products,
  siteIdentifier,
  theme,
}) => {
  return (
    <CtaWithHeader
      variant={overrideTheme || variant}
      theme={theme}
      alignment={data?.alignment}
      eyebrow={data?.eyebrow}
      headline={data?.headline}
      subhead={
        data?.longSubhead?.childMarkdownRemark?.html?.substring(0, 400) ||
        data?.subhead
      }
      content={data?.body?.childMarkdownRemark?.html || data?.body?.body}
      buttons={buttons}
      textLinks={data?.displayButtonsAsLinks}
      Link={Link}
      paddingClass={paddingClass}
      attributes={
        data?.variant === "dark" &&
        !overrideTheme && {
          theme: {
            backgroundColor: "#0063A3",
          },
        }
      }
    />
  )
}

const FormatAndRenderCtaWithHeader = ({
  data,
  paddingClass,
  overrideTheme,
  nested,
  locale = "en",
  disablePadding = false,
  marginTopAndBottom,
  productPage,
  currentSpaceId,
  products,
  siteIdentifier,
}) => {
  const { homepageSlug } = useContext(LayoutContext)
  const [override, setOverride] = useState(false)
  const appendClass = data?.extraClass ? data.extraClass : ""
  const buttons = formatCTAButtons(
    data?.ctaButtons,
    locale,
    override,
    setOverride,
    homepageSlug,
    currentSpaceId,
    products,
    siteIdentifier
  )
  const productPageComponent = productPage ? true : false
  const contentWidth = productPage ? true : data?.contentWidth || false
  const variant =
    data?.variant?.split(" ").join("-").toLowerCase() ||
    "transparent-light-text"

  const theme = ColorSchemeConnector(data?.colorScheme)
  const dataWithTheme = { ...data, ...theme }

  const formattedTheme = formatTheme(dataWithTheme)

  return disablePadding === true ? (
    <RenderCTA
      data={data}
      paddingClass={data?.paddingClass}
      overrideTheme={overrideTheme}
      locale={locale}
      buttons={buttons}
      variant={variant}
      override={override}
      setOverride={setOverride}
      products={products}
      siteIdentifier={siteIdentifier}
      theme={formattedTheme}
    />
  ) : (
    renderPaddingOrFullBleed(
      <RenderCTA
        data={data}
        paddingClass={paddingClass}
        overrideTheme={overrideTheme}
        locale={locale}
        buttons={buttons}
        variant={variant}
        override={override}
        setOverride={setOverride}
        products={products}
        siteIdentifier={siteIdentifier}
        theme={formattedTheme}
      />,
      contentWidth,
      true,
      true,
      nested,
      marginTopAndBottom,
      null,
      appendClass,
      productPageComponent
    )
  )
}

export default FormatAndRenderCtaWithHeader
