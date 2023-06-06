const formatAnchor = anchor => {
  if (typeof anchor !== "string") {
    return null
  } else {
    const clonedAnchor = JSON.parse(JSON.stringify(anchor))
    const replacements = [
      { search: " ", replace: "-" },
      { search: "#", replace: "-" },
      { search: "--", replace: "-" },
    ]
    return replacements
      .reduce((anchor, replacement) => {
        return anchor.split(replacement.search).join(replacement.replace)
      }, clonedAnchor)
      .toLowerCase()
  }
}

export default formatAnchor
