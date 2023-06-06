import { useEffect } from "react"
import Cookies from "js-cookie"

const useContentfulCookie = contentful_id => {
  useEffect(() => {
    const cookiesLanguage = Cookies.get("contentful_id")
    // this removes current cookie that is static. This needs to be unique for all visitors
    if (
      cookiesLanguage === "2HsYdcj6svKuGU7cnAH9zn" ||
      cookiesLanguage?.includes("2HsYdcj6svKuGU7cnAH9zn")
    ) {
      Cookies.remove("contentful_id")
    } else if (cookiesLanguage && cookiesLanguage?.length >= 34) {
      const shortenString = cookiesLanguage.slice(0, 33)
      Cookies.remove("contentful_id")
      Cookies.set("contentful_id", shortenString)
    }

    // sets new cookie that will be unique.
    if (!cookiesLanguage) {
      Cookies.set("contentful_id", contentful_id, {
        // expiration is in days - 1521 days is 50 months
        expires: 1521,
        domain: "trimble.com",
      })
    }
  }, [])
}

export default useContentfulCookie

