import { useState, useEffect } from "react"

const useMouse = () => {
  const [mouse, setMouse] = useState(true)
  useEffect(() => {
    const checkForMouseDown = e => {
      if (e?.type === "mousedown") {
        setMouse(true)
      }
    }

    const checkForTab = e => {
      if (e?.keyCode === 9) {
        setMouse(false)
      }
    }

    const checkForMouse = () => {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        document.body.addEventListener("mousedown", checkForMouseDown)
        document.body.addEventListener("keydown", checkForTab)
      }
    }

    const removeEventListeners = () => {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        document.body.removeEventListener("keydown", checkForTab)
        document.body.removeEventListener("mousedown", checkForMouseDown)
      }
    }

    checkForMouse()

    return () => {
      removeEventListeners()
    }
  }, [])

  return {
    mouse,
  }
}

export default useMouse
