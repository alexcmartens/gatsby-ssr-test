import { formatFocusedImage } from "./formatBaseMolecules"
import formatPageLinks from "./formatPageLinks"
import formatVideo from "./formatVideo"

const formatBioBlocks = (data, locale = "en", currentSpaceId, products, siteIdentifier) => {
  if (data && Array.isArray(data)) {
    return data.map(block => {
      let videoContent
      if (block?.link?.video) {
        const videoData = formatVideo(block?.link?.video)

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

      const blockLinkType = block?.link?.url?.contentType
        ? block?.link?.url?.contentType
        : block?.link?.url?.internal?.type
        ? block?.link?.url?.internal?.type
        : null

      return {
        image: block?.image ? formatFocusedImage(block?.image) : null,
        header: block?.header ? block?.header : null,
        subHeader: block?.subHeader ? block?.subHeader : null,
        text: block?.text ? block?.text : null,
        link:
          block?.link?.video && videoContent
            ? {
                video: videoContent,
                text: block?.link?.text,
              }
            : formatPageLinks(
                block?.link,
                locale,
                blockLinkType,
                null,
                currentSpaceId,
                products,
                siteIdentifier
              ),
      }
    })
  }
  return null
}

export default formatBioBlocks
