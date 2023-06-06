import React from "react"
import FormatAndRenderPullQuote from "./FormatAndRenderPullQuote"

export const Feats = props => {
  const { content, i, locale, location } = props
  const feats = {
    ContentfulPullQuote: (
      <FormatAndRenderPullQuote
        key={`format-and-render-pull-quote-${i}`}
        data={content}
        i={i}
        location={location}
        locale={locale}
        currentSpaceId={props?.currentSpaceId}
        products={props?.products}
        siteIdentifier={props?.siteIdentifier}
      />
    ),
  }

  if (content?.__typename && feats[content.__typename]) {
    return feats[content.__typename]
  } else {
    return <div></div>
  }
}
