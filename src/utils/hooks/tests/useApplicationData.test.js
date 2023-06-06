import { renderHook } from "@testing-library/react"

import useApplicationData from "../useApplicationData"

describe("useApplicationData", () => {
  const _data = {
    languages: [
      { contentfulid: "en", name: "English", junk: "junk" },
      { contentfulid: "es", name: "Spanish", junk: "more junk" },
    ],
    regions: [
      { isoCode: "NA", name: "North America" },
      { isoCode: "EU", name: "European Union" },
    ],
    extraData: {
      name: "test",
      date: "March 4, 2021",
    },
  }

  it("should have initial state", () => {
    const { result } = renderHook(() => useApplicationData())

    expect(result.current.applicationData).toEqual(null)
    expect(result.current.languages).toEqual(null)
    expect(result.current.regions).toEqual(null)
  })

  it("should format data and return new state", () => {
    const { result } = renderHook(() => useApplicationData(_data))

    const expectedApplicationData = {
      extraData: {
        name: "test",
        date: "March 4, 2021",
      },
    }

    const expectedLanguages = [
      { id: "en", name: "English" },
      { id: "es", name: "Spanish" },
    ]

    const expectedRegions = [
      { isoCode: "NA", name: "North America" },
      { isoCode: "EU", name: "European Union" },
    ]

    expect(result.current.applicationData).toStrictEqual(
      expectedApplicationData
    )
    expect(result.current.languages).toStrictEqual(expectedLanguages)
    expect(result.current.regions).toStrictEqual(expectedRegions)
  })

  it("should handle junk data without breaking", () => {
    const _data = {
      languages: null,
      regions: undefined,
    }
    const { result } = renderHook(() => useApplicationData(_data))

    const expected = {
      applicationData: {},
      regions: undefined,
      languages: undefined,
    }

    expect(result.current).toStrictEqual(expected)
  })
})
