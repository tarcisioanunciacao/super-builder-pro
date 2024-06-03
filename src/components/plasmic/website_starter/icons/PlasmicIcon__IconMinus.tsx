// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMinusIcon(props: IconMinusIconProps) {
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
        d={"M9.794 5.877H1.96"}
        stroke={"currentColor"}
        strokeWidth={"1.217"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default IconMinusIcon;
/* prettier-ignore-end */
