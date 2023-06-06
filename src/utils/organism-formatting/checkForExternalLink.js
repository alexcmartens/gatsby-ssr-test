const checkForExternalLink = (link, type) => {
  if (!link) {
    return false
  }

  if (type) {
    return true
  }

  if (link && link.length && link.length >= 4 && link.startsWith("http")) {
    return true
  } else {
    return false
  }
}

export default checkForExternalLink
