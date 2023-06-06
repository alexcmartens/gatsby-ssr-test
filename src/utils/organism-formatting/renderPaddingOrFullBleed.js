import React from "react"
import GridWrapper from "../../components/GridWrapper/GridWrapper"

// If fullbleed component, pass in false for padding
const renderPaddingOrFullBleed = (
  component,
  padding = true,
  fullBleedColor = true,
  inheritBackground = true,
  nestedPadding = false,
  marginTopAndBottom = true,
  verticalSpacingChild = false,
  appendClass = "",
  productPageComponent
) => {
  if (!component) {
    return <></>
  }
  if (!padding) {
    return component
  }
  if (padding && component) {
    return (
      <GridWrapper
        children={component}
        fullBleedColor={fullBleedColor}
        inheritBackground={inheritBackground}
        nestedPadding={nestedPadding}
        marginTopAndBottom={marginTopAndBottom}
        verticalSpacingChild={verticalSpacingChild}
        appendClass={appendClass}
        productPageComponent={productPageComponent}
      />
    )
  }
}

export default renderPaddingOrFullBleed
