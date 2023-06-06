import React from "react"
import _ from "lodash"
import renderPaddingOrFullBleed from "../renderPaddingOrFullBleed"
import { Link } from "gatsby"
import { ComparisonTable } from "terra-one"
import formatEcommerceCards from "../formatEcommerceCards"

const formatComparisonTable = (data, locale) => {
  const showImages = data?.showImage ? data?.showImage : false
  const headline = data?.tableHeadline
  const subHeading = data?.tableSubhead ? data?.tableSubhead : null
  const eyebrow = data?.tableEyebrow ? data?.tableEyebrow : null
  const description = data?.tableDescription ? data?.tableDescription : null
  const tableVariant = data?.tableVariant
    ? data?.tableVariant?.toLowerCase()
    : null
  const headerVariant = data?.headerVariant
    ? data?.headerVariant?.toLowerCase()
    : null
  const tableHeaders = headerVariant?.includes("product cards")
    ? formatEcommerceCards(data?.tableHeaders)
    : data?.tableHeaders

  const comparisonColumnGroups = data?.comparisonColumnGroups?.map(group => {
    const categoryName = group?.categoryName
    const comparisonColumns = group?.comparisonColumns?.map(column => {
      const tooltipText = column?.columnTooltipDescription
      const { columnName } = column
      const columnWidth = _.lowerCase(column?.columnWidth)
      return {
        columnName,
        columnWidth,
        tooltipText,
      }
    })
    return {
      categoryName,
      comparisonColumns,
    }
  })

  const productDetails = data?.productDetails?.map(productDetail => {
    const {
      productName,
      bodyText,
      comparisonTableBanner,
      subheading,
      productLink,
    } = productDetail
    const productTag = comparisonTableBanner
    const image = productDetail?.image?.image?.file
    const productAttributes = productDetail.productAttributes?.map(attr => {
      const { name } = attr
      const value =
        attr?.valueBoolean != null
          ? attr?.valueBoolean
          : attr?.value
          ? attr?.value
          : null
      return {
        name,
        value,
      }
    })
    return {
      productName,
      bodyText,
      image,
      productTag,
      subheading,
      productLink,
      productAttributes,
    }
  })

  return {
    headline,
    subHeading,
    eyebrow,
    description,
    showImages,
    comparisonColumnGroups,
    productDetails,
    Link,
    tableVariant,
    headerVariant,
    tableHeaders,
  }
}

const FormatAndRenderComparisonTable = ({ data, locale }) => {
  const tableData = formatComparisonTable(data, locale)

  return <>{renderPaddingOrFullBleed(<ComparisonTable data={tableData} />)}</>
}

export default FormatAndRenderComparisonTable
