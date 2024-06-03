// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
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
          "M7.363 5.813c.482-.512.78-1.2.78-1.956A2.86 2.86 0 005.286 1a2.86 2.86 0 00-2.857 2.857c0 .757.297 1.444.78 1.955C1.78 6.61 1 8.297 1 10.643c0 .198.16.358.357.358h7.857c.198 0 .357-.16.357-.357 0-2.346-.78-4.034-2.208-4.83zm-2.077-4.1c1.182 0 2.143.961 2.143 2.143A2.145 2.145 0 015.286 6a2.145 2.145 0 01-2.143-2.143c0-1.182.96-2.143 2.143-2.143zM1.72 10.286c.056-1.512.495-3.283 2.1-3.98a2.833 2.833 0 002.929 0c1.605.696 2.045 2.468 2.1 3.98H1.72z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".327"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
