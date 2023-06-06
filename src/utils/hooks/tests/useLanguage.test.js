import { renderHook, act } from "@testing-library/react"
import useLanguage from "../useLanguage"

describe("useLanguage", () => {
  it("should have initial state", () => {
    const { result } = renderHook(() => useLanguage())
    expect(result.current.language).toEqual(undefined)
  })

  it.skip("should set detect, update, and return new state", () => {
    // TODO - write this when language detection is built
  })

  it("should update and return new state", () => {
    const { result } = renderHook(() => useLanguage())
    act(() => result.current.saveLanguageSettings("es"))
    expect(result.current.language).toEqual(undefined)
  })
})
