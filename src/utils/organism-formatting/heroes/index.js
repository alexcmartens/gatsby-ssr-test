// TODO - most of these heroes can probably go. I think right now the only new and approved "heroes" are SuperHero and Hero6

import React, { Suspense, lazy } from "react"


import FormatAndRenderSuperHero from "./FormatAndRenderSuperHero"

export const Heroes = props => {
  const {
    content,
    contentSections,
    i,
    location,
    errorPage,
    productPage,
    videoProgress,
    setVideoProgress,
    currentSpaceId,
    products,
    locale,
    siteIdentifier
  } = props
  const heroes = {
    ContentfulSuperHero: (
      <Suspense
        fallback={<div>Loading...</div>}
        key={`format-and-render-super-hero-${i}`}
      >
        <FormatAndRenderSuperHero
          data={content}
          contentSections={contentSections}
          i={i}
          location={location}
          errorPage={errorPage}
          productPage={productPage}
          setVideoProgress={setVideoProgress}
          videoProgress={videoProgress}
          currentSpaceId={currentSpaceId}
          products={products}
          locale={locale}
          siteIdentifier={siteIdentifier}
        />
      </Suspense>
    ),
  }
  if (content?.__typename && heroes[content.__typename]) {
    return heroes[content.__typename]
  } else return <div></div>
}
