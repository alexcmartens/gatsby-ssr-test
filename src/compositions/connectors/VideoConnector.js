import React from "react"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import formatVideo from "./utils/formatVideo"
import { VideoComponent } from "terra-one"

const VideoConnector = ({ data, nested }) => {
  const videoData = formatVideo(data)

  return renderPaddingOrFullBleed(
        <VideoComponent content={videoData} />,
        data?.fields?.contentWidth,
        true,
        true,
        nested
    )
}

export default VideoConnector
