import React from "react"
import renderPaddingOrFullBleed from "../../utils/organism-formatting/renderPaddingOrFullBleed"
import { FocusedImage, Image } from "terra-one"

const ImageConnector = ({ data, nested, ignoreFocalPoint }) => {
  return data?.sys?.contentType?.sys?.id === "image" || ignoreFocalPoint === true ? (
    data?.fields?.image?.fields?.file?.url ? (
        renderPaddingOrFullBleed(
          <Image className="imageSection" src={data?.fields?.image?.fields?.file?.url} alt={data?.fields?.altText || data?.fields?.title} />,
          false,
          true,
          true,
          nested
        )
      )
    : null
  ) : data?.sys?.contentType?.sys?.id === "imageWithFocalPoint" ?
      <FocusedImage
        imageSizes={{
          desktop: {
            height: data?.fields?.image?.fields?.file?.details?.image?.height || null,
            width: data?.fields?.image?.fields?.file?.details?.image?.width || null,
            ratio: {
              height: data?.fields?.focalPoint?.focalPoint?.y || null,
              width: data?.fields?.focalPoint?.focalPoint?.x || null,
            },
          },
        }}
        focalPointImage={data?.fields?.image?.fields?.file}
        alt={data?.fields?.alt ? data?.fields?.alt : data?.fields?.title}
      />
    : null;
}

export default ImageConnector
