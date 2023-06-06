import React from "react"
import MarketoForm from "./MarketoForm"

const MarketoFormConnector = ({ data }) => {
  return (
    <MarketoForm
      formId={data?.marketoFormId}
      marketoInstance={data?.marketoInstance}
      fieldDefaults={data?.fieldDefaults}
      variant={data?.variant}
      header={data?.formHeader}
      directions={data?.formDirections?.formDirections}
      sideImage={data?.formImage}
      eyebrow={data?.eyebrow}
      product={data?.product}
      removePadding={data?.removePadding}
      inLayoutWrapper={data?.inLayoutWrapper || false}
    />
  )
}

export default MarketoFormConnector
