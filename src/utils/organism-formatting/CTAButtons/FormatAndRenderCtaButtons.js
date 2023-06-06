import React from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { Link } from "gatsby"
import { CTAButtons } from "terra-one"

const FormatAndRenderCtaButtons = ({ data }) => {
  return (
    <>
      {renderPaddingOrFullBleed(
        <CTAButtons
          variant={data?.variant}
          alignment={data?.alignment}
          buttons={data?.ctaButtons}
          Link={Link}
        />
      )}
    </>
  )
}

export default FormatAndRenderCtaButtons
