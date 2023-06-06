const overrideConfig =
  process.env.GATSBY_CONFIG_OVERRIDE && JSON.parse(process.env.GATSBY_CONFIG_OVERRIDE)

let config = {}

// config.featureFlags.sendUsageTelemetry = false
// config.keys.pendoApi = "d6c23e88-721a-410c-6aef-34a739f192d4"
config.urls = {
  portalServer: overrideConfig?.portalServer
    ? overrideConfig?.portalServer
    : "http://localhost:3001/",
  orchestrationCore: overrideConfig?.orchestrationCore
    ? overrideConfig?.orchestrationCore
    : "http://localhost:8080/",
}
config.internal = {
  loggedOut: overrideConfig?.homePageOverride
    ? overrideConfig?.homePageOverride
    : overrideConfig?.enableLogin
    ? "login"
    : "",
  loggedIn: overrideConfig?.homePageOverride
    ? overrideConfig?.homePageOverride
    : overrideConfig?.enableLogin,
  auth: overrideConfig?.homePageOverride
    ? overrideConfig?.homePageOverride
    : overrideConfig?.enableLogin
    ? "auth"
    : "",
  sorry: "sorry",
}

export const loadConfig = () => {
  return config
}
