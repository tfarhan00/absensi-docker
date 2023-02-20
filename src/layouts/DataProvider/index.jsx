import { useEffect } from "react";
import React from "react";

export default function Layout(props) {
  const { children } = props;

  useEffect(() => {
    console.log("hello from data provider");
  }, []);

  return (
    <>
      <div>{children}</div>
    </>
  );
}
