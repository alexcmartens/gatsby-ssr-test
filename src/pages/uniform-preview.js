import * as React from "react";
import { PageComponent } from "../components/Page";
import { Hero } from "../components/Hero";
import { Default } from "../components/Default";
import {
  createContentfulEnhancer,
  ContentfulClientList,
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";
import {
  CanvasClient,
  ComponentInstance,
  enhance,
  EnhancerBuilder,
} from "@uniformdev/canvas";
import {
  ComponentProps,
  Composition,
  Slot,
  useContextualEditing,
} from "@uniformdev/canvas-react";

import { UniformContext } from "@uniformdev/context-react";
import { createUniformContext } from "../lib/uniform/uniformContext";
import { localize } from "@uniformdev/canvas"

const clientContext = createUniformContext();

// function to get composition
export const getComposition = async () => {
  console.log("GATSBY_UNIFORM_API_KEY", process.env.GATSBY_UNIFORM_API_KEY);
  console.log(
    "GATSBY_UNIFORM_PROJECT_ID",
    process.env.GATSBY_UNIFORM_PROJECT_ID
  );
  const client = new CanvasClient({
    apiKey: process.env.GATSBY_UNIFORM_API_KEY,
    projectId: process.env.GATSBY_UNIFORM_PROJECT_ID,
  });
  const { composition } = await client.getCompositionBySlug({
    slug: "uniform-home-page",
  });
  return composition;
};

const traverseObject = (obj) => {

  if (Array.isArray(obj)) {
    for (let i=0; i < obj.length; i++) {
      const val = obj[i]
      
      // console.log(`${i}: ${val}`);

      if (typeof val === 'object') {
        traverseObject(val)
      }      
    }
  } else if (typeof obj === 'object') {
    for (const property in obj) {
      const val = obj[property]

      // console.log(`${property}: ${val}`);
      
      if (property === 'parentBreadcrumb') {
        obj[property] = null
      } else if (typeof val === 'object') {
        traverseObject(val)
      }
    }
  }

  return obj
}

const parameterEnhancer = ({ component, parameter, parameterName }) => {
  console.log(`Enhancing ${component.type}::${parameterName} (${parameter.type})`)
  const newData = traverseObject(component.parameters.contentfulEntry.value)
  return newData;
};

// Sanity enhancer function
export async function enhanceComposition(composition) {
  console.log('GATSBY_CONTENTFUL_BRANCH', process.env.GATSBY_CONTENTFUL_BRANCH)
  const client = createClient({
    space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.GATSBY_CONTENTFUL_BRANCH
  })
  
  // client
  //   .getEntry("rn9K9Q3kzswWKxx97TcUe")
  //   .then(entry => console.log('Entry ---->', entry))
  //   .catch(err => console.log('Err ---->', err));

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
    enhancers: new EnhancerBuilder().parameterType(CANVAS_CONTENTFUL_PARAMETER_TYPES, parameterEnhancer),
  });

  console.log('enhanceComposition composition --->', composition)
}

// Function to fetch Composition server-side
export async function getServerData(props) {
  let composition = null
  try {
    console.log('getServerData', props)
    composition = await getComposition();
    console.log("composition", composition);
    // Enhance composition
    await enhanceComposition(composition);
  } catch(err) {
    console.log('error', err)
  }

  // Return enhanced composition
  return {
    status: 200,
    props: { composition },
  };
}

// Resolve Render function
export function componentResolutionRenderer(component) {
  console.log('component --->', component)
  switch (component.type) {
    case "superHero":
      return Hero;
      break;
    case "fullBackgroundHero":
      return Hero;
      break;
    default:
      return Default;
      break;
  }
}

const Homepage = (props) => {
  const { serverData } = props;
  console.log("serverData", serverData);
  const { composition: initialCompositionValue } = serverData;
  const { composition } = useContextualEditing({
    initialCompositionValue,
    enhance: async ({ composition }) => {
      await enhanceComposition(composition);

      localize({
        composition: composition,
        locale: "en-US",
      })       
      console.log('composition ---->', composition)

      return composition;
    },
  });
  
 
  return (
    <UniformContext context={clientContext}>
      <PageComponent>
        <Composition
          data={composition}
          resolveRenderer={componentResolutionRenderer}
        >
          <Slot name="content" />
        </Composition>
      </PageComponent>
    </UniformContext>
  );
};
export default Homepage;
