import React from "react";

export default function Component(props) {
  const { children } = props;
  return (
    <div
      className="w-full h-full rounded-lg bg-white p-6 shadow-lg shadow-slate-200/60"
      {...props}
    >
      {children}
    </div>
  );
}
