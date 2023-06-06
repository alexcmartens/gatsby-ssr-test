const themes = () => {
  const whiteTheme = {
    color: "#252A2E",
    backgroundColor: "#FFFFFF",
    theme: "white",
    darkTheme: false,
    ctaOne: "primary--1",
    ctaTwo: "primary--2",
    iconColor: "#252A2E",
    accordionIconColor: "#0063A3",
  }

  const concreteGrayTheme = {
    color: "#252A2E",
    backgroundColor: "#F1F1F6",
    theme: "concrete-gray",
    darkTheme: false,
    ctaOne: "primary--1",
    ctaTwo: "primary--2",
    iconColor: "#252A2E",
    accordionIconColor: "#0063A3",
  }

  const darkGrayTheme = {
    color: "#FFFFFF",
    backgroundColor: "#252A2E",
    theme: "dark-gray",
    darkTheme: true,
    ctaOne: "secondary--1",
    ctaTwo: "secondary--2",
    iconColor: "#FFFFFF",
    accordionIconColor: "#FFFFFF",
  }

  const trimbleBlueTheme = {
    color: "#FFFFFF",
    backgroundColor: "#0063A3",
    theme: "blue",
    darkTheme: true,
    ctaOne: "secondary--1",
    ctaTwo: "secondary--2",
    iconColor: "#FFFFFF",
    accordionIconColor: "#89C6ED",
  }

  const trimbleDarkNavyTheme = {
    color: "#FFFFFF",
    backgroundColor: "#003054",
    theme: "dark-navy",
    darkTheme: true,
    ctaOne: "secondary--1",
    ctaTwo: "secondary--2",
    iconColor: "#FFFFFF",
    accordionIconColor: "#FFFFFF",
  }

  const transparentDarkText = {
    color: "#252A2E",
    theme: "transparent-dark-text",
    backgroundColor: "unset",
    darkTheme: false,
    iconColor: "#252A2E",
    accordionIconColor: "#0063A3",
  }

  const transparentLightText = {
    color: "#FFFFFF",
    theme: "transparent-light-text",
    backgroundColor: "unset",
    darkTheme: true,
    iconColor: "#FFFFFF",
    accordionIconColor: "#FFFFFF",
  }

  const transparent = {
    color: "#ffffff",
    backgroundColor: "transparent",
    theme: "transparent",
  }

  const skyBlueTheme = {
    color: "#FFFFFF",
    backgroundColor: "#89C6ED",
    theme: "sky-blue",
    darkTheme: false,
  }

  const goldTheme = {
    color: "#252A2E",
    backgroundColor: "#FBAD26",
    theme: "gold",
  }

  return [
    whiteTheme,
    concreteGrayTheme,
    darkGrayTheme,
    trimbleBlueTheme,
    trimbleDarkNavyTheme,
    transparentDarkText,
    transparentLightText,
    transparent,
    skyBlueTheme,
    goldTheme,
  ]
}

export default themes
