// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPlusIcon(props: IconPlusIconProps) {
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
        d={"M5.877 9.794V5.877m0 0V1.959m0 3.918h3.917m-3.917 0H1.959"}
        stroke={"currentColor"}
        strokeWidth={"1.217"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default IconPlusIcon;
/* prettier-ignore-end */
