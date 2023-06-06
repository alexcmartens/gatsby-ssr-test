import { useEffect, useState } from "react"
import { Link } from "gatsby"
import formatPageLinks from "../organism-formatting/formatPageLinks"
import { createProductTrialPageLink } from "../../components/CTAButtons/CTAButtonsConnector"

const useFooterData = (
  rawData,
  locale = "en",
  homepageSlug,
  products,
  siteIdentifier
) => {
  const [footerData, setFooterData] = useState(null)
  const currentLocale = locale?.toLowerCase()

  useEffect(() => {
    const formatFooterData = () => {
      const calloutLinks = rawData?.sectorCalloutLinks?.map(link => {
        const linkType = link?.link?.url?.contentType
          ? link?.link?.url?.contentType
          : link?.link?.url?.internal?.type
          ? link?.link?.url?.internal?.type
          : ""
        const formattedLink = formatPageLinks(
          link?.link,
          locale,
          linkType,
          homepageSlug,
          null
        )?.url

        const formatLinkForTrialPage = createProductTrialPageLink(
          products,
          link?.link?.url?.product?.sys?.urn,
          locale,
          null,
          siteIdentifier
        )

        if (!formattedLink && !formatLinkForTrialPage) {
          return ""
        } else {
          return {
            url: formattedLink ? formattedLink : formatLinkForTrialPage?.url,
            title:
              !formattedLink && !formatLinkForTrialPage ? null : link.title,
            subTitle:
              !formattedLink && !formatLinkForTrialPage ? null : link.subTitle,
            icon:
              !formattedLink && !formatLinkForTrialPage
                ? null
                : link.icon?.file?.url,
          }
        }
      })

      // filter out indices that are empty strings
      const filteredCallouts = calloutLinks?.filter(callout => {
        return callout !== ""
      })


      const formatMenuLinks = (menuLinks = [], locale = "en", homepageSlug) => {
        if (!menuLinks || !menuLinks.length) {
          return []
        }

        return menuLinks.map(link => {
          const linkType = link?.url?.contentType
            ? link?.url?.contentType
            : link?.url?.internal?.type
            ? link?.url?.internal?.type
            : null
          return formatPageLinks(link, locale, linkType, homepageSlug, null, products)
        })
      }

      const formatProductMenuLinks = (trialMenuLinks, locale, text) => {
        if (!trialMenuLinks || !trialMenuLinks.length) {
          return []
        }
        return trialMenuLinks?.map(menuItem => {
          return createProductTrialPageLink(
            products,
            menuItem?.sys?.urn,
            locale,
            { text: text },
            siteIdentifier
          )
        })
      }

      const sectorFooterLinks = rawData?.sectorFooterMenus?.map(menu => {
        return {
          title: menu?.title,
          menuLinks: [
            ...formatMenuLinks(
              menu?.menuLinks,
              locale,
              homepageSlug,
              menu?.menuLinksToProductTrialPage
            ),
            ...formatProductMenuLinks(
              menu?.menuLinksToProductTrialPage,
              locale,
              menu?.textForProductTrialLink
            ),
          ],
          Link,
        }
      })

      const socialLinksTitle = rawData?.socialLinksTitle

      const socialLinks =
        rawData?.socialLinks?.map(site => {
          return {
            icon: {
              altText: `${site?.siteName} logo`,
              url: site?.icon?.file?.url,
            },
            link: { url: site?.url },
            siteName: site?.siteName,
          }
        }) || []

      const globalFooterText = rawData?.text?.text

      const legalStuff = rawData?.legalStuff?.map(item => {
        const linkType = item?.url?.contentType
          ? item?.url?.contentType
          : item?.url?.internal?.type
          ? item?.url?.internal?.type
          : null
        return formatPageLinks(item, locale, linkType, homepageSlug, null, products)
      })

      // append all footer links to use corporate URL
      const legalFooterLinks = rawData?.legalStuff
      legalFooterLinks?.forEach(link => {
        if (!link?.url?.url.includes("https://", "trimble.com")) {
          const newLink =
            "https://www.trimble.com/" + currentLocale + "/" + link?.url?.url
          link.url.url = newLink
        }
      })

      const logo = {
        url: rawData?.mainLogo?.brandfolderAsset
          ? rawData?.mainLogo?.brandfolderAsset[0]?.url
          : rawData?.mainLogo?.image?.file?.url
          ? rawData?.mainLogo?.image?.file?.url
          : null,
        alt: rawData?.mainLogo?.altText,
      }

      setFooterData({
        calloutLinks: filteredCallouts,
        sectorFooterLinks,
        socialTitle: socialLinksTitle,
        socialLinks,
        logo,
        globalFooterText,
        legalStuff,
      })
    }

    if (rawData && currentLocale) {
      formatFooterData()
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [rawData, currentLocale])

  return { footerData }
}

export default useFooterData
