export const formatSiteConfigurationValues = appData => {
  let siteConfigArray = {}
  if (appData && typeof appData === "object" && appData.length > 0) {
    appData?.forEach(element => {
      let varName = element?.key?.split(" ").join("")
      varName =
        varName?.split(" ").join("").charAt(0).toLowerCase() + varName.slice(1)
      siteConfigArray[[varName]] = element?.value
    })
  }

  return siteConfigArray
  // now that the array is assembled, you can query like normal using the name from Contentful, but in camelCase.
  // For 'Development Optimize Container ID': "siteConfigValues?.developmentOptimizeContainerID"
}
