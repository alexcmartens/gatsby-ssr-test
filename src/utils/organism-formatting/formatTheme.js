import themes from "../../styles/colorScheme-config"

const formatTheme = data => {
  const themeOptions = themes() || []

  return themeOptions.find(type => {
    if (data?.theme) {
      return type?.theme === data?.theme
    } else {
      return type?.theme === "white"
    }
  })
}

export default formatTheme
