// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFeatherIcon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFeatherIcon2Icon(props: IconFeatherIcon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6.357 12.714l4.238-4.238-4.238-4.238"}
        stroke={"currentColor"}
        strokeWidth={"1.413"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconFeatherIcon2Icon;
/* prettier-ignore-end */
