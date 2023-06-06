import React from "react"

import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { Header } from "terra-one"

const FormatAndRenderHeader = ({ data }) => {
  return (
    <>
      {renderPaddingOrFullBleed(
        <Header
          eyebrow={data?.eyebrow}
          headline={data?.headline}
          subhead={data?.subhead}
        />
      )}
    </>
  )
}

export default FormatAndRenderHeader
