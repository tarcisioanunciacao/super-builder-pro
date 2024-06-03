// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector35Icon(props: Vector35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 2.375C15 1.619 14.37 1 13.6 1H2.4C1.63 1 1 1.619 1 2.375m14 0v8.25c0 .756-.63 1.375-1.4 1.375H2.4c-.77 0-1.4-.619-1.4-1.375v-8.25m14 0L8 7.188 1 2.375"
        }
        stroke={"currentColor"}
        strokeWidth={".867"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
