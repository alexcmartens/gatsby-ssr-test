// src/components/CTA.tsx
import * as React from "react";
export const CTA = ({ title, link }) => {
  return (
    <div>
      <a href={link}>
        <button className="px-4 py-2 bg-[#c98686] rounded">{title}</button>
      </a>
    </div>
  );
};
