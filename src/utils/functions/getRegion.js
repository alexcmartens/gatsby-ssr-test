import { formatRegions } from "../config/regionConfig"
import { useEffect, useState } from "react"

const useRegion = (location, regions) => {
  const [formattedRegion, setFormattedRegion] = useState(null)
  const getRegion = location => {
    if (location && formatRegions(regions)?.length && !location?.region) {
      const region = formatRegions(regions).find(region => {
        return region?.isoCode === location?.isoCode
      })
      if (region) {
        setFormattedRegion(region)
      } else {
        // set default region to Global if user's location is not part of region list
        setFormattedRegion({
          isoCode: "Global",
          name: "Global",
          region: "Global",
          machineName: "global",
        })
      }
    } else {
      setFormattedRegion(location)
    }
  }

  useEffect(() => {
    if (location) getRegion(location)
  }, [location])

  return formattedRegion
}

export default useRegion
