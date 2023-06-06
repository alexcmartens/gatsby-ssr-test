import React from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { Tabs } from "terra-one"
import PageSections from "../../../components/PageSections/PageSections"

const FormatAndRenderTabs = ({ data, location, paddingClass, products, siteIdentifier }) => {
  const tabsList = []
  if (data?.tabs?.length) {
    for (let i = 0; i < data.tabs.length; i++) {
      const current = data?.tabs?.[i]

      tabsList.push({
        header: current?.header,
        description: current?.description,
        image: {
          url: current?.image?.image?.file?.url,
          alt: current?.image?.altText,
        },
        content: (
          <PageSections
            pageSections={[current?.content]}
            location={location}
            tab={true}
            products={products}
            siteIdentifier={siteIdentifier}
          />
        ),
      })
    }
  }
  return data
    ? renderPaddingOrFullBleed(
        <Tabs
          orientation={data?.tabOrientation}
          variant={data?.variant}
          displayThumbnails={data?.displayThumbnails}
          tabs={tabsList}
          paddingClass={paddingClass}
        />
      )
    : null
}

export default FormatAndRenderTabs
