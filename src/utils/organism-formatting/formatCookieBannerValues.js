export const formatCookieBannerValues = appData => {
  let cookieBannerText = null,
    cookieBannerAcceptButtonText = null,
    cookieBannerSettingsButtonText = null
  if (appData && typeof appData === "object") {
    appData?.forEach(element => {
      if (element?.key === "Cookie Banner Text") {
        cookieBannerText = element?.value
      } else if (element?.key === "Cookie Banner Accept Button Text") {
        cookieBannerAcceptButtonText = element?.value
      } else if (element?.key === "Cookie Banner Settings Button Text") {
        cookieBannerSettingsButtonText = element?.value
      }
    })
  }

  return {
    cookieBannerText,
    cookieBannerAcceptButtonText,
    cookieBannerSettingsButtonText,
  }
}
