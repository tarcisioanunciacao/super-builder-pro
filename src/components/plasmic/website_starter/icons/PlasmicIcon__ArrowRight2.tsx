// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRight2Icon(props: ArrowRight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M4.302 10.325H16.35m0 0l-6.023-6.023m6.023 6.023l-6.023 6.024"}
        stroke={"currentColor"}
        strokeWidth={"1.721"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowRight2Icon;
/* prettier-ignore-end */
