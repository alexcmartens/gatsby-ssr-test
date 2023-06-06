import React from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import formatVideo from "../formatVideo"
import { VideoComponent } from "terra-one"

const FormatAndRenderVideo = ({ data, nested }) => {
  const videoData = formatVideo(data)

  const video = videoData?.video

  const thumbnail = videoData?.thumbnail?.focalPointImage?.url
    ? videoData?.thumbnail
    : null

  const videoContent = {
    transcript: videoData?.transcript,
    transcriptText: videoData?.transcriptText,
    closeTranscript: videoData?.closeTranscript,
    video,
    thumbnail,
    variant: "variant_7",
    videoProgress: data?.videoProgress,
    setVideoProgress: data?.setVideoProgress,
  }

  return renderPaddingOrFullBleed(
    <VideoComponent content={videoContent} />,
    data?.contentWidth,
    true,
    true,
    nested
  )
}

export default FormatAndRenderVideo
