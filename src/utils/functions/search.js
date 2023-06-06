export const combineIndexHits = resultsObj => {
  const { results } = resultsObj || {}
  let parsedHits = []
  let parsedNbHits = 0

  results?.forEach(({ hits, nbHits }) => {
    parsedHits = [...hits, ...parsedHits]
    parsedNbHits += nbHits
  })

  return { parsedHits, parsedNbHits }
}
