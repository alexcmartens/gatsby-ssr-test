const ColorSchemeConnector = data => {
  if (!data) {
    return { theme: "whiteTheme" }
  }

  const themeNames = [
    { theme: "white", machine: "white" },
    { theme: "concrete gray", machine: "concrete-gray" },
    { theme: "trimble dark gray", machine: "dark-gray" },
    { theme: "trimble blue", machine: "blue" },
    { theme: "dark navy", machine: "dark-navy" },
    { theme: "transparent", machine: "transparent" },
    { theme: "sky blue", machine: "sky-blue" },
    { theme: "gold", machine: "gold" },
  ]

  const theme = themeNames.find(colorScheme => {
    return colorScheme.theme === data.toLowerCase()
  })

  if (theme && theme?.machine) {
    return { theme: theme?.machine }
  } else {
    return { theme: "white" }
  }
}

export default ColorSchemeConnector
