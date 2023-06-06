import formatPageLinks from "./formatPageLinks"
import formatIcons from "./formatIcons"

const formatIconMiniBlocks = (data, locale, currentSpaceId = "", products, siteIdentifier) => {
  if (data && Array.isArray(data)) {
    return data.map(block => {
      const blockLinkType = block?.link?.url?.contentType
        ? block?.link?.url?.contentType
        : block?.link?.url?.internal?.type
        ? block?.link?.url?.internal?.type
        : null
      return {
        icon: block?.miniBlockIcon?.icon
          ? formatIcons(block?.miniBlockIcon?.icon)
          : block?.listItemIcon?.icon
          ? formatIcons(block?.listItemIcon?.icon)
          : null,
        header: block?.header ? block?.header : null,
        text: block?.text ? block?.text : null,
        link: formatPageLinks(
          block?.link,
          locale,
          blockLinkType,
          null,
          currentSpaceId,
          products,
          siteIdentifier
        ),
        Link: data?.Link,
      }
    })
  }
  return null
}

export default formatIconMiniBlocks
