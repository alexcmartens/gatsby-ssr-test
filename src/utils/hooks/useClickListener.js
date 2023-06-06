import { useEffect } from "react"

const useClickListener = (handler, selectorCheck) => {
  useEffect(() => {
    // Check if selector is passed to function, and selected element exists in DOM. selectorCheck should be a DOM query, like 'document.querySelectorAll(".nav-entry").length > 0'
    // if the element doesn't exist in the DOM we shouldn't add a listener/handler for it onto the app.
    // hopefully this approach results in better performance by not having blank listeners sitting in memory!
    if (
      selectorCheck &&
      typeof window !== "undefined" &&
      typeof document !== "undefined"
    ) {
      const gatsbyApp = document?.getElementById("___gatsby")
      gatsbyApp.addEventListener("click", handler)
      return () => {
        gatsbyApp.removeEventListener("click", handler)
      }
    }
  }, [handler, selectorCheck])
}

export default useClickListener
