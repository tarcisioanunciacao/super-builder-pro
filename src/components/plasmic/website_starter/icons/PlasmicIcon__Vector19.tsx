// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.607 2.25c0-.688-.478-1.25-1.061-1.25H2.061C1.477 1 1 1.563 1 2.25m10.607 0v7.5c0 .688-.478 1.25-1.061 1.25H2.061C1.477 11 1 10.437 1 9.75v-7.5m10.607 0L6.303 6.625 1 2.25"
        }
        stroke={"currentColor"}
        strokeWidth={".657"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
