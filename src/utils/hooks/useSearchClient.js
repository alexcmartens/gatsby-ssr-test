import { useEffect, useState } from "react"
import { combineIndexHits } from "../functions/search"
import algoliasearch from "algoliasearch/lite"
const algoliaAppId = process.env.GATSBY_ALGOLIA_APP_ID
const algoliaAPIKey = process.env.GATSBY_ALGOLIA_API_KEY
const algoliaClient = algoliasearch(algoliaAppId, algoliaAPIKey)

const charactersToSearch = process.env
  .GATSBY_ALGOLIA_SEARCH_START_ON_THIS_MANY_CHARACTERS
  ? parseInt(process.env.GATSBY_ALGOLIA_SEARCH_START_ON_THIS_MANY_CHARACTERS)
  : 3

const useSearchClient = (jobSearch = false, locale) => {
  const [searchClient, setSearchClient] = useState(null)
  const [combinedNbHits, setCombinedNbHits] = useState(0)
  const [results, setResults] = useState(null)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  useEffect(() => {
    const client = {
      ...algoliaClient,
      async search(requests) {
        try {
          const emptySearch = requests.every(({ params }) => !params.query)
          const lessThanCharactersToSearch =
            requests[0]?.params?.query?.length < charactersToSearch

          const dontSendResults =
            (emptySearch || lessThanCharactersToSearch) && !jobSearch
          if (dontSendResults) {
            return Promise.resolve({
              results: requests.map(() => ({
                hits: [],
                nbHits: 0,
                nbPages: 0,
                page: 0,
                processingTimeMS: 0,
              })),
            })
          }
          const results = await algoliaClient.search(requests)
          setResults(results)

          const { parsedNbHits } = combineIndexHits(results)
          if (results?.results?.[0]) {
            setCurrentPageNumber(results?.results[0]?.page + 1)
          }
          if (results?.results?.[0]?.facets?.jobType) {
            const jobTypeKeys = Object.keys(results.results[0].facets.jobType)
            const jobTypePlaceholder = jobTypeKeys.find(jobType =>
              jobType.includes("placeholder")
            )
            delete results.results[0].facets.jobType[jobTypePlaceholder]

            const categoriesKeys = Object.keys(
              results.results[0].facets.jobCategory
            )
            const categoriesPlaceholder = categoriesKeys.find(category =>
              category.includes("placeholder")
            )
            delete results.results[0].facets.jobCategory[categoriesPlaceholder]

            const locationKeys = Object.keys(results.results[0].facets.location)
            const locationPlaceholder = locationKeys.find(location =>
              location.includes("placeholder")
            )
            delete results.results[0].facets.location[locationPlaceholder]
          }

          setCombinedNbHits(parsedNbHits)
          return results
        } catch (e) {
          console.error(e)
        }
      },
    }
    setSearchClient(client)
  }, [jobSearch])

  return { searchClient, combinedNbHits, results, currentPageNumber }
}

export default useSearchClient
