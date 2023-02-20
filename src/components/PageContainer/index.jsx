import React from "react";

export default function Component(props) {
  const { children } = props;
  return (
    <div id="page-container" className="w-full h-auto px-6 pb-6">
      {children}
    </div>
  );
}
