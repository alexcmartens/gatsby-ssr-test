import { useEffect, useState } from "react"
import { formatRegions } from "../config/regionConfig"
import axios from "axios"
import Cookies from "js-cookie"

const useLocation = regionList => {
  const formatedRegions = formatRegions(regionList)
  const [country, setCountry] = useState(null)
  const [regionFromURL, setRegionFromURL] = useState(null)
  const cookiesLanguage = Cookies.get("languageSettings")

  const fetchcountry = regionFromURL => {
    axios
      .get(`https://pro.ip-api.com/json/?key=${process.env.GATSBY_IP_API_KEY}`)
      .then(
        response => {
          if (response && response?.data) {
            if (!regionFromURL) {
              const getMachineName = formatedRegions.find(reg => {
                return (
                  reg.isoCode?.toLowerCase() ===
                  response?.data?.countryCode?.toLowerCase()
                )
              })
              if (getMachineName) {
                setCountry({
                  countryName: response?.data?.country,
                  isoCode: response?.data?.countryCode,
                  machineName: getMachineName?.machineName,
                })
              } else {
                setCountry({
                  countryName: "Global",
                  isoCode: "Global",
                  machineName: "global",
                })
              }
            }
          }
        },
        error => {
          console.log(error)
          // add this in case the user is using a browser like Brave that blocks IP lookups. Without this, on Brave browser the navbar does not render bc it is dependent on having a region.
          setCountry({
            countryName: "Global",
            isoCode: "Global",
            machineName: "global",
          })
        }
      )
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      })

      setRegionFromURL(params?.iso)

      if (cookiesLanguage && !regionFromURL) {
        setCountry({
          region: JSON.parse(cookiesLanguage)?.region,
          machineName: JSON.parse(cookiesLanguage)?.machineName,
        })
        return
      }

      if (regionFromURL && formatedRegions?.length) {
        const region = formatedRegions.find(region => {
          return region?.isoCode.toLowerCase() === regionFromURL.toLowerCase()
        })
        if (region) {
          setCountry(region)
        } else {
          // if query iso code is incorrect or does not exist, we will default to global region
          setCountry({
            countryName: "Global",
            isoCode: "Global",
            machineName: "global",
          })
        }
      } else if (!country && !regionFromURL) {
        fetchcountry(regionFromURL)
      }
    }
  }, [regionFromURL, cookiesLanguage, regionList])
  return { country }
}

export default useLocation
