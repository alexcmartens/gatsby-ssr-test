import React, { useEffect, useState } from "react"
//import { useStore } from "../../context/auth/auth"
//import { triggerFormSubmitSuccess } from "../Datalayer/DatalayerTrigger"
import "./MarketoForm.scss"
import { Script } from "gatsby"
//import { Helmet } from "react-helmet"

const getPathFromUrl = url => url.split("?")[0]

const MarktoForm = ({
  formId,
  marketoInstance,
  fieldDefaults,
  variant,
  header,
  directions,
  sideImage,
  eyebrow,
  product,
  removePadding,
  inLayoutWrapper = false,
  trialPage = false,
  userInfo = {},
  productData = [],
  startTrial = () => {},
  setLoading = () => {},
  setError = () => {},
  setErrorText= () => {}
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [isFormRendered, setIsFormRendered] = useState(false)
  //const [state] = useStore()

  let variantClass = "light"
  if (variant === "dark") {
    variantClass = variant
  }

  let paddingClass = ""
  if (removePadding === true) {
    paddingClass = "remove-padding"
  }

  const firstName = ""
  const lastName = ""
  const email = ""
  const thankYou = marketoInstance?.thankYou?.childMarkdownRemark?.html
    ? marketoInstance?.thankYou?.childMarkdownRemark?.html
    : "Thanks!"

  // doc: https://developers.marketo.com/rest-api/assets/forms/examples/
  useEffect(() => {
    if (scriptLoaded) {
      if (!isFormRendered) {
        // Remove the default form styles
        const destyleMktoForm = (mktoForm, moreStyles) => {
          var formEl = mktoForm.getFormElem()[0],
            arrayFrom = getSelection.call.bind([].slice)

          // remove element styles from <form> and children
          var styledEls = arrayFrom(formEl.querySelectorAll("[style]")).concat(
            formEl
          )
          styledEls.forEach(function (el) {
            el.removeAttribute("style")
          })

          if (!moreStyles) {
            formEl.setAttribute("data-styles-ready", "true")
          }

          // disable remote stylesheets and local <style>s
          var styleSheets = arrayFrom(document.styleSheets)
          styleSheets.forEach(function (ss) {
            if (
              [document.getElementById(`mktoForm_${formId}`)].indexOf(
                ss.ownerNode
              ) !== -1 ||
              formEl.contains(ss.ownerNode)
            ) {
              ss.disabled = true
            }
          })

          if (!moreStyles) {
            formEl.setAttribute("data-styles-ready", "true")
          }
        }

        // Set form field defaults
        const setDefaults = () => {
          if (fieldDefaults?.length) {
            const currentForm = document.getElementById(`mktoForm_${formId}`)

            if (currentForm?.children.length) {
              if (currentForm) {
                fieldDefaults.forEach(def => {
                  const fieldName = def?.fieldName
                  const fieldVal = def?.value
                  const field = document?.getElementsByName(fieldName)[0]

                  if (field && fieldVal) {
                    field.value = fieldVal
                  }
                })
              }
            } else {
              setTimeout(setDefaults, 100)
            }
          }
        }

         const setHiddenFields = () => {
            const hiddenFields = document.querySelectorAll(
              "input[type='hidden']"
            )
            hiddenFields.forEach((_, idx) => {
              if (
                hiddenFields.length &&
                hiddenFields[idx].name === "TC1_Product_ID__c" &&
                product?.productId
              ) {
                hiddenFields[idx].value = product?.productId
              } else if (hiddenFields?.length) {
                if (
                  hiddenFields[idx].name === "TNV_Recent_Software_Trial_SKU__c"
                ) {
                  hiddenFields[idx].value = productData?.productTrialId
                }
                if (hiddenFields[idx].name === "TNV_Trimble_ID__c") {
                  hiddenFields[idx].value = userInfo?.tid
                }
                if (hiddenFields[idx].name === "TNV_Profiles_Account_ID__c") {
                  hiddenFields[idx].value =userInfo?.tid
                }
                if (hiddenFields[idx].name === "FirstName") {
                  hiddenFields[idx].value = userInfo?.fName
                }
                if (hiddenFields[idx].name === "LastName") {
                  hiddenFields[idx].value = userInfo?.lName
                }
                if (hiddenFields[idx].name === "Email") {
                  hiddenFields[idx].value = userInfo?.email
                }
              }
            })
          }


        // Make all range fields more accessible
        const makeRangesAccessible = () => {
          const currentForm = document.getElementById(`mktoForm_${formId}`)
          if (currentForm?.children.length) {
            const rangeFields = document
              .getElementById(`mktoForm_${formId}`)
              ?.getElementsByClassName("mktoRangeField")

            if (rangeFields?.length) {
              for (let i in rangeFields) {
                const input = rangeFields?.[i]?.querySelectorAll("input")?.[0]
                const mktoRangeValue =
                  rangeFields?.[i]?.getElementsByClassName(
                    "mktoRangeValue"
                  )?.[0]

                if (input && mktoRangeValue) {
                  input.addEventListener("focus", function () {
                    mktoRangeValue.classList.add("in-focus")
                  })

                  input.addEventListener("blur", function () {
                    mktoRangeValue.classList.remove("in-focus")
                  })
                }
              }
            }
          } else {
            setTimeout(makeRangesAccessible, 1000)
          }
        }

        window.MktoForms2.loadForm(
          marketoInstance?.formScriptSource,
          marketoInstance?.munchkinId,
          formId,
          function (form) {
            form.vals({
              ...(firstName && {
                FirstName: firstName,
              }),
              ...(lastName && {
                LastName: lastName,
              }),
              ...(email && {
                Email: email,
              }),
            })

            form.onSubmit(function () {
              startTrial(setLoading, setError, setErrorText, productData?.productTrialId, productData?.Trial_Duration)
              var vals = form.vals()
              console.log("onSubmit", vals)
            })

            form.onSuccess(function (values, followUpUrl) {
              console.log("onSuccess", values, followUpUrl)
              const isRedirect =
                getPathFromUrl(followUpUrl) !==
                getPathFromUrl(window.location.href)
              if (!isRedirect) {
                form.getFormElem().hide()
                setShowThankYou(true)
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              //triggerFormSubmitSuccess(header, values)
              return isRedirect // Return false to prevent the submission handler from taking the lead to the follow up url
            })
          }
        )

        window.MktoForms2.whenRendered(function (form) {
          destyleMktoForm(form)
          setDefaults()
          makeRangesAccessible()
          setHiddenFields()

          const formEl = form.getFormElem()[0]
          const allLabels = Array.from(
            formEl.querySelectorAll("label:not([data-for-type])")
          )

          allLabels.forEach(label => {
            // Get related input for each associated label
            const relatedInput =
              formEl.querySelector("#" + label.htmlFor) ||
              formEl.querySelector("[name='" + label.htmlFor + "']")

            // Create custom data-attributes for each label base on its input type
            label.setAttribute(
              "data-for-type",
              relatedInput ? relatedInput.type : ""
            )
          })
          if(document.querySelectorAll(".mktoCheckboxList").length > 0){
            [...document.querySelectorAll(".mktoCheckboxList")].forEach(element => {
              if([...element.childNodes].filter(element => element.nodeName === 'INPUT').length > 1){
                // if there's more than 1 checkbox in a mktocheckboxlist
                element.classList.add("multiCheckbox")
              }
            })
          }
        })
        setIsFormRendered(true)
      }
    } else {
      if (window?.MktoForms2) {
        setScriptLoaded(true)
      } else {
        const script = document.createElement("script")
        script.defer = true
        script.onload = () =>
          window?.MktoForms2 ? setScriptLoaded(true) : null
        script.id = "compound-key-tracking"
        script.src = "https://go2.trimble.com/js/forms2/js/forms2.min.js"
        document.head.appendChild(script)
      }
    }
  }, [scriptLoaded])

  return formId && marketoInstance ? (
    <div
      className={`marketo-form ${
        inLayoutWrapper ? `marketo-from-layout-wrapper` : ``
      } ${paddingClass}`}
    >
      <div
        className={`form-container ${variantClass} ${
          !inLayoutWrapper && sideImage?.image?.file?.url && "has-image"
        }`}
      >
        {(header || directions) && (
          <div className="form-head">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {header && <h2 className="header">{header}</h2>}
            {directions && (
              <div className="directions">
                <p>{directions}</p>
              </div>
            )}
          </div>
        )}
        <div className={`form-outer ${variantClass}`}>
          {showThankYou && (
            <div
              className="form-outer--submit-text"
              dangerouslySetInnerHTML={{ __html: thankYou }}
            />
          )}
          <form className="form" id={`mktoForm_${formId}`}></form>
        </div>
      </div>
      {sideImage?.image?.file?.url && !inLayoutWrapper && (
        <div className={"image-container"}>
          <div
            className={"image-container__wrapper"}
            style={{
              backgroundImage: `url(${sideImage?.image?.file?.url})`,
            }}
          ></div>
        </div>
      )}
    </div>
  ) : null
}

export default MarktoForm