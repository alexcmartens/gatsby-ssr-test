import { useEffect, useState } from "react"

const useRegion = regions => {
  const [region, setRegion] = useState(null)

  useEffect(() => {
    // TODO - setup region detection

    const detectRegion = () => {
      setRegion("NA")
    }

    if (regions) {
      detectRegion()
    }
  }, [regions])

  const regionData = {
    region,
    regions,
    setRegion,
  }

  return { region, regionData }
}

export default useRegion
