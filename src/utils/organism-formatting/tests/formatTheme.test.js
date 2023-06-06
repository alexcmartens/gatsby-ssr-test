import React from "react"
import renderer from "react-test-renderer"
import formatTheme from "../formatTheme"

describe("formatTheme", () => {
  it("should return default theme data if nothing is passed into method", () => {
    const result = formatTheme()
    expect(result).toEqual({
      color: "#252A2E",
      backgroundColor: "#FFFFFF",
      theme: "white",
      darkTheme: false,
      ctaOne: "primary--1",
      ctaTwo: "primary--2",
      iconColor: "#252A2E",
      accordionIconColor: "#0063A3",
    })
  })

  it("should format theme accordingly if theme name is passed in", () => {
    const _data = { theme: "dark-gray" }
    const result = formatTheme(_data)
    expect(result).toEqual({
      color: "#FFFFFF",
      backgroundColor: "#252A2E",
      theme: "dark-gray",
      darkTheme: true,
      ctaOne: "secondary--1",
      ctaTwo: "secondary--2",
      iconColor: "#FFFFFF",
      accordionIconColor: "#FFFFFF",
    })

    const _data1 = { theme: "concrete-gray" }
    const result1 = formatTheme(_data1)

    expect(result1).toEqual({
      color: "#252A2E",
      backgroundColor: "#F1F1F6",
      theme: "concrete-gray",
      darkTheme: false,
      ctaOne: "primary--1",
      ctaTwo: "primary--2",
      iconColor: "#252A2E",
      accordionIconColor: "#0063A3",
    })

    const _data2 = { theme: "dark-gray" }
    const result2 = formatTheme(_data2)

    expect(result2).toEqual({
      color: "#FFFFFF",
      backgroundColor: "#252A2E",
      theme: "dark-gray",
      darkTheme: true,
      ctaOne: "secondary--1",
      ctaTwo: "secondary--2",
      iconColor: "#FFFFFF",
      accordionIconColor: "#FFFFFF",
    })

    const _data3 = { theme: "blue" }
    const result3 = formatTheme(_data3)

    expect(result3).toEqual({
      color: "#FFFFFF",
      backgroundColor: "#0063A3",
      theme: "blue",
      darkTheme: true,
      ctaOne: "secondary--1",
      ctaTwo: "secondary--2",
      iconColor: "#FFFFFF",
      accordionIconColor: "#89C6ED",
    })

    const _data4 = { theme: "dark-navy" }
    const result4 = formatTheme(_data4)

    expect(result4).toEqual({
      color: "#FFFFFF",
      backgroundColor: "#003054",
      theme: "dark-navy",
      darkTheme: true,
      ctaOne: "secondary--1",
      ctaTwo: "secondary--2",
      iconColor: "#FFFFFF",
      accordionIconColor: "#FFFFFF",
    })
  })

  it("should not break if random theme name is passed in ", () => {
    const result = formatTheme({ theme: "I AM THE THEME" })
    expect(result).toEqual(undefined)
  })
})
