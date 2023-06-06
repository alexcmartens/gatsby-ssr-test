import { getCardTextOption, formatFocusedImage } from "./formatBaseMolecules"
import formatPageLinks from "./formatPageLinks"
import { Link } from "gatsby"
import checkForExternalLink from "./checkForExternalLink"
import { formatRegions } from "../config/regionConfig"
import formatVideo from "./formatVideo"
import formatLottieAnimation from "./formatLottieAnimation"
import { createProductTrialPageLink } from "../../components/CTAButtons/CTAButtonsConnector"

const dotenv = require("dotenv")
dotenv.config()
const formatCards = (
  data,
  locale = "en",
  location,
  appData = null,
  region,
  ratio = null,
  homepageSlug,
  currentSpaceId,
  products,
  siteIdentifier
) => {
  if (data && Array.isArray(data)) {
    return data?.map(card => {
      let videoContent
      if (card?.cardLink?.video) {
        const videoData = formatVideo(card?.cardLink?.video)
        const video = videoData?.video
        const thumbnail = videoData?.thumbnail?.focalPointImage?.url
          ? videoData?.thumbnail
          : null

        videoContent = {
          transcript: videoData?.transcript,
          transcriptText: videoData?.transcriptText,
          closeTranscript: videoData?.closeTranscript,
          video,
          thumbnail,
          variant: "variant_7",
          videoProgress: data?.videoProgress,
          setVideoProgress: data?.setVideoProgress,
        }
      }

      const regions = formatRegions(card?.regions)
      let inRegion = false
      if (region && regions?.length) {
        if (region?.machineName === "global") {
          inRegion = true
        } else {
          const findCurrentRegion = regions.find(reg => {
            return (
              reg.machineName?.toLowerCase() ===
              region.machineName?.toLowerCase()
            )
          })
          if (findCurrentRegion) {
            inRegion = true
          }
        }
      }
      const cardLinkType = card?.cardLink?.url?.contentType
        ? card?.cardLink?.url?.contentType
        : card?.cardLink?.url?.internal?.type
        ? card?.cardLink?.url?.internal?.type
        : null

      let modalContent = null
      let hasLogo = false
      let hasImage = false
      let isContentfulImage = false
      let isAppCardImage = false

      if (card?.modalType && card?.modalType === "Video") {
        const isVidyard =
          card?.video?.__typename === "ContentfulVidyardVideo" ? true : false
        if (card?.video?.videoUrl || card?.video?.uuid) {
          modalContent = {
            thumbnail: card?.cardImage
              ? formatFocusedImage(card?.cardImage)
              : null,
            variant: "unbounded_cards",
            video: {
              url: card?.video?.videoUrl,
              vidyard: isVidyard ? true : false,
              uuid: isVidyard && card?.video?.uuid ? card?.video?.uuid : null,
            },
          }
        }
      }

      if (card?.modalType === "Image" && card?.modalImage) {
        modalContent = {
          variant: "unbounded_cards",
          modalImage: card?.modalImage
            ? formatFocusedImage(card?.modalImage)
            : null,
        }
      }

      if (regions.length && !inRegion) {
        return
      }

      if (card?.__typename === "ContentfulAppCard") {
        if (card?.logo?.brandfolderAsset?.[0]?.url) {
          hasLogo = true
        }
        if (
          card?.productImage?.image?.file?.url ||
          card?.form?.sections?.[0]?.product?.media?.[0]?.image?.file?.url
        ) {
          hasImage = true
        }

        if (
          card?.form?.sections?.[0]?.product?.media?.[0]?.__typename ===
            "ContentfulImage" ||
          card?.productImage?.__typename === "ContentfulImage"
        ) {
          isContentfulImage = true
        }
        if (card?.productImage?.image) {
          isAppCardImage = true
        }

        return {
          logo: hasLogo
            ? card?.logo?.brandfolderAsset?.[0]?.url
              ? {
                  altText: card?.logo?.altText,
                  url: card?.logo?.brandfolderAsset?.[0]?.url,
                }
              : null
            : card?.logo?.image?.file
            ? {
                altText: card?.logo?.image?.altText,
                url: card?.logo?.image?.file?.url,
              }
            : null,

          productName: card?.productName
            ? card?.productName
            : card?.form?.sections?.[0].product?.internalTitle
            ? card?.form?.sections?.[0].product?.internalTitle
            : null,
          header: card?.productDescriptionHeader
            ? card?.productDescriptionHeader
            : card?.form?.sections?.[0].product?.title,
          subheader: card?.subheaderLong?.subheaderLong
            ? card.subheaderLong.subheaderLong
            : card?.productDescriptionSubheader
            ? card?.productDescriptionSubheader
            : card?.form?.sections?.[0].product?.shortDescription,
          ...(hasImage && {
            image: isAppCardImage
              ? {
                  altText: card?.productImage?.altText,
                  url: card?.productImage?.image?.file?.url,
                }
              : isContentfulImage
              ? {
                  altText:
                    card?.form?.sections[0]?.product?.media?.[0]?.altText,
                  url: card?.form?.sections[0]?.product?.media?.[0]?.image?.file
                    ?.url,
                }
              : card?.form?.sections[0]?.product?.media?.[0]
              ? formatFocusedImage(card?.form?.sections[0]?.product?.media?.[0])
              : card?.productImage?.image?.file?.url
              ? {
                  url: card?.productImage?.image?.file?.url,
                  altText: card?.productImage?.altText,
                }
              : null,
          }),
          body: card?.productDescriptionBody?.productDescriptionBody
            ? card?.productDescriptionBody?.productDescriptionBody
            : card?.form?.sections?.[0].product?.longDescription
                ?.childMarkdownRemark?.html,
          cardLink:
            process.env.GATSBY_SITE_IDENTIFIER === "constructionone"
              ? formatPageLinks(
                  {
                    text:
                      appData?.requestDemoLabel ||
                      card?.linkLabel ||
                      card?.form?.text,
                    url: {
                      url: card?.form?.url,
                    },
                  },
                  locale,
                  cardLinkType,
                  currentSpaceId
                )
              : card?.form?.type === "ContentfulProductPage"
              ? {
                  url: `products/${card?.form?.url}`,
                  text: card?.linkLabel ? card.linkLabel : card?.form?.text,
                }
              : card?.url?.product?.sys?.urn
              ? {
                  url: createProductTrialPageLink(
                    products,
                    card?.url?.product?.sys?.urn,
                    locale,
                    card,
                    siteIdentifier
                  )?.url,
                  text: card?.linkLabel,
                }
              : {
                  url: card?.form?.url,
                  text: card?.linkLabel ? card.linkLabel : card?.form?.text,
                },
          viewMoreText: appData?.viewMoreLabel
            ? appData?.viewMoreLabel
            : "View More",
          viewLessText: appData?.viewLessLabel
            ? appData?.viewLessLabel
            : "View Less",
        }
      } else {
        return {
          eyebrow: card?.eyebrow,
          header: card?.header,
          text: card?.textContent
            ? getCardTextOption(card?.textContent, location)
            : null,
          image:
            card?.cardImage?.__typename === "ContentfulLottieAnimation"
              ? formatLottieAnimation(
                  card?.cardImage?.srcLink || card?.cardImage?.json || null,
                  { height: "100%", display: "block" },
                  ratio
                )
              : card?.cardImage
              ? formatFocusedImage(card?.cardImage, card?.header)
              : null,
          cardLink:
            card?.cardLink?.video && videoContent
              ? {
                  video: videoContent,
                  text: card?.cardLink?.text,
                }
              : formatPageLinks(
                  card?.cardLink,
                  locale,
                  cardLinkType,
                  homepageSlug,
                  currentSpaceId,
                  products,
                  siteIdentifier
                ),
          bgColor: card?.bgColor,
          modalType: card?.modalType ? card?.modalType : null,
          modalContent: modalContent ? modalContent : null,
          Link,
        }
      }
    })
  }

  return null
}
export default formatCards

export const formatButtons = (link, locale = "en") => {
  if (!link) {
    return null
  }

  let text

  if (link?.text) {
    text = link.text
  }

  if (!link?.text) {
    text = link?.url?.text
  }

  if (link?.url && link?.url?.url) {
    link.external = checkForExternalLink(link?.url?.url)
  }

  const url = link?.url?.url?.startsWith("http")
    ? link?.url?.url
    : locale && typeof locale === "string"
    ? `/${locale?.toLowerCase()}/${link?.url?.url}`
    : `/en/${link?.url?.url}`

  return {
    text,
    url,
    Link,
  }
}
