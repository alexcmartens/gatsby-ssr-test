import { useState, useEffect } from "react"

const useWithinDateRange = (startDate, endDate) => {
  const [withinDateRange, setWithinDateRange] = useState(false)

  useEffect(() => {
    const parsedStart = startDate ? Date.parse(startDate) : 0
    const parsedEnd = endDate ? Date.parse(endDate) : 0
    const now = Date.now()
    const isWithinDateRage = now >= parsedStart && now <= parsedEnd

    setWithinDateRange(isWithinDateRage)
  }, [startDate, endDate])

  return { withinDateRange }
}

export default useWithinDateRange
