// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector36Icon(props: Vector36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.909 7.737A3.982 3.982 0 0011 5c0-2.205-1.794-4-4-4-2.205 0-4 1.795-4 4a3.98 3.98 0 001.091 2.737C2.092 8.854 1 11.216 1 14.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5c0-3.284-1.092-5.647-3.091-6.763zM7 2c1.655 0 3 1.345 3 3 0 1.654-1.345 3-3 3-1.654 0-3-1.346-3-3 0-1.655 1.346-3 3-3zM2.009 14c.079-2.117.694-4.597 2.942-5.572a3.967 3.967 0 004.099 0c2.246.975 2.862 3.455 2.94 5.572H2.01z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */
