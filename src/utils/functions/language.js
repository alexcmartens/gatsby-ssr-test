//Map of non-latin languages and corresponding font name
const updateFontList = {
  ar: "Almarai", //arabic
  "hi-in": "Noto Sans Devanagari", //using https://fonts.google.com/earlyaccess
  "ja-jp": "Noto Sans JP", //japanese
  "ko-kr": "Noto Sans KR", //korean
  "ru-ru": "Open Sans", //russian
  th: "Noto Sans Thai", //using https://fonts.google.com/earlyaccess
  zh: "Noto Sans SC", //simplified Chinese
  "zh-hant-tw": "Noto Sans TC", //traditional Chinese
}

const arabicRE =
  /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/

export const loadLocaleFont = (currentLocale = "en") => {
  //Look up the current font family, fallback to latin
  const parsedLocale = currentLocale.toLocaleLowerCase()

  const localeFont = updateFontList[parsedLocale]
  const tagNames = [
    "a",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "div",
    "article",
    "section",
    "aside",
  ]

  //When we see a non-latin languge,
  //iterate through all of the tags that have fonts applied

  // localeFont &&
  tagNames.forEach(tagName => {
    const elements = document.getElementsByTagName(tagName)
    for (let ele of elements) {
      // we only want to add the new class when the language is one of the keys from updateFont object, we can check this by checking if localeFont exists.
      if (localeFont) ele.classList.add(`mxp-update-font__${currentLocale}`)

      const classes = Object.values(JSON.parse(JSON.stringify(ele.classList)))
      // if we don't check for an exisiting class with a locale, its possible for classes with other languages keep getting added. ex of what we dont want: <a class="mxp-update-font__ar mxp-update-font__hi-in">
      // so to avoid that, we filter for classes that include mxp-update-font on the elements and remove any that do not match the current locale.
      let findClassesWithLang = []

      if (classes && classes.length) {
        findClassesWithLang = classes.filter(cssClass => {
          return cssClass.includes("mxp-update-font__")
        })
      }

      if (findClassesWithLang && findClassesWithLang.length) {
        const classToBeRemoved = findClassesWithLang.find(lang => {
          return lang !== `mxp-update-font__${currentLocale}`
        })
        ele.classList.remove(classToBeRemoved)
      }

      //If we are dealing with unaligned translated Arabic content ...
      const translatedNonAlignedArabic =
        //check if we are in the arabic locale
        localeFont === updateFontList["ar"] &&
        //check if we have arabic characters
        arabicRE.test(ele.textContent) &&
        //check if the text align is not set to center
        window.getComputedStyle(ele).getPropertyValue("text-align") !== "center"
      if (translatedNonAlignedArabic) {
        //...we need to text align right
        ele.style.textAlign = "right"
      }
    }
  })
}
