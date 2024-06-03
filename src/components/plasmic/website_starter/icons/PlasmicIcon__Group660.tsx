// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group660IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group660Icon(props: Group660IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.5 6.25c0 3.938-5.25 7.875-5.25 7.875S1 10.187 1 6.25a5.25 5.25 0 1110.5 0v0z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.25 8.219a1.969 1.969 0 100-3.938 1.969 1.969 0 000 3.938z"}
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group660Icon;
/* prettier-ignore-end */
