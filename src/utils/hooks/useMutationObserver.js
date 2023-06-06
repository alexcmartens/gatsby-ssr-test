import { useEffect } from "react"

//This hook looks for mutations to the DOM so that we can notify React if the DOM mutates
const useMutationObserver = (domNodeSelector, observerOptions, callback) => {
  useEffect(() => {
    const targetNode = document.querySelector(domNodeSelector)

    //https://developer.mozilla.org/en/docs/Web/API/MutationObserver
    const observer = new MutationObserver(callback)

    observer.observe(targetNode, observerOptions)

    return () => {
      observer.disconnect()
    }
  }, [domNodeSelector, observerOptions, callback])
}

export default useMutationObserver
