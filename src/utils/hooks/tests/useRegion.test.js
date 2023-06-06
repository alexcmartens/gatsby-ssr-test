import { renderHook, act } from "@testing-library/react"
import useRegion from "../useRegion"

describe("useRegion", () => {
  it("should have initial state", () => {
    const { result } = renderHook(() => useRegion())
    expect(result.current.region).toEqual(null)
  })

  it.skip("should set detect, update, and return new state", () => {
    // TODO - write this when region detection is built
  })

  it("should update and return new state", () => {
    const { result } = renderHook(() => useRegion())

    act(() => result.current.regionData.setRegion("UK"))

    expect(result.current.region).toEqual("UK")
  })
})
