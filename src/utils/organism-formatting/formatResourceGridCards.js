import { getCardTextOption, formatFocusedImage } from "./formatBaseMolecules"
import formatPageLinks from "./formatPageLinks"
import { Link } from "gatsby"
import formatLottieAnimation from "./formatLottieAnimation"
import { transformFilterName } from "./formatGridFilters"

const dotenv = require("dotenv")
dotenv.config()
const formatResourceGridCards = (
  data,
  locale = "en",
  location,
  appData = null,
  region,
  ratio = null,
  homepageSlug,
  currentSpaceId
) => {
  if (data && Array.isArray(data)) {
    // filter out prose and article entries - we don't want those displayed here
    const filteredData = data?.filter((entry) => {
      return entry?.contentType != "prose" && entry?.contentType != "article";
    })
    return filteredData?.map(card => {
      const cardTags = card?.resourceTags ? [...card?.resourceTags] : null
      const transformedTags = transformCardTags(cardTags, card)
      const cardPageLink = {
        url: {
          url: card?.slug,
        },
        text: card?.customCta || "Learn more"
      }
      return {
        eyebrow: card?.eyebrow,
        header: card?.header,
        text: card?.textContent
          ? getCardTextOption(card?.textContent, location)
          : null,
        image:
          card?.image?.__typename === "ContentfulLottieAnimation"
            ? formatLottieAnimation(
                card?.image?.srcLink || card?.image?.json || null,
                { height: "100%", display: "block" },
                ratio
              )
            : card?.image
            ? formatFocusedImage(card?.image, card?.header)
            : null,
        cardLink: 
          formatPageLinks(
            cardPageLink,
            locale,
            card?.contentType,
            homepageSlug,
            currentSpaceId
          ),
        bgColor: card?.bgColor,
        Link,
        cardTags: transformedTags
      }
    })
  }

  return null
}
export default formatResourceGridCards

export const transformCardTags = (tags, card) => {
  const transformedTags = [{
    id: card?.contentType,
    name: card?.contentType,
    value: `contentType-${transformFilterName(card?.contentType)}`
  }]
  tags?.map((tag) => {
    transformedTags.push({
      id: tag.id,
      name: tag.name,
      value: `${tag.type}-${transformFilterName(tag?.name)}`
    })
  })
  return transformedTags
}