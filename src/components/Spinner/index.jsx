import { Grid } from "react-loader-spinner";
import React from "react";
/**
 * @param {number} props.size
 * @param {number} props.radius
 * @param {string(hexformat)} props.color
 */

export default function Spinner(props) {
  const { size = 25, radius = 12.5, color = "#000000" } = props;

  return (
    <Grid
      height={size.toString()}
      width={size.toString()}
      color={color}
      ariaLabel="grid-loading"
      radius={radius.toString()}
      visible={true}
    />
  );
}
