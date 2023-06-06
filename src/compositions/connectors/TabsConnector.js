import React from "react"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import { Tabs } from "terra-one"
import SuperHeroConnector from "./SuperHeroConnector"
import BlockListItemsConnector from "./BlockListItemsConnector"
import PullQuoteConnector from "./PullQuoteConnector"

const renderComponent = (data) => {
  let component = null
  switch (data?.sys?.contentType?.sys?.id) {
    case "blockListItems":
      component = <BlockListItemsConnector data={ data } />
      break
    case "pullQuote":
      component = <PullQuoteConnector data={ data } />
      break
    case "superHero":
      component = <SuperHeroConnector data={ data } />
      break      
    default:
      component = <div>Not yet implemeted.</div>
      break
  }
  return component
}

const TabsConnector = (props) => {
  if (typeof props?.contentfulEntry === "undefined") {
    return null
  }

  const tabsList = []

  if (props?.contentfulEntry?.fields?.tabs?.length) {
    for (let i = 0; i < props?.contentfulEntry?.fields?.tabs?.length; i++) {
      const current = props?.contentfulEntry?.fields?.tabs?.[i]

      tabsList.push({
        header: current?.fields?.header,
        description: current?.fields?.description,
        image: {
          url: current?.fields?.image?.image?.file?.url,
          alt: current?.fields?.image?.altText,
        },
        content: renderComponent(current?.fields?.content),
      })
    }
  }
  return renderPaddingOrFullBleed(
        <Tabs
          orientation={props?.contentfulEntry?.fields?.tabOrientation}
          variant={props?.contentfulEntry?.fields?.variant}
          displayThumbnails={props?.contentfulEntry?.fields?.displayThumbnails}
          tabs={tabsList}
          paddingClass={null}
        />
      )
}

export default TabsConnector
