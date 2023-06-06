import { useCallback, useState, useEffect } from "react"
import useMutationObserver from "./useMutationObserver"
import { loadLocaleFont } from "../../utils/functions"

const options = { attributes: true }

const useLocale = (locale, navigationData, footerData) => {
  const localeCode = locale?.split("-")?.[0]
  const [language, setLanguage] = useState(localeCode || "en")
  const [browserLanguage, setBroswerLanguage] = useState()

  //Callback for the mutation observer ...
  //... that checks the mutation list for language attribute changes
  const mutationCallback = useCallback(
    mutationList => {
      mutationList.forEach(mutation => {
        if (mutation.type !== "attributes" || mutation.attributeName !== "lang")
          return

        if (typeof window !== undefined) {
          setBroswerLanguage(document.documentElement.lang)
          !locale && setLanguage(document.documentElement.lang)
        }
      })
    },
    [locale]
  )

  useMutationObserver("html", options, mutationCallback)

  useEffect(() => {
    //load appropriate fonts for languages that use non-latin characters
    loadLocaleFont(locale)
  }, [browserLanguage, locale, navigationData, footerData])

  return { language, setLanguage }
}

export default useLocale
