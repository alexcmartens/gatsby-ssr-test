import { useEffect, useState } from "react"

const useErrorData = (rawErrorData, location) => {
  const pageData = rawErrorData?.allContentfulPageBase?.edges
  const footerData = rawErrorData?.allContentfulFooter?.edges
  const globalFooterData = rawErrorData?.allContentfulGlobalFooter?.edges
  const overlayNoticeData = rawErrorData?.allContentfulOverlayNotice?.edges
  const commonSearchesData = rawErrorData?.allContentfulCommonSearch?.edges

  const [errorPage, setErrorPage] = useState()
  const [rawErrorFooter, setRawErrorFooter] = useState()
  const [rawErrorGlobalFooter, setRawErrorGlobalFooter] = useState()
  const [overlayNotice, setOverlayNotice] = useState()
  const [commonSearches, setCommonSearches] = useState()

  const locale = location.pathname
    ? location.pathname.split("/")?.[1]?.substr(0, 5)
    : null

  const allOverlayNotices = overlayNoticeData?.map(({ node }) => {
    return {
      ...node,
    }
  })

  useEffect(() => {
    const localeIndex = pageData.findIndex(
      edge => edge.node.node_locale?.toLowerCase() === locale
    )

    const commonSearchArray = []
    commonSearchesData?.forEach(
      ({ node }) =>
        node.node_locale?.toLowerCase() === locale &&
        commonSearchArray.push(node)
    )

    //Fallback to en if invalid address goes deeper than the locale
    //TODO: When we store lang and region in state/context we won't need to rely on location.pathname and can make this more reliable
    const parsedIndex = localeIndex >= 0 ? localeIndex : 0
    setErrorPage(pageData[parsedIndex]?.node)
    setRawErrorFooter(footerData[parsedIndex]?.node)
    setRawErrorGlobalFooter(globalFooterData[parsedIndex]?.node)
    setOverlayNotice(allOverlayNotices)
    setCommonSearches(commonSearchArray)
  }, [locale, pageData, footerData, globalFooterData, commonSearchesData])

  return {
    sections: errorPage?.sections,
    title: errorPage?.title,
    node_locale: errorPage?.node_locale,
    rawErrorFooter,
    rawErrorGlobalFooter,
    overlayNotice,
    commonSearches,
  }
}

export default useErrorData
