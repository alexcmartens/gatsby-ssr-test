import LogoReversed from "../../images/trimble-logo-reversed.png"
import { formatLink } from "../functions"

const config = process.env.GATSBY_CONFIG_OVERRIDE && JSON.parse(process.env.GATSBY_CONFIG_OVERRIDE)

export const formatFlyoutData = (
  flyoutData,
  rawNavigationData,
  currentLocale,
  isAuthenticated,
  auth,
  userData,
  logoutUser,
  path,
  query,
  homepageSlug
) => {

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

  return {
    logo: {
      url: flyoutData?.trimbleLogo?.brandfolderAsset?.[0]?.url || LogoReversed,
      altText: flyoutData?.trimbleLogo?.altText || "Trimble Logo",
      link: {
        url: `/${currentLocale}/`,
      },
    },
    signInBtnMethod:
      !rawNavigationData?.disableLogin && typeof window !== "undefined"
        ? () => window.open(`${query}${path}`, "_self")
        : () => {},
    signOutBtnMethod: !rawNavigationData?.disableLogin ? logoutUser : () => {},
    login: !rawNavigationData?.disableLogin ? true : false,
    authenticated: !rawNavigationData?.disableLogin && auth ? auth : false,
    TIDdata: !rawNavigationData?.disableLogin
      ? {
          image: { src: userData?.img, alt: `${userData?.lName}-image` },
          fName: userData?.fName,
          lName: userData?.lName,
        }
      : {},
    // TODO - the rest of the auth links coming soon
    authenticatedLinks: !rawNavigationData?.disableLogin
      ? [
          {
            url: "https://my.trimble.com/s/trimbleprofile",
            text: flyoutData?.profileLabel || "My Profile",
          },
          //   { url: "#", text: flyoutData?.myProductsLabel },
          //   { url: "#", text: flyoutData?.manageAccountsLabel },
          //   { url: "#", text: flyoutData?.supportLabel },
        ]
      : [],
    links:
      flyoutData?.links
        ?.filter(flyoutLink => {
          return (
            flyoutLink?.__typename === "ContentfulExternalLink" ||
            flyoutLink?.__typename === "ContentfulPageBase"
          )
        })
        ?.map(flyoutLink =>
          flyoutLink?.__typename === "ContentfulPageBase"
            ? {
                url: formatLink(
                  flyoutLink?.slug,
                  currentLocale,
                  null,
                  homepageSlug
                ),
                text: flyoutLink?.text || flyoutLink?.title,
                type: "link",
              }
            : flyoutLink?.__typename === "ContentfulExternalLink"
            ? {
                url: flyoutLink?.url,
                text: flyoutLink?.text || flyoutLink?.title,
                type: "link",
              }
            : {}
        ) || [],
    searchPlaceholder: flyoutData?.searchPlaceholder,
    disableSearch: flyoutData?.disableSearch,
    mobileLabel: flyoutData?.mobileLabel,
  }
}
