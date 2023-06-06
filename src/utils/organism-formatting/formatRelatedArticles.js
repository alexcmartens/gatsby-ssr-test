import React from "react"

const formatRelatedArticles = (articles, articleTags, currentPageSlug) => {
  let matchingArticles = []

  articles?.map((article) => {
    if(article?.node?.slug === currentPageSlug){
      // if article in grouping is the current page, don't add it to the list of related articles
      return null;
    }

    // create shallow array of article tag values for comparison
    const cardTagValues = article?.node?.resourceTags?.map((tag) => {
      return tag?.id;
    })

    let matchesAllTags = articleTags?.every(tag => {
      if (cardTagValues?.includes(tag.id)) {
        return true;
      }
    });

    let matchesSomeTags = articleTags?.some(tag => {
      if (cardTagValues?.includes(tag.id)) {
        return true;
      } else {
        return false
      }
    });


    if(matchesAllTags === true){
      // check if article has all matching tags - if so, push to front of the list
      Object.assign(article?.node, { matchesAllTags: true })
      matchingArticles?.unshift(article?.node);
    } else if (matchesSomeTags === true){
      // check if article has some matching tags
      Object.assign(article?.node, { matchesAllTags: false })
      matchingArticles?.push(article?.node)
    }
  });

  function compareSortArticles(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const aMatchesAll = a.matchesAllTags;
    const bMatchesAll = b.matchesAllTags;

    // primary sort is on matchesAllTags, secondary sort is on date

    if (aMatchesAll === true && bMatchesAll === true) {
      // if a and b match all tags, go to secondary
      if (dateA > dateB){
        // article A is newer,
        // sort a before b, [a, b]
        return -1;
      } else if (dateB > dateA){
        // article b is newer,
        // sort b before a, [a, b]
        return 1;
      }
    }

    if (aMatchesAll === true && bMatchesAll === false) {
      // if a matches all tags, but b doesn't
      // sort a before b, [a, b]
      return -1;
    }
    
    if (aMatchesAll === false && bMatchesAll === true) {
      // sort a after b, [b, a]
      return 1;
    }

    if (aMatchesAll === false && bMatchesAll === false) {
      if (dateA > dateB){
        // article A is newer,
        // sort a before b, [a, b]
        return -1;
      } else if (dateB > dateA){
        // article b is newer,
        // sort b before a, [a, b]
        return 1;
      }
    }

    // keep original order
    return 0;
  }

  return matchingArticles.sort(compareSortArticles);
}

export default formatRelatedArticles
