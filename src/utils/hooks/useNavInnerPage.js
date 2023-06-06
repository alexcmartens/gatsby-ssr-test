import { useEffect } from "react"

const useNavInnerPage = (sections, title, setInnerPageNavDataCallback) => {
  useEffect(() => {
    // set inner-page nav data
    const allLinks = sections
      ?.map(section => {
        return {
          text: section?.anchor,
          url: section?.anchor
            ?.replace(/ /g, "-")
            ?.replace(/#/g, "-")
            ?.replace(/--/g, "-")
            ?.toLowerCase(),
        }
      })
      // filter out null/undefined values
      .filter(section => {
        return section.text
      })

    let lessLinks = []
    if (allLinks?.length > 7) {
      // max of 6 innerPageNav items allowed - will use the first 6 given
      for (let i = 0; i < 6; i++) {
        lessLinks.push(allLinks[i])
      }
    }

    const links = lessLinks?.length ? lessLinks : allLinks

    setInnerPageNavDataCallback({ pageTitle: title, links })
  }, [sections, title, setInnerPageNavDataCallback])
}

export default useNavInnerPage
