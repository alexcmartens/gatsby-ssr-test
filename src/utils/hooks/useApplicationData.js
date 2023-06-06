import { useState, useEffect } from "react"

const useApplicationData = data => {
  const [applicationData, setApplicationData] = useState(null)
  const [languages, setLanguages] = useState(null)
  const [regions, setRegions] = useState(null)

  useEffect(() => {
    const formatData = () => {
      const languages = data?.languages?.map(language => {
        return {
          id: language?.contentfulid,
          name: language?.name,
        }
      })

      const regions = data?.regions

      const formattedApplicationData = { ...data }

      delete formattedApplicationData.regions
      delete formattedApplicationData.languages

      setLanguages(languages)
      setRegions(regions)
      setApplicationData(formattedApplicationData)
    }

    if (data) {
      formatData()
    }
  }, [data])

  return { languages, regions, applicationData }
}

export default useApplicationData
