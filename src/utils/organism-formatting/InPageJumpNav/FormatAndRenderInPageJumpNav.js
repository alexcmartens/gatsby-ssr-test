import React from "react"
import { InPageJumpNav } from "terra-one"

const FormatAndRenderInPageJumpNav = ({ data, navTitle }) => {
  const displayedSections = []
  if (data && data !== null && Array.isArray(data)) {
    data?.forEach(section => {
      if (section?.anchor && section?.jumpNavTitle) {
        section.link = section?.anchor
        section.title = section?.jumpNavTitle
        displayedSections.push(section)
      }
    })
  }
  return (
    <>
      <InPageJumpNav
        pageSections={displayedSections}
        jumpNavTitle={navTitle && navTitle}
      />
    </>
  )
}

export default FormatAndRenderInPageJumpNav
