import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { navigate } from "gatsby"
import { formatRegions } from "../config/regionConfig"
import { isEmpty } from "lodash"

const useLanguage = (
  location,
  region,
  regionList,
  languages,
  pageType = null
) => {
  const [languageSettings, setLanguageSettings] = useState(null)

  useEffect(() => {
    if (pageType) {
      return
    }
    if (typeof window !== "undefined") {
      const findLocaleInUrl =
        window?.location?.pathname?.split("/")?.length &&
        window?.location?.pathname?.split("/")?.length >= 1
          ? window?.location?.pathname?.split("/")[1]
          : ""

      if (
        languageSettings &&
        findLocaleInUrl !== languageSettings?.language?.code
      ) {
        let url = window?.location?.pathname
        let result = url.replace(
          findLocaleInUrl,
          languageSettings?.language?.code
        )
        navigate(result)
      }
    }
  }, [languageSettings, pageType])

  const saveLanguageSettings = newLanguage => {
    if (newLanguage) {
      if (!newLanguage.machineName && formatRegions.length) {
        const y = formatRegions(regionList)?.find(reg => {
          return reg.name.toLowerCase() === newLanguage.region.toLowerCase()
        })
        if (y) {
          newLanguage["machineName"] = y.machineName
        }
      }
      Cookies.set("languageSettings", JSON.stringify(newLanguage))

      let path = ""
      if (location?.pathname) {
        const slashIndex = location?.pathname?.indexOf("/", 1)
        path = slashIndex !== -1 ? location?.pathname?.slice(slashIndex) : ""
      }

      navigate(`/${newLanguage?.language?.code}${path}`, { replace: true })
    }
  }

  useEffect(() => {
    const getBrowserLanguage = () => {
      if (typeof navigator !== "undefined") {
        // if no browser langauge is supplied, we default to english
        let browserLang = navigator?.language
        if (!browserLang) {
          return {
            nativeField: "English",
            translatableName: "",
            code: "en",
          }
        } else {
          // if user has a browser language preference, we check if that language exists in our list of available languages.
          const isLangInList = languages?.find(lang => {
            return browserLang.includes(lang?.code)
          })
          // if the language does not exist, we default to english
          if (!isEmpty(isLangInList)) {
            return isLangInList
          } else {
            return {
              nativeField: "English",
              translatableName: "",
              code: "en",
            }
          }
        }
      }
    }    
    const detectLanguage = () => {
      let cookiesLanguage = Cookies.get("languageSettings")
      if (cookiesLanguage) {
        cookiesLanguage = JSON.parse(cookiesLanguage)
        if (region && cookiesLanguage?.region !== region?.region) {
          setLanguageSettings({
            region: region?.region
              ? region.region
              : region?.name
              ? region.name
              : "",
            machineName: region?.machineName,
            language: {
              nativeField: cookiesLanguage?.language?.nativeField,
              translatableName: cookiesLanguage?.language?.translatableName,
              code: cookiesLanguage?.language?.code,
            },
          })
          Cookies.set("languageSettings", JSON.stringify({
            region: region?.region
              ? region.region
              : region?.name
              ? region.name
              : "",
            machineName: region?.machineName,
            language: {
              nativeField: cookiesLanguage?.language?.nativeField,
              translatableName: cookiesLanguage?.language?.translatableName,
              code: cookiesLanguage?.language?.code,
            },
          }))
        } else {
          Cookies.set("languageSettings", JSON.stringify(cookiesLanguage))
          setLanguageSettings(cookiesLanguage)
        }
      } else if (region) {
        const updateLanguageAndRegion = {
          region: region?.name
            ? region?.name
            : region?.region
            ? region.region
            : "",
          machineName: region?.machineName,
          language: getBrowserLanguage(),
        }
        Cookies.set("languageSettings", JSON.stringify(updateLanguageAndRegion))
        setLanguageSettings(updateLanguageAndRegion)
      }
    }

    detectLanguage()
  }, [region, languages])

  return { languageSettings, saveLanguageSettings }
}

export default useLanguage
