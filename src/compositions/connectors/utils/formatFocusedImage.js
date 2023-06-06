const formatFocusedImage = (focalPointImage, altOverride = false) => {
  let focusedImage = null

  if (focalPointImage) {
    focusedImage = {
      wrapperHeight: focalPointImage?.fields?.wrapperHeight?.toString(),
      focalPointImage: {
        url: focalPointImage?.fields?.image?.fields?.file?.url,
        height:
          focalPointImage?.fields?.image?.fields?.file?.details?.image?.height,
        width:
          focalPointImage?.fields?.image?.fields?.file?.details?.image?.width,
        x: focalPointImage?.fields?.focalPoint?.focalPoint?.x,
        y: focalPointImage?.fields?.focalPoint?.fields?.focalPoint?.y,
        title: focalPointImage?.image?.fields?.title,
        disableImageCompression:
          focalPointImage?.fields?.disableImageCompression,
      },
      alt: altOverride
        ? altOverride
        : focalPointImage?.fields?.altText
        ? focalPointImage?.fields?.altText
        : focalPointImage?.fields?.title,
    }
  }

  return focusedImage
}

export default formatFocusedImage
