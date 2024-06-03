// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group659IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group659Icon(props: Group659IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.955 5c0 3-3.977 6-3.977 6S1 8 1 5c0-1.06.42-2.078 1.165-2.828A3.966 3.966 0 014.978 1c1.054 0 2.066.421 2.812 1.172A4.011 4.011 0 018.955 5v0z"
        }
        stroke={"currentColor"}
        strokeWidth={".758"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.977 6.5c.823 0 1.491-.67 1.491-1.5 0-.828-.667-1.5-1.491-1.5-.824 0-1.492.672-1.492 1.5 0 .829.668 1.5 1.492 1.5z"
        }
        stroke={"currentColor"}
        strokeWidth={".379"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group659Icon;
/* prettier-ignore-end */
