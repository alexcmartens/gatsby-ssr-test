import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
import { navigate } from "gatsby"

const useAuthTID = (
  setAuth,
  setUserData,
  userData,
  path,
  redirect_uri,
  code_verifier,
  client_id,
  client_secret,
  query,
  url
) => {
  // this we get from Trimble Cloud Console and it is needed to make a fetch request
  let params
  let code
  let requestOptions
  useEffect(() => {
    const getAccessToken = () => {
      if (typeof window !== "undefined") {
        // the access token will come from the URL after a user logs in. The url will be something like: localhost:8001/en?code=1234&state=/en/overview
        // we push the code & state into localstorage to use (url will redirect as soon as user is authenticated to the callback url set up in Trimble Cloud Console)
        params = new Proxy(new URLSearchParams(window.location.search), {
          get: (searchParams, prop) => searchParams.get(prop),
        })
        // state is where we need to redirect to (the url redirect in Trimble Cloud Console is always the home page)

        if (!localStorage.getItem("user_info")) {
          localStorage.setItem("state", params.state)
          // timeStamp grabs the month and day the user has logged in and we save this to local storage
          localStorage.setItem(
            "timeStamp",
            JSON.stringify({
              month: `${new Date().getMonth()}`,
              day: `${new Date().getDate()}`,
            })
          )
          // item_ is our access token sent back from TID.
          localStorage.setItem("item_", params.code)
        }

        if (
          !localStorage?.getItem("timeStamp") &&
          localStorage?.getItem("user_info")
        ) {
          localStorage?.removeItem("user_info")
        }

        if (localStorage?.getItem("user_info")) {
          const timeStamp = JSON.parse(localStorage.getItem("timeStamp"))
          const currentMonth = new Date().getMonth()
          const currentDay = new Date().getDate()

          // first we check if the current month is the same today as it was in the saved local storage
          if (JSON.stringify(currentMonth) === timeStamp.month) {
            // if the month is the same but the day is different, we remove saved user_data.
            if (JSON.stringify(currentDay) !== timeStamp.day) {
              localStorage.removeItem("user_info")
            }
            // if month is not the same, we remove the user_data
          } else {
            localStorage.removeItem("user_info")
          }
        }

        // we grab the code here to use in our POST

        code = localStorage.getItem("item_")

        // building request
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")
        myHeaders.append(
          "Authorization",
          "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64")
        )
        const urlencoded = new URLSearchParams()
        urlencoded.append("grant_type", "authorization_code")
        urlencoded.append("redirect_uri", redirect_uri)
        urlencoded.append("code_verifier", code_verifier)
        urlencoded.append("client_id", client_id)
        urlencoded.append("code", code)
        urlencoded.append("state", path)

        // create our options
        requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow",
        }
      }

      // we add null in quotes because null can be added to localStorage and is transformed to a string.
      if (code && code !== "null") {
        return new Promise((resolve, reject) => {
          fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
              if (result) {

                const updatedRes = JSON.parse(result)

                if (updatedRes?.access_token) {
                  localStorage.setItem(
                    "user-trial-data",
                    JSON.stringify({
                      id: updatedRes?.access_token,
                      time: Date.now(),
                    })
                  )
                }

                if (updatedRes?.id_token) {
                  const rawUserData = jwt_decode(updatedRes?.id_token)
                  // grab only items we need from the response
                  const userData = {
                    fName: rawUserData?.given_name,
                    lName: rawUserData?.family_name,
                    email: rawUserData?.email,
                    img: rawUserData?.picture,
                    id: rawUserData?.aud,
                    tid: rawUserData?.sub,
                  }
                  // set auth to true and save user data
                  setAuth(true)
                  setUserData(userData)
                  localStorage.setItem("user_info", JSON.stringify(userData))
                  if (
                    localStorage.getItem("blocked_private_page") &&
                    localStorage.getItem("blocked_private_page") !== "null"
                  ) {
                    const destination = localStorage.getItem(
                      "blocked_private_page"
                    )
                    localStorage.removeItem("blocked_private_page")
                    navigate(`${window.location.origin}${destination}`)
                  } else if (
                    localStorage.getItem("state") &&
                    localStorage.getItem("state") !== "null"
                  ) {
                    navigate(
                      `${window.location.origin}${localStorage.getItem(
                        "state"
                      )}`
                    )
                  }
                  if (userData && localStorage.getItem("user_info")) {
                    // remove access token from local storage (this token expires quickly)
                    setTimeout(() => {
                      localStorage.removeItem("item_")
                    }, 1000)
                  }
                }
              }
            })
            .catch(error => {
              console.log("error", error)
              reject(error)
            })
        })
      } else {
        // if there is no code, we check if the user is logged in & if so, display their data.
        if (localStorage?.getItem("user_info") && !userData) {
          setUserData(
            JSON.parse(JSON.stringify(localStorage?.getItem("user_info")))
          )
          setUserData(JSON.parse(localStorage?.getItem("user_info")))
          setAuth(true)
        } else {
          setAuth(false)
        }
        return
      }
    }

    if (typeof window !== "undefined") {
      getAccessToken()
    }
  }, [code])
}

export default useAuthTID
