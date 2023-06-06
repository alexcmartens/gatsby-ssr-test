import React from "react"
import adapter from "axios/lib/adapters/http"

// Uniform
import {
  Composition,
  Slot,
  useContextualEditing,
} from "@uniformdev/canvas-react"
import {
  createContentfulEnhancer,
  ContentfulClientList,
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentful"
import { createClient } from "contentful"
import {
  CanvasClient,
  enhance,
  EnhancerBuilder,
} from "@uniformdev/canvas"
import { UniformContext } from "@uniformdev/context-react"
import { createUniformContext } from "../lib/uniform/uniformContext"
import { localize } from "@uniformdev/canvas"
import { resolveRenderer } from "../compositions/connectors"
import "../styles/boilerplate-styles.scss"

function stringify(obj) {
  let cache = [];
  let str = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}

const customEnhancer = (props) => {
  const { component } = props
  return JSON.parse(stringify(component?.parameters?.contentfulEntry?.value));
};

const clientContext = createUniformContext()

// Contentful enhancer function
export async function enhanceComposition(composition) {
  try {
    const client = createClient({
      space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.GATSBY_CONTENTFUL_BRANCH,
      adapter: adapter,
    })

    const clientList = new ContentfulClientList({ client })
    const contentfulEnhancer = createContentfulEnhancer({
      client: clientList,
      createQuery: ({ defaultQuery }) => {
        return {
          ...defaultQuery,
          include: 4,
        }
      },
    })
    await enhance({
      composition: composition,
      enhancers: new EnhancerBuilder().parameterType(
        CANVAS_CONTENTFUL_PARAMETER_TYPES,
        contentfulEnhancer
      ),
      context: {},
    })

    await enhance({
      composition: composition,
      enhancers: new EnhancerBuilder().parameterType(CANVAS_CONTENTFUL_PARAMETER_TYPES, customEnhancer),
    });

  } catch (error) {
    console.log("Enhancer error", error)
  }
}

// Function to fetch Composition server-side
export async function getServerData(props) {
  const client = new CanvasClient({
    apiKey: process.env.GATSBY_UNIFORM_API_KEY,
    projectId: process.env.GATSBY_UNIFORM_PROJECT_ID,
  })
  const { composition } = await client.getCompositionBySlug({
    slug: "uniform-preview-page",
  })
  console.log('composition --->', composition)

  // Enhance composition
  await enhanceComposition(composition)
  // Return enhanced composition
  return {
    status: 200,
    props: { composition },
  }
}

const PageComposition = props => {
  const { serverData } = props
  const { composition: initialCompositionValue } = serverData
  const { composition } = useContextualEditing({
    initialCompositionValue,
    enhance: async ({ composition }) => {
      await enhanceComposition(composition)
      return composition
    },
  })

  localize({
    composition: composition,
    locale: "en-US",
  })

  return (
    <UniformContext context={clientContext}>
      <Composition data={composition} resolveRenderer={resolveRenderer}>
        <Slot name="content" />
      </Composition>
    </UniformContext>
  )
}

export default PageComposition
