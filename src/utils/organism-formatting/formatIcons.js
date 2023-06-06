const formatIcons = icon => {
  let machineNameIcon

  if (!icon || typeof icon !== "string") {
    return
  }

  if (
    icon.toLowerCase().startsWith("open") ||
    icon.toLowerCase().startsWith("enclosed") ||
    icon.toLowerCase().startsWith("info")
  ) {
    machineNameIcon = `ter-icon--${icon
      .toLowerCase()
      .replace(/ /g, "-")}`
  } else {
    machineNameIcon = `mxp-icon-${icon.toLowerCase().replace(/ /g, "-")}`
  }

  return machineNameIcon
}

export default formatIcons
