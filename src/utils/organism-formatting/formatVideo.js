const formatVideo = (data, thumbnailResize) => {
  if (!data) {
    return null
  }

  if (!data?.videoTitle) {
    return null
  }

  const type = data?.videoType ? data.videoType : "vidyard"

  if (data?.videoUrl && !data?.videoCode) {
    data.videoCode = parseVideoUrl(data?.videoUrl)
  }

  const video = {
    videoTitle: data?.videoTitle,
    url:
      type.toLowerCase() === "youtube"
        ? `https://www.youtube.com/embed/${data?.videoCode}`
        : type.toLowerCase() === "vimeo"
        ? `https://vimeo.com/${data?.videoCode}`
        : null,
    uuid: data?.uuid,
    allowFullScreen: true,
    vidyard: type.toLowerCase() === "vidyard" ? true : false,
  }

  const thumbnail = {
    focalPointImage: {
      url: data?.videoThumbnail?.image?.file?.url,
      height: data?.videoThumbnail?.image?.file?.details?.image?.height,
      width: data?.videoThumbnail?.image?.file?.details?.image?.width,
      x: data?.videoThumbnail?.focalPoint?.focalPoint?.x,
      y: data?.videoThumbnail?.focalPoint?.focalPoint?.y,
      title: data?.videoThumbnail?.title,
    },
  }

  return {
    thumbnail,
    video,
    // TODO - add "View Transcript" and "Hide Transcript" to sitewide labels when we create it
    transcript: data?.videoTranscript?.videoTranscript
      ? "View Transcript"
      : null,
    closeTranscript: data?.videoTranscript?.videoTranscript
      ? "Hide Transcript"
      : null,
    transcriptText: data?.videoTranscript?.videoTranscript || null,
  }
}

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

export default formatVideo
