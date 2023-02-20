/**
 * @param {string} props.message
 */
import React from "react";

export default function FallbackPage(props) {
  const { message = "A fallback element" } = props;
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      {message}
    </div>
  );
}
