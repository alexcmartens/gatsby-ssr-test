import { useState, useEffect, useContext } from "react"
import Logo from "../../images/trimble-logo.png"
import { formatLink } from "../functions"
import formatIcons from "../organism-formatting/formatIcons"
import ColorSchemeConnector from "../../components/ColorSchemeConnector/ColorSchemeConnector"
import { formatSiteConfigurationValues } from "../organism-formatting/formatSiteConfigurationValues"
import { LayoutContext } from "../../components/Layout/Layout"

import { createProductTrialPageLink } from "../../components/CTAButtons/CTAButtonsConnector"

const config =
  process.env.GATSBY_CONFIG_OVERRIDE &&
  JSON.parse(process.env.GATSBY_CONFIG_OVERRIDE)

const useNavigationData = (
  rawNavigationData,
  applicationData,
  locale,
  languageSettings,
  region,
  products,
  auth,
  siteIdentifier
) => {
  const [navigationData, setNavigationData] = useState(null)
  const loginPage = rawNavigationData?.loginRedirect
  const logout = rawNavigationData?.logout
  const userProfile = rawNavigationData?.userProfile
  const isAuthenticated = rawNavigationData?.isAuthenticated
  const disableMenus = rawNavigationData?.disableMenus
  const displayIcons = rawNavigationData?.displayIcons
  const waffleMenuLinks = rawNavigationData?.waffleMenuLinks
  const waffleMenuCta = rawNavigationData?.waffleMenuCta
  const isPublicPage = config?.makeAllPagesPublic
    ? true
    : rawNavigationData?.isPublicPage
  const topNavColor =
    config?.enableLogin &&
    isPublicPage &&
    !isAuthenticated &&
    config?.topNavThemeLoggedOut
      ? config?.topNavThemeLoggedOut
      : rawNavigationData?.topNavTheme
  const subNavTheme = ColorSchemeConnector(rawNavigationData?.subNavTheme).theme
  const menuBarTheme = ColorSchemeConnector(
    rawNavigationData?.menuBarTheme
  ).theme
  const topNavTheme = ColorSchemeConnector(topNavColor).theme
  const currentLocale =
    locale?.toLowerCase() === "en-us"
      ? "en"
      : locale?.toLowerCase()
      ? locale.toLowerCase()
      : "en"
  const siteConfigValues = formatSiteConfigurationValues(
    applicationData?.siteConfigurationValues
  )
  const { homepageSlug } = useContext(LayoutContext)

  useEffect(() => {
    const formatData = () => {
      const navCTA = {
        link: {
          url: formatLink(
            rawNavigationData?.utilityNavLink?.url,
            currentLocale,
            null,
            homepageSlug
          ),
          text: rawNavigationData?.utilityNavLink?.text,
        },
        className: "ter-button--primary--1",
      }

      //Utility Nav items
      const logo = {
        url:
          topNavColor === "Trimble Blue"
            ? rawNavigationData?.lightAltLogo?.image?.file?.url
            : rawNavigationData?.trimbleLogo?.brandfolderAsset?.[0]?.url ||
              rawNavigationData?.trimbleLogo?.image?.file?.url ||
              Logo,
        altText: rawNavigationData?.trimbleLogo?.altText || "Trimble Logo",

        link: {
          url: `/${currentLocale}`,
        },
      }

      const waffleMenu = {
        links: waffleMenuLinks,
        cta: {
          title: waffleMenuCta?.title,
          url: waffleMenuCta?.reference?.slug
            ? formatLink(
                `/${waffleMenuCta?.reference?.slug}`,
                currentLocale,
                null,
                homepageSlug
              )
            : null,
        },
      }

      const isExpanded = rawNavigationData?.isExpanded
      const displaySectorName = rawNavigationData?.displaySectorName
      const isSector = rawNavigationData?.isSector

      const divisionName = displaySectorName
        ? rawNavigationData?.sectorName || siteConfigValues?.divisionName
        : ""

      const checkProductsRegion = product => {
        if (!region) {
          return true
        }
        if (region?.machineName?.toLowerCase() === "global") {
          return true
        }

        const findProduct = products?.find(prod => {
          return prod?.sku === product?.productTemplate.productSku
        })
        if (findProduct) {
          const checkForRegion = findRegion(findProduct?.regions)

          if (checkForRegion) {
            return true
          }
        } else {
          const checkForRegionInFallback = findRegion(
            product?.productTemplate?.additionalProductInformation?.regions
          )

          if (checkForRegionInFallback) {
            return true
          }
        }
        return false
      }

      const findRegion = regions => {
        return regions?.find(reg => {
          return (
            reg.machineName.toLowerCase() === region?.machineName?.toLowerCase()
          )
        })
      }

      const rightLinks = rawNavigationData?.topNavigationLinks
        ? [...rawNavigationData?.topNavigationLinks]
            .map(item =>
              item?.__typename === "ContentfulExternalLink"
                ? {
                    ...item,
                    url: item?.url,
                    text: item?.text,
                    type: "link",
                    external: true,
                    contentfulId: item?.id,
                  }
                : item?.__typename === "ContentfulPageBase"
                ? {
                    ...item,
                    url: formatLink(
                      `/${item?.slug}`,
                      currentLocale,
                      null,
                      homepageSlug
                    ),
                    text: item?.pageName,
                    type: "link",
                    isPublicPage: item?.isPublicPage,
                    contentfulId: item?.id,
                  }
                : item?.__typename === "ContentfulProductPage" &&
                  checkProductsRegion(item)
                ? {
                    ...item,
                    url: formatLink(
                      `/${item?.url}`,
                      currentLocale,
                      item?.__typename,
                      homepageSlug
                    ),
                    text: item?.pageName,
                    type: "link",
                    contentfulId: item?.id,
                  }
                : item?.__typename === "ContentfulProductTrialPage"
                ? createProductTrialPageLink(
                    products,
                    item?.product?.sys?.urn,
                    locale,
                    item,
                    siteIdentifier
                  )
                : {}
            )
            ?.filter(item => {
              return item !== undefined
            })
        : null
      const disableSearch = rawNavigationData?.disableSearch
      const disableLanguageRegion = rawNavigationData?.disableLanguageRegion

      const disableSectorFlyOut = rawNavigationData?.disableSectorFlyOut
      const disableLogin = config?.enableLogin
        ? false
        : rawNavigationData?.disableLogin
        ? true
        : true

      const featuredLink =
        rawNavigationData?.featuredLink &&
        rawNavigationData?.featuredLink?.__typename ===
          "ContentfulProductPage" &&
        checkProductsRegion(rawNavigationData?.featuredLink)
          ? {
              url:
                rawNavigationData?.featuredLink?.url ||
                formatLink(
                  `/${rawNavigationData?.featuredLink?.slug}`,
                  currentLocale,
                  rawNavigationData?.featuredLink?.__typename,
                  homepageSlug
                ),
              text:
                rawNavigationData?.featuredLinkText ||
                rawNavigationData?.featuredLink?.text ||
                rawNavigationData?.featuredLink?.pageName,
              type: "link",
              isPublicPage: rawNavigationData?.featuredLink?.isPublicPage,
            }
          : rawNavigationData?.featuredLink &&
            rawNavigationData?.featuredLink?.__typename !==
              "ContentfulProductPage"
          ? {
              url:
                rawNavigationData?.featuredLink?.url ||
                formatLink(
                  `/${rawNavigationData?.featuredLink?.slug}`,
                  currentLocale,
                  rawNavigationData?.featuredLink?.__typename,
                  homepageSlug,
                  products,
                  locale,
                  rawNavigationData?.featuredLink?.product?.sys?.urn
                ),
              text:
                rawNavigationData?.featuredLinkText ||
                rawNavigationData?.featuredLink?.text ||
                rawNavigationData?.featuredLink?.pageName,
              type: "link",
              isPublicPage: rawNavigationData?.featuredLink?.isPublicPage,
            }
          : null

      const navOptions = rawNavigationData?.navigationItems
        ?.filter(topItem => {
          return (
            topItem?.__typename === "ContentfulExternalLink" ||
            topItem?.__typename === "ContentfulLink" ||
            topItem?.__typename === "ContentfulPageBase" ||
            topItem?.__typename === "ContentfulProductPage" ||
            topItem?.__typename === "ContentfulNavigationCategory" ||
            topItem?.__typename === "ContentfulProductTrialPage"
          )
        })
        ?.map((topItem, i) => {
          if (topItem?.__typename === "ContentfulProductTrialPage") {
            return createProductTrialPageLink(
              products,
              topItem?.product?.sys?.urn,
              locale,
              null
            )
          }
          if (topItem.__typename === "ContentfulExternalLink") {
            return {
              url: topItem?.url,
              text: topItem?.text,
              contentfulId: topItem?.id,
              type: "link",
              external: true,
              icon: formatIcons(topItem?.icon?.icon),
            }
          } else if (topItem.__typename === "ContentfulPageBase") {
            return {
              url: formatLink(
                `/${topItem?.slug}`,
                currentLocale,
                null,
                homepageSlug
              ),
              text: topItem?.pageName,
              contentfulId: topItem?.id,
              type: "link",
              icon: formatIcons(topItem?.icon?.icon),
              isPublicPage: rawNavigationData?.topItem?.isPublicPage,
            }
          } else if (topItem.__typename === "ContentfulLink") {
            return {
              url:
                config?.linkOverrides && config?.linkOverrides[topItem.text]
                  ? config?.linkOverrides[topItem.text].link
                  : topItem?.internalLink
                  ? formatLink(
                      `/${topItem?.internalLink}`,
                      currentLocale,
                      null,
                      homepageSlug,
                      products,
                      locale,
                      topItem?.link?.product?.sys?.urn
                    )
                  : formatLink(
                      `/${topItem?.link?.url}`,
                      currentLocale,
                      null,
                      homepageSlug,
                      products,
                      locale,
                      topItem?.link?.product?.sys?.urn
                    ),
              text: topItem?.text,
              type: "link",
              contentfulId: topItem?.id,
              icon: formatIcons(topItem?.icon?.icon),
              internalLink:
                config?.linkOverrides && config?.linkOverrides[topItem.text]
                  ? config?.linkOverrides[topItem.text].internal
                  : false,
            }
          } else if (
            topItem?.__typename === "ContentfulProductPage" &&
            checkProductsRegion(topItem)
          ) {
            return {
              url: formatLink(
                `/${topItem?.url}`,
                currentLocale,
                topItem?.__typename
              ),
              text: topItem?.text,
              contentfulId: topItem?.id,
            }
          } else if (
            topItem?.__typename === "ContentfulProductPage" &&
            !checkProductsRegion(topItem)
          ) {
            return { url: "" }
          } else {
            return {
              icon: formatIcons(topItem?.icon?.icon),
              text: topItem?.title,
              type: topItem?.type,
              contentfulId: topItem?.id,

              featuredLinksTitle:
                topItem?.featuredLinks?.length ||
                topItem?.featuredLinksToProductTrialPages
                  ? topItem.featuredLinksSectionTitle
                  : null,
              featuredLinks:
                topItem?.featuredLinks
                  ?.filter(midItem => {
                    return (
                      midItem?.__typename === "ContentfulExternalLink" ||
                      midItem?.__typename === "ContentfulPageBase" ||
                      midItem?.__typename === "ContentfulProductTrialPage"
                    )
                  })
                  ?.map(midItem =>
                    midItem?.__typename === "ContentfulExternalLink"
                      ? {
                          url: midItem?.url,
                          text: midItem?.text,
                          type: "link",
                          external: true,
                          contentfulId: midItem?.id,
                        }
                      : midItem?.__typename === "ContentfulPageBase"
                      ? {
                          url: formatLink(
                            `/${midItem?.slug}`,
                            currentLocale,
                            null,
                            homepageSlug
                          ),
                          text: midItem?.pageName,
                          type: "link",
                          contentfulId: midItem?.id,
                          isPublicPage:
                            rawNavigationData?.midItem?.isPublicPage,
                        }
                      : midItem?.__typename === "ContentfulProductTrialPage"
                      ? createProductTrialPageLink(
                          products,
                          midItem?.product?.sys?.urn,
                          locale,
                          null
                        )
                      : {}
                  ) || [],
              links: topItem?.navigationItems
                ?.filter(midItem => {
                  return (
                    midItem?.__typename === "ContentfulExternalLink" ||
                    midItem?.__typename === "ContentfulPageBase" ||
                    midItem?.__typename === "ContentfulNavigationSubcategory" ||
                    midItem?.__typename === "ContentfulProductTrialPage"
                  )
                })
                ?.map(midItem => {
                  if (midItem?.__typename === "ContentfulExternalLink") {
                    return {
                      url: midItem?.url,
                      text: midItem?.text,
                      contentfulId: midItem?.id,
                      type: "link",
                      external: true,
                    }
                  } else if (midItem.__typename === "ContentfulPageBase") {
                    return {
                      url: formatLink(
                        `/${midItem?.slug}`,
                        currentLocale,
                        null,
                        homepageSlug
                      ),
                      text: midItem?.pageName,
                      type: "link",
                      contentfulId: midItem?.id,
                      isPublicPage: midItem?.isPublicPage,
                    }
                  } else {
                    if (midItem?.__typename === "ContentfulProductTrialPage") {
                      return createProductTrialPageLink(
                        products,
                        midItem?.product?.sys?.urn,
                        locale,
                        null
                      )
                    }
                    return {
                      text: midItem?.title,
                      contentfulId: midItem?.id,
                      links: midItem?.navigationItems
                        ?.filter(
                          item =>
                            item?.__typename === "ContentfulExternalLink" ||
                            item?.__typename ===
                              "ContentfulNavigationTertiaryCategory" ||
                            item?.__typename === "ContentfulImage" ||
                            item?.__typename === "ContentfulPageBase" ||
                            item?.__typename === "ContentfulProductPage" ||
                            item?.__typename === "ContentfulProductTrialPage"
                        )
                        ?.map(lastItem => {
                          if (lastItem?.__typename === "ContentfulImage") {
                            return {
                              text: lastItem?.title,
                              url: formatLink(
                                lastItem?.link?.url,
                                currentLocale,
                                null,
                                homepageSlug
                              ),
                              type: "link",
                              contentfulId: lastItem?.id,
                              description: lastItem?.link?.description || "",
                              imageUrl: lastItem?.image?.file?.url,
                            }
                          } else if (
                            lastItem?.__typename === "ContentfulExternalLink"
                          ) {
                            return {
                              text: lastItem?.text,
                              contentfulId: lastItem?.id,
                              url: lastItem?.url,
                              type: "link",
                              external: true,
                            }
                          } else if (
                            lastItem.__typename === "ContentfulPageBase"
                          ) {
                            return {
                              url: formatLink(
                                `/${lastItem?.slug}`,
                                currentLocale,
                                null,
                                homepageSlug
                              ),
                              text: lastItem?.pageName,
                              type: "link",
                              contentfulId: lastItem?.id,
                              isPublicPage: lastItem?.isPublicPage,
                            }
                          } else if (
                            lastItem.__typename === "ContentfulProductPage"
                          ) {
                            return {
                              url: formatLink(
                                `/${lastItem?.slug}`,
                                currentLocale,
                                lastItem.__typename,
                                null,
                                homepageSlug
                              ),
                              text: lastItem?.pageName,
                              type: "link",
                              isPublicPage: lastItem?.isPublicPage,
                              contentfulId: lastItem?.id,
                            }
                          } else {
                            if (
                              lastItem?.__typename ===
                              "ContentfulProductTrialPage"
                            ) {
                              return createProductTrialPageLink(
                                products,
                                lastItem?.product?.sys?.urn,
                                locale,
                                null
                              )
                            }
                            return {
                              text: lastItem?.title,
                              contentfulId: lastItem?.id,
                              links: lastItem?.navigationItems
                                ?.filter(
                                  item =>
                                    item?.__typename ===
                                      "ContentfulExternalLink" ||
                                    item?.__typename === "ContentfulPageBase" ||
                                    item?.__typename ===
                                      "ContentfulProductTrialPage"
                                )
                                ?.map(item =>
                                  item?.__typename === "ContentfulExternalLink"
                                    ? {
                                        text: item?.text,
                                        url: item?.url,
                                        type: "link",
                                        contentfulId: item?.id,
                                        description: item?.description,
                                        imageUrl: item?.image?.image?.file?.url,
                                      }
                                    : item?.__typename === "ContentfulPageBase"
                                    ? {
                                        url: formatLink(
                                          `/${item?.slug}`,
                                          currentLocale,
                                          null,
                                          homepageSlug
                                        ),
                                        text: item?.pageName,
                                        type: "link",
                                        contentfulId: item?.id,
                                        isPublicPage: item.isPublicPage,
                                      }
                                    : item?.__typename ===
                                      "ContentfulProductTrialPage"
                                    ? createProductTrialPageLink(
                                        products,
                                        item?.product?.sys?.urn,
                                        locale,
                                        null
                                      )
                                    : {}
                                ),
                            }
                          }
                        }),
                    }
                  }
                }),
            }
          }
        })

      const setRegions = rawNavigationData?.languageSelector?.regions?.map(
        region => {
          return region?.name
        }
      )

      //Language Selector Data
      const languageSelectorData = {
        //TODO: get labels from site application labels endpoint of Contentful
        labels: {
          region: "REGION",
          language: "LANGUAGE",
          buttons: {
            ok: "OK",
            cancel: "Cancel",
          },
        },
        settings: languageSettings,
        regions: setRegions,
        languages: rawNavigationData?.languageSelector?.languages,
      }

      const authLabels = {
        login: applicationData?.loginLabel,
        logout: applicationData?.logoutLabel,
        welcome: applicationData?.welcomeLabel,
        myAccount: applicationData?.myAccountLabel,
        myDashboardLabel: applicationData?.myDashboardLabel,
      }
      setNavigationData({
        featuredLink,
        navOptions,
        divisionName,
        rightLinks,
        navCTA,
        logo,
        isExpanded,
        disableSearch,
        disableLanguageRegion,
        disableSectorFlyOut,
        disableLogin,
        languageSelectorData,
        loginPage,
        logout,
        userProfile,
        isAuthenticated,
        disableMenus,
        displayIcons,
        displaySectorName,
        menuBarTheme,
        subNavTheme,
        topNavTheme,
        authLabels,
        waffleMenu,
        isSector,
      })
    }

    if (rawNavigationData && applicationData && currentLocale) {
      formatData()
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [
    languageSettings,
    rawNavigationData,
    applicationData,
    currentLocale,
    region,
    products,
    auth,
  ])
  return { navigationData }
}

export default useNavigationData
