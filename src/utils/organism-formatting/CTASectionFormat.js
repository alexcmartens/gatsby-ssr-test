const CTASectionFormat = (
  ctaOne,
  ctaTwo,
  subCTA,
  Link,
  theme,
  VideoComponent,
  formatVideo
) => {
  let ctas = {}
  const ctaOneWithTheme = ctaOne
    ? addClassNameToCTAs(ctaOne, ctaTwo, theme)?.ctaOne
    : null
  const ctaTwoWithTheme = ctaTwo
    ? addClassNameToCTAs(ctaOne, ctaTwo, theme)?.ctaTwo
    : null

  if (ctaOneWithTheme && !ctaTwoWithTheme && !subCTA) {
    ctas = { ctaOne: ctaOneWithTheme, Link }
  } else if (ctaOneWithTheme && ctaTwoWithTheme && !subCTA) {
    ctas = { ctaOne: ctaOneWithTheme, ctaTwo: ctaTwoWithTheme, Link }
  } else if (ctaOneWithTheme && ctaTwoWithTheme && subCTA) {
    ctas = { ctaOne: ctaOneWithTheme, ctaTwo: ctaTwoWithTheme, subCTA, Link }
  } else {
    return null
  }

  if (ctaOne?.video) {
    ctaOne.video = formatVideo(ctaOne.video)
  }

  if (ctaTwo?.video) {
    ctaOne.video = formatVideo(ctaTwo.video)
  }
  if ((ctaOne?.video || ctaTwo?.video) && VideoComponent) {
    ctas["VideoComponent"] = VideoComponent
  }

  return ctas
}

export const addClassNameToCTAs = (ctaOne, ctaTwo, theme) => {
  if (ctaOne && !ctaOne.className) {
    ctaOne.className = theme?.ctaOne || "primary--1"
  }
  if (ctaTwo && !ctaTwo.className) {
    ctaTwo.className = theme?.ctaTwo || "primary--2"
  }
  return { ctaOne, ctaTwo }
}

export default CTASectionFormat
