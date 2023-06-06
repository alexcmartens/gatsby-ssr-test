import { useState, useEffect } from "react"

const maxRetryCount = 300
const oneTrustConsentCookieName = "OptanonAlertBoxClosed" // this is the name of the cookie that is added by OneTrust when a user accepts/closes cookies

const useCheckOneTrust = cookiesApi => {
  const [hasAcceptedOneTrust, setHasAcceptedOneTrust] = useState(false)

  let VidyardEmbed
  useEffect(() => {
    // importing vidyard embed the normal way (import VidyardEmbed from '@vidyard/embed-code') doesn't work because VidyardEmbed has references to window/document and causes the build to fail. This is a work around.
    VidyardEmbed = require("@vidyard/embed-code")
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const handleWindowLoad = event => {
        window?.OneTrust?.OnConsentChanged(() => {
          console.log("Event: OnConsentChanged")
          document.querySelectorAll(".skip-to-content")?.[0]?.blur()
        })
      }

      window.addEventListener("load", handleWindowLoad)
      return () => {
        window.removeEventListener("load", handleWindowLoad)
      }
    }
  }, [])

  useEffect(() => {
    const checkOneTrust = retryCount => {
      if (typeof window === "undefined") {
        return
      }
      let checkTimer = null

      const hasAcceptedOneTrust = cookiesApi?.get(oneTrustConsentCookieName)
      if (hasAcceptedOneTrust) {
        setHasAcceptedOneTrust(true)
        VidyardEmbed?.api?.GDPR?.consent(true)
      } else if (retryCount <= maxRetryCount) {
        checkTimer = setTimeout(() => {
          checkOneTrust(retryCount + 1)
        }, 1000)
      }

      return () => {
        if (typeof window !== "undefined" && checkTimer) {
          return clearTimeout(checkTimer)
        }
      }
    }
    checkOneTrust(0)
  }, [cookiesApi])

  return { hasAcceptedOneTrust }
}

export default useCheckOneTrust
