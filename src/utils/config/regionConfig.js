export const formatRegions = regionList => {
  const formattedRegions = []
  for (let i in regionList) {
    for (let x in regionList[i]?.isoCodes) {
      const formattedIsoCodes = {}
      formattedIsoCodes["isoCode"] = regionList[i]?.isoCodes[x]
      formattedIsoCodes["name"] = regionList[i].name
      formattedIsoCodes["machineName"] = regionList[i].machineName
      formattedIsoCodes["subsites"] = regionList[i].subsites
      formattedRegions.push(formattedIsoCodes)

    }
  }
  return formattedRegions
}
