import renderer from "react-test-renderer"
import CTASectionFormat, { addClassNameToCTAs } from "../CTASectionFormat"
import { Link } from "gatsby"

describe("CTASectionFormat", () => {
  it("Should return null if nothing is passed into method.", () => {
    const result = CTASectionFormat()
    expect(CTASectionFormat()).toEqual(null)
  })

  it("Should return ctas object with ctaOne, ctaTwo, and subCTA if those exist", () => {
    const ctaOne = { url: "/", text: "Laura's CTA" }
    const ctaTwo = { url: "/", text: "Laura's CTA" }
    const subCTA = { url: "/", text: "Laura's CTA" }
    const ctas = { ctaOne, ctaTwo, subCTA, Link }
    const result = CTASectionFormat(ctaOne, ctaTwo, subCTA, Link)
    expect(result).toEqual(ctas)
  })

  it("Should return ctas object with ctaOne, ctaTwo, and NOT subCTA if only ctaOne and ctaTwo exist", () => {
    const ctaOne = { url: "/", text: "Laura's CTA" }
    const ctaTwo = { url: "/", text: "Laura's CTA" }
    const ctas = { ctaOne, ctaTwo, Link }
    const result = CTASectionFormat(ctaOne, ctaTwo, null, Link)
    expect(result).toEqual(ctas)
  })

  it("Should return ctas object with ctaOne only if ctaOne is the only cta to exist", () => {
    const ctaOne = { url: "/", text: "Laura's CTA" }
    const ctas = { ctaOne, Link }
    const result = CTASectionFormat(ctaOne, null, null, Link)
    expect(result).toEqual(ctas)
  })

  it("Should return null if only subCTA is passed into method", () => {
    const subCTA = { url: "/", text: "Laura's CTA" }
    const result = CTASectionFormat(null, null, subCTA, Link)
    expect(result).toEqual(null)
  })

  it("Should return only ctaOne if ctaOne and subCTA are passed into method", () => {
    const ctaOne = { url: "/", text: "Laura's CTA" }
    const subCTA = { url: "/", text: "Laura's CTA" }
    const result = CTASectionFormat(ctaOne, null, subCTA, Link)
    expect(result).toEqual(null)
  })
})

describe("addClassNameToCTAs", () => {
  it("should not break if nothing is passed into method", () => {
    const result = addClassNameToCTAs()
    expect(result).toEqual({})
  })

  it("should add a className to ctas if ctas do not have classNames", () => {
    const ctaOne = { text: "laura is the best", url: "laura.com" }
    const ctaTwo = { text: "woooooohoooo", url: "/hello" }
    const result = addClassNameToCTAs(ctaOne, ctaTwo)
    const expected = {
      ctaOne: {
        text: "laura is the best",
        url: "laura.com",
        className: "primary--1",
      },
      ctaTwo: {
        text: "woooooohoooo",
        url: "/hello",
        className: "primary--2",
      },
    }
    expect(result).toEqual(expected)
  })

  it("should use custom className if cta has a className attached to it", () => {
    const ctaOne = {
      text: "laura is the best",
      url: "laura.com",
      className: "pasta-puppy",
    }
    const ctaTwo = {
      text: "woooooohoooo",
      url: "/hello",
      className: "spaghetti-puppy",
    }
    const result = addClassNameToCTAs(ctaOne, ctaTwo)
    const expected = {
      ctaOne: {
        text: "laura is the best",
        url: "laura.com",
        className: "pasta-puppy",
      },
      ctaTwo: {
        text: "woooooohoooo",
        url: "/hello",
        className: "spaghetti-puppy",
      },
    }
    expect(result).toEqual(expected)
  })

  it("should handle only one cta if only one is passed in", () => {
    const ctaOne = { text: "laura is the best", url: "laura.com" }
    const result = addClassNameToCTAs(ctaOne)
    const expected = {
      ctaOne: {
        text: "laura is the best",
        url: "laura.com",
        className: "primary--1",
      },
    }
    expect(result).toEqual(expected)
  })
})
