import { formatFocusedImage } from "./formatBaseMolecules"
import { Link } from "gatsby"
import { formatRegions } from "../config/regionConfig"

const dotenv = require("dotenv")
dotenv.config()
const formatEcommerceCards = (
  data,
  locale = "en",
  region,
) => {
  if (data && Array.isArray(data)) {
    return data?.map(card => {
      const regions = formatRegions(card?.regions)
      let inRegion = false
      if (region && regions?.length) {
        if (region?.machineName === "global") {
          inRegion = true
        } else {
          const findCurrentRegion = regions.find(reg => {
            return (
              reg.machineName?.toLowerCase() ===
              region.machineName?.toLowerCase()
            )
          })
          if (findCurrentRegion) {
            inRegion = true
          }
        }
      }
      
      let productBuyInfo = {
        //PLACEHOLDER
        storeUrl: "agriculture-store.trimble.com",
        sku: card?.productInformation?.sku,
        // FIGURE OUT BETTER WAY TO FIND CURRENCY CODE FOR COUNTRY
        currencyCode: region?.currencyCode || "USD",
        languageCode: locale,
        loggedIn: true,
      }

      if (regions.length && !inRegion) {
        return
      }

      const pricesByRegion = card?.productInformation?.priceByRegion;
      const regionPrice = pricesByRegion?.filter((region) => {
        return region?.key === productBuyInfo?.currencyCode
      })[0]?.value;

      let cardProductPrice = card?.currentPrice || regionPrice ? {
        //  TODO - update pricing once finalized
        currentPrice: card?.currentPrice ? card?.currentPrice : `${regionPrice} ${productBuyInfo?.currencyCode}` || null,
        previousPrice: null,
        saving: null,
        priceTerm: card?.purchaseTerms,
        currencyIcon: "$"
      } : null;

      // WIP - resolve once pricing is finalized
      // if(!regionPrice){
      //   // if no region pricing, hide price data altogether
      //   cardProductPrice = null;
      //   productBuyInfo = null;
      // }

      return {
        eyebrow: card?.productInformation?.productLine,
        header: card?.productInformation?.productName,
        text: card?.productInformation?.shortDescription
          ? card?.productInformation?.shortDescription
          : null,
        cardLabel: card?.cardLabel || null,
        image: card?.overrideImage ? formatFocusedImage(card.overrideImage) : {
          url: card?.productInformation?.listImage?.file?.url,
          alt: card?.productInformation?.productName
        },
        cardLink: { 
          // WIP - update once pricing/buy process finalized
          url: card?.buyUrl ? card?.buyUrl : productBuyInfo ? formatProductBuyLink(productBuyInfo) : null,
          text: card?.buttonText ? card?.buttonText : "Add to Cart", 
          external: true 
        },
        trialLink: card?.trialUrl ? {
          // WIP - update once trial pages are built
          url: card?.trialUrl ? card?.trialUrl : `/${locale}/trial/${card?.trialPage?.url}`,
          text: card?.trialText ? card?.trialText : "Try for free"
        } : null,
        productPageLink: card?.productPage?.url ? {
          url: `/${locale}/products/${card?.productPage?.url}`,
          text: "More Info"
        } : null,
        bgColor: card?.bgColor,
        productPrice: cardProductPrice,
        Link,
      }
    }
  )}
}

export default formatEcommerceCards

const formatProductBuyLink = (buyInfo) => {
  if(!buyInfo){
    return null;
  }
  // PLACEHOLDER
  const { storeUrl, sku, currencyCode, languageCode, loggedIn } = buyInfo;
  let url = (loggedIn === true) 
    ? `https://${storeUrl}/trimblewebstore/s/add-product-auto?sku=${sku}${currencyCode && `&currencyCode=${currencyCode}`}${languageCode && `&languageCode=${languageCode}`}` 
    : `https://${storeUrl}/trimblewebstore/login?startURL=%2Fs%2Fadd-product-auto%3Fsku%3${sku}${currencyCode && `%26currencyCode%3${currencyCode}`}${languageCode &&`%26languageCode%3${languageCode}`}`;    
  return url
}