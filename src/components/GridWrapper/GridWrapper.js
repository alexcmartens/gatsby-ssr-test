import React from "react"
import "./GridWrapper.scss"

const GridWrapper = ({
  children,
  fullBleedColor,
  inheritBackground,
  nestedPadding,
  marginTopAndBottom,
  verticalSpacingChild,
  appendClass,
  productPageComponent,
}) => {
  const theme =
    children?.props?.content?.theme ||
    children?.props?.attributes?.theme ||
    children?.props?.theme
  const componentType = children?.type?.name
    ? children?.type?.name.toLowerCase()
    : ""
  const applyBackgroundColor = !fullBleedColor && inheritBackground;

  return (
    <section
      className={`default-layout ${appendClass} ${
        nestedPadding ? "nested" : ""
      } ${componentType}
      ${theme?.backgroundColor ? "default-layout--no-vertical-margin" : ""}`}
      style={{
        ...(fullBleedColor && { backgroundColor: theme?.backgroundColor }),
        ...(productPageComponent && { marginBottom: "0" }),
      }}
    >
      <section
        className={`default-layout__grid 
          ${
            marginTopAndBottom === false
              ? `default-layout__grid--no-margin`
              : ``
          }
        `}
        style={{
          ...(applyBackgroundColor && { backgroundColor: theme?.backgroundColor }),
          ...(productPageComponent && { marginBottom: "0" }),
        }}
      >
        <div
          className={`default-layout__children ${
            verticalSpacingChild === true ? "space-top-bottom" : ""
          }`}
        >
          {children}
        </div>
      </section>
    </section>
  )
}

export default GridWrapper
