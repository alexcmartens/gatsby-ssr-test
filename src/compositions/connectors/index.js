import FullBackgroundHeroConnector from "./FullBackgroundHeroConnector"
import SuperHeroConnector from "./SuperHeroConnector"
import BlockListItemsConnector from "./BlockListItemsConnector"
import TabsConnector from "./TabsConnector"
import LayoutWrapper from "./LayoutWrapper.js"
import PullQuoteConnector from "./PullQuoteConnector"
import MarketoFormConnector from "./MarketoFormConnector"
import { Default } from "./Default"

export function resolveRenderer(component) {
  console.log('component -->', component)
  switch (component.type) {
    case "superHero":
      return SuperHeroConnector
    case "fullBackgroundHero":
      return FullBackgroundHeroConnector
    case "blockListItems":
      return BlockListItemsConnector
    case "layoutWrapper":
      return LayoutWrapper
    case "tabs":
      return TabsConnector
    case "pullQuote":
      return PullQuoteConnector
    case "marketoForm":
      return MarketoFormConnector
    default:
      return Default
  }
}

export default resolveRenderer
