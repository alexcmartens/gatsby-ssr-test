import React from "react"
import renderer from "react-test-renderer"
import ctaFormat from "../ctaFormat"

describe("ctaFormat", () => {
  it("should return null if nothing is passed into method", () => {
    const result = ctaFormat()
    expect(result).toEqual(null)
  })

  it("should return an object with keys text and url with strings as values if correct params are passed into method", () => {
    const result = ctaFormat({ text: "I am text", url: "/" })
    expect(result).toEqual({ text: "I am text", url: "/en/" })
  })

  it("should not break if only object passed in is incomplete", () => {
    const result = ctaFormat({ text: "I am text" })
    expect(result).toEqual({ text: "I am text", url: undefined })

    const result1 = ctaFormat({ url: "/" })
    expect(result1).toEqual({ text: undefined, url: "/en/" })
  })
})
