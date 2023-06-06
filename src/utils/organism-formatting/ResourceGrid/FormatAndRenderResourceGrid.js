import React, { useContext } from "react"
import { formatBaseMolecules } from "../formatBaseMolecules"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { ResourceGrid } from "terra-one"
import { LayoutContext } from "../../../components/Layout/Layout"
import { formatGridFilters } from "../formatGridFilters"
import formatResourceGridCards from "../formatResourceGridCards"
import FormatAndRenderCtaWithHeader from "../CTA/FormatAndRenderCtaWithHeader"

const FormatAndRenderResourceGrid = props => {
  const {
    data = {},
    index,
    location,
    locale = "en",
  } = props

  const { homepageSlug } = useContext(LayoutContext)

  const allFilters = formatGridFilters(data?.filters);
  if(data?.showContentTypeFilters === true && data?.contentTypeFilters?.length > 1){
    let contentTypeFilters = []
    data?.contentTypeFilters?.forEach((type) => {
      switch(type){
        case 'Blog Post':
          contentTypeFilters.push({
            name: "Blog Post",
            value: "contentType-blog-post",
            id: "blog-post"
          });
          break;
        case 'Event':
          contentTypeFilters.push({
            name: "Event",
            value: "contentType-event",
            id: "event"
          });
          break;
        case 'Customer Story':
          contentTypeFilters.push({
            name: "Customer Story",
            value: "contentType-customer-story",
            id: "customer-story"
          })
        break;
        default:
          break;
      }
    })
    allFilters?.push({
      name: 'Content Type',
      value: 'content-type',
      options: [
        ...contentTypeFilters
      ]
    });
  }
  

  const { anchor, motion } = formatBaseMolecules(data, location, homepageSlug)

  const gridCards = formatResourceGridCards(data?.resources);

  const content = {
    introSection: <FormatAndRenderCtaWithHeader data={data?.introSection} overrideTheme={'transparent-dark-text'} />,
    filtersTitle: data?.filtersTitle,
    allFilters: allFilters,
    cards: [...gridCards],
  };

  return (
    <>
      {renderPaddingOrFullBleed(
        <ResourceGrid
          content={content}
          key={index}
          motion={motion}
        />,
        true,
        true,
        true,
        false
      )}
    </>
  )
}

export default FormatAndRenderResourceGrid
