import * as React from "react"
import MarketoForm from "../../components/Marketo/MarketoForm"

const MarketoFormConnector = props => {
  const data = {
    formId: props?.contentfulEntry?.fields?.formId,
    marketoInstance: props?.contentfulEntry?.fields?.marketoInstance?.fields,
    fieldDefaults: props?.contentfulEntry?.fields?.fieldDefaults,
    variant: props?.contentfulEntry?.fields?.variant,
    header: props?.contentfulEntry?.fields?.formHeader,
    directions: props?.contentfulEntry?.fields?.formDirections,
    sideImage: props?.contentfulEntry?.fields?.sideImage,
    eyebrow: props?.contentfulEntry?.fields?.eyebrow,
    product: props?.contentfulEntry?.fields?.product,
    removePadding: props?.contentfulEntry?.fields?.removePadding,
  }

  return (
    <MarketoForm { ...data } />
  )
}

export default MarketoFormConnector
