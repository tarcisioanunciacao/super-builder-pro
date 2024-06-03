// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M21 2.058A18.942 18.942 0 1039.942 21 18.962 18.962 0 0021 2.058z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
