import React from "react"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { ImageGallery } from "terra-one"
import PageSections from "../../../components/PageSections/PageSections"
import formatLottieAnimation from "../formatLottieAnimation"

const FormatAndRenderImageGallery = ({ data, productPage, products, siteIdentifier }) => {
  const gallerySideContent = <PageSections pageSections={[data?.sideContent]} products={products} siteIdentifier={siteIdentifier}/>
  const imageGalleryLottieStyles = {
    width: "100%",
    height: "100%",
    height: "650px",
  }
  const galleryImages = data?.images?.map(image => {
    if (image?.__typename === "ContentfulLottieAnimation") {
      return formatLottieAnimation(
        image?.srcLink || image?.json?.data,
        imageGalleryLottieStyles
      )
    } else {
      return {
        x: image?.focalPoint?.focalPoint?.x || null,
        y: image?.focalPoint?.focalPoint?.y || null,
        title: image?.title || null,
        url: image?.image?.file?.url,
      }
    }
  })

  const transformedData = {
    ...data,
    sideContent: gallerySideContent,
    images: galleryImages,
    reverseAlignment: productPage ? true : data?.horizontalAlignment,
  }

  return (
    <>
      {renderPaddingOrFullBleed(
        <ImageGallery
          content={transformedData}
          type={productPage ? "Split" : data?.variant}
        />
      )}
    </>
  )
}

export default FormatAndRenderImageGallery
