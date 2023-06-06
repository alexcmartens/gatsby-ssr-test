import { useState, useEffect } from "react"
import randomstring from "randomstring"

const GATSBY_ENV = process.env.GATSBY_ENV

const getConfigTID = siteIdentifier => {
  let redirect_uri
  const code_verifier = randomstring.generate(128)
  const client_id =
    GATSBY_ENV === "staging" || GATSBY_ENV === "sketchup-staging"
      ? "48143bb4-2d81-4d09-899c-0992f82e9565"
      : "cb388c96-66b5-47a1-836f-aec44a7f0bca"

  const url =
    GATSBY_ENV === "staging" || GATSBY_ENV === "sketchup-staging"
      ? "https://stage.id.trimblecloud.com/oauth/token"
      : "https://id.trimble.com/oauth/token"

  const client_secret =
    GATSBY_ENV === "staging" || GATSBY_ENV === "sketchup-staging"
      ? "ebe16f58573f4342b7e218acdbb0d5b3"
      : "ec8d17781db94e25880cfa5b07bfa350"

  if (GATSBY_ENV === "staging") {
    redirect_uri = "http://localhost:8001/en"
  } else if (GATSBY_ENV === "sketchup-staging") {
    redirect_uri = "https://product-trial-form.netlify.app/en/redirecting/"
  } else {
    if (siteIdentifier === "corporate") {
      // Sean wants to test that we can have TID set up for ux-test env in corporate and also in ux-test preview. We NEED to specify the exact redirect url inside Trimble Cloud Console
      // The reason for testing is to prepare for Trial forms and entitlements
      //  current redirect urls accepted are https://trimble-ux.netlify.app/en, https://preview-uxtesttrimblepreview.gatsbyjs.io/en/, and https://construction.trimble.com with construction.trimble.com the only production facing application
      // this will be updated when we are ready for production and is mostly in place for testing purposes.
      if (typeof window !== "undefined") {
        // i've added the window check to differentiate between preview and netlify. I am not sure if preview will be necessary when we actually launch login for other sites.
        if (!window.location.origin.includes(".gatsbyjs.io")) {
          redirect_uri = "https://trimble-ux.netlify.app/en"
        } else {
          redirect_uri = "https://preview-uxtesttrimblepreview.gatsbyjs.io/en/"
        }
      }
    } else if (siteIdentifier === "construction") {
      redirect_uri = "https://construction.trimble.com"
    } else {
      redirect_uri = "https://construction.trimble.com"
    }
  }

  const queryString =
    GATSBY_ENV === "staging" || GATSBY_ENV === "sketchup-staging"
      ? `https://stage.id.trimblecloud.com/oauth/authorize?scope=MXP_Demo%20openid&response_type=code&redirect_uri=${redirect_uri}&client_id=48143bb4-2d81-4d09-899c-0992f82e9565&state=`
      : `https://id.trimble.com/oauth/authorize?scope=trimble-mxp-login%20openid&response_type=code&redirect_uri=${redirect_uri}&client_id=${client_id}&state=`

  return {
    queryString,
    redirect_uri,
    code_verifier,
    client_id,
    url,
    client_secret,
  }
}

export default getConfigTID
