// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.631 9.196v1.648c0 .153-.033.305-.098.445s-.16.266-.28.37a1.19 1.19 0 01-.417.23 1.24 1.24 0 01-.48.054 12.062 12.062 0 01-5.047-1.687A11.084 11.084 0 012.8 6.96a10.454 10.454 0 01-1.795-4.762 1.036 1.036 0 01.056-.45c.052-.145.135-.277.245-.39a1.17 1.17 0 01.391-.264A1.23 1.23 0 012.169 1h1.754c.284-.003.559.092.774.266.215.174.356.415.396.679a6.67 6.67 0 00.41 1.544c.078.196.095.41.048.615a1.08 1.08 0 01-.312.544l-.743.697a9.094 9.094 0 003.51 3.296l.742-.697c.159-.148.36-.25.578-.294a1.25 1.25 0 01.656.047c.53.185 1.082.314 1.643.384.284.038.544.172.73.378.185.205.283.468.276.737z"
        }
        stroke={"currentColor"}
        strokeWidth={".8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
