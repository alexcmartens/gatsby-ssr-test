import React from "react"
import { useId } from "react"

export const formatGridFilters = filters => {
  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property]
      const curGroup = acc[key] ?? []

      return {
        ...acc,
        [key]: [...curGroup, obj],
      }
    }, {})
  }

  const groupedArray = groupBy(filters, "type")

  const filterNames = ["Topic", "Industry", "Category", "Solution"]

  const allFilters = filterNames.map(filter => {
    const filterValue = transformFilterName(filter)

    const transformedFilterOptions = groupedArray[filterValue]?.map(item => {
      return {
        ...item,
        value: `${item.type}-${transformFilterName(item.name)}`,
      }
    })

    if (
      transformedFilterOptions?.length === 0 ||
      transformedFilterOptions?.length === undefined
    ) {
      return null
    }

    return {
      name: filter,
      id: `${useId()}-filter-`,
      value: filterValue,
      options: transformedFilterOptions,
    }
  })
  return allFilters
}

export const transformFilterName = name => {
  if (name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "-")
      .replace(/^-+|-+$/g, "")
  }
  return null
}
