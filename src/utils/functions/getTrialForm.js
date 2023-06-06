export const getTrialFormId = timeStamp => {
  if (timeStamp) {
    // the token for all requests is only valid for 10 minutes after the initial authentication of a user. This checks if the token has expired
    const diff = (Date.now() - timeStamp) / 60000
    if (diff > 10) {
      return false
    } else {
      return true
    }
  }
}

export const checkForHealth = (
  setLoading,
  setError,
  setCheckHealthOfTrialsAPI,
  setErrorText,
  setAuth
) => {
  const myHeaders = new Headers()

  myHeaders.append("path", "/oauth/token")
  myHeaders.append("hostname", "https://stage.id.trimblecloud.com")
  myHeaders.append("content-type", "application/x-www-form-urlencoded")
  myHeaders.append(
    "Authorization",
    `Bearer ${JSON?.parse(localStorage.getItem("user-trial-data"))?.id}`
  )

  myHeaders.append("Access-Control-Allow-Origin", "*")
  myHeaders.append(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  )

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }

  setLoading(true)

  fetch(
    "https://cloud.stage.api.trimblecloud.com/cloud/trials-service/1.0/trials/health",
    requestOptions
  )
    .then(response => response.status)
    .then(result => {
      console.log(result)
      if (result === 401) {
        setAuth(false)
        setLoading(false)
      }
      setCheckHealthOfTrialsAPI(true)
    })
    .catch(error => {
      console.log(error)
      setError(true)
      setErrorText(error)
      setLoading(false)
    })
}

export const startTrial = (
  setLoading,
  setError,
  setErrorText,
  sku,
  days = 30
) => {
  setLoading(true)
  fetch(
    "https://cloud.stage.api.trimblecloud.com/cloud/trials-service/1.0/trials/initialize",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user-trial-data"))?.id
        }`,
      },
      body: JSON.stringify({
        sku: `${sku}`,
        periodInDays: days,
      }),
    }
  )
    .then(response => response.json())
    .then(result => {
      if (result?.errorMessage) {
        setErrorText(result)
        setError(true)
      } else {
        setTimeout(() => {
          window.location.reload(true)
        }, 3000)
      }
    })
    .catch(error => {
      console.log(error)
      setError(true)
      setErrorText(error)
    })
}

export const getTrialDetails = (sku, setActiveTrial, setLoading, setError) => {
  setLoading(true)

  fetch(
    `https://cloud.stage.api.trimblecloud.com/cloud/trials-service/1.0/trials/licenses?sku=${sku}`,
    {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user-trial-data"))?.id
        }`,
      },
    }
  )
    .then(response => response.json())
    .then(result => {
      console.log(result)
      // this should return an empty array if there is not a trial
      if (result && result?.licenses?.length) {
        setActiveTrial(result?.licenses)
      }
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setActiveTrial(false)
    })
}
