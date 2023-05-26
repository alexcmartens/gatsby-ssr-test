// src/components/Hero.tsx
import * as React from "react";
import { SuperHero } from "terra-one"

export const Hero = (props) => {
  console.log('Hero', props)
  const { title="[TITLE]" } = props;
  console.log('title --->', title)

  const content = {
    eyebrow: "Eyebrow Option",
    header: title,
    subHeader: "Anim aliquip aliqua aliqua id qui aute anim reprehenderit tempor velit est sint laborum. Cillum et laboris aliquip consequat.",
    text: "<p>Anim aliquip aliqua aliqua id qui aute anim reprehenderit tempor velit est sint laborum. Cillum et laboris aliquip consequat. Consectetur commodo nisi laborum voluptate. Commodo est ullamco pariatur ut nostrud pariatur.</p><p>hello</p>",
    ctas: {
      ctaOne: {
        text: "Button",
        url: "https://trimble.com",
        size: "lg",
      },
      ctaTwo: {
        text: "Button",
        url: "https://trimble.com",
        text: "First Button",
        url: "/#",
        size: "lg",
      },
      ctaTwo: {
        text: "Second Button",
        url: "/#",
        size: "lg",
      },
    },
    focusedImage: {
      focalPointImage: {
        x: 0,
        y: 0,
        title: "union-station-h6",
        height: 405,
        width: 721,
        url: "https://fpoimg.com/721x405",
      },
    },
    contentSide1: "right",
    variant: "variant_1",
    lazyLoad: false
  };  

  return (
    <div className="py-[3em]">
      <SuperHero content={content} />
    </div>
  );
};
