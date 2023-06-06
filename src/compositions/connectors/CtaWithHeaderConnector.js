import * as React from "react"
import { marked } from "marked"
import formatUrl from "./utils/formatUrl"
import { CtaWithHeader } from "terra-one"

const CtaWithHeaderConnector = ({ data, overrideTheme }) => {
  if (data?.sys?.contentType?.sys?.id === "ctaWithHeader") {
      const buttons = data?.fields?.ctaButtons?.map(d => {
        return {
          text: d.fields.text,
          url: formatUrl(d.fields.url),
        }
      })

      let bodyHtml = null;
      if (data?.fields?.body) {
        bodyHtml = marked.parse(data?.fields?.body)
      }
      
      return (
        <CtaWithHeader
          alignment={data?.fields?.alignment}
          eyebrow={data?.fields?.eyebrow}
          headline={data?.fields?.headline}
          subhead={data?.fields?.longSubhead || data?.fields?.subhead}
          content={bodyHtml}
          buttons={buttons}
          variant={overrideTheme}
        />
      )
    }
    return null
}

export default CtaWithHeaderConnector