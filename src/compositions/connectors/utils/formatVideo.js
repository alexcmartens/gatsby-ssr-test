export const parseVideoUrl = url => {
  if (!url) {
    return
  }
  if (url.startsWith("https://www.youtube.com/watch?v=")) {
    const splitUrl = url.split("https://www.youtube.com/watch?v=")
    return formatVideoCode(splitUrl)
  } else if (url.startsWith("https://vimeo.com/")) {
    const splitUrl = url.split("https://vimeo.com/")
    return formatVideoCode(splitUrl)
  } else {
    return null
  }
}

export const formatVideoCode = splitUrl => {
  if (splitUrl && splitUrl.length && splitUrl.length >= 1) {
    return splitUrl[1]
  } else {
    return null
  }
}

const formatVideo = (data, thumbnailResize) => {
  if (!data?.fields?.videoTitle) {
    return null
  }

  const type = data?.fields?.videoType ? data.fields.videoType : "vidyard"

  if (data?.fields?.videoUrl && !data?.fields?.videoCode) {
    data.fields.videoCode = parseVideoUrl(data?.fields?.videoUrl)
  }

  const video = {
    videoTitle: data?.fields?.videoTitle,
    url:
      type.toLowerCase() === "youtube"
        ? `https://www.youtube.com/embed/${data?.fields?.videoCode}`
        : type.toLowerCase() === "vimeo"
        ? `https://vimeo.com/${data?.fields?.videoCode}`
        : null,
    uuid: data?.fields?.uuid,
    allowFullScreen: true,
    vidyard: type.toLowerCase() === "vidyard" ? true : false,
  }

  const thumbnail = data?.fields?.videoThumbnail?.fields?.image?.fields?.file?.url 
    ? {
      focalPointImage: {
        url: data?.fields?.videoThumbnail?.fields?.image?.fields?.file?.url,
        height: data?.fields?.videoThumbnail?.fields?.image?.fields?.file?.details?.image?.height,
        width: data?.fields?.videoThumbnail?.fields?.image?.fields?.file?.details?.image?.width,
        x: data?.fields?.videoThumbnail?.fields?.focalPoint?.focalPoint?.x,
        y: data?.fields?.videoThumbnail?.fields?.focalPoint?.focalPoint?.y,
        title: data?.fields?.videoThumbnail?.fields?.title,
      },
    }
    : null

  return {
    video,
    thumbnail,
    variant: "variant_7",
    videoProgress: data?.fields?.videoProgress,
    setVideoProgress: data?.fields?.setVideoProgress,
    transcript: data?.fields?.videoTranscript?.videoTranscript
      ? "View Transcript"
      : null,
    transcriptText: data?.fields?.videoTranscript?.videoTranscript || null,
    closeTranscript: data?.fields?.videoTranscript?.videoTranscript
      ? "Hide Transcript"
      : null,    
  }
}

export default formatVideo
